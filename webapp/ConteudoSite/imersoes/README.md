# Imersões — Material Fonte

Esta pasta guarda o **material bruto** de cada imersão (briefings, fotos originais, PDFs).
Não vai pro build. Eu leio daqui pra montar as páginas do site.

## Como adicionar uma nova imersão

1. Copie `_template/` e renomeie pro slug da imersão no formato `AAAA-MM-cidade`:
   ```
   cp -r _template 2025-03-curitiba
   ```
2. Preencha o `briefing.md` (campos marcados com `TODO`).
3. Jogue as fotos originais (full-res, sem tratamento) em `fotos-originais/`.
   - Pode renomear pra `01.jpg`, `02.jpg`... ou deixar nome da câmera.
   - Se tiver legenda de alguma foto, anote no `briefing.md` na seção **Fotos**.
4. PDFs, agenda detalhada, lista de presença, etc → `refs/`.
5. Me avisa que tem nova imersão pronta — eu otimizo as fotos pra `public/imersoes/<slug>/` e gero a página.

## Estrutura

```
imersoes/
├── README.md                  # este arquivo
├── _template/                 # template — não editar, só copiar
│   ├── briefing.md
│   ├── fotos-originais/
│   └── refs/
└── <AAAA-MM-cidade>/          # uma pasta por imersão
    ├── briefing.md
    ├── fotos-originais/
    └── refs/
```

## Convenções

- **Slug**: `AAAA-MM-cidade` minúsculo, sem acento, sem espaço (`2025-03-curitiba`, `2025-06-sao-paulo`).
- **Datas**: sempre formato ISO no briefing (`2025-03-14`), pra ordenação ficar correta.
- **Fotos publicáveis**: marque no briefing quais fotos podem ir pro site (algumas podem ter restrição de imagem de aluno).
