# Contexto da sessão — 2026-10-21

Handoff da sessão de **2026-10-21** (6 dias antes do lançamento no DSSBR). Tema: **foto da Maria Leonardo
Aparecida ("Prof. Leo", Cherry Top) no lugar da logo da Cherry Top** em tudo que é do lançamento.

**Leia este arquivo primeiro** — é o mais novo. Anterior: `CONTEXTO-SESSAO-2026-10-10.md` (o evento, a home em
modo lançamento, o kit e todas as pendências continuam valendo lá).

---

## Commits desta sessão (em `origin/main`, no ar e conferidos)

| SHA | O quê |
|---|---|
| `49ed199` | Foto da Maria Leonardo no hero, na programação, no cartão de compartilhamento e nas 5 artes do kit + e-mail RD com topo novo `EmailLancamento-1021.jpg`; original arquivado em `novoConteudo/` |
| (este) | Este handoff + `CLAUDE.md` + `PROCESSO-DIVULGACAO-ETT.md` |

---

## 1. Re-leitura (início da sessão)

- Working tree limpa, último commit `26ec872` (10/10). Produção em modo lançamento (`last-modified` 10/10).
- Rotas principais, Google Forms da inscrição e os 2 checkouts em 200. **`/planos/` ainda 403.**
- **SSL `englishtalktime.com` / `.lat` ainda sem resposta** (~5 meses) — continua bloqueando o GSC.
- Feed do parceiro com **2 elegíveis**, ambos do **Rubens Queiroz** (que palestra às 14h no lançamento):
  *"O Maior Mito Sobre Fluência Que Ainda É Ensinado Nas Escolas"* (18/10) e *"Pare de se Sabotar: A Verdade
  Sobre Ser Fluente em Inglês"* (11/10). Publicar um deles antes do evento reforça a palestra — **não feito**.

## 2. A foto

- O Alessandro soltou `foto-prof-leo.jpg` (901×1600, retrato vertical) em **`divulgacao/lancamento-dssbr-2026/`
  da raiz** — pasta espelhada do build, que o `deploy.sh` apaga e recria.
- **Cópia derivada** (o original não foi tocado antes do deploy): recorte quadrado do rosto
  `crop((240, 90, 890, 740))` → 320×320 → `webapp/public/images/lancamento/maria-leonardo.webp` (mesmo padrão
  dos outros palestrantes).
- **Decisão do Alessandro** (perguntado antes do deploy): arquivar o original e deixar o deploy apagá-lo da
  pasta espelhada. Original em **`novoConteudo/lancamento-dssbr-2026/foto-maria-leonardo-original.jpg`**.

## 3. O que mudou

| Onde | Mudança |
|---|---|
| `webapp/lib/lancamento.ts` | Maria Leonardo: `foto: '/images/lancamento/maria-leonardo.webp'` (saiu `logo: logo-cherrytop.jpeg`). Isso alimenta o card "Quem fala" do `HeroLancamento` e a grade do `LancamentoDSSBR` |
| `webapp/scripts/kits/build_lancamento_dssbr.mjs` | `img` dela aponta pra foto (saiu `logo: true`) |
| Kit `/divulgacao/lancamento-dssbr-2026/` | 5 artes regeradas + `banner.webp`; `public/images/og-lancamento-dssbr-2026.png` (prévia da home) também; aviso "aparece com a logo porque ainda não temos a foto" removido do `index.html` |
| E-mail RD | Topo novo **`EmailLancamento-1021.jpg`** (nome novo por causa do cache de 7 dias); `email.html` aponta pra ele. **`EmailLancamento-1010.jpg` continua publicado** pra não quebrar e-mails já disparados |

**Onde a logo da Cherry Top continua — de propósito** (representa a empresa, não a pessoa): `ParceirosFaixa`,
`Footer`, `Partners`, `Imersoes`/`ImersaoDetalhe`, homes `/en/` e `/es/`. Os textos do kit (`textos.md`) e o
corpo do `email.html` só citam o nome, sem imagem.

## 4. Verificação em produção (e duas pegadinhas)

- HTML da home com `maria-leonardo.webp` 2× (hero + programação); `email.html` publicado usa o `-1021`; aviso
  antigo some do kit; arte de feed baixada da produção mostra a foto; screenshot Playwright da home confirma.
- **Pegadinha 1 — md5 não bate:** as imagens servidas têm bytes diferentes dos do repo (até o
  `EmailLancamento-1021.jpg`, que nunca existiu antes, com `x-hcdn-cache-status: MISS`). **O Hostinger recomprime
  imagem** — conferir imagem publicada **olhando**, não por hash.
- **Pegadinha 2 — "a foto não apareceu":** o Alessandro viu o card com a logo logo depois do deploy. Era
  **cache do navegador dele**; a produção já servia a foto. Resposta padrão: Ctrl+F5 ou aba anônima, e provar
  com screenshot da produção com `?v=`.

---

# Pendências

## Do lançamento (27/10)

1. **Colar o `email.html` novo na RD** antes de disparar/reenviar (o topo mudou pra `-1021`). Confirmar se o
   disparo de ~20/10 já aconteceu.
2. **Artes já postadas nas redes** saíram com a logo — repostar com as novas, se quiser.
3. **Site do DSSBR** — se usa a logo no lugar da foto dela, trocar por lá (fora deste repo).
4. **Lembrete da véspera (26/10)** pros inscritos do Forms — texto no kit, envio manual.
5. Confirmar **hashtags** oficiais.
6. **Depois de 27/10 17h15:** apagar a `metadata` de `webapp/app/page.tsx` e deployar; propor a limpeza dos
   componentes do lançamento (lista em `CONTEXTO-SESSAO-2026-10-10.md`).
7. **Indicação do Rubens** no blog (ver §1) — idealmente antes do evento.

## Herdadas (sem mudança)

SSL `.com`/`.lat`, `/planos/` 403, `/agenda/` citando UTFPR/Hard Rock/Habitat, landings EN/ES (Google Form,
depoimentos fictícios, preços velhos), Termos/Política sem plano pago, quem responde os leads, 4 leads de
teste na RD, kits antigos de `/divulgacao/` na identidade antiga, fundo `ETT-top01.webp` com o símbolo antigo.

---

Última revisão: **2026-10-21**.
