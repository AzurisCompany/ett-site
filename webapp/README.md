# ETT – English Talk Time

Site one-page do programa de aceleração de inglês para profissionais de Tecnologia, Dados, IA e BI.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + clsx + tailwind-merge
- **Framer Motion** (animações ao scroll)
- **Lucide React** (ícones)
- **React Hook Form** + Zod (formulário de leads)
- Dark mode com neon verde (#00FF9D) e azul tech (#00BFFF)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy

Produção: **https://englishtalktime.com.br** (servido por hosting externo que puxa do repo).

O fluxo completo (build estático + espelhamento na raiz + push + pull manual no painel do hosting) está documentado em [`../CLAUDE.md`](../CLAUDE.md). Em resumo, a partir da raiz do repo:

```bash
./deploy.sh "mensagem opcional do commit"
```

Não use `vercel` / `next start` — o site é exportado estático (`output: 'export'`) e servido pelo hosting; não há funções server-side ativas.

### Variáveis de ambiente (opcional)

Se você integrar um backend de leads (Resend, Mailchimp, etc.), adicione em `.env.local`:

```
LEADS_WEBHOOK_URL=https://...
RESEND_API_KEY=re_...
```

## Integração do formulário de leads

O componente `LeadForm.tsx` simula o envio. Para ativar:

1. Crie `app/api/leads/route.ts`
2. Conecte ao seu serviço de e-mail (Resend recomendado)
3. Substitua o `await new Promise(...)` por um `fetch('/api/leads', { method: 'POST', body: JSON.stringify(data) })`

### Exemplo com Resend

```ts
// app/api/leads/route.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  await resend.emails.send({
    from: 'ETT <noreply@englishtalktime.com.br>',
    to: body.email,
    subject: 'Confirmado! Seu acesso ao próximo encontro ETT',
    html: `<p>Olá ${body.name}, em breve você receberá o link do encontro e o diagnóstico ETT FluenteLevel.</p>`,
  })
  return Response.json({ ok: true })
}
```

## Estrutura do projeto

```
app/
  layout.tsx       # Meta tags, SEO, JSON-LD
  page.tsx         # Montagem das seções
  globals.css      # Tema dark, variáveis CSS, utilitários
components/
  Navbar.tsx       # Navbar fixa com scroll detection
  Hero.tsx         # Hero full-screen com animações
  About.tsx        # Sobre o ETT
  Methodology.tsx  # 6 pilares + Fórmula Fluente
  Tools.tsx        # 10 ferramentas inteligentes
  Partners.tsx     # Grid de parceiros com tooltips
  HowItWorks.tsx   # Jornada do aluno (7 passos)
  Results.tsx      # Números + sistema de gamificação
  Testimonials.tsx # Depoimentos
  LeadForm.tsx     # Formulário de inscrição (RHF + Zod)
  Footer.tsx       # Footer com parceiros
lib/
  utils.ts         # cn() helper
public/
  images/          # Logos e imagens do site
```

## Imagens

Todas as imagens foram copiadas de `ConteudoSite/` para `public/images/`.
Para substituir imagens, mantenha os mesmos nomes de arquivo ou atualize os caminhos nos componentes correspondentes.
