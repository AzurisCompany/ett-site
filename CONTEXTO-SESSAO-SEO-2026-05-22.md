# Contexto da sessão SEO — 2026-05-22

Handoff da sessão de **2026-05-22** com 3 blocos: GSC finalizado, Onda 1 de keywords aplicada/deployada, e plano completo das próximas ondas.

**Leia este arquivo antes de qualquer outra coisa de SEO.** Ele é mais novo que o `CONTEXTO-SESSAO-SEO-2026-05-14.md` e o `TODO-SEO-MELHORIAS.md`.

---

## TL;DR pra próxima sessão

- ✅ **GSC** está 100% configurado — sitemap submetido + indexação manual pedida pras 6 rotas-chave.
- ✅ **Onda 1 de keywords** (ajustes de copy) foi feita, deployada e está no ar.
- 🟡 **Onda 2** (4-5 landings novas) **NÃO foi iniciada** — é o maior próximo passo de SEO.
- 🟡 **Onda 3** (blog posts) é trabalho contínuo, 1 post por sessão.

---

## Status atual (commit `0f5e1b0`)

- **Branch:** `main`
- **Working tree:** limpo após deploy
- **Produção (`englishtalktime.com.br`):** atualizada — pull no Hostinger confirmado em 2026-05-22
- **Sitemap:** ativo, 16 URLs, descoberto pelo GSC em 21/05
- **Indexação:** solicitada manualmente em 22/05 pras 6 rotas-chave (`/`, `/conversacao/`, `/curitiba/`, `/online/`, `/agenda/`, `/blog/`) — aguardar 1-3 semanas pra indexação real

---

## O que foi feito em 2026-05-22

### Bloco A — GSC (Google Search Console)

| Item | Status |
|---|---|
| Submeter sitemap | ✅ 21/05 — 16 URLs descobertos |
| Pedir indexação manual das 6 rotas | ✅ 22/05 |
| Limpar TXT antigo no Hostinger | ⏭️ pulado (cosmético, sem urgência) |
| HTML tag verificação secundária | ❌ inválido pra Domain Property — não tentar de novo |

**Lição importante:** Domain Property (`englishtalktime.com.br`) **só aceita verificação via DNS TXT**. Métodos alternativos (HTML tag, GA, GTM) só funcionam em URL Prefix Property, que é uma propriedade separada. Não tentar adicionar `metadata.verification.google` no `layout.tsx`.

### Bloco B — Onda 1 de SEO (deploy `0f5e1b0`)

Ajustes em 6 arquivos pra capturar termos faltantes da lista de keywords sem criar página nova:

| # | Arquivo | Mudança |
|---|---|---|
| 1 | `webapp/components/Hero.tsx` | Subtitle agora destaca "destravar inglês" + "falar inglês fluente" + "rotina diária estruturada" |
| 2 | `webapp/components/Tools.tsx` | H2 reposicionado: "10 ferramentas com IA pra destravar conversação em inglês" + copy cita séries, audiobook, ChatGPT, flashcards |
| 3 | `webapp/components/FormulaFluente.tsx` | Parágrafo novo na seção "6 mantras": "rotina diária de 1 hora pra estudar inglês" |
| 4 | `webapp/lib/home-faqs.ts` | 3 FAQs novas (total 9): entrevista internacional tech, inglês p/ Data Engineer/BI/DevOps/AI, rotina diária de 1h — entram automaticamente no FAQPage JSON-LD da home |
| 5 | `webapp/app/layout.tsx` | `keywords` do schema Organization: +18 termos (destravar, falar fluente, conversation club Curitiba, English conversation group Brazil, speaking practice, Data Engineer/BI/DevOps/AI Engineer, role play entrevista, LinkedIn profissional, ChatGPT, séries com legenda, audiobook) |
| 6 | `webapp/app/curitiba/page.tsx` | Subtitle cita "conversation club de Curitiba" + keywords expandidas |

Verificação em produção: `curl https://englishtalktime.com.br/` confirma todos os 18 termos novos no HTML.

---

## Plano das próximas ondas (de maior ROI pra menor)

### 🟡 Onda 2 — Cluster pages NOVAS (PRÓXIMO PASSO RECOMENDADO)

Cada landing dedicada captura cluster inteiro de busca. Esforço: 3-5 dias (1 landing por sessão).

| Nova rota | Cluster de busca | Volume potencial |
|---|---|---|
| `/destravar-ingles/` | "destravar inglês falar", "destravar conversação", "inglês para quem trava na hora de falar" | 🔥 Alto |
| `/ingles-para-tech/` (hub) + 4 sub: `/ingles-para-data-engineer/`, `/ingles-para-bi/`, `/ingles-para-devops/`, `/ingles-para-ai-engineer/` | "inglês para data engineer", "inglês para DevOps", "inglês para BI" | 🔥 Alto comercial |
| `/ferramentas-ia-ingles/` | "ferramentas IA estudar inglês", "app IA conversação inglês", "prompts ChatGPT inglês" | Médio-alto |
| `/entrevista-ingles-tech/` | "preparar entrevista inglês tech", "role play entrevista inglês", "LinkedIn inglês profissional" | Alto comercial |

