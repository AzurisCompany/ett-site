/* Vídeo institucional do ETT na home, logo abaixo do topo.
   Fonte: D:\2026\31-videoETT\renders\ETT-institucional-16x9-v05.mp4 (2:07),
   feito para a estreia no DSSBR (27/10). Aqui vai um CORTE até 92,3 s, que
   termina no slide "Programa de Aceleração · englishtalktime.com.br": o
   trecho seguinte (mentoria só no DSSBR, "converse no nosso stand", últimas
   vagas da Flórida, turma de Curitiba) é do evento e saiu (decisão de 01/11).
   Hospedado no próprio site; preload="none" pra não pesar a home — o arquivo
   só baixa no play. Nome com versão: vídeo novo = nome novo (cache de 7 dias). */

const VIDEO = '/videos/ett-institucional-v05-site.mp4'
const CAPA = '/videos/ett-institucional-v05-capa.jpg'

export default function VideoInstitucional() {
  return (
    <section id="video" className="py-14 md:py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink mb-3 leading-tight">
              Conheça o ETT em <span className="brand-red">um minuto e meio</span>
            </h2>
            <p className="text-ink-muted text-lg">
              Como é um encontro, as ferramentas do ETT Player e onde a comunidade nasceu.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-surface-line shadow-xl bg-brand-navy">
            <video
              controls
              playsInline
              preload="none"
              poster={CAPA}
              className="w-full h-auto aspect-video block"
              aria-label="Vídeo institucional do English Talk Time"
            >
              <source src={VIDEO} type="video/mp4" />
              Seu navegador não reproduz vídeo.{' '}
              <a href={VIDEO} className="underline">
                Baixe o vídeo
              </a>
              .
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
