'use client'

import { useEffect, useState } from 'react'
import { Shuffle } from 'lucide-react'

export type VideoVertical = { src: string; capa: string; titulo: string }

/**
 * Vídeo vertical (reel 9:16) sorteado a cada visita. O sorteio roda no
 * navegador: o HTML é estático, então sortear no build daria sempre o mesmo.
 */
export default function VideoSorteado({ videos, className = '' }: { videos: VideoVertical[]; className?: string }) {
  const [i, setI] = useState<number | null>(null)
  useEffect(() => setI(Math.floor(Math.random() * videos.length)), [videos.length])
  const v = i === null ? null : videos[i]

  return (
    <div className={className}>
      <div className="relative aspect-[9/16] rounded-[1.75rem] overflow-hidden bg-surface-alt border-[6px] border-brand-navy shadow-2xl">
        {v ? (
          <video
            key={v.src}
            src={v.src}
            poster={v.capa}
            controls
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover bg-black"
            aria-label={`Vídeo da Cherry Top: ${v.titulo}`}
          />
        ) : (
          <div className="absolute inset-0 animate-pulse" />
        )}
      </div>
      {videos.length > 1 && (
        <button
          type="button"
          onClick={() => setI((atual) => ((atual ?? 0) + 1) % videos.length)}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 text-sm text-ink-muted hover:text-brand-red transition-colors"
        >
          <Shuffle className="w-4 h-4" />
          Ver outro vídeo ({(i ?? 0) + 1} de {videos.length})
        </button>
      )}
    </div>
  )
}
