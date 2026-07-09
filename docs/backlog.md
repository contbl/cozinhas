# Backlog

Backlog inicial organizado por épicos. Prioridade: **P0** (MVP indispensável), **P1** (MVP desejável), **P2** (pós-MVP). Baseado nos requisitos em [[requisitos]].

## Épico 1 — Site institucional

- [ ] **P0** Página inicial (hero, diferenciais, área de atendimento, CTA de orçamento)
- [ ] **P0** Seção "Sobre a empresa"
- [ ] **P0** Informações de contato (WhatsApp, telefone, redes sociais) na página inicial/rodapé
- [ ] **P2** Seção de depoimentos/avaliações de clientes (conteúdo estático no MVP caso avance para P1 — sem tabela no banco; painel de gestão só se virar recorrente)
- [ ] **P2** Página dedicada de contato com mapa da área de atendimento (no MVP, contato fica embutido na home)
- [ ] **P2** Blog/conteúdo institucional para SEO

## Épico 2 — Portfólio

- [ ] **P0** Listagem de projetos com filtro por categoria (cozinha, banheiro, closet, dormitório)
- [ ] **P0** Página de detalhe do projeto com galeria de imagens
- [ ] **P1** Busca/ordenação no portfólio
- [ ] **P2** Vídeos ou tour 360° dos projetos

## Épico 3 — Captura de orçamento (lead)

- [ ] **P0** Formulário de solicitação de orçamento (nome, contato, categoria, mensagem)
- [ ] **P0** Armazenamento do lead no banco (Supabase), com RLS restringindo leitura ao admin
- [ ] **P0** Proteção antispam no formulário (honeypot e/ou rate limiting)
- [ ] **P0** Confirmação visual na própria página após envio
- [ ] **P1** Notificação por e-mail ao administrador ao receber novo lead
- [ ] **P2** Notificação/confirmação automática por WhatsApp
- [ ] **P2** E-mail de confirmação automático para o cliente
- [ ] **P2** Calculadora/estimador automático de orçamento

## Épico 4 — Painel administrativo

- [ ] **P0** Autenticação de administrador (Supabase Auth)
- [ ] **P0** CRUD de projetos do portfólio (criar, editar, remover, upload de imagens)
- [ ] **P0** Listagem de pedidos de orçamento recebidos
- [ ] **P1** Atualização de status do pedido de orçamento (novo, em contato, convertido, descartado)
- [ ] **P2** Filtro e busca de leads no painel (baixa prioridade enquanto o volume de leads for pequeno)
- [ ] **P2** Múltiplos usuários admin com papéis/permissões diferentes
- [ ] **P2** Dashboard com métricas (leads por período, por categoria)

## Épico 5 — Infraestrutura e qualidade

- [ ] **P0** Setup do projeto Next.js + TypeScript + Tailwind + shadcn/ui
- [ ] **P0** Setup do Supabase (banco, auth, storage de imagens) com políticas de RLS definidas desde o início
- [ ] **P0** Deploy contínuo na Vercel
- [ ] **P0** SEO básico (metatags, sitemap, robots.txt, Open Graph, dados estruturados de negócio local) — elevado de P1 para P0 por ser central ao objetivo de negócio "melhorar presença digital"
- [ ] **P0** Otimização de imagens (Next/Image, lazy loading, ISR nas páginas de portfólio)
- [ ] **P2** Testes automatizados (unitários e/ou e2e)
- [ ] **P2** Monitoramento de erros (ex.: Sentry)

> Nota: itens acima marcados como P0 concentram o essencial para o objetivo de negócio (geração de leads via busca orgânica e boa apresentação visual). Ver análise completa em [[decisoes-tecnicas]], seção "Revisão de arquitetura".

## Fora do backlog atual

Funcionalidades explicitamente fora do escopo inicial estão listadas em [[requisitos]] (seção "Fora do escopo inicial").
