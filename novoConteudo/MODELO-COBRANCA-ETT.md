# Modelo de cobrança ETT — documento consolidado

**Versão 1.0 — 2026-07-31.** Decisões tomadas com o Alessandro nesta data.
Nada disso está no site ainda: este documento é a especificação do que vai ser publicado.

---

## 1. Decisões fechadas

| # | Decisão |
|---|---|
| 1 | **Adesão de R$ 70 — cobrança única.** Não vira mensalidade |
| 2 | **Os R$ 70 incluem os 30 primeiros dias de plataforma.** O mensal só começa no dia 31 |
| 3 | **Porta única: todo mundo paga a adesão**, inclusive quem vai pra Aceleração gratuita |
| 4 | **Mensal (Trilha Livre) = R$ 39/mês** |
| 5 | **Os 2 encontros da adesão são individuais (1:1)** |
| 6 | **O one-to-one de 30 min do teste gratuito também é individual** |
| 7 | **Teste gratuito = plataforma completa por 30 dias**, sem cartão |
| 8 | **No dia 31 do teste as ferramentas fecham**; diagnóstico e plano ficam em modo leitura |
| 9 | **Sala de segunda 20h continua aberta a qualquer pessoa, sem cadastro.** De membro são: lugar garantido, turmas por nível e presenciais |
| 10 | **Nada de preço simbólico (R$ 1 / R$ 15).** A Aceleração fica em R$ 0, mas sempre publicada com âncora (~~R$ 39~~) e com o preço em outra moeda: *"custa 1 hora por dia"* |
| 11 | **A meta é medida em dias válidos, não em horas de relógio.** 20 dias válidos no mês |
| 12 | **Prêmio todo mês pra quem bate a meta.** Mês 1 é a apostila impressa personalizada; os demais vêm de parceiros ou são digitais |
| 13 | **A Aceleração é investimento de marketing**, não centro de receita. A receita recorrente vem da Trilha Livre |
| 14 | **Os valores vão publicados no site.** Preço escondido é traço de infoproduto e é o que gera a enxurrada de "quanto custa?" no WhatsApp |
| 15 | **Gateway próprio** (do Alessandro). Os dois links — adesão e assinatura — ainda vão ser fornecidos |
| 16 | **A Trilha de Dedicação sai do site.** Quem já está nela fica isento da adesão |
| 17 | **Nota fiscal pela Azuris** |
| 18 | **"Presenciais" fica na copy** — as datas reais vão ser cadastradas em `agenda-events.ts` |
| 19 | **Aceleração sem limite de vagas por enquanto** ⚠️ ver o risco de agenda na seção 7 |
| 20 | **Apostila impressa: R$ 28 de custo (frete à parte), R$ 50 de preço de venda** |
| 21 | **Presencial: IEP Talks, todo sábado, 10h–12h**, no IEP em Curitiba — recorrente, já implementado |
| 22 | **Provisionamento da conta no Player é manual** no começo, sem webhook |

Ainda em aberto: seção 12.

---

## 2. O modelo em uma frase

> **A sala de segunda é aberta pra qualquer pessoa, sem cadastro e sem pagar — isso não muda.**
> Quem quer só olhar por dentro: 30 dias de plataforma, de graça, sem cartão.
> Quem quer entrar de verdade: **R$ 70, uma vez** — duas horas de mentoria individual, seu plano
> montado e os 30 primeiros dias inclusos.
> Depois disso você escolhe: **mantém a rotina e não paga mais nada**, ou **paga R$ 39 por mês**
> e usa no seu ritmo.

É uma escada, não quatro produtos concorrentes. Essa é a diferença central em relação à seção que
está no ar hoje (três cartões lado a lado, todos no mesmo nível).

