# ETT — webapp (Next.js)

Fonte do site one-page do programa **English Talk Time**. Build estático servido por hosting externo em [https://englishtalktime.com.br](https://englishtalktime.com.br).

> Visão geral do repositório, fluxo de deploy e contexto do programa: [`../README.md`](../README.md).
>
> Guia para assistentes de IA: [`./CLAUDE.md`](./CLAUDE.md) e [`../CLAUDE.md`](../CLAUDE.md).

## Stack

- **Next.js 14** (App Router, `output: 'export'`) + TypeScript
- **Tailwind CSS** com tema dark custom (neon-green `#00FF9D`, tech-blue `#00BFFF`, `darkMode: 'class'`)
- **Framer Motion** — animações ao scroll (whileInView)
- **Lucide React** — ícones
- `clsx` + `tailwind-merge` — helper `cn()` em `lib/utils.ts`
- **Sem testes**, **sem react-hook-form**, **sem zod** — validação do form é HTML5 nativa

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script | O que faz |
|---|---|
| `npm run dev` | Dev server com hot reload |
| `npm run build` | Export estático para `out/` (consumido pelo `../deploy.sh`) |
| `npm run lint` | ESLint via `eslint-config-next` |

## Deploy

**Não use** `vercel` nem `next start` — o site é HTML estático servido por hosting externo, sem funções server-side. O fluxo correto é o `../deploy.sh` (build + espelha em raiz + push). Detalhes e limitações em [`../CLAUDE.md`](../CLAUDE.md).

## Estrutura

```
app/
  layout.tsx              # Meta tags, OG, JSON-LD, fonte Inter
  page.tsx                # Home (/) — monta as seções na ordem
  globals.css             # Tema dark, gradient-text, section-padding
  ff/page.tsx             # Fórmula Fluente (/ff/)
  agenda/page.tsx         # Próximos encontros (/agenda/)
components/
  Navbar.tsx              # Navbar fixa com scroll detection
  Hero.tsx                # Hero full-screen
  About.tsx               # Sobre o ETT
  Methodology.tsx         # 6 pilares + Fórmula Fluente
  Tools.tsx               # 10 ferramentas inteligentes
  Partners.tsx            # Grid de parceiros (BeeTools, Cherry Top, Coders, IEP)
  HowItWorks.tsx          # Jornada do aluno (7 passos)
  Results.tsx             # Números + gamificação
  Testimonials.tsx        # Depoimentos
  LeadForm.tsx            # Formulário de inscrição → RD Station API v1.3
  FormulaFluente.tsx      # Conteúdo da página /ff/
  Agenda.tsx              # Conteúdo da página /agenda/ (CTA → Google Form)
  Footer.tsx              # Footer com parceiros + links de seções
lib/
  utils.ts                # cn() helper (clsx + tailwind-merge)
public/images/            # Logos e imagens (servidos como /images/...)
ConteudoSite/             # Specs originais do programa (.docx, PDFs, logos)
```

Path alias: `@/*` mapeia para a raiz de `webapp/` (`tsconfig.json`).

## Páginas e rotas

| Rota | Componente principal | Propósito |
|---|---|---|
| `/` | composição em `app/page.tsx` | Home one-page com 10 seções |
| `/ff/` | `FormulaFluente.tsx` | Página da metodologia (Threshold + Imersão) |
| `/agenda/` | `Agenda.tsx` | Próximos 30 dias de encontros + CTA Google Form |

## Captura de leads — `LeadForm.tsx`

O formulário de `/#inscricao` faz **`fetch` POST direto** para a API legacy v1.3 da RD Station Marketing — sem backend nosso, sem captcha, sem react-hook-form.

### Endpoint

```
POST https://www.rdstation.com.br/api/1.3/conversions
Content-Type: application/x-www-form-urlencoded
```

CORS: o endpoint reflete `Access-Control-Allow-Origin` para qualquer origem que faz preflight. Validado em `localhost:3000` e produção.

### Constantes hardcoded em `components/LeadForm.tsx`

```ts
const RD_FORM_ACTION = 'https://www.rdstation.com.br/api/1.3/conversions'
const RD_TOKEN_PUBLIC = '91ad62b8804b60a50c32a768d4adb263'    // conta GUBigData
const RD_CONVERSION_ID = 'tenhointeresseprogramaaceleracaoingles'
```

O **token público** vai no client porque é o padrão das LPs da RD — ele só identifica a conta de marketing, não autoriza nada além de criar conversão. Não confundir com o **token privado** (que dá CRUD no CRM); esse nunca deve ir pra client e não é usado por aqui.

### Mapeamento dos campos

| Campo no form (`name=`) | Vira no lead RD | Validação client-side |
|---|---|---|
| `nome` | nome built-in | `required`, minLength 2 |
| `email` | email built-in (chave de dedupe) | `required`, `type=email` |
| `empresa` | empresa built-in | `required`, minLength 2 |
| `telefone` | telefone built-in | `required`, `type=tel`, `pattern="^[\d\s()+\-]{8,}$"` |
| `linkedin` | linkedin built-in | `required`, `pattern` linkedin.com/(in\|pub)/..., normalizado pra `https://` se faltar |
| `cf_nivel_ingles` | custom field (`cf_` é convenção RD) | `required`, select |
| `website` (hidden) | — | honeypot; se preenchido, descarta o lead |

Hidden fields: `token_rdstation`, `identificador`.

### Tradeoffs aceitos

- **Sem captcha.** O endpoint da v1.3 não exige (a LP original usa um captcha matemático server-side, mas só funciona pelo endpoint `cta-redirect` que tem sessão própria — esse devolve 404 se chamado fora do `rdlps.min.js` da RD). Risco de spam mitigado por honeypot e validação HTML5. Se aparecer spam: primeiro nível é captcha matemático client-side (~20 linhas); segundo nível é função serverless com rate-limit.
- **Sem tracking de UTM/origem RD.** A LP original usa o `rdlps.min.js` que popula `c_utmz`, `traffic_source`, `privacy_data[browser]`. Não replicado aqui — perdemos atribuição de campanha dentro da RD.
- **Sem retry/queue.** Se o endpoint da RD ficar fora, o user vê uma mensagem de erro pedindo pra tentar de novo.

### Por que não `cta-redirect.rdstation.com/v2/conversions`?

Esse é o endpoint que a LP da RD usa internamente. Devolve 404 sem a sessão de captcha gerada pelo `rdlps.min.js` (que requer renderizar a página da RD). A v1.3 (`www.rdstation.com.br/api/1.3/conversions`) é a API pública oficial pra integração de terceiros — sem captcha, com CORS aberto, contrato estável.

## Conteúdo & assets

- Imagens em `public/images/` (servidas como `/images/<file>`)
- Specs do programa em `ConteudoSite/` (referência, não consumido pelo build)

## Customização rápida

| Quero mudar... | Mexa em... |
|---|---|
| Cores da marca | `tailwind.config.ts` |
| Copy da home | `components/<Section>.tsx` correspondente |
| Próxima rota | `app/<rota>/page.tsx` (segue padrão de `ff/` ou `agenda/`) |
| SEO / OG | `app/layout.tsx` (global) ou `app/<rota>/page.tsx` (por rota) |
| Conta RD destino do form | constantes no topo de `components/LeadForm.tsx` |
| URL do Google Form da agenda | `ETT_PROGRAM_URL` no topo de `components/Agenda.tsx` |
