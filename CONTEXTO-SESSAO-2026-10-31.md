# Contexto da sessão — 2026-10-31

Handoff da sessão de **2026-10-31**, quatro dias depois do lançamento no DSSBR. Foram dois temas: **(1) sair do modo
lançamento** e **(2) reposicionar o site: o ETT passa a ser apresentado como plataforma de prática, não como curso**.

**Leia este arquivo primeiro**, porque é o mais novo. O plano detalhado, com auditoria, fases e decisões, está em
**`PLANO-REPOSICIONAMENTO-PLATAFORMA-2026-10-31.md`**. O anterior é `CONTEXTO-SESSAO-2026-10-21.md`.

---

## Commits (todos em `origin/main`, no ar e conferidos)

| SHA | O quê |
|---|---|
| `9ce9301` | Fim do modo lançamento: saem `HeroLancamento`, `HeroHome`, `LancamentoDSSBR`, `LancamentoChamadas`, `lib/lancamento.ts`, a metadata OG da home e o CTA do menu. Publicado sozinho, antes do resto. |
| `4f6c768` | Fontes únicas novas: `lib/ferramentas.ts`, `lib/parceiros.ts`, `lib/imersoes.ts` (+ `lib/useImersoes.ts`) e o plano. |
| `fb52b2e` | Home nova (ver §2). |
| `c8e7858` | `/imersoes/` e as 3 subpáginas viram vitrine da Cherry Top. |
| `c28c751` | `/detalhes/` reescrito. |
| `b86e256` | Planos: vocabulário novo na FAQ de cobrança e nos prêmios. |
| `62dc124` | Varredura global: metadata, JSON-LD, menu, rodapé, agenda, `/curitiba/`, `/online/`, `/conversacao/`, `/ff/` e o texto de chamada dos posts do blog. |
| `005a800` | Docs: `CLAUDE.md` e o status do plano. |
| `dfc9c9a` | Commit do `./deploy.sh` que publicou tudo (19:09 UTC). |
| (este) | Este handoff. |

O trabalho foi feito no branch `reposicionamento-plataforma`, entrou no `main` por fast-forward e saiu num deploy só.
**O `./deploy.sh` foi rodado pelo próprio Alessandro** (`! ./deploy.sh ...`), porque o modo automático bloqueia deploy
em produção vindo do Claude. Nas próximas sessões, o deploy segue o mesmo caminho: propor o comando pra ele rodar ou
pedir que libere a permissão.

## 1. O pedido

O Alessandro colou um briefing longo ("PROJETO: Reposicionamento e revisão completa do site ETT"). O ponto central era
que **o público lia o ETT como curso de inglês**. Posicionamento novo: *"ETT — Tecnologia, conversação e parceiros para
você praticar mais inglês."* **O briefing chegou cortado no meio da seção 12** (perfil "Grupos de conversação"). Depois
ele perguntou "que briefing é esse?" e mandou executar o que havia. **Não existe seção 13+ a esperar.**

Ele pediu um plano antes de executar e pediu que as dúvidas viessem em perguntas interativas.

## 2. Decisões do Alessandro (31/10)

| Tema | Decisão |
|---|---|
| Ferramentas que não existem no Player (Diário, AI Prompt, Sistema de Recomendação, GameZone, Técnica dos Pontinhos) | Linha **"Em construção"**, só com o nome |
| Imersões | **BH 18–22/11 e Flórida jan/fev 2027 confirmadas**. Curitiba e BH set/out vão pro histórico |
| Taxa de pré-inscrição, inscrição e condições das imersões | **Da Cherry Top**. O ETT só encaminha o interesse |
| Contato de escolas/professores/grupos | E-mail `binhara@azuris.com.br` |
| Categorias de parceiro | Ensino: BeeTools · Imersão: Cherry Top · Conteúdo: Aprendendo Inglês, Fórmula Fluente · Carreira: Coders · Institucional: IEP, DSSBR & GUBigData. **UTFPR, Hard Rock e Habitat saem** |
| EN/ES | **Rodada separada**, ainda não feita |
| Lançamento | "Já lançamos, pode remover", publicado à parte |