**Template a seguir:** as landings já existentes `/conversacao/`, `/curitiba/`, `/online/` são modelo. Cada uma tem: `metadata` rica + JSON-LD (Service ou WebPage) + BreadcrumbList + 4-6 seções de copy + cross-link pras outras landings + CTA pro LeadForm/Google Form.

**Recomendação de ordem:** começar por `/destravar-ingles/` (maior ROI individual, casa perfeitamente com o posicionamento ETT — slogan "do inglês travado ao inglês funcional").

**Não esquecer ao terminar cada landing:**
1. Adicionar a rota no `webapp/app/sitemap.ts` com priority 0.9
2. Adicionar link no Footer (coluna "Onde Praticar" ou criar nova coluna "Pra quem é")
3. Pedir indexação manual no GSC depois do deploy

### 🟡 Onda 3 — Posts de blog novos (ritmo contínuo)

1 post por sessão, ~1000-1500 palavras, segue o template dos 3 posts já existentes (`webapp/app/blog/<slug>/page.tsx` + `webapp/lib/blog-posts.ts`).

**Pautas prontas, em ordem de ROI:**

1. **"Inglês para Data Engineer: 30 termos técnicos pra dominar antes da entrevista"** — long-tail comercial, baixíssima concorrência
2. **"Como usar ChatGPT para destravar conversação em inglês (prompts + rotina diária)"** — capta busca AI+inglês
3. **"Role play de entrevista internacional em inglês para tech: 10 cenários comentados"** — alta intenção comercial
4. **"Rotina de 1 hora por dia pra praticar inglês: o método ETT explicado"** — ranqueia "rotina estudar inglês"
5. **"Imersão de inglês no Brasil vs Flórida: 5 diferenças que importam"** — captura quem compara mercado
6. **"O que é a Fórmula Fluente: a metodologia que está por trás do ETT"** — backlink interno pra `/ff/`
7. **"Cherry Top vs CNA vs CCAA: o que muda numa imersão de adultos?"**
8. **"Inglês para BI e Dados: glossário e simulações de daily em inglês"**

**Não esquecer ao publicar cada post:**
1. Adicionar entry em `webapp/lib/blog-posts.ts`
2. O sitemap inclui blog posts automaticamente
3. Pedir indexação manual no GSC

### 🟢 Onda 4 — Versão EN do site (longo prazo)

Captura "English conversation group Brazil", "speaking practice Brazil", "intensive English course Brazil". **Adiar** até Ondas 2/3 mostrarem tração no GSC (60-90 dias).

### 🔵 Pendências do `TODO-SEO-MELHORIAS.md` (não SEO puro)

- Perfis sociais reais (LinkedIn/Instagram do ETT) → preencher Footer + `sameAs` no JSON-LD
- Fotos reais dos venues em `/curitiba/`
- Página `/quem-somos/` (E-E-A-T — Frank Florida, Alessandro Binhara, time)
- Testimonials reais com nome completo + foto + link LinkedIn
- Pricing transparency nas imersões
- OG images por rota (hoje todas usam `/images/ETT-top01.png`)
- Google Meu Negócio
- Lighthouse/a11y audit
- Backlinks (outreach IEP, UTFPR, FIEP, Cherry Top, Coders, BeeTools)
- RSS feed do blog
- Newsletter separada

---

## Workflow de deploy (lembrete)

Toda mudança no site:

```bash
./deploy.sh "feat(seo): mensagem do commit"
```

Depois — **passo manual obrigatório** — entrar no painel **Hostinger** (`hpanel.hostinger.com`) e disparar pull/deploy. Sem isso, `englishtalktime.com.br` não atualiza.

Limitações conhecidas do `deploy.sh`: ver `CLAUDE.md` na raiz.

---

## Memória atualizada

- `project_gsc-verified.md` — itens 1 e 2 marcados como concluídos; item 4 marcado como **INVÁLIDO** (Domain Property só aceita DNS)
- `project_seo-work-pending.md` — nova memória de alerta apontando pra este arquivo

---

## Como retomar numa próxima sessão

1. **Ler este arquivo primeiro.**
2. Ver `MEMORY.md` (carrega automático) — vai ter linha de alerta apontando aqui.
3. Decidir entre: começar Onda 2 (recomendado), Onda 3 (blog), ou um item específico do TODO-SEO-MELHORIAS.md.
4. Se passou mais de uma semana, vale também:
   - Conferir o GSC → Performance pra ver se já tem impressões/posições reais nas keywords novas
   - Conferir GSC → Páginas pra ver quantas das 16 URLs já estão "Indexada" (esperado: 8-12 após 2 semanas)

Última revisão: **2026-05-22**.
