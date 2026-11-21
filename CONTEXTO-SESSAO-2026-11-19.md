# Contexto da sessão — 2026-11-19

**Este é o handoff mais novo — leia primeiro.** O anterior é `CONTEXTO-SESSAO-2026-11-17.md`.

A sessão não mexeu no site (`webapp/`). Teve três frentes: re-leitura, uma pergunta sobre onde o site está publicado e a configuração do subdomínio **`crm.englishtalktime.com.br`**.

---

## 1. Re-leitura (19/11)

- **Repositório:** working tree limpa no início. Último commit: `41b0e44` (handoff de 17/11). Última mudança no site: `d32c3a9` (10/11, vídeo institucional no topo).
- **Produção:** `last-modified` de 10/11 às 13:11 UTC.
  - 10 rotas em 200 (agenda, desafio, 3 planos, ferramentas, imersões, Business School, blog, detalhes) e os 3 checkouts (`ativacao`, `assinatura`, `aceleracao`).
  - A 404 em português funciona.
  - `/planos/` continua respondendo **403**.
- 🔴 **SSL de `englishtalktime.com` e `.lat`:** continua sem resposta (cerca de 6 meses).
- **Feed do parceiro:** o elegível continua *"O Pilar Invisível da Fluência: por que a motivação vem antes do método"* (16/11, Dicas práticas).
- **Encontros:** IEP Talks volta no sábado 21/11. `AnuncioReinicio.tsx` sai depois de 30/11.

## 2. Onde o site está publicado

`https://englishtalktime.com.br`, no **Hostinger** (`public_html`), que puxa a raiz do `main` de `github.com/AzurisCompany/ett-site` com Auto Deployment. Não está na Vercel. `.com` e `.lat` estão no Namecheap só como redirect.

## 3. Subdomínio `crm.englishtalktime.com.br`

O app do CRM é o projeto Vercel **`ett-crm`** (time `alessandro-binharas-projects`). Não tem pasta local em `~/ett/` (o `ett-manager` é outro projeto). O domínio já estava aceito no projeto, e faltava o DNS.

**O que foi feito (pelo Alessandro, no hpanel do Hostinger):**

| Tipo | Nome | Valor | TTL |
|---|---|---|---|
| A | `crm` | `76.76.21.21` | 14400 |

**Conferido:**

- DNS público (Google e Cloudflare) responde `76.76.21.21`.
- Certificado Let's Encrypt emitido pela Vercel para `crm.englishtalktime.com.br`, válido até **17/02/2027** (a Vercel renova sozinha).
- `https://` → **200**, página *"English Talk Time — CRM"*. `http://` → **308** para o `https://`.
- O site principal não foi afetado.

**O que deu errado e por quê:** logo depois de criar o registro, o Chrome do Alessandro mostrou `DNS_PROBE_FINISHED_NXDOMAIN`. Era **cache negativo**: o nome foi consultado antes de o registro existir (inclusive pela minha checagem, que rodou antes), e o "não existe" fica guardado pelo TTL negativo do SOA do Hostinger, que é **600 s**. A solução é esperar uns 10 minutos, rodar `ipconfig /flushdns` e limpar `chrome://net-internals/#dns`, ou testar no 4G. Lição: **não consultar o subdomínio antes de o registro ser criado**, porque isso semeia o cache negativo.

**⚠️ Armadilha registrada no `CLAUDE.md` (seção "DNS e subdomínios"):** `vercel domains inspect englishtalktime.com.br` mostra *"This Domain is not configured properly"* e sugere `A englishtalktime.com.br 76.76.21.21` ou trocar os nameservers pra Vercel. **Não fazer nenhum dos dois**: isso tiraria do ar o site do Hostinger. O aviso é sobre o domínio raiz, e o subdomínio funciona.

**Pendente:**

- Confirmar que o `crm` abriu na máquina do Alessandro depois que o cache venceu.
- Quando o ETT Core for pra produção (`core.englishtalktime.com.br`, ver `ett-core`/`ett-manager`), repetir o mesmo procedimento.

## 4. Mudanças no repositório

- **`CLAUDE.md`:** seção nova **"DNS e subdomínios"** (tabela de subdomínios, regra do registro A, armadilha do aviso da Vercel, cache negativo, como testar sem `dig`).
- **Este handoff.**
- **Nada no `webapp/`:** nenhum deploy é necessário. Se for comitar, o `./deploy.sh` publica só estes dois `.md`.

## Pendências herdadas (sem mudança)

Ver `CONTEXTO-SESSAO-2026-11-17.md` (termo de parceria) e `CONTEXTO-SESSAO-2026-11-09-PARTE2.md` § Pendências: Termos/Política com advogado, aviso de privacidade do Level Check, aviso de gravação no Speak, Google Forms, arte do logo, métricas do desafio, `AnuncioReinicio` depois de 30/11, Business School depois de 06/12, blog parado, `CheckoutDemo.tsx` morto, kit do convite com cores antigas, SSL `.com`/`.lat`, `/planos/` 403, leads de teste na RD, direitos de conteúdo das ferramentas.

---

Última revisão: **2026-11-19**.