```
CONHECER            ADESÃO              ESCOLHA (dia 31)          REVALIDAÇÃO MENSAL
R$ 0 · 30 dias  →   R$ 70 · uma vez  →  ┌─ Aceleração · R$ 0  →   20 dias válidos/mês
sem cartão          2×1h individuais    │  (~R$ 39 riscado)       ├ bateu → renova + prêmio
vídeos + 1:1 30min  + 30 dias inclusos  │  1h/dia, 5x/semana      └ não bateu → recuperação,
                                        │                            depois convite ao mensal
                                        └─ Livre · R$ 39/mês  →   sem meta, cancela quando quiser
```

---

## 3. Os degraus

### 3.1 Conhecer · R$ 0 · 30 dias · sem cartão

Pra quem não vai decidir nada antes de ver por dentro.

| | |
|---|---|
| Como entra | Formulário completo (justificado como insumo do diagnóstico, não como filtro de vendas) |
| O que ganha | Plataforma **completa** por 30 dias, diagnóstico **ETT FluenteLevel**, **vídeos de demonstração** das ferramentas e **30 min de apresentação individual** |
| Encontros | A sala de segunda, que é aberta pra qualquer um de todo jeito |
| No dia 31 | Ferramentas fecham. **Diagnóstico e plano continuam visíveis em modo leitura.** Encontros continuam livres |

Custo operacional: 30 min de agenda por lead **não pago**. É o ponto a monitorar — se o volume
crescer, a saída é sessão de demonstração em grupo, mantendo o 1:1 sob demanda.

### 3.2 Adesão · R$ 70 · cobrança única

Único ponto pago obrigatório. Todo mundo passa por aqui, inclusive quem vai pra Aceleração.

- **2 encontros individuais de 1 hora** (seção 4)
- Plano de estudos montado no encontro, a partir do diagnóstico
- Conta configurada no ETT Player e acesso à sala do ETT Speak
- **Os 30 primeiros dias de plataforma inclusos**

Como o preço se explica, sem adjetivo: **R$ 70 por duas horas de mentoria individual é R$ 35 a
hora.** É aritmética verificável, não promessa.

Quem faz o teste antes e depois adere acumula 60 dias no total (30 do teste + 30 da adesão). É
intencional.

### 3.3 Trilha de Aceleração · R$ 0 · por dedicação

| | |
|---|---|
| Acesso | Igual ao da Livre — Player completo, plano, acompanhamento |
| Contrapartida | Presença nos encontros + **20 dias válidos por mês** (≈1h/dia, 5x por semana) |
| Medição | No próprio Player, por dia válido (seção 5) |
| Renovação | **Mensal.** Bateu, renova a gratuidade e ganha o prêmio do mês |
| Se não bater | Mês de recuperação; depois, convite (nunca cobrança automática) ao mensal |
| Pré-requisito | A adesão de R$ 70 |

**Nunca publicar "R$ 0" sozinho.** Grátis sem referência lê-se como "sem valor"; grátis ao lado de
um preço real lê-se como bolsa. Sempre: ~~R$ 39/mês~~ · **R$ 0** · *custa 1 hora por dia*.

### 3.4 Trilha Livre · R$ 39/mês

| | |
|---|---|
| Acesso | Player completo (10 ferramentas), plano personalizado, acompanhamento, turmas por nível |
| Compromisso | Nenhum |
| Cancelamento | Quando quiser, direto no gateway |
| Pré-requisito | A adesão de R$ 70 |
| Anual (opcional) | R$ 390 |

### 3.5 Os encontros — o que é aberto e o que é de membro

| Encontro | Quando | Quem entra |
|---|---|---|
| **Encontro Online ETT** | Segunda, 20h–21h30, sala do ETT Speak | **Aberto a qualquer pessoa**, sem cadastro e sem pagar. Não entra em plano nenhum |
| **IEP Talks** (presencial) | **Todo sábado, 10h–12h**, no IEP — Instituto de Engenharia do Paraná, Curitiba | Presencial semanal. Também é a ocasião de **entregar as apostilas em mãos** (seção 6) |
| **Turmas por nível** | A definir | De membro |

Implementado em `webapp/lib/agenda-events.ts` como **recorrente gerado no navegador**
(`encontrosPresenciaisRecorrentes`), pelo mesmo motivo das segundas: data escrita à mão congela a
agenda — foi exatamente o bug corrigido em 27/07.

