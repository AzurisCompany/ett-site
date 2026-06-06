# novoconteudo/ — área de rascunho de conteúdo pro blog

Pasta de **staging**: é aqui que o conteúdo bruto pros próximos posts do blog é colocado
antes de virar página publicada. **Nada aqui é build artifact e nada vira rota do site
automaticamente** — é matéria-prima pro agente/editor transformar.

## Pra que serve

- Jogar aqui ideias, textos, anotações, links e materiais que devem virar post.
- O agente (ou eu mesmo) lê o que estiver aqui e transforma no formato certo do site.

## Como nomear

Um arquivo (ou subpasta) por ideia/post. Markdown de preferência:

```
novoconteudo/
  2026-06-06-ideia-ingles-para-entrevista.md
  parceria-aprendendoingles/        # materiais soltos de uma fonte
```

Sugestão de cabeçalho dentro do `.md` (livre, só pra dar contexto ao agente):

```markdown
# Título provisório
Tipo: post próprio ETT | indicação de parceiro
Fonte/link (se indicação): https://...
Ângulo/observações: ...
```

## Pra onde o conteúdo vai depois (destinos reais)

Dependendo do tipo, o conteúdo daqui é transformado em:

- **Indicação de parceiro** (resumo nosso + link pro artigo do parceiro)
  → vira 1 objeto em `webapp/lib/partner-posts.ts`
  → publica em `/blog/indicacoes/<slug>/`
  → fluxo completo no `../CLAUDE.md` (seção "Indicações de Parceiros")

- **Post próprio do ETT** (conteúdo original nosso)
  → vira `webapp/app/blog/<slug>/page.tsx`
  → ver os posts existentes (`como-destravar-conversacao-em-ingles`, etc.) como modelo

> **Importante (parceiros):** nunca copiar o texto integral do parceiro. O resumo
> publicado tem que ser conteúdo ORIGINAL do ETT (curadoria/resenha); o leitor termina
> a leitura no site do parceiro.

## Publicar

Depois de transformar o rascunho em página, build + deploy a partir da raiz:

```bash
./deploy.sh "feat(blog): <título curto>"
```

…e disparar o **pull manual no `hpanel.hostinger.com`** (produção só atualiza depois disso).