## 3. O que mudou

- **Home:**
  - Hero com 3 CTAs e a tela do ETT Player.
  - `TresPilares`, com o aviso "complementares, não etapas".
  - Catálogo real do Player, com status: 10 disponíveis, Voice Agent Lab como POC e ShadowDaily "em breve".
  - Encontros "Venha conversar".
  - Parceiros com "Oferecido por" × "Apoio do ETT".
  - `ComoFunciona`, e grátis × pago em 4 blocos (os 4 cartões continuam).
  - FAQ curta nova, com "O ETT é um curso?".
  - `ParaEducadores`.
- **Planos:** a adesão se apresenta como **"Ativação acompanhada"**, mas slug, checkout e preço não mudaram. As 2 sessões de 1h são **orientação de uso, não aula particular**. As trilhas são "modalidade de acesso às ferramentas". **O encontro saiu da lista de benefícios pagos.**
- **Imersões:**
  - A vitrine mostra quem oferece cada imersão e o que o ETT faz.
  - Atual × encerrada é calculado no navegador. Nas subpáginas, a turma vira "Encerrada" sozinha pelo campo `fim` (ISO).
  - Bloco "antes, durante e depois" só com ferramentas disponíveis.
  - FAQ única para a página e o JSON-LD.
  - Saíram "ETT × Cherry Top", "10× mais rápido", "40+ anos" e "vagas extremamente limitadas".
- **`/detalhes/`:**
  - Título "Como o ETT ajuda você a acelerar sua prática".
  - O nome "Programa de Aceleração" ficou, mas contextualizado.
  - 300h, 3.000 palavras e 10 palavras/dia viraram **metas de referência com aviso**.
  - Saíram "fluência em 10 meses", "salário 5x" e a gamificação inexistente.
- **Global:**
  - A descrição do site passa a ser a da plataforma.
  - Saiu do JSON-LD um "Certificado de Inglês Funcional" que não existe.
  - O item "O programa" do menu virou "Como funciona".
  - Na agenda, em `/curitiba/` e em `/online/`, ficou só o IEP Talks. O IEP era chamado de "Instituto de Ensino e Pesquisa"; corrigido.

## 4. Verificação

- typecheck e build ok;
- auditoria de contraste nas 33 rotas = baseline (só os numerais decorativos e o WhatsApp). O `opacity-60` da turma encerrada derrubava o AA e foi trocado por `bg-surface-alt`;
- screenshots de desktop e de 390px conferidos localmente;
- produção depois do deploy: 14 rotas em 200, textos novos presentes e antigos ausentes, e `/imersoes/` renderizada no navegador mostra só BH nov e a Flórida, com Curitiba em "Turmas encerradas".

---

# Pendências

## Desta sessão

1. **EN/ES** (`/en/`, `/es/`): replicar o posicionamento e tirar depoimentos fictícios, Google Form e preços velhos.
2. **Anos de experiência da Cherry Top**: o site dizia "30+" num lugar e "40+" em outro. O número foi tirado até o Alessandro confirmar.
3. **Fora do escopo, de propósito:**
   - posts publicados do blog e Termos/Política, que ainda citam UTFPR/Hard Rock/Habitat e "fluência em N meses";
   - `components/Hero.tsx` (código morto, com 300h/3.000);
   - eventos passados em `lib/agenda-events.ts`.
4. A seção de educadores não tem oferta B2B por trás: é só convite pra conversar por e-mail.

## Herdadas (sem mudança)

- SSL de `.com`/`.lat` ainda quebrado, o que bloqueia o GSC (não reconferido nesta sessão);
- `/planos/` responde 403;
- quem responde os leads;
- 4 leads de teste na RD;
- kits antigos de `/divulgacao/` na identidade antiga;
- indicação semanal do parceiro parada. O elegível mais novo é *"O Que a IA Faz Melhor do Que um Professor Humano"* (25/10, Rubens Queiroz).

---

Última revisão: **2026-10-31**.