✅ **Nome confirmado: IEP = Instituto de Engenharia do Paraná** (31/07). O cadastro de maio dizia
"Instituto de Ensino e Pesquisa" e estava errado desde então — corrigido.

---

## 4. Os 2 encontros da adesão, desenhados sobre as ferramentas

Espaçados de **7 dias**, pro segundo encontro debugar atrito real em vez de ser teoria.

**Encontro 1 (1h) — Diagnóstico e plano**

| Tempo | Ferramenta | Saída |
|---|---|---|
| 15 min | **ETT FluenteLevel** | Nível e mapa de lacunas de vocabulário |
| 15 min | **Sistema de Recomendação** | Plano de estudos gerado do diagnóstico |
| 15 min | **Técnica dos Pontinhos** | Rotina diária configurada (10–20 palavras/dia) |
| 15 min | Metodologia | Onde entram os encontros, o Speak e a meta de vocabulário |

**Encontro 2 (1h) — As ferramentas na prática**

| Tempo | Ferramenta | Saída |
|---|---|---|
| 10 min | Revisão da 1ª semana | O que travou de verdade |
| 15 min | **SubtitleSeries** + **AudioBook** | Série e livro escolhidos pro nível |
| 10 min | **AudioHub** + **Diário ETT** | Rotina de escuta e de produção |
| 15 min | **ETT AI Prompt** | Primeiro prompt de simulação do cenário real da pessoa (entrevista, daily, cliente) |
| 10 min | **GameZone** + acompanhamento | Como o progresso passa a ser medido |

---

## 5. A meta: dia válido, não hora de relógio

**"1 hora por dia" é o que se comunica. "Dia válido" é o que se mede.**

Tempo de tela é trivial de burlar (aba aberta) e impossível de auditar sem discussão. O dia conta
quando as tarefas do dia foram concluídas — por exemplo: as palavras da Técnica dos Pontinhos +
o bloco de escuta + o diário. O Player já tem todos esses eventos.

- **Meta do mês: 20 dias válidos.**
- O Player mostra o contador o tempo todo: *"Meta do mês: 20 dias válidos. Você está em 14."*
- Um número subindo motiva muito mais que um cronômetro, e nunca gera discussão sobre se a hora contou.

### O momento da perda — o ponto mais delicado do modelo

Com adesão estimada em ~10% (seção 7), **a maioria das pessoas passa por aqui.** Não é fluxo de
exceção, é fluxo principal. Regras:

1. **Aviso antes, nunca surpresa depois.** Dia 20: *"faltam 6 dias válidos pra revalidar."*
2. **Mês de recuperação.** Fez 15 de 20? Mantém a bolsa com aviso e recupera no mês seguinte.
3. **Nunca cobrança automática.** A pessoa escolhe ativamente assinar. Cobrar sozinho após meta
   perdida é ruim comercialmente e problemático no CDC.
4. **Linguagem de pausa, não de punição.** *"Sua bolsa está em pausa"*, com a porta de volta
   sempre aberta: bateu de novo, volta a ser gratuito.
5. Perder a bolsa **nunca** tira o acesso à sala de segunda.

---

## 6. Escada de prêmios

Prêmio mensal existe porque recompensa única motiva uma única vez. E a variedade importa: prêmio
previsível vira salário e para de emocionar por volta do terceiro mês.

**Valores da apostila:** custa **R$ 28 de impressão, sem frete**, e é vendida a **R$ 50**. Os dois
números importam — o de custo entra na economia do modelo (seção 7), e o de venda é a **âncora** que
dá tamanho ao prêmio na copy: *"sua apostila personalizada impressa, R$ 50"*. Prêmio sem preço ao
lado não é lido como prêmio.

Como a apostila tem preço de venda, ela também pode ser **vendida avulsa a quem está na Trilha
Livre** — o que a torna, ao mesmo tempo, o prêmio da Aceleração e um produto com margem.

