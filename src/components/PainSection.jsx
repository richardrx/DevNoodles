const STACK_TOP = 160   // px from viewport top where cards stick
const GAP = 320         // px of scroll between each card sticking

const cards = [
  { text: 'Você trocou a cor do botão.',      icon: '/image_6.webp',  bg: 'bg-cream', rotate: '-rotate-2' },
  { text: 'Mudou a headline',                  icon: '/image_7.webp',  bg: 'bg-white', rotate: 'rotate-2'  },
  { text: 'Publicou no grupo do Discord.',      icon: '/image_8.webp',  bg: 'bg-cream', rotate: '-rotate-2' },
  { text: 'Pediu feedback no X/Twitter.',       icon: '/image_9.webp',  bg: 'bg-white', rotate: 'rotate-2'  },
  { text: 'Os amigos testaram. Funciona.',      icon: '/image_10.webp', bg: 'bg-cream', rotate: '-rotate-2' },
  { text: 'O produto funciona. Você testou.',  icon: '/image_11.webp', bg: 'bg-white', rotate: 'rotate-2'  },
]

export function PainSection() {
  return (
    <section className="bg-[#fbf9f2] px-5 sm:px-8 lg:px-[156px] py-24">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Headline — sticky no desktop */}
        <div className="lg:sticky lg:top-28 lg:self-start lg:w-[552px] shrink-0">
          <h2 className="font-medium text-[32px] lg:text-[40px] leading-[120%] tracking-[-1.5px] lg:tracking-[-2px]">
            <span className="text-nav-text">
              Você abriu o{' '}
              <img src="/image_5.webp" alt="" width={64} height={64} loading="lazy" className="inline-block size-12 lg:size-16 align-middle" />
              {' '}analytics hoje.
            </span>
            <br />
            <span className="text-heading">
              300 visitantes na última semana.{' '}
              <span className="bg-brand px-1">Converteu 4.</span>
            </span>
          </h2>
        </div>

        {/* Cards — stacking sticky */}
        <div className="w-full lg:w-[552px]">

          {/* Um único container para todos os stickies */}
          <div>
            {cards.map(({ text, icon, bg, rotate }, i) => (
              <div
                key={text}
                className="sticky flex items-center justify-center"
                style={{
                  top: `${STACK_TOP}px`,
                  zIndex: i + 10,
                  marginTop: i === 0 ? 0 : `${GAP}px`,
                }}
              >
                <div className={rotate}>
                  <div className={`${bg} flex gap-4 items-center p-6 rounded-2xl w-full lg:w-[428px]`}>
                    <img src={icon} alt="" width={48} height={48} loading="lazy" className="size-12 shrink-0" />
                    <p className="font-medium text-[20px] lg:text-[24px] leading-[120%] tracking-[-0.72px] text-heading">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Espaço para o stack ficar visível */}
            <div className="h-[200px]" />
          </div>

          {/* Gap para os cards saírem da tela antes do card final entrar */}
          <div className="h-[300px]" />

          {/* Card final — fora do stack */}
          <div className="bg-white rounded-3xl pl-8 pr-12 py-8 flex gap-4 items-center">
            <img src="/image12.webp" alt="" width={120} height={120} loading="lazy" className="size-[120px] shrink-0 object-contain" />
            <p className="font-medium text-[18px] lg:text-[20px] leading-[130%] tracking-[-0.6px] text-heading">
              Mas ninguém abre a carteira. E você não sabe exatamente por quê. Essa{' '}
              <span className="bg-brand">incerteza tem um custo que vai além</span>{' '}
              <span className="bg-brand">do financeiro.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
