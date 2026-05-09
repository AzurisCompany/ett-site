# ETT — English Talk Time

Site oficial do **ETT (English Talk Time)**, programa brasileiro de aceleração de inglês para profissionais de Tecnologia, Dados, IA, BI e Cloud.

🌐 Produção: **https://englishtalktime.com.br**

## O que é o ETT

Programa de aceleração de inglês com 6 pilares:

1. **Comunidade & Compromisso** — eventos, desafios, ranking, jornada coletiva
2. **Base Estruturada** — onboarding + nivelamento + cursos parceiros (BeeTools)
3. **Prática Real e Conversação Guiada** — sessões English Talk Time (online toda segunda + presenciais semanais em Curitiba)
4. **Imersão Intensiva** — programas de imersão Cherry Top
5. **Empregabilidade Internacional** — mentoria de carreira via Coders
6. **Inteligência & Personalização** — IA para diagnóstico de vocabulário e plano de estudo

Parceiros: **BeeTools** · **Cherry Top** · **Coders** · **IEP** (Instituto de Engenharia do Paraná, Curitiba).

## Layout do repositório

```
ett-site/
├── webapp/                    # Fonte Next.js 14 (App Router) — TODA edição vai aqui
│   ├── app/
│   │   ├── page.tsx           # Home (/)
│   │   ├── ff/page.tsx        # Fórmula Fluente (/ff/)
│   │   ├── agenda/page.tsx    # Próximos encontros (/agenda/)
│   │   └── layout.tsx         # SEO, OG, JSON-LD
│   ├── components/            # Hero, About, Methodology, Tools, LeadForm, ...
│   ├── ConteudoSite/          # Documentos da marca/programa (.docx, PDFs, logos)
│   └── README.md              # Detalhes técnicos do front
│
├── index.html, _next/, ...    # BUILD ARTIFACTS — cópia espelhada de webapp/out/
│                              # NÃO editar à mão. Gerados pelo deploy.sh.
│
├── deploy.sh                  # Build + espelha em raiz + commit + push
├── CLAUDE.md                  # Guia para assistentes de IA (Claude Code, etc.)
└── README.md                  # Este arquivo
```

A produção é **HTML estático**. O hosting externo aponta para a raiz do `main` deste repo.

## Stack

- **Next.js 14** (App Router, `output: 'export'`) + TypeScript
- **Tailwind CSS** com tema dark custom (neon-green `#00FF9D`, tech-blue `#00BFFF`)
- **Framer Motion** (animações ao scroll)
- **Lucide React** (ícones)
- **RD Station Marketing API v1.3** — captura de leads do formulário de inscrição

Sem backend próprio. Sem testes automatizados.

## Desenvolvimento local

```bash
cd webapp
npm install
npm run dev      # http://localhost:3000
```

Comandos úteis (sempre dentro de `webapp/`):

| Comando | O que faz |
|---|---|
| `npm run dev` | Dev server com hot reload |
| `npm run build` | Export estático para `webapp/out/` |
| `npm run lint` | ESLint via `eslint-config-next` |

## Deploy para produção

A partir da **raiz do repo**:

```bash
./deploy.sh                              # commit com timestamp
./deploy.sh "fix: ajuste copy do CTA"    # commit com mensagem custom
```

O script faz:
1. `cd webapp && npm run build` → gera `webapp/out/`
2. Espelha `webapp/out/*` na raiz do repo (recria diretórios, sobrescreve arquivos, remove órfãos `.html`/`.txt`)
3. `git add -A` + `git commit` + `git push origin main`

⚠️ **Passo manual obrigatório após o push:** entrar no painel do hosting e disparar o pull/deploy. Sem isso, `englishtalktime.com.br` não atualiza.

Limitações conhecidas do `deploy.sh` e detalhes do fluxo: ver [`CLAUDE.md`](./CLAUDE.md).

## Captura de leads (LeadForm → RD Station)

O formulário de inscrição em `/#inscricao` faz POST direto para a API v1.3 da **RD Station Marketing** da conta GUBigData, criando uma conversão com identificador `tenhointeresseprogramaaceleracaoingles`.

| Aspecto | Detalhe |
|---|---|
| Endpoint | `POST https://www.rdstation.com.br/api/1.3/conversions` |
| Auth | Token público (no client) — só identifica a conta, não autoriza CRUD |
| Campos enviados | `nome`, `email`, `empresa`, `telefone`, `linkedin`, `cf_nivel_ingles` |
| Validação | Native HTML5 (`required`, `pattern`, `type=email/tel`) + normalização de URL do LinkedIn |
| Anti-spam | Honeypot oculto (`website`) — bots tendem a preencher, humanos não |
| Backend nosso | Nenhum — submit direto do client, CORS aberto pelo endpoint da RD |

Mais detalhes técnicos (mapeamento dos campos, decisão de não usar `cta-redirect`, tradeoff sobre captcha) em [`webapp/README.md`](./webapp/README.md).

## Documentação

- [`CLAUDE.md`](./CLAUDE.md) — guia para assistentes de IA com fluxo de deploy, limitações do script, arquitetura
- [`webapp/README.md`](./webapp/README.md) — detalhes do front (estrutura de componentes, integração RD, customização)
- [`webapp/CLAUDE.md`](./webapp/CLAUDE.md) — contexto do programa ETT (6 pilares, ferramentas planejadas, parceiros)
- [`webapp/ConteudoSite/`](./webapp/ConteudoSite/) — specs originais do programa (`.docx`, PDFs)

## Domínio e hosting

- **Domínio:** `englishtalktime.com.br`
- **Hosting:** externo (não é GitHub Pages). O hosting puxa do `main` deste repo após disparo manual no painel.
- **Sem CNAME no repo** — o apontamento DNS é gerenciado fora.