### Entrega: em mãos no IEP Talks sempre que der

Com o presencial de sábado (10h–12h, seção 3.5), a entrega padrão passa a ser **em mãos, no IEP
Talks**. Dois ganhos:

1. **Zera o frete** — a variável mais imprevisível do custo (Correios varia por destino e peso).
2. **Vira cerimônia.** Entregar a apostila na frente do grupo é incomparavelmente mais motivador
   que um pacote chegando em casa, e é o momento fotográfico que gera a prova social. Quem ainda
   não bateu a meta assiste alguém receber — isso faz mais pela adesão à rotina que qualquer e-mail.

Frete só pra quem é de fora de Curitiba ou não frequenta o presencial. **Isso muda o custo médio
por prêmio pra baixo** e faz o número final depender da proporção presencial/remoto.

| Marco | Prêmio | Custo pro ETT |
|---|---|---|
| **Mês 1** | **Apostila impressa personalizada** (R$ 50), enviada pra casa | **R$ 28** |
| **Mês 2** | Apostila regenerada em PDF, com as lacunas atualizadas + selo de 2 meses | Zero |
| **Mês 3** | 1h de aula particular (IEP) ou revisão de CV/LinkedIn em inglês (Coders) | Zero — parceiro |
| **Meses 4–5** | Apostila regenerada + destaque na comunidade | Zero |
| **Mês 6** | Apostila impressa v2 + 4h de aula particular ou desconto em imersão (Cherry Top) | Impressão + frete |
| **Todo mês** | Selo de sequência no Player, meses acumulados ao lado do nome | Zero |

A **apostila regenerada** sai do Material Personalizado (ferramenta própria), muda todo mês porque
reflete o vocabulário real da pessoa, e é gratuita em PDF. Impressa só nos marcos.

### Mapa de prêmios por parceiro

| Parceiro | Prêmio natural | Por que ele topa |
|---|---|---|
| **IEP** | 1h a 4h de aula particular | Aluno já qualificado e já estudando |
| **Coders** | Revisão de CV/LinkedIn em inglês, simulação de entrevista técnica | É o produto deles, e o público do ETT é o alvo deles |
| **Cherry Top** | Vaga ou desconto em imersão, Business Meal | Enche imersão com quem já treina |
| **BeeTools** | Acesso a módulo do curso base | Custo marginal zero |
| **ETT** | Apostila personalizada, 1:1 extra, destaque na comunidade | Só impressão e frete |

### Quatro regras pra isso não virar dívida

1. **Só publicar prêmio já contratado.** "Todo mês tem prêmio" no site é promessa que se acumula:
   com 20 alunos no mês 6 são 20 prêmios/mês. Publicar **calendário rolante de 3 meses** com o que
   já está fechado — isso é fato, não promessa.
   ⚠️ Hoje **nenhum acordo de parceiro está definido nem pra divulgação** (pendência registrada no
   backlog de kits). Prêmio de parceiro no site só depois de acordo por escrito.
2. **Teto de custo em dinheiro:** o único prêmio pago pelo ETT é a apostila impressa, nos meses 1 e 6.
3. **Prêmio de parceiro nunca pode virar pitch.** Entrega limpa, sem oferta obrigatória. Prêmio que
   termina em proposta comercial queima confiança que custou meses.
4. **Entrega por voucher no Player**, não por coordenação manual. O parceiro fornece N códigos/mês;
   a meta batida destrava o código; a pessoa agenda sozinha.

### A apostila impressa não é custo — é conteúdo

A pessoa recebe em casa um pacote com o nome dela, feito a partir do vocabulário dela. Isso é
fotografável. **Fazer a embalagem boa de fotografar e pedir a foto na entrega.** Cada apostila
enviada volta como prova social — que é exatamente o que falta no site (fotos reais, depoimentos
verdadeiros, números de comunidade). Assim os ~R$ 52 deixam de ser prêmio e viram produção de
conteúdo mais barata que qualquer anúncio.

---

## 7. Economia do modelo

