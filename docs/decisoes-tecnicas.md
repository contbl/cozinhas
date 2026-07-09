# Decisões técnicas

## Revisão de arquitetura — 2026-07-08

Revisão feita antes do início da implementação, cobrindo problemas de arquitetura, entidades desnecessárias, escopo, custo de desenvolvimento, riscos técnicos, UX, SEO e performance. As mudanças de escopo já foram aplicadas em [[requisitos]] e [[backlog]]; as mudanças de modelo de dados já foram aplicadas em [[arquitetura]]. Esta seção documenta o raciocínio por trás.

### Problemas de arquitetura encontrados

- **Mistura de API Routes e Server Actions** para as mesmas responsabilidades (formulário de orçamento, CRUD do admin). Decisão: usar **apenas Server Actions** no MVP; `app/api/` fica reservado para integrações externas (webhooks), que hoje não existem.
- **RLS (Row Level Security) não estava explicitada** no desenho original — risco de dados de leads ficarem publicamente legíveis. Agora explícita em [[arquitetura]] (seção "Segurança de dados").
- **ORM não decidido** — para não adicionar complexidade/dependência desnecessária, o MVP usa `supabase-js` direto com tipos gerados pela CLI do Supabase, sem Prisma/Drizzle.

### Entidades desnecessárias removidas

- **`Category` como tabela própria**: substituída por um enum do Postgres (`project_category`). Não há requisito de CRUD dinâmico de categorias — criar uma tabela com FK, tela de administração e joins extras não se paga no MVP. Migração para tabela é trivial se isso mudar no futuro.
- **`AdminUser` como tabela própria**: o MVP usa diretamente `auth.users` do Supabase Auth. Uma tabela própria com `role` só se justifica quando existir mais de um perfil de permissão (ver backlog, épico 4, item P2).
- **`ProjectImage.is_cover`**: removido o campo booleano; a convenção passou a ser "menor `order` é a capa", eliminando um campo que poderia ficar inconsistente com `order`.

### Funcionalidades movidas para versões futuras

Para reduzir custo e tempo do MVP, os seguintes itens foram rebaixados de P1 para P2 no [[backlog]] (mantendo o objetivo central de captura de lead e portfólio intactos):

- Depoimentos/avaliações de clientes (pode nascer como conteúdo estático, sem tabela, se priorizado antes do previsto).
- Página dedicada de contato com mapa (contato entra na home/rodapé no MVP).
- Filtro e busca de leads no painel admin (volume inicial de leads tende a ser pequeno).
- Notificação/confirmação automática por WhatsApp e e-mail de confirmação ao cliente (ficou apenas a confirmação visual na página, que é suficiente para o MVP).

E o inverso: **SEO básico** foi elevado de P1 para **P0**, por ser diretamente responsável pelos objetivos de negócio "melhorar presença digital" e "gerar novos clientes" via busca orgânica.

### Melhorias para reduzir custo de desenvolvimento

- Remoção das entidades `Category` e `AdminUser` (menos migrations, menos telas de admin, menos joins).
- Server Actions em vez de API Routes + Server Actions (uma única forma de mutar dados, menos código de boilerplate).
- Sem ORM adicional — menos uma dependência para configurar e manter.
- Painel admin enxuto no MVP: apenas listagem + formulário para projetos e leads, sem dashboard de métricas (isso já era P2 no backlog; mantido).
- Conteúdo institucional simples (sobre, depoimentos futuros) como texto estático no código/CMS leve, evitando modelar mais tabelas para conteúdo que muda raramente.

### Riscos técnicos (adicionados a esta revisão)

- **Spam no formulário público de orçamento**: sem captcha/rate limiting, o formulário pode receber leads falsos ou ser usado para abuso. Mitigação: honeypot field + rate limiting básico (ex.: middleware do Next.js/Vercel), com Turnstile/reCAPTCHA como opção se o spam persistir.
- **RLS mal configurada**: maior risco técnico do projeto — se a tabela `QUOTE_REQUEST` ou o bucket de imagens ficarem com policies abertas por engano, dados de clientes (nome, telefone, e-mail) ficam publicamente acessíveis. Mitigação: escrever e testar as policies de RLS antes de liberar o formulário em produção.
- **Vendor lock-in no Supabase**: migrar para outro provedor de banco/auth no futuro exigiria retrabalho. Aceitável para o estágio do projeto, mas vale registrar como decisão consciente.
- **Exposição acidental da `service_role key`**: deve ficar restrita a variáveis de ambiente server-only, nunca em código client-side ou em variáveis `NEXT_PUBLIC_*`.

### Sugestões de UX

- Formulário de orçamento curto por padrão (nome, contato, categoria) — campos adicionais (medidas, fotos do ambiente, prazo) podem ficar atrás de um "adicionar mais detalhes" para reduzir abandono.
- Botão de WhatsApp fixo/flutuante em todas as páginas no mobile, complementando o formulário.
- Filtro de categoria no portfólio refletido na URL (query param), permitindo compartilhar/voltar o link com o filtro aplicado.
- Mensagem de sucesso clara após o envio do orçamento, com expectativa de prazo de resposta.
- Galeria de projeto com boa experiência de swipe/lightbox em mobile.

### Sugestões de SEO

