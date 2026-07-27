# /divulgacao/ — e-mails de marketing (RD Station)

Cada pasta aqui é **uma campanha de e-mail**, publicada como página estática em
`https://englishtalktime.com.br/divulgacao/<campanha>/`.

Fica em `public/` de propósito: o export do Next copia sem tocar, então a URL serve o
**HTML cru do e-mail** — sem layout, fontes ou scripts injetados. Fluxo de uso:
abrir a URL → `Ctrl+U` (ver código-fonte) → copiar tudo → colar no RD Station num
e-mail do tipo "Código HTML".

> ⚠️ A pasta `divulgacao/` **da raiz do repo** é cópia de build e é apagada a cada
> `./deploy.sh`. Arquivo novo vai sempre aqui, em `webapp/public/divulgacao/`.

## Campanhas

| Pasta | O quê | Publicado |
|---|---|---|
| `convitesegunda20h/` | Convite pro encontro online de conversação, toda segunda 20h (sala: `ett-speak.vercel.app`) | 2026-07-26 |

## Convenções

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

## Checklist antes de disparar

1. `npm run build` e conferir que a pasta aparece em `webapp/out/divulgacao/`.
2. `./deploy.sh` na raiz.
3. **Pull no `hpanel.hostinger.com`.**
4. Abrir a URL em aba anônima e conferir que as imagens carregam.
5. Copiar o código-fonte pro RD, inserir o campo de nome, **enviar teste pra si mesmo** (conferir Gmail + celular).