**A Aceleração é investimento de marketing, não centro de receita.** Premissa de planejamento:
**~10% cumprem a meta** no regime estável (o mês 1 tende a ser melhor, porque a pessoa acabou de
sair de 2h de mentoria; a queda vem por volta do mês 3).

Modelo ilustrativo com **100 adesões**:

| | 10% cumprem | 30% cumprem no mês 1 |
|---|---|---|
| Receita de adesão | R$ 7.000 | R$ 7.000 |
| Apostilas impressas (R$ 28 cada) | 10 × R$ 28 = R$ 280 | 30 × R$ 28 = R$ 840 |
| Prêmios de parceiro | R$ 0 | R$ 0 |
| **Sobra** | **R$ 6.720** | **R$ 6.160** |

Ou seja: o prêmio consome **4% a 12% da receita de adesão** e entrega um objeto de R$ 50 na casa da
pessoa. É a linha mais barata do modelo — e a única que volta como conteúdo (foto da apostila).

### O custo real não é o prêmio — é a agenda

100 adesões = **200 horas de 1:1**. Esse é o teto verdadeiro.

R$ 70 ÷ 2h = **R$ 35/hora**. Contratando professor pra fazer o onboarding, os R$ 70 vão inteiros no
custo da hora e não sobra nem pra apostila. **A adesão inteira é subsídio**, não só os prêmios —
coerente com tratá-la como investimento, desde que consciente.

- Limite prático: **15–20 adesões por mês** com uma pessoa atendendo.
- Escada de saída quando apertar: **turma pequena no onboarding** (mesmo roteiro, até 6 pessoas),
  não contratar 1:1.
**Decisão de 31/07: sem limite de vagas por enquanto.** ⚠️ Risco assumido: se vierem 40 adesões num
mês, são 80 horas de 1:1 — e aí ou a fila atrasa, ou a promessa dos 2 encontros quebra. **Gatilho
pra revisar:** ao passar de ~15 adesões num mês, decidir entre abrir turma de onboarding (até 6
pessoas, mesmo roteiro) ou publicar vagas por turma. A frase honesta, quando for a hora: *"a
Aceleração tem N vagas por turma porque cada uma é um acompanhamento individual"* — fato, não
escassez fabricada.

### O caminho da falha é o fluxo principal

Com 10% cumprindo, **90% passam pelo "não bateu a meta"** — e é dali que sai toda a receita
recorrente. O convite ao mensal de R$ 39 não é opção lateral: **é o negócio.**

Numa turma de 100: 90 pessoas chegam nesse momento. A 15% de aceitação são ~R$ 530/mês
recorrentes; a 3%, R$ 105. Mesma turma, mesmo custo, um terço do resultado — e a diferença é
inteiramente redação e timing.

**Consequência prática:** a sequência de e-mails do dia 25 ao dia 35 merece tanto cuidado de design
quanto a home.

---

## 8. Copy da seção de preços (`#precos`)

Substitui o conteúdo de `webapp/components/Precos.tsx`. Respeita as regras de copy de 26/07: fato
no lugar de promessa, nenhuma promessa de resultado, nenhuma escassez fabricada.

### Cabeçalho

> **Etiqueta:** Quanto custa
>
> # Uma entrada de R$ 70. Depois, você escolhe.
>
> O encontro de segunda é aberto pra qualquer pessoa, sem cadastro e sem pagar — isso não muda.
> O que tem preço é a plataforma e as horas de mentoria individual.

### Aviso a quem já está dentro (substitui o box "fase de testes")

> **Quem já está numa trilha gratuita não passa a pagar.** Se você se cadastrou antes desta página
> mudar, sua adesão está isenta. Não existe cobrança retroativa.

### Bloco 1 — a decisão (dois cartões, não quatro)

**Cartão A — Quero conhecer** · `R$ 0 · 30 dias · sem cartão`
*Pra quem não vai decidir nada antes de ver por dentro.*

- Plataforma completa por 30 dias
- Diagnóstico ETT FluenteLevel
- Vídeos de demonstração das ferramentas
- 30 minutos de apresentação, individuais

