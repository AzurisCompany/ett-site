# Contexto da sessão — 2026-07-06

Handoff da sessão de **2026-07-06**. Foco: **revisão de marketing da home + nova seção do ETT Player (prova das ferramentas) para estimular geração de lead**.

**Leia este arquivo primeiro** — é o mais novo. Anteriores: `CONTEXTO-SESSAO-2026-06-06.md`, `CONTEXTO-SESSAO-2026-06-05.md`, `CONTEXTO-SESSAO-SEO-2026-05-22.md`.

---

## Estado final: COMMITADO E PUSHADO ✅ / pull no Hostinger pendente ⚠️

Commit `1efe05f` subiu pra `origin/main`:
`feat(home): reposiciona home como programa aberto/gratuito + seção ETT Player (screenshot + CTAs de lead)`

**⚠️ Produção (`englishtalktime.com.br`) só atualiza após o pull manual em `hpanel.hostinger.com`.** No fim da sessão o pull ainda **não** tinha sido feito — confirmar.

---

## Pedido do usuário

Revisar a home "como especialista em marketing digital" para deixar claro que:
1. É um **programa aberto ao público, sem custo de inscrição** pra participar.
2. Pra receber info sobre **ferramentas e metodologia**, a pessoa se **cadastra na landpage** e passa a participar **de graça** dos encontros e da comunidade.
3. As **ferramentas já existem e estão no ar** em **https://ett-player.vercel.app/** — com **screenshot do player** na home.
4. **Estimular a geração de leads** na página principal.

## Diagnóstico de marketing (o que estava fraco)

- "Aberto e gratuito" não era a mensagem nº 1 acima da dobra (tarja falava de "+365 mil alunos"; "gratuito" perdido no parágrafo).
- Funil não explícito (faltava a cadeia cadastro → agenda/metodologia/ferramentas → participa grátis).
- Ferramentas eram promessa, não prova — o **ETT Player já no ar** não aparecia.

## O que foi feito (arquivos)

- **`webapp/components/Hero.tsx`** — tarja → "Programa aberto à comunidade • Participação 100% gratuita"; subtítulo reescrito explicitando o funil; nova **faixa de reforço** (✓ Sem custo de inscrição · ✓ Online + presencial · ✓ +365 mil alunos); CTA secundário aponta pra `#player`. Import de `Check` adicionado.
- **`webapp/components/PlayerShowcase.tsx`** (NOVO) — seção `id="player"`: selo "As ferramentas já estão no ar", headline "Não é promessa. É o ETT Player — e já está funcionando.", **screenshot real do player** em moldura de browser (link externo), grid de módulos (Speak, Flashcards, Legendas & Séries, AudioBook & Rádio, Level Check & Learning DNA, Voice Agent Lab) e **CTA duplo** (Explorar o ETT Player ↗ / Quero meu acesso grátis → `#inscricao`). Regra: acesso gratuito pra quem participa; cadastro dá login + plano personalizado.
- **`webapp/app/page.tsx`** — importa e insere `<PlayerShowcase />` logo após `<Tools />`.
- **`webapp/components/Tools.tsx`** — CTA final vira ponte pro player ("já estão no ar no ETT Player 👇 · Ver o ETT Player em ação", href `#player`).
- **`webapp/components/LeadForm.tsx`** — título "Cadastre-se e comece de graça"; subtítulo/mensagem de sucesso agora citam **agenda + metodologia + acesso às ferramentas (ETT Player)** + participação gratuita.
- **`webapp/public/images/ett-player.webp`** (NOVO, 44 KB) — screenshot capturado ao vivo de `ett-player.vercel.app`.

### Como o screenshot foi capturado (pra repetir no futuro)
Não há Playwright/Chromium instalado no projeto. Processo usado:
1. `npx playwright install chromium` (baixa só o browser no cache `~/.cache/ms-playwright/`; `--with-deps` falha por exigir sudo).
2. `npm install playwright-core` num dir temporário (scratchpad).
3. Script Node apontando `executablePath` pro chrome do cache (`.../chromium-1228/chrome-linux64/chrome`), `args: ['--no-sandbox','--disable-dev-shm-usage']`, `goto` + `screenshot`.
4. Otimização com **sharp** (já é dependência do Next): resize 1600px + webp q80.

Validação: `npm run build` passou; home renderizada e conferida via screenshot (hero + seção player OK). Páginas `/en`, `/es`, `/online` NÃO reusam esses componentes — mudanças isoladas na home PT.

---

## Próximos passos

1. **Pull no Hostinger** (`hpanel.hostinger.com`) pra publicar `1efe05f`. Conferir no ar: tarja "aberto/gratuito", seção **ETT Player** com screenshot, botão "Explorar o ETT Player" abrindo o app.
2. **Sugestões deixadas de fora** (aguardando ok do usuário):
   - Adicionar **"Player ↗"** no menu de topo (link externo direto). Envolve i18n em `webapp/components/Navbar.tsx` (`buildLinks` PT/EN/ES) e suporte a `target=_blank`.
   - **Alinhar contagem de ferramentas**: a seção Tools diz "10 ferramentas"; o player mostra "12 ferramentas".
3. (Pendência antiga) **SSL `.com`/`.lat`** no Namecheap ainda quebrado → bloqueia adicionar no GSC.
4. (Pendência antiga) Conteúdo: expandir i18n EN ou Onda 2 SEO pt-BR; fluxo semanal de indicação de parceiro (`npm run partner:feed`).

Última revisão: **2026-07-06**.
