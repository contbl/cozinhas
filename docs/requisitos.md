# Requisitos

## Objetivo do produto

Criar um site institucional moderno para uma empresa de móveis planejados (cozinhas, banheiros, closets e dormitórios) atendendo a Zona Sul de São Paulo, com dois focos principais:

1. **Geração de leads/orçamentos** — capturar pedidos de orçamento de potenciais clientes.
2. **Apresentação de portfólio** — mostrar projetos já executados para gerar confiança e autoridade.

Objetivos de negócio associados: melhorar a presença digital da empresa e gerar novos clientes.

## Público-alvo

Pessoas que desejam contratar móveis planejados (cozinha, banheiro, closet, dormitório) e que estejam na região da Zona Sul de São Paulo (ou que aceitem esse recorte de atendimento).

## Requisitos funcionais — MVP

| # | Requisito | Descrição |
|---|-----------|-----------|
| RF01 | Landing page institucional | Apresentação da empresa, diferenciais, área de atendimento e chamadas para ação (orçamento/contato). |
| RF02 | Portfólio de projetos | Listagem de projetos executados, com imagens, filtráveis por categoria (cozinha, banheiro, closet, dormitório). |
| RF03 | Página de detalhe do projeto | Exibição de um projeto específico com galeria de imagens e descrição. |
| RF04 | Formulário de solicitação de orçamento | Captura de nome, contato, categoria de interesse e mensagem/descrição da necessidade. Gera um registro de lead. |
| RF05 | Contato direto | Links/atalhos para WhatsApp, telefone e redes sociais. |
| RF06 | Autenticação de administrador | Login restrito (Supabase Auth) para acesso ao painel administrativo. |
| RF07 | Administração de portfólio | CRUD de projetos e imagens via painel admin. |
| RF08 | Administração de pedidos de orçamento | Listagem, visualização e atualização de status dos leads recebidos (ex.: novo, em contato, convertido, descartado). |
| RF09 | Responsividade | Site funcional e bem apresentado em desktop e mobile. |
| RF10 | SEO básico | Metatags, sitemap, dados estruturados básicos para melhorar indexação. |

## Requisitos não funcionais

- **Performance**: carregamento rápido (imagens otimizadas, geração estática/ISR onde aplicável — ver [[arquitetura]]).
- **Hospedagem**: deploy contínuo via Vercel.
- **Segurança**: painel admin protegido por autenticação; Row Level Security (RLS) configurada no Supabase para que o público só possa criar pedidos de orçamento (nunca ler dados de outros leads); chave `service_role` do Supabase nunca exposta no client.
- **Proteção contra spam**: formulário público de orçamento deve ter mitigação básica (honeypot e/ou rate limiting) para evitar leads falsos/abuso.
- **Disponibilidade**: aplicação simples, sem SLA formal definido no MVP.
- **Manutenibilidade**: código em TypeScript, estrutura previsível (ver [[arquitetura]]); sem ORM adicional no MVP (uso direto do `supabase-js` com tipos gerados), para reduzir complexidade e dependências.
- **Acessibilidade**: uso de componentes shadcn/ui, que já seguem boas práticas de acessibilidade (Radix UI).

## Observações de escopo (pós-revisão de arquitetura)

- **Categorias fixas**: cozinha, banheiro, closet e dormitório são tratadas como uma lista fixa (enum), não como um cadastro dinâmico administrável — não há requisito de CRUD de categorias no MVP. Se o cliente precisar adicionar/remover categorias com frequência, isso deve ser reavaliado (ver pergunta pendente em [[decisoes-tecnicas]]).
- **Confirmação de envio do orçamento (RF04)**: no MVP basta uma confirmação visual na própria página após o envio. Notificação automática por e-mail ao cliente é desejável mas não obrigatória no MVP (ver [[backlog]]).

## Fora do escopo inicial (pós-MVP)

- Cálculo automático de orçamento (configurador de preços, medidas em 3D).
- Pagamentos online.
- Chat ao vivo / atendimento automatizado (chatbot).
- Aplicativo mobile nativo.
- Multi-idioma.
- Suporte multi-empresa / multi-tenant.
- Integração com CRM externo (ex.: RD Station, HubSpot).
- Agendamento online de visitas técnicas.
- Área logada do cliente para acompanhar andamento do projeto/instalação.
- Blog/conteúdo para SEO avançado.

## Perguntas pendentes para o cliente

Ver lista consolidada em [[decisoes-tecnicas]] (seção "Perguntas pendentes para o cliente").