> No dia 31 as ferramentas fecham. Seu diagnóstico e seu plano continuam visíveis, e os encontros
> continuam livres.

**CTA:** `Começar o teste` → formulário

**Cartão B — Quero entrar** *(destaque)* · `R$ 70 · uma vez`
*Pra quem já decidiu e quer começar com o plano montado.*

- 2 encontros de 1 hora, individuais
- Seu plano de estudos montado no encontro
- Conta no ETT Player e acesso à sala do ETT Speak
- Os 30 primeiros dias de plataforma já inclusos

> São duas horas de mentoria individual. Cobrado uma vez — não vira mensalidade.

**CTA:** `Fazer minha adesão` → checkout

### Bloco 2 — "E depois dos 30 dias?" (faixa, subordinada)

> Passado o primeiro mês, você escolhe como continuar. Nos dois casos você mantém as ferramentas,
> as turmas por nível e os presenciais.

**Trilha de Aceleração** — ~~R$ 39/mês~~ · **R$ 0**
**Custa 1 hora por dia.**
Enquanto você mantiver presença nos encontros e 20 dias válidos por mês, não paga mensalidade. A
rotina é medida no próprio Player — não é na confiança. **Cada mês de meta batida tem um prêmio;
no primeiro, sua apostila personalizada impressa (R$ 50), enviada pra sua casa.**
Se parar, sua bolsa entra em pausa e você escolhe o mensal. Sem multa e sem cobrança retroativa.

**Trilha Livre** — **R$ 39/mês**
Sem rotina obrigatória. Ninguém cobra nada de você. Cancela quando quiser.

### Bloco 3 — a objeção, respondida de frente

> **"Por que R$ 70 se o encontro de segunda é de graça?"**
>
> O encontro de segunda continua de graça — pra você, pra quem chegar hoje e pra quem nunca vai
> pagar nada. Os R$ 70 pagam duas horas da agenda de uma pessoa sentada com você montando seu
> plano, mais a sua conta na plataforma. É isso, e só isso.

### Fechamento

> **Não quer nada disso?** Aparecer num encontro pra ver como é continua livre pra qualquer pessoa,
> sem cadastro e sem pagar. Os planos existem pra quem quer as ferramentas e o acompanhamento entre
> um encontro e outro.

### ✅ Trava resolvida

O Bloco 2 cita "presenciais" — e agora tem lastro: o **IEP Talks de sábado, 10h–12h**, já está
publicado na `/agenda/` como recorrente. A copy pode citar presencial com data verificável, que era
a condição.

---

## 9. Resposta pronta pro WhatsApp

Muita gente chega pelo WhatsApp perguntando preço. Com os valores publicados, a resposta vira
copiar e colar — e o link faz o resto:

> Oi! Os encontros de segunda, 20h, são abertos — qualquer pessoa entra, sem cadastro e sem pagar.
>
> Se você quiser as ferramentas e o acompanhamento, funciona assim:
> • **Testar antes:** 30 dias com a plataforma completa, de graça, sem cartão. Inclui um diagnóstico
>   do seu nível e 30 min comigo pra te apresentar tudo.
> • **Entrar:** R$ 70, uma vez só. São dois encontros de 1 hora individuais comigo, onde a gente monta
>   o seu plano, mais os 30 primeiros dias de plataforma inclusos.
> • **Depois:** ou você mantém a rotina de 1 hora por dia e não paga mais nada, ou assina por R$ 39/mês
>   e usa no seu ritmo.
>
> Está tudo detalhado aqui: englishtalktime.com.br/planos/

---

## 10. Onde cada coisa mora no site

- **Home (`#precos`)**: Bloco 1 completo + uma linha do Bloco 2 + link "ver os planos em detalhe".
- **Página nova `/planos/`**: os três blocos + a mecânica da meta e dos prêmios + FAQ de cobrança
  (cancelamento, reembolso, nota fiscal, o que acontece no dia 31) + botões de checkout.
