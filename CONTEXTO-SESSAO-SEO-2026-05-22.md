# Contexto da sessão SEO + i18n — 2026-05-22

Handoff da sessão de **2026-05-22**. Foi uma sessão grande com 5 blocos:

1. ✅ GSC finalizado (sitemap submetido + indexação manual)
2. ✅ Onda 1 de keywords (ajustes de copy pra termos faltantes)
3. ✅ MVP i18n — EN + ES no ar como landings completas
4. ✅ Otimização da imagem Hero (3.3MB → 415KB, -88%)
5. ✅ Setup DNS dos domínios novos no Namecheap (SSL ainda propagando)

**Leia este arquivo antes de qualquer outra coisa de SEO/i18n.** É o mais novo no repo.

---

## TL;DR pra próxima sessão

- ✅ Site tem 3 idiomas no ar: pt-BR (15 rotas), EN (1 landing), ES (1 landing)
- ✅ 3 domínios configurados:
  - `englishtalktime.com.br` → site principal (Hostinger)
  - `englishtalktime.com` → 301 pra `/en/` (Namecheap URL Redirect)
  - `englishtalktime.lat` → 301 pra `/es/` (Namecheap URL Redirect)
- ⏳ **SSL dos domínios novos** está propagando — testar daqui umas 2h
- 🟡 **Próximo passo natural:** traduzir 3-4 rotas internas críticas pra EN (`/imersoes/florida/` é a mais óbvia — landing pro mercado americano)
- 🟡 **Onda 2 de SEO** (4-5 landings em pt-BR) ainda não iniciada

---

## Estado da produção (`englishtalktime.com.br`)

- **Branch:** `main`
- **Último commit:** `b6f1525` — `fix(nav): paridade de menu EN/ES com pt-BR`
- **Working tree:** limpo
- **Hostinger pull:** **confirmado em 2026-05-22** (user fez); deploy do final dessa sessão também precisa de pull manual

---

## Cronologia dos commits dessa sessão

| Commit | O que mudou |
|---|---|
| `b6f1525` | Paridade do menu EN/ES (8 links em todos os idiomas, indicador `PT` em superscript nos 3 que apontam pra pt-BR) |
| `fe78d25` | Hero PNG 3.3MB → WebP 415KB (-88%) + expansão EN/ES com 10 tools, Testimonials, Results |
| `fede30c` | MVP i18n — landings EN/ES standalone, language switcher Navbar, hreflang, sitemap multi-idioma |
| `5211ade` | Handoff doc inicial (este arquivo, antes de tudo isso) |
| `0f5e1b0` | Onda 1 SEO — termos faltantes (destravar, conversation club, IA inglês) |
| `1b3d0a2` | (anterior à sessão) imersões SEO + WhatsApp flutuante |

---

## Bloco 1 — GSC (Google Search Console)

Estado final:

| Item | Status |
|---|---|
| Verificação de propriedade (DNS TXT) | ✅ 18/05 |
| Sitemap submetido | ✅ 21/05 — 16 URLs descobertos |
| Indexação manual das 6 rotas-chave | ✅ 22/05 |
| Limpar TXT antigo no Hostinger | ⏭️ pulado (cosmético) |
| HTML tag verificação secundária | ❌ inválido pra Domain Property — **não tentar de novo** |

**Lição importante:** Domain Property (`englishtalktime.com.br`) só aceita verificação via DNS TXT. Métodos alternativos (HTML tag, GA, GTM) só funcionam em URL Prefix Property, que é propriedade separada e não serve como redundância.

**Próximo passo do GSC:**
- Adicionar `englishtalktime.com` e `englishtalktime.lat` como **propriedades novas** no GSC (assim que o SSL propagar)
- Submeter o mesmo sitemap nos 2 (Namecheap segue como provedor de DNS deles)

---

## Bloco 2 — Onda 1 de SEO (commit `0f5e1b0`)

Ajustes de copy em 6 arquivos pra capturar termos faltantes sem criar página nova:

