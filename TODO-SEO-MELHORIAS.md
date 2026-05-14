# ToDo — Melhorias SEO e Qualidade do Site ETT

Lista das melhorias identificadas em **2026-05-14** após as 4 ondas de SEO + bloco crítico de compliance.
Itens "🔴 Crítico" já foram resolvidos no commit `feat(seo): compliance LGPD` — ficam aqui só como histórico.

---

## ✅ Concluído (não precisa fazer de novo)

- ✅ Política de Privacidade publicada em `/politica-privacidade/`
- ✅ Termos de Uso publicados em `/termos-uso/`
- ✅ Links do Footer apontando pras páginas certas
- ✅ Cookie consent banner (LGPD) — GA carrega só após aceite
- ✅ Sitemap inclui as 2 páginas legais
- ✅ Bloco GA refatorado: `components/Analytics.tsx` (condicional) + `components/CookieConsent.tsx`

---

## 🟡 Importante — depende de info externa

### 1. Ícones sociais do Footer apontam pra `#`

Hoje (`webapp/components/Footer.tsx` linha ~77) os 3 ícones (LinkedIn, Instagram, GitHub) têm `href="#"`. Levam a lugar nenhum.

**Decisão necessária:** os perfis sociais oficiais do ETT existem?
- LinkedIn — qual URL?
- Instagram — qual URL?
- GitHub — qual URL? (provavelmente não tem; remover?)

**O que fazer quando tiver:** atualizar `partnerLogos`/`socials` no Footer com as URLs reais. Bonus: adicionar essas URLs em `sameAs` do JSON-LD do `layout.tsx` — isso fortalece a entidade no Knowledge Graph do Google.

### 2. `sameAs` vazio no JSON-LD raiz

Hoje em `webapp/app/layout.tsx` o `sameAs: []` está vazio. Quando definir os perfis sociais (item 1), preencher aqui também:

```ts
sameAs: [
  'https://www.linkedin.com/company/english-talk-time',
  'https://www.instagram.com/englishtalktime',
  // ...
]
```

### 3. Google Search Console — verification meta

Pra Search Console verificar a propriedade `englishtalktime.com.br`, precisamos adicionar no `<head>`:

```html
<meta name="google-site-verification" content="XXXXXX" />
```