- **Sequência de e-mails (RD) do dia 25 ao 35**: o fluxo por onde passam 90% das pessoas. Tanto
  cuidado quanto a home.

---

## 11. O que precisa existir pra cobrar

| Item | Estado | Nota |
|---|---|---|
| Link de checkout da adesão (R$ 70) | ❌ Alessandro vai fornecer | Gateway próprio. Export estático não tem backend — tem que ser link externo |
| Link de assinatura (R$ 39/mês) | ❌ Alessandro vai fornecer | Com recorrência e cancelamento pelo próprio gateway |
| Campos `cf_trilha_ett` e `cf_faixa_plano_mensal` na RD | ❌ pendente desde 26/07 | Sem eles, as respostas estão sendo descartadas em silêncio |
| Contador de dias válidos no Player | ❌ | É o que torna a meta auditável |
| Destravamento de prêmio por voucher no Player | ❌ | Evita logística manual de prêmio |
| Provisionamento da conta pós-pagamento | ✅ **manual no começo** | Sem webhook. Vira gargalo se passar de ~20 adesões/mês — automatizar depois |
| Vídeos de demonstração | ❌ | 5 pra começar: FluenteLevel → Pontinhos → SubtitleSeries → AI Prompt → ETT Speak |
| Apostila impressa: custo e frete | ✅ **R$ 28** de impressão (frete à parte), **R$ 50** de venda | Entrega padrão em mãos no IEP Talks, o que zera o frete |
| Datas dos presenciais na agenda | ✅ **IEP Talks, sábado 10h–12h** | Implementado como recorrente em `agenda-events.ts` |
| Acordos com IEP / Coders / Cherry Top / BeeTools | ❌ | Por escrito antes de publicar qualquer prêmio |
| Termos de uso + política de privacidade | 🟡 falam de programa gratuito | Precisam cobrir plano pago, recorrência e reembolso |
| Direito de arrependimento (CDC art. 49) | ❌ | 7 dias em compra online, tem que estar escrito |
| Nota fiscal | ✅ **Azuris** | Razão social e CNPJ precisam entrar nos Termos de Uso |

---

## 12. Perguntas em aberto

Fechadas em 31/07: gateway (próprio), Dedicação (sai), CNPJ (Azuris), presenciais (ficam na copy),
vagas (sem limite), apostila (R$ 28 de custo / R$ 50 de venda).

Também fechadas: presencial (IEP Talks, sábado 10h–12h, já implementado), frete (não incluso nos
R$ 28), provisionamento (manual no começo).

Nome do IEP e início da série do IEP Talks confirmados em 31/07.

Falta apenas:

1. **As duas URLs do checkout** — adesão de R$ 70 e assinatura de R$ 39/mês.

---

## 13. Migração de quem já está dentro

A seção de preços promete hoje, no ar, que não há cobrança retroativa. Honrar:

1. Levantar quem já se cadastrou nas trilhas gratuitas (base RD).
2. **Isentar da adesão de R$ 70** quem entrou antes da virada — comunicar como decisão, não favor.
3. Quem está na "Dedicação" escolhe: vai pra Aceleração assumindo a meta, ou segue só nos encontros.
4. E-mail de comunicação **antes** de a página mudar, não depois.

---

## 14. Métricas do investimento

Se a Aceleração é marketing, ela precisa de retorno medido. Cinco números por turma de entrada:

1. % que bate a meta no mês 1, 3 e 6
2. Custo por aluno cumpridor (impressão + frete + horas de mentoria)
3. **Conversão dos que falham → R$ 39** ← o número mais importante do modelo
4. Provas sociais geradas por mês (fotos da apostila, depoimentos, casos medidos no Player)
5. Adesões por mês vs. capacidade real de agenda

O que a Aceleração precisa produzir, concretamente — e que falta no site há meses: fotos reais de
encontro, depoimentos verdadeiros (os antigos eram fictícios e foram deletados), números reais de
comunidade, e casos de progresso medidos pelo próprio Player.

---

Última revisão: **2026-07-31**.