| Arquivo | Mudança |
|---|---|
| `webapp/components/Hero.tsx` | Subtitle destaca "destravar inglês" + "falar inglês fluente" + "rotina diária estruturada" |
| `webapp/components/Tools.tsx` | H2: "10 ferramentas com IA pra destravar conversação em inglês" |
| `webapp/components/FormulaFluente.tsx` | Parágrafo novo: "rotina diária de 1 hora pra estudar inglês" |
| `webapp/lib/home-faqs.ts` | 3 FAQs novas (entrevista internacional tech, inglês p/ Data Engineer/BI/DevOps/AI, rotina diária) — entram no FAQPage JSON-LD |
| `webapp/app/layout.tsx` | `keywords` do JSON-LD Organization: +18 termos |
| `webapp/app/curitiba/page.tsx` | Subtitle cita "conversation club de Curitiba" |

Verificação em produção: confirmado via curl que todos os 18 termos novos aparecem no HTML.

---

## Bloco 3 — MVP i18n (commits `fede30c` + `fe78d25` + `b6f1525`)

### Arquitetura escolhida

**1 codebase + 1 hosting + paths `/en/` e `/es/` no domínio principal**, com domínios novos redirecionando via URL Redirect 301 (Namecheap).

Por quê: stack atual (Next.js `output: 'export'`, Hostinger compartilhado, marca jovem) favorece concentrar autoridade SEO em `.com.br`. Domínios novos servem como "atalho" + capturam quem digita `.com`/`.lat` direto.

**Decisão técnica que evitei:** não usei `next-intl` nem refatorei tudo pra `app/[locale]/...`. Pra MVP, criei **landings standalone** em `app/en/page.tsx` e `app/es/page.tsx`. Quando expandir pra mais rotas, valeria refatorar.

### Arquivos i18n criados

```
webapp/
├── lib/
│   └── i18n/
│       └── messages.ts          # Strings PT/EN/ES + helpers (Locale type, LOCALES, FLAGS, etc.)
├── app/
│   ├── en/
│   │   ├── layout.tsx           # metadata EN com alternates.languages
│   │   ├── page.tsx             # Landing EN completa (Hero + valueProps + Method + Tools 10 + Partners + HowItWorks + Results + Testimonials + Online + Florida + FAQ + CTA)
│   │   └── not-found.tsx        # 404 amigável em EN com link pra home EN + home pt-BR
│   └── es/
│       ├── layout.tsx           # metadata ES (locale es_419, neutro LATAM)
│       ├── page.tsx             # Landing ES (mesma estrutura, copy traduzida)
│       └── not-found.tsx        # 404 em ES
```

### Componentes modificados pra suportar locale

- `webapp/components/Navbar.tsx` — agora detecta locale via `usePathname()`, mostra navLinks corretos + language switcher (🇧🇷/🇺🇸/🌎) desktop + mobile. **8 links em todos os idiomas** (paridade), com indicador `PT` em superscript nos 3 que apontam pra páginas só em pt-BR (`/ff/`, `/imersoes/`, `/agenda/`).
- `webapp/components/Footer.tsx` — recebe prop `locale?: Locale` (default `pt-BR`), troca tagline + labels + cross-links por idioma.
- `webapp/app/layout.tsx` — `alternates.languages` no metadata raiz (hreflang nas 3 variantes + x-default).
- `webapp/app/sitemap.ts` — `/en/` e `/es/` adicionadas com priority 0.95.

### Conteúdo das landings EN/ES (após expansão final)

12 seções cada (paridade visual com pt-BR):

1. Hero (com bg image, stats, CTAs)
2. About / Por qué ETT (4 value props)
3. Method (curto, link pra `/ff/` PT)
4. Tools (10 tools — 4 destacados em verde)
5. Partners (logos)
6. How It Works (4 passos)
7. **Results** (6 métricas: 300h, 3.000 palavras, 60%, 95%, 10x, 5x)
8. **Testimonials** (4 depoimentos traduzidos + disclaimer "ilustrativos")
9. Online teaser (foco no encontro de segunda-feira)
10. Florida teaser (link pra `/imersoes/florida/` PT)
11. FAQ (5 Q&As)
12. CTA / Signup (botão pro Google Form)

### JSON-LD multi-idioma

Cada landing EN/ES tem `WebPage` + `BreadcrumbList` + `Service` no schema, com `inLanguage`, `areaServed` apropriado e `priceCurrency: USD`.