- URLs amigáveis por projeto (`/portfolio/[slug]`) — já previsto.
- Página ou filtro indexável por categoria, para capturar buscas de cauda longa (ex.: "closet planejado zona sul").
- Metadata (title/description/Open Graph) únicos por projeto.
- Dados estruturados `LocalBusiness` na home, citando a área de atendimento.
- Sitemap dinâmico com apenas projetos publicados.

### Sugestões de performance

- ISR nas páginas de portfólio com revalidação sob demanda ao publicar/editar projeto.
- Server Components por padrão; Client Components só onde há interatividade.
- `next/image` com `sizes` e `priority` corretos para melhorar LCP.
- Compressão/redimensionamento de imagens antes do upload no admin.

## Decisões adotadas

| Decisão | Justificativa |
|---------|---------------|
| Next.js App Router | Permite SSG/ISR para páginas de portfólio (bom para SEO e performance) e Server Actions para o formulário de orçamento sem precisar de backend separado. |
| Supabase como banco/auth/storage | Reduz necessidade de infraestrutura própria; Postgres gerenciado, autenticação pronta para o admin e storage de imagens integrados em um único serviço. |
| shadcn/ui + Tailwind | Componentes acessíveis e customizáveis sem overhead de uma biblioteca de UI fechada; alinhado à stack já definida no `PROJECT.md`. |
| Vercel para deploy | Integração nativa com Next.js, deploy contínuo simples a partir do repositório. |
| MVP sem cálculo automático de orçamento | O objetivo inicial é captura de lead (formulário), não uma cotação automática — evita complexidade de regras de precificação antes de validar o modelo de negócio. |
| Painel admin único perfil (sem RBAC) no MVP | Simplifica o MVP; múltiplos perfis/papéis fica para uma fase posterior (ver backlog P2). |

## Riscos do projeto

| Risco | Impacto | Mitigação sugerida |
|-------|---------|---------------------|
| Ambiguidade sobre o que significa "orçamento" (lead vs. valor calculado) | Alto — pode mudar escopo e complexidade do MVP | Validar com o cliente antes do início da implementação (ver perguntas pendentes). |
| Falta de conteúdo/fotos de portfólio prontos | Médio — atrasa lançamento ou lança com poucos projetos | Confirmar com o cliente a disponibilidade de material antes do cronograma. |
| Ausência de identidade visual definida (logo, cores, tom) | Médio — pode gerar retrabalho de UI | Levantar com o cliente ou propor uma identidade mínima baseada em referências. |
| Dependência de serviços gerenciados / vendor lock-in (Supabase/Vercel) | Baixo/Médio — limites do plano gratuito podem ser atingidos com crescimento; migrar de provedor no futuro exigiria retrabalho | Monitorar uso; planejar upgrade de plano se necessário. Aceitável no estágio atual do projeto. |
| Tratamento de dados pessoais dos leads (LGPD) | Médio — exposição legal se dados não forem tratados corretamente | Incluir política de privacidade, consentimento no formulário e cuidado no armazenamento/acesso aos dados. |
| Prazo e orçamento do projeto não definidos | Médio — dificulta priorização | Definir com o cliente um cronograma e escopo fechado para o MVP. |
| Spam no formulário público de orçamento | Médio — leads falsos poluem o painel admin | Honeypot + rate limiting; Turnstile/reCAPTCHA se necessário (ver revisão de arquitetura acima). |
| RLS mal configurada no Supabase | Alto — pode expor dados de contato de leads publicamente | Definir e testar policies de RLS antes de ir para produção. |

## Perguntas pendentes para o cliente

1. O "orçamento" no MVP deve ser apenas uma captura de lead (formulário com contato), ou é necessário algum cálculo estimado de valor já nessa fase?
2. A empresa já possui fotos/portfólio de projetos prontos para publicação, ou é necessário produzir esse material?
3. Já existe identidade visual definida (logo, paleta de cores, tipografia) ou o site deve propor uma?
4. Qual o canal de contato preferencial a ser priorizado no site (WhatsApp, telefone, e-mail, formulário)?
5. Há necessidade de integração com WhatsApp Business API, ou basta um link/botão direto para conversa?
6. O domínio do site já está registrado? Há preferência de nome?
7. Quais campos exatos o formulário de orçamento deve coletar (ex.: medidas do ambiente, fotos do espaço, prazo desejado, faixa de orçamento)?
8. Haverá mais de um usuário administrando o painel (ex.: vendedor + dono), com permissões diferentes?
9. Existe necessidade de acompanhamento analítico (Google Analytics, Meta Pixel) desde o MVP?
10. Há prazo ou orçamento definido para a entrega do MVP?
11. Como devem ser tratados os dados dos leads em relação à LGPD (política de privacidade, retenção de dados)?
12. A empresa tem depoimentos/avaliações de clientes já coletados (texto, print de avaliação, vídeo) que possam entrar no site, mesmo que como conteúdo estático inicialmente?
13. Com que frequência as categorias de produto (cozinha, banheiro, closet, dormitório) podem mudar? Isso confirma se um enum fixo é suficiente ou se um cadastro dinâmico já é necessário desde o MVP.

## Referências

- [[requisitos]]
- [[backlog]]
- [[arquitetura]]
