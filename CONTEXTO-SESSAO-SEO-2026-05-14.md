# Contexto da sessão SEO — 2026-05-14

Documento de handoff de uma sessão longa de SEO + LGPD compliance no site ETT.
Leia este arquivo antes de continuar o trabalho — economiza ~1h de releitura de código.

> **Objetivo da sessão (definido pelo user):**
> Fazer o Google indexar `englishtalktime.com.br` como **local para encontros de
> conversação em inglês**. Capturar buscas tipo "praticar inglês", "grupo de
> conversação", "onde treinar inglês", "praticar inglês em Curitiba".
> Posicionamento crítico: **encontros para TREINAR A FALA, com ferramentas de apoio
> (IA)** — não bate-papo solto.

---

## Status atual

- **Branch:** `main`
- **Último commit:** `4f0d804` — `feat(seo): site indexável como grupo de conversação …` (2026-05-14)
- **Working tree:** limpo (sem pendências)
- **Produção (`englishtalktime.com.br`):** o commit foi pushed pro `origin/main`. ⚠️ **Hosting externo (provavelmente Hostinger) exige pull manual no painel pra atualizar a prod.** Se a mudança ainda não estiver no ar, é porque esse passo manual não foi feito.

---

## Páginas e URLs novas criadas nesta sessão

Todas em produção após o pull no painel do hosting.

### 🎯 Landings de SEO (foco em buscas de "praticar inglês")

| URL | Search intent | Schemas |
|---|---|---|
| `https://englishtalktime.com.br/conversacao/` | "grupo de conversação em inglês", "conversation club" | BreadcrumbList + Service |
| `https://englishtalktime.com.br/curitiba/` | "praticar inglês em Curitiba", "onde treinar inglês Curitiba" | BreadcrumbList + LocalBusiness + Service |
| `https://englishtalktime.com.br/online/` | "praticar inglês online grátis", "conversação online segunda" | BreadcrumbList + Service + 3 Events futuros |

### 📝 Blog

| URL | Categoria | Palavras |
|---|---|---|
| `https://englishtalktime.com.br/blog/` | Listagem | — |
| `https://englishtalktime.com.br/blog/como-destravar-conversacao-em-ingles/` | Conversação | ~1300 |
| `https://englishtalktime.com.br/blog/praticar-ingles-em-curitiba-gratis/` | Curitiba | ~950 |
| `https://englishtalktime.com.br/blog/grupo-de-conversacao-vs-aula-particular/` | Guia (comparativo) | ~1400 |

### ⚖️ Páginas legais (LGPD)

| URL | Conteúdo |
|---|---|
| `https://englishtalktime.com.br/politica-privacidade/` | 13 seções LGPD — controlador, dados coletados, finalidade, base legal, operadores (RD/Google/parceiros), retenção, direitos do titular |
| `https://englishtalktime.com.br/termos-uso/` | 12 seções — aceitação, conduta, propriedade intelectual, limitação de responsabilidade, foro Curitiba |

### 🤖 Rotas técnicas (SEO infra)

| URL | Conteúdo |
|---|---|
| `https://englishtalktime.com.br/robots.txt` | gerado por `webapp/app/robots.ts` — aponta pro sitemap |
| `https://englishtalktime.com.br/sitemap.xml` | gerado por `webapp/app/sitemap.ts` — 16 URLs |

---

## Páginas existentes que receberam upgrades (não-novas)

Mudaram metadata + schemas + (em alguns casos) copy:

- `/` — title novo, FAQ section visível adicionada (entre Testimonials e LeadForm), Hero subtitle reescrito com keywords ("grupo de conversação", "treino de fala", "ferramentas de apoio com IA"), FAQPage JSON-LD com 6 Q&As
- `/agenda/` — title novo + 7 Events JSON-LD (online + presenciais futuros) + BreadcrumbList
- `/imersoes/` — title novo + ItemList das 3 cidades + FAQPage com 6 Q&As + BreadcrumbList
- `/imersoes/curitiba/` — Event JSON-LD (1 turma jul/2026) + BreadcrumbList
- `/imersoes/belo-horizonte/` — Event JSON-LD (3 turmas set/out/nov 2026) + BreadcrumbList
- `/imersoes/florida/` — Event JSON-LD (2 turmas jan/fev 2027) + BreadcrumbList
- `/ff/` — title novo + BreadcrumbList

---

## Resumo do que foi feito (em ondas)

### ✅ Onda 1 — Metadata + infra SEO base