### Limitações conhecidas / dívida técnica

1. **`<html lang="pt-BR">` continua no root** — pra ter `lang="en"` ou `lang="es"` correto, precisaria mover tudo pra `app/[locale]/...`. Pro Google é OK (usa hreflang). Pra a11y screen readers é tecnicamente incorreto. **Dívida técnica documentada.**
2. **Rotas internas não traduzidas** — `/agenda/`, `/ff/`, `/imersoes/*`, `/curitiba/`, `/conversacao/`, `/online/`, `/blog/*`, legais — tudo só em pt-BR. Quem clica em links que vão pra essas rotas cai na versão pt-BR. Há aviso visual (superscript `PT` no menu, "(in Portuguese)" / "(en portugués)" nos teasers).
3. **LeadForm não está no EN/ES** — usei botão externo pro Google Form em vez do form nativo. Pior conversão mas era escopo do MVP. Próxima onda pode trazer o LeadForm traduzido.

---

## Bloco 4 — Otimização da imagem Hero

| Antes | Depois | Redução |
|---|---|---|
| `ETT-top01.png` 3.3 MB (1536×1024 PNG) | `ETT-top01.webp` 415 KB (1920px wide, q85, WebP) | **88% menor** |

Convertido via `sharp` (instalado temporariamente, não está no `package.json`). PNG original foi **deletado** do repo — está só no git history se precisar recuperar.

18 arquivos tinham referência ao PNG; todos migrados pra `.webp` via `sed`. Inclui OG images em `metadata` de todas as rotas + `<Image>` no Hero + `image` em vários JSON-LD.

---

## Bloco 5 — DNS dos domínios novos (Namecheap)

User registrou os 2 domínios novos no **Namecheap** (não no Hostinger como o `.com.br`). Memória `dns-hosting` atualizada pra refletir isso.

### Configuração feita pelo user em 2026-05-22

Em `Domain List → englishtalktime.com → Manage → Advanced DNS`, adicionou 2 URL Redirect Records (root + www):

| Type | Host | Value | Redirect Type |
|---|---|---|---|
| URL Redirect | `@` | `https://englishtalktime.com.br/en/` | Permanent (301) |
| URL Redirect | `www` | `https://englishtalktime.com.br/en/` | Permanent (301) |

Idem pra `englishtalktime.lat`:

| Type | Host | Value | Redirect Type |
|---|---|---|---|
| URL Redirect | `@` | `https://englishtalktime.com.br/es/` | Permanent (301) |
| URL Redirect | `www` | `https://englishtalktime.com.br/es/` | Permanent (301) |

Nameservers: **Namecheap BasicDNS** (padrão, não Custom DNS) — requisito pro URL Redirect funcionar.

### Verificação via curl em 2026-05-22 16:35 UTC

| URL | Status |
|---|---|
| `http://englishtalktime.com` | ✅ 301 → `https://englishtalktime.com.br/en/` (header `X-Served-By: Namecheap URL Forward`) |
| `http://englishtalktime.lat` | ✅ 301 → `https://englishtalktime.com.br/es/` |
| `https://englishtalktime.com` | ⏳ Sem resposta — SSL Let's Encrypt sendo provisionado pelo Namecheap |
| `https://www.englishtalktime.com` | ⏳ Sem resposta |
| `https://englishtalktime.lat` | ⏳ Sem resposta |
| `https://www.englishtalktime.lat` | ⏳ Sem resposta |

**SSL propaga em 1-24h.** Quando estiver ativo, todos os 6 testes devem dar 301. Próxima sessão deve começar com `curl -sI https://englishtalktime.com` pra confirmar.

---

## Próximas frentes possíveis (de maior ROI pra menor)

### 🔴 Imediato — Quando SSL propagar

1. Confirmar via curl que todos os 6 HTTPS estão respondendo 301.
2. Adicionar `englishtalktime.com` e `englishtalktime.lat` como propriedades de domínio no GSC.
   - Verificação via DNS TXT (Namecheap → Advanced DNS).
   - Submeter mesmo sitemap em cada uma (`englishtalktime.com.br/sitemap.xml`).
3. Pedir indexação manual de `/en/` e `/es/` no GSC.

### 🟡 Próxima sessão — Expandir i18n

