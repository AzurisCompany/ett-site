# Contexto da sessão — 2026-11-17

**Este é o handoff mais novo — leia primeiro.** O anterior é `CONTEXTO-SESSAO-2026-11-09-PARTE2.md`.

A sessão não mexeu no site. Teve duas frentes:

1. **Re-leitura do projeto:** produção conferida, sem novidades no ar.
2. **Termo de Parceria do Professor Autônomo:** nasceu a pasta `contratos/`, com minuta, decisões comerciais, versão em Word com a marca do ETT, revisão jurídica e as regras de acesso dos alunos. Chegou à **v3**.

> ⚠️ **`contratos/` está no `.gitignore` e nunca pode ser comitada.** A raiz do repo é o `public_html` do
> Hostinger: tudo que for comitado ali vira URL pública, e os termos preenchidos levam CPF e chave PIX.
> Pelo mesmo motivo, **este handoff não traz os detalhes do termo**: percentuais, riscos e decisões estão só
> em `contratos/`. Este arquivo vai ao ar como os outros handoffs da raiz.

---

## 1. Re-leitura (17/11)

- **Repositório:** working tree limpa no início. Último commit do site: `d32c3a9` (10/11, vídeo institucional no topo).
- **Produção:** `last-modified` de 10/11 às 13:11 UTC.
  - 10 rotas em 200, além dos 3 checkouts e dos MP4 do vídeo.
  - A 404 em português funciona.
  - `/planos/` continua respondendo **403**.
- 🔴 **SSL de `englishtalktime.com` e `.lat`:** continua sem resposta (cerca de 6 meses).
- **Feed do parceiro:** o elegível mais novo é *"O Pilar Invisível da Fluência: por que a motivação vem antes do método"* (16/11, Dicas práticas). A indicação semanal segue parada.
- **Encontros:** voltaram em 16/11 (online) e 21/11 (IEP Talks). `AnuncioReinicio.tsx` deve ser apagado depois de 30/11.

## 2. Termo de Parceria — Professor Autônomo

### Onde está

| Item | Caminho |
|---|---|
| Índice e convenções | `contratos/README.md` |
| **Versão atual (Word, para enviar)** | `contratos/parceiras/TERMO-PARCERIA-PROFESSOR-AUTONOMO-ETT-v3-2026-11-17.docx` |
| Parecer da revisão jurídica (+ adendo da v3) | `contratos/parceiras/PARECER-REVISAO-TERMO-PROFESSOR-2026-11-17.md` |
| Fonte do texto + gerador do Word | `contratos/parceiras/_gerador/termo.md` e `gen.js` |
| Versões superadas | `...-v1-2026-11-17.md`, `...-ETT-2026-11-17.docx` (v1), `...-v2-...docx` |
| Doc web (Claude Docs) | https://claude.ai/artifact/9b2qB3DvcenSwbp8LtyQEE (**parou na v1 + decisões**; não tem a revisão jurídica nem a v3) |

No Windows: `\\wsl.localhost\Ubuntu\home\binhara\ett\ett-site\contratos\parceiras\`.

### Como evoluiu

1. **v1:** minuta a partir da proposta do Alessandro. O ETT oferece leads, CRM, ferramentas, suporte, perfil no site e perfil de professor no Calendário. Em troca, o professor mantém uma agenda fixa de encontros. Há comissão nos dois sentidos, e horas-aula e mentoria ficam para um contrato de serviço separado.
2. **Decisões comerciais (D1–D9):** tomadas por perguntas interativas e registradas no termo e no parecer.
3. **Word com a identidade do ETT:**
   - marinho `#162B4E`, vermelho `#D72229`, cinza `#A8A9AC`;
   - logo **sem** o subtítulo "Programa de Aceleração de Inglês", gerado pelo `_gerador` a partir do SVG oficial;
   - a nota interna fica fora da versão para o professor.
4. **v2 — revisão jurídica:** 16 achados, com fundamento legal e correção de cada um no parecer (só em `contratos/`).
5. **v3 — regras de acesso** aos encontros e aos benefícios dos alunos indicados pelo professor. Detalhes no termo.

### Pendências do termo

- **Dados da Azuris:** razão social, CNPJ, endereço, representante e e-mails. Sem eles o termo não pode ser assinado.
- **Sede da Azuris:** define se o foro em Curitiba é válido (CPC, art. 63, §1º, redação da Lei 14.879/2024).
- **Forma de pagamento das comissões:** decisão aberta, ver o parecer. Validar com o contador.
- **Confirmar com o Alessandro** dois pontos de regra de acesso, listados no fim do parecer (adendo v3).
- **Antes do primeiro lead encaminhado:** opt-in não marcado no formulário RD e Política de Privacidade citando os professores parceiros.
- **Revisão final** por advogado inscrito na OAB.
- **Doc web:** levar a v2/v3 para o Claude Docs, se ele quiser manter a versão web.
- **Contradição com o site:** o site e o FAQ dizem que o encontro de segunda é aberto a qualquer pessoa, sem cadastro. O termo trata só dos encontros conduzidos por professor parceiro. Se a regra de "habilitados" valer também para o encontro de segunda, é preciso mudar a copy.

## 3. Mudanças no repositório

- **`.gitignore`:** ganhou `contratos/`, com um comentário explicando por quê.
- **`CLAUDE.md`:** parágrafo sobre `contratos/` em "Repository Layout".
- **Este handoff.**
- **Nada no `webapp/`:** nenhum deploy é necessário.

## Pendências herdadas (sem mudança)

Ver `CONTEXTO-SESSAO-2026-11-09-PARTE2.md` § Pendências:
- Termos e Política com o advogado;
- aviso de privacidade do Level Check ainda não comitado;
- aviso de gravação no Speak;
- Google Forms;
- arte nova do logo;
- desafio: métricas do Miguel;
- `AnuncioReinicio` depois de 30/11;
- Business School depois de 06/12;
- blog parado;
- `CheckoutDemo.tsx` morto;
- kit do convite com cores antigas;
- SSL de `.com`/`.lat`;
- `/planos/` 403;
- leads de teste na RD;
- direitos de conteúdo das ferramentas.

---

Última revisão: **2026-11-17**.