- Reescrita de `<title>`, `<meta description>`, keywords em **todas** as rotas, com foco em "grupo de conversação", "treino de fala", "ferramentas de apoio com IA", "Curitiba + online".
- `webapp/app/robots.ts` criado.
- `webapp/app/sitemap.ts` criado.
- JSON-LD raiz enriquecido em `webapp/app/layout.tsx`: `@graph` com `Organization` + `EducationalOrganization` + `LocalBusiness` (endereço Curitiba/PR) + `WebSite` + `ContactPoint` + `areaServed`.
- `alternates.canonical` em cada rota.
- Alt text melhorado em Hero, Navbar, Footer.

### ✅ Onda 2 — Schemas de eventos + FAQ + breadcrumb

- Event JSON-LD em `/agenda/` (7 encontros futuros, online + presencial).
- Event JSON-LD nas 3 páginas de imersão (1 Curitiba + 3 BH + 2 Flórida).
- FAQPage JSON-LD na home + 6 Q&As visíveis (seção FAQ nova entre Testimonials e LeadForm).
- FAQPage JSON-LD em `/imersoes/` (FAQs já existiam visualmente).
- BreadcrumbList em todas as rotas internas.
- Eventos da Agenda extraídos pra `webapp/lib/agenda-events.ts` (compartilhado).
- FAQs da home em `webapp/lib/home-faqs.ts`.

### ✅ Onda 3 — Landings dedicadas

- 3 novas rotas: `/conversacao/`, `/curitiba/`, `/online/` (descritas na tabela acima).
- Footer revamped: nova coluna "Onde Praticar" com links pras 3 landings + Agenda. Coluna "Comunidade" antiga removida (duplicava links da Programa).
- Sitemap atualizado com as 3 rotas + prioridade 0.95.

### ✅ Onda 4 — Blog + posts

- Sistema de blog em `/blog/` com listagem + 3 posts iniciais.
- `webapp/components/BlogLayout.tsx` (shell shared: Navbar, hero, body wrapper, CTA, related posts, Footer).
- `webapp/lib/blog-posts.ts` (metadata centralizada — slug, title, description, excerpt, date, readMinutes, category, tags).
- Estilo `.prose-blog` em `webapp/app/globals.css` (h2/h3/p/ul/links neon/blockquote).
- BlogPosting JSON-LD em cada post.
- Footer ganhou link "Blog ETT" na coluna Programa.

### ✅ Bloco crítico — Compliance LGPD

- `/politica-privacidade/` criada (LGPD-compliant, 13 seções).
- `/termos-uso/` criada (12 seções).
- Email de contato: **`binhara@azuris.com.br`** (domínio ainda não tem email — anotado em memória pra trocar quando configurar).
- Cookie consent banner: `webapp/components/CookieConsent.tsx`.
- GA refatorado: `webapp/components/Analytics.tsx` carrega o GA **só após aceite explícito**. `layout.tsx` simplificado (GA inline foi removido).
- Footer corrigido: links de Privacidade/Termos agora apontam pras rotas reais.
- Sitemap atualizado com as 2 páginas legais (prioridade 0.3).

---

## Pendências (em ordem de prioridade)

### 🔴 Em andamento — não fechou ainda

1. **GSC verification pendente.**
   - User adicionou TXT DNS no Hostinger em 2026-05-14: `google-site-verification=qW6-lKK8LZphmr33cJKwg3_Qfrnm_imKg6AIa9jLNUY`
   - Resolvers DNS (Google + Cloudflare) ainda só viam o SPF na última checagem.
   - User decidiu aguardar propagação.
   - **Próxima sessão: confirmar status.** Comando rápido:
     ```bash
     curl -s 'https://dns.google/resolve?name=englishtalktime.com.br&type=TXT'
     ```
     Deve aparecer o `google-site-verification=qW6-…` além do SPF.
   - Se não apareceu mesmo após 24h: provável saved-no-campo-errado no Hostinger. **Plano B:** mudar pra propriedade de prefixo de URL no GSC → meta tag → adicionar via `metadata.verification.google` no `layout.tsx` → deploy.

### 🟡 Próximos passos depois que GSC verificar

2. Submeter sitemap no GSC: `https://englishtalktime.com.br/sitemap.xml`
3. Pedir indexação manual das rotas-chave: `/`, `/conversacao/`, `/curitiba/`, `/online/`, `/agenda/`, `/blog/`
4. Criar **Google Meu Negócio** (instruções em `TODO-SEO-MELHORIAS.md`).
5. Atacar próximos itens do `TODO-SEO-MELHORIAS.md` (17 itens organizados por prioridade).

### 🟢 Backlog organizado