Opção A — **Traduzir 3-4 rotas críticas pro EN**:
- **`/imersoes/florida/` → `/en/immersions/florida/`** (ALTÍSSIMA prioridade — é literalmente pro mercado americano)
- `/conversacao/` → `/en/conversation/`
- `/online/` → `/en/online/`
- Eventualmente `/imersoes/` (hub)

Opção B — **Refatorar pra `app/[locale]/...` proper** (pra resolver dívida técnica do `<html lang>`):
- Esforço maior, mas habilita escalar pra todas as rotas
- Pode usar `next-intl` (lib padrão da comunidade)

### 🟡 Onda 2 de SEO em pt-BR (não iniciada)

Cluster pages novas em pt-BR (do plano anterior):

| Rota | Cluster | ROI |
|---|---|---|
| `/destravar-ingles/` | "destravar inglês falar", "destravar conversação" | 🔥 Alto |
| `/ingles-para-tech/` + 4 subpáginas | "inglês para data engineer/BI/DevOps/AI engineer" | 🔥 Alto comercial |
| `/ferramentas-ia-ingles/` | "ferramentas IA estudar inglês", "prompts ChatGPT inglês" | Médio-alto |
| `/entrevista-ingles-tech/` | "preparar entrevista inglês tech", "LinkedIn inglês" | Alto comercial |

### 🟡 Onda 3 — Posts de blog (contínuo, 1-2/mês)

Pautas prontas (em ordem de ROI):
1. "Inglês para Data Engineer: 30 termos técnicos antes da entrevista"
2. "Como usar ChatGPT para destravar conversação em inglês"
3. "Role play de entrevista internacional em inglês: 10 cenários"
4. "Rotina de 1 hora por dia pra praticar inglês: método ETT"
5. "Imersão de inglês no Brasil vs Flórida: 5 diferenças que importam"

### 🟢 Backlog não-SEO (do `TODO-SEO-MELHORIAS.md`)

- Perfis sociais reais (Footer + `sameAs` no JSON-LD)
- Fotos reais dos venues em `/curitiba/`
- Página `/quem-somos/` (E-E-A-T — Frank Florida, operadores)
- Testimonials reais com nome completo + foto + LinkedIn
- LeadForm nativo nas versões EN/ES (substituir botão externo pro Google Form)
- OG images por rota
- Otimização de outras imagens (logos de parceiros, venues)
- Lighthouse / a11y audit
- Backlinks (outreach IEP, UTFPR, FIEP, Cherry Top, Coders, BeeTools)
- Newsletter separada do programa
- RSS feed do blog

---

## Workflow de deploy (lembrete)

Toda mudança no site:

```bash
./deploy.sh "feat(...): mensagem do commit"
```

Depois — **passo manual obrigatório** — entrar em `hpanel.hostinger.com` e disparar pull/deploy. Sem isso, `englishtalktime.com.br` não atualiza.

Limitações conhecidas do `deploy.sh`: ver `CLAUDE.md` na raiz.

---

## Memórias relevantes

- `project_gsc-verified.md` — estado completo do GSC (verificação, sitemap, indexação)
- `project_seo-work-pending.md` — gatilho pra alertar quando user pedir "releia o projeto"
- `reference_dns-hosting.md` — atualizada com os 3 provedores (Hostinger pra `.com.br`, Namecheap pros novos)
- `project_contact-email.md` — `binhara@azuris.com.br` enquanto não tem email no domínio
- `feedback_ask-for-external-urls.md` — pedir URLs em vez de chutar
- `feedback_no-architect-for-ett.md` — ETT é simple marketing site

---

## Como retomar numa próxima sessão

1. **Ler este arquivo primeiro.**
2. Ver `MEMORY.md` — alerta sobre pendências.
3. **Conferir status do SSL** dos domínios novos via curl (se ainda não confirmado):
   ```bash
   curl -sI https://englishtalktime.com
   curl -sI https://englishtalktime.lat
   ```
4. Se SSL ativo → adicionar `.com` e `.lat` no GSC (item 🔴 imediato acima).
5. Decidir frente: i18n expansion (Opção A ou B) ou Onda 2 de SEO em pt-BR.

Última revisão: **2026-05-22** (fim da sessão).