**O que fazer:**
1. Criar/acessar propriedade no [Google Search Console](https://search.google.com/search-console).
2. Escolher método "HTML tag".
3. Copiar o `content="..."` e mandar pra mim — adiciono no `layout.tsx` em 1 linha.
4. Depois do próximo deploy, voltar ao GSC e clicar "Verificar".
5. Submeter sitemap manualmente: `https://englishtalktime.com.br/sitemap.xml`.

### 4. Google Meu Negócio (GMB)

Não é mudança no site, mas casa com o `LocalBusiness` schema já implementado.

**Passos:**
1. Acessar [business.google.com](https://www.google.com/business/).
2. Criar ficha como "English Talk Time — Grupo de Conversação em Inglês".
3. Categoria principal: "Language School" (ou "Escola de Idiomas").
4. Tipo: **Service area business** (não negócio com endereço público — porque rotacionamos por 4 venues).
5. Área atendida: Curitiba + região metropolitana.
6. Site: `https://englishtalktime.com.br/curitiba/` (landing local).
7. Email/telefone: usar o de contato.

### 5. Imagens Open Graph (OG) específicas por rota

Hoje todas as rotas compartilham `/images/ETT-top01.png` quando linkadas no WhatsApp/LinkedIn/Twitter. Idealmente cada rota tem OG image própria com o título renderizado.

**Opções:**
- **Estática** — criar 1 PNG/JPG por rota (mais trabalho, melhor controle visual).
- **Geração dinâmica via Next** — não funciona em `output: 'export'`; descartado.
- **OG image template SVG** — criar 1 SVG genérico e renderizar texto via build script. Médio esforço.

Prioridade baixa. Começaria pelas 4 rotas mais compartilhadas: `/`, `/conversacao/`, `/curitiba/`, `/online/`.

---

## 🟢 Conteúdo / fortalecimento de marca

### 6. Testimonials — substituir por reais ou marcar como exemplos

`webapp/components/Testimonials.tsx` tem 4 depoimentos com nomes truncados ("Rodrigo M.", "Fernanda S."). Sem foto, sem link de prova externa.

**Decisão:**
- **Opção A — manter ilustrativos:** adicionar disclaimer "depoimentos ilustrativos baseados em padrões reais da comunidade" pra honestidade.
- **Opção B — substituir por reais:** quando tiver participantes que aceitem aparecer com nome completo, foto, link do LinkedIn.

**Quando tiver reais:** vou adicionar `Review` + `AggregateRating` schema (hoje deliberadamente não adicionei pra não criar review schema falso, o que Google penaliza).

### 7. Fotos reais dos venues em `/curitiba/`

A landing `/curitiba/` mostra só logos dos 4 venues (IEP, UTFPR, Hard Rock, Habitat). Foto real de um encontro acontecendo em cada lugar:
- Aumenta credibilidade da landing.
- Pode ser indexada como `ImageObject` no Google Imagens.
- Quando tiver foto: substituir os logos por carrossel/grid de fotos com legenda. Os logos podem ficar abaixo, menores.

### 8. Pricing transparency nas imersões

Hoje as 3 imersões (`/imersoes/curitiba/`, `belo-horizonte/`, `florida/`) dizem "sob consulta". Pode estar afastando lead que quer faixa antes de preencher form.

**Decisão:** colocar "a partir de R$ X" em algum lugar? Decisão estratégica de venda. Se sim:
- Atualizar copy de cada página de detalhe.
- Atualizar `Offer.price` ou `Offer.priceRange` no JSON-LD do Event.

### 9. Página "Quem somos" (`/sobre/` ou `/quem-somos/`)

Hoje a única menção dos operadores é "DSSBR & GUBigData IA" sem rosto. Pra **E-E-A-T do Google** (Experience, Expertise, Authoritativeness, Trustworthiness) — especialmente em conteúdo educacional — vale ter:
- Foto + bio do Frank Florida (autor da Fórmula Fluente).
- Foto + bio dos operadores principais (Alessandro Binhara?).
- Linha do tempo: como o DSSBR/GUBigData chegou no ETT.
- Conexão com parceiros (BeeTools, Cherry Top, Coders, IEP).

Esforço médio (1 página + fotos + bios). Ganho de credibilidade alto.

---

## 🔵 Nice-to-have (sem urgência)

### 10. RSS feed pro blog

Criar `app/blog/feed.xml/route.ts` (ou similar) que gera RSS a partir de `lib/blog-posts.ts`. Pequeno SEO win + permite agregadores (Feedly etc.).

### 11. Newsletter separada do programa

Hoje a única captura é o Google Form do programa completo. Falta um opt-in só pra:
- Receber novos posts do blog.
- Receber a agenda quinzenal.
- Sem barreira (só email).

Pode ser RD Station novo formulário ou Mailchimp/ConvertKit.

### 12. Botão flutuante de WhatsApp

Alguns leads convertem por WhatsApp em vez de form. Componente flutuante (canto inferior direito) com link direto pra WhatsApp business — `wa.me/<numero>?text=Vim+do+site+ETT`.

**Precisa de:** número de WhatsApp business pro ETT.

### 13. Performance audit (Lighthouse + Core Web Vitals)

Não rodei Lighthouse. Provavelmente já está bom (static export, JS leve nas landings novas), mas vale checar:
- LCP (Largest Contentful Paint) — Hero image
- CLS (Cumulative Layout Shift) — framer-motion entry animations
- TBT (Total Blocking Time) — bundle JS

Rodar: `lighthouse https://englishtalktime.com.br/ --view`

### 14. Acessibilidade (a11y) audit

Conferir:
- Contraste de cores (cinza claro em fundo escuro pode falhar AA em alguns pontos).
- Keyboard navigation (Tab) em toda a UI.
- ARIA labels nos botões interativos (acordeon do FAQ, cookie banner já tá).
- `aria-current` no Navbar quando rota ativa.

Ferramentas: axe DevTools, WAVE.

### 15. Mais posts no blog (contínuo)

Pra Google ver o blog como ativo, mínimo **1–2 posts/mês**. Hoje temos 3. Próximas pautas sugeridas (long-tail forte):

- "Quantas horas de prática são necessárias pra falar inglês fluentemente? O que a ciência diz"
- "Praticar inglês online grátis: 7 opções (comparativo honesto)"
- "Inglês para devs: 30 expressões que todo programador precisa dominar"
- "Como destravar inglês em entrevistas técnicas internacionais"
- "O que é a Fórmula Fluente: a metodologia que está por trás do ETT"
- "Cherry Top vs CNA vs CCAA: o que muda numa imersão de adultos?"
- "Inglês para BI e Dados: glossário e simulações de daily em inglês"

Cada um vira uma rota `/blog/<slug>/` seguindo o template já criado.

### 16. Backlinks locais

Não é mudança no código, é outreach. Pedir links de:
- IEP (`iep.org.br`) em página de eventos/parcerias → linkando pra `englishtalktime.com.br/curitiba/`.
- UTFPR (departamento que recebe os encontros).
- Sistema FIEP (`sistemafiep.org.br`) — via Habitat.
- Hard Rock Cafe Curitiba (página de eventos).
- Cherry Top (`cherrytop.com.br`) — eles já são parceiros formais; pedir link recíproco.
- Coders, BeeTools — mesmo argumento.

Backlinks locais são ouro pra SEO local em Curitiba.

### 17. Reviews reais → `AggregateRating` schema

Quando tiver reviews reais no Google Meu Negócio (5+), volta aqui:
- Puxar nota média.
- Adicionar `AggregateRating` no `LocalBusiness` schema do `layout.tsx` e da `/curitiba/`.

---

## Como atualizar este documento

- Quando concluir um item, mover pra seção "✅ Concluído" no topo (ou simplesmente apagar — está versionado no git).
- Quando descobrir nova melhoria, adicionar na seção apropriada (🔴/🟡/🟢/🔵).
- Última revisão: **2026-05-14**.