**Toda a lista de melhorias em backlog está em** `TODO-SEO-MELHORIAS.md` **na raiz do repo** — 17 itens classificados em 🟡 (importante) / 🟢 (conteúdo) / 🔵 (nice-to-have).

Highlights do backlog:
- Ícones sociais do Footer apontam pra `#` — precisa URLs reais ou remover (item 1).
- `sameAs` no JSON-LD raiz está vazio (item 2).
- Testimonials parecem ilustrativos — decidir se substitui por reais ou marca como exemplos (item 6).
- Fotos reais dos venues em `/curitiba/` (item 7).
- Pricing transparency nas imersões — hoje "sob consulta" (item 8).
- Página "Quem somos" / E-E-A-T (item 9).
- RSS feed, newsletter, WhatsApp flutuante, Lighthouse, a11y audit, mais posts (10-17).

---

## Stack e fluxo de deploy (lembrete)

- Site é Next.js 14 (`webapp/`) com `output: 'export'` → totalmente estático.
- `./deploy.sh "msg"` builda + espelha `webapp/out/` na raiz + commit + push.
- **Pull no painel do hosting é manual.** Sem isso, a produção não atualiza.
- Pegadinhas do `deploy.sh` (lê `CLAUDE.md` raiz):
  - Só remove órfãos `.html/.txt`, não diretórios.
  - `git add -A` comita working tree inteira — não deixar mudanças não-relacionadas pendentes antes.
  - Não checa branch — confira `main` antes.

## Arquivos novos criados nesta sessão

```
webapp/app/conversacao/page.tsx
webapp/app/curitiba/page.tsx
webapp/app/online/page.tsx
webapp/app/blog/page.tsx
webapp/app/blog/como-destravar-conversacao-em-ingles/page.tsx
webapp/app/blog/praticar-ingles-em-curitiba-gratis/page.tsx
webapp/app/blog/grupo-de-conversacao-vs-aula-particular/page.tsx
webapp/app/politica-privacidade/page.tsx
webapp/app/termos-uso/page.tsx
webapp/app/robots.ts
webapp/app/sitemap.ts
webapp/components/Analytics.tsx
webapp/components/BlogLayout.tsx
webapp/components/CookieConsent.tsx
webapp/components/FAQ.tsx
webapp/lib/agenda-events.ts
webapp/lib/blog-posts.ts
webapp/lib/home-faqs.ts
TODO-SEO-MELHORIAS.md
CONTEXTO-SESSAO-SEO-2026-05-14.md  ← este documento
```

## Arquivos modificados nesta sessão

```
webapp/app/layout.tsx           ← metadata refeita, GA refatorado pra carregar com consent
webapp/app/page.tsx              ← FAQ section adicionada + FAQPage JSON-LD
webapp/app/agenda/page.tsx       ← metadata + Event JSON-LD
webapp/app/ff/page.tsx           ← metadata + BreadcrumbList JSON-LD
webapp/app/imersoes/page.tsx                       ← metadata + ItemList + FAQPage + BreadcrumbList JSON-LD
webapp/app/imersoes/curitiba/page.tsx              ← metadata + Event JSON-LD
webapp/app/imersoes/belo-horizonte/page.tsx        ← metadata + 3 Events JSON-LD
webapp/app/imersoes/florida/page.tsx               ← metadata + 2 Events JSON-LD
webapp/app/globals.css           ← .prose-blog styles
webapp/components/Agenda.tsx     ← importa eventos do lib/
webapp/components/Hero.tsx       ← subtitle reescrito + alt text
webapp/components/Navbar.tsx     ← alt text do logo
webapp/components/Footer.tsx     ← coluna "Onde Praticar", links de Privacidade/Termos, link Blog ETT
```

---

## Como retomar (instruções para o próximo Claude / próxima sessão)

1. **Ler este documento** + o `TODO-SEO-MELHORIAS.md` da raiz.
2. **Perguntar ao user:** "O TXT do Google já apareceu no DNS / GSC já verificou?"
3. **Se sim** → submeter sitemap, criar GMB, atacar TODO.
4. **Se não** → checar DNS via `curl https://dns.google/resolve?name=englishtalktime.com.br&type=TXT` e decidir entre esperar mais ou mudar pro Plano B (URL prefix property + meta tag).
5. **Não delegar nada pro agente `azuris-arquiteto`** — ETT é site simples sem sistema. Trabalha direto com Read/Edit/Write/Bash.
6. **Email de contato em páginas legais é `binhara@azuris.com.br`** — quando o domínio tiver email próprio (provavelmente `contato@englishtalktime.com.br`), atualizar `webapp/app/politica-privacidade/page.tsx` e `webapp/app/termos-uso/page.tsx`.
