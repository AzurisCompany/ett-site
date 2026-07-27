# /divulgacao/ — central de kits de divulgação

`index.html` desta pasta é o **hub**: lista todos os kits. Cada subpasta é **um kit**,
publicado como página estática em `https://englishtalktime.com.br/divulgacao/<slug>/`:

```
<slug>/
├── index.html   ← a página do kit (o link que se compartilha) · noindex
├── email.html   ← o HTML cru do e-mail pro RD Station
├── textos.md    ← os 5 blocos de texto por rede
└── assets/      ← as 5 artes canônicas
```

Fica em `public/` de propósito: o export do Next copia sem tocar, então as URLs servem
HTML cru — sem layout, fontes ou scripts injetados. Pro e-mail, o fluxo é:
abrir `.../email.html` → `Ctrl+U` (ver código-fonte) → copiar tudo → colar no RD Station
num e-mail do tipo "Código HTML".

**Processo completo (como criar um kit novo):** `novoConteudo/PROCESSO-DIVULGACAO-ETT.md`.
Template: `novoConteudo/_template-kit/`. Artes: `webapp/scripts/kits/`.

> ⚠️ A pasta `divulgacao/` **da raiz do repo** é cópia de build e é apagada a cada
> `./deploy.sh`. Arquivo novo vai sempre aqui, em `webapp/public/divulgacao/`.

## Kits

| Pasta | O quê | Publicado |
|---|---|---|
| `cherrytop-business-meal/` | Atividade online **da Cherry Top** (ETT divulga): sábado 01/08/2026, 12h–13h, gratuito. Entrada pelo grupo de WhatsApp. Kit completo + e-mail | 2026-07-27 |
| `convitesegunda20h/` | Encontro online de conversação, toda segunda 20h (sala: `ett-speak.vercel.app`). Kit completo: 5 artes + textos + e-mail | 2026-07-26 · kit em 2026-07-27 |

> `convitesegunda20h` é um slug **legado** (nasceu como pasta só do e-mail) e **não pode
> ser renomeado**: os e-mails já disparados apontam pra `EmailTopNovo.jpg` dentro dela.
> Kits novos usam slug descritivo em kebab-case.

## Convenções

**Página do kit:** `noindex, nofollow` sempre. Kit é material de trabalho — não pode
competir com as páginas do site no Google. (O sitemap é gerado por `app/sitemap.ts`, que
só lista rotas do app, então `public/` já fica de fora.)

**HTML de e-mail, não de site:**

- Tabelas aninhadas, largura 600px, **CSS 100% inline**.
- `bgcolor` em todo `td` — Outlook desktop usa a engine do Word e ignora `background-color` em `div`.
- Botão "bulletproof": padding no `td`, não no `<a>`.
- Preheader oculto no topo do `<body>` e `color-scheme` declarado no `<head>` (evita inversão automática no dark mode do Apple Mail).
- Media query pra empilhar no mobile. Conferir em ~700px e ~390px antes de publicar.

**Imagens:**

- **JPEG ou PNG, nunca `.webp`** — vários clientes de e-mail não renderizam webp.
- **URL absoluta** de produção (`https://englishtalktime.com.br/divulgacao/...`). Consequência: a imagem só carrega **depois do pull no Hostinger** — não disparar o e-mail antes disso.
- Largura real 2× a exibida (ex.: 1200px de largura pra exibir a 600px), comprimida pra ~120 KB.
- **Nome de arquivo novo a cada versão.** O hosting serve imagem com `max-age` de 7 dias; reaproveitar o nome faz o RD Station puxar a imagem velha.
- O original em alta resolução vai arquivado em `novoConteudo/<campanha>/`, não aqui.

**No arquivo:**

- Comentário no topo com o passo a passo pro RD Station e 3–4 sugestões de assunto pra teste A/B.
- Onde entra o nome da pessoa, deixar um cumprimento neutro + comentário indicando o ponto — o token de personalização varia por conta RD e é inserido pelo editor deles.
- **Não** incluir bloco de descadastro nem endereço do remetente: a RD insere automaticamente no rodapé.

**Artes do kit (5 formatos canônicos, nomes fixos):** `banner.png`+`banner.webp` 1920×1080,
`og-1200x630.png`, `feed-1080x1080.png`, `feed-1080x1350.png`, `story-1080x1920.png`.
Geradas por script (`webapp/scripts/kits/`), nunca à mão — assim dá pra corrigir a copy e
regerar tudo. O banner do e-mail é um arquivo à parte (JPEG, com regra de nome próprio).

## Checklist antes de disparar

1. `npm run build` e conferir que a pasta aparece em `webapp/out/divulgacao/`.
2. `./deploy.sh` na raiz.
3. **Pull no `hpanel.hostinger.com`.**
4. Abrir a URL em aba anônima e conferir que as imagens carregam.
5. Copiar o código-fonte pro RD, inserir o campo de nome, **enviar teste pra si mesmo** (conferir Gmail + celular).
