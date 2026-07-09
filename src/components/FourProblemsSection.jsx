import { CtaButton } from './CtaButton'

const Arrow = ({ dir }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${dir === 'down' ? 'rotate-180' : ''}`}>
    <path d="M7.5 2.5L7.5 12.5M7.5 2.5L3.5 6.5M7.5 2.5L11.5 6.5" stroke="#292524" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const problems = [
  {
    icon: '/image13.webp',
    bg: 'bg-white',
    rotate: '-rotate-2',
    title: (
      <>
        A landing page fala do produto,
        <br />
        <span className="bg-brand">não da dor do cliente</span>
      </>
    ),
    body: (
      <>
        A página descreve features e tecnologia. O visitante não se vê no texto. Ele fecha em 8 segundos.{' '}
        <span className="text-brand-text">Você paga pelo tráfego, ele não converte.</span>
      </>
    ),
    metrics: [
      { dir: 'up', label: 'Tráfego' },
      { dir: 'down', label: 'Conversão' },
      { dir: 'down', label: 'Frustração crescendo' },
    ],
  },
  {
    icon: '/image14.webp',
    bg: 'bg-cream',
    rotate: 'rotate-2',
    title: (
      <>
        A marca parece hobby.
        <br />
        <span className="bg-brand">O produto quer ser levado a sério.</span>
      </>
    ),
    body: (
      <>
        Paleta escolhida pelo gosto do criador. Tom de voz sem relação com quem vai comprar. O SaaS B2B com visual de jogo. A ferramenta de gestão que parece portfolio criativo.{' '}
        <span className="text-brand-text">Usuário abandona antes de ler a segunda linha.</span>
      </>
    ),
  },
  {
    icon: '/image15.webp',
    bg: 'bg-white',
    rotate: '-rotate-2',
    title: (
      <>
        O produto não tem onboarding.
        <br />
        <span className="bg-brand">O core foi tratado como suficiente.</span>
      </>
    ),
    body: (
      <>
        O usuário entra. Não sabe o que fazer. Não experimenta valor. Cancela antes do dia 14. O churn dos primeiros 30 dias não é problema de produto,{' '}
        <span className="text-nav-text">é problema de ativação inexistente.</span>{' '}
        <span className="text-brand-text">Receita que entra sai antes do segundo mês.</span>
      </>
    ),
  },
  {
    icon: '/image16.webp',
    bg: 'bg-cream',
    rotate: 'rotate-2',
    title: (
      <>
        <span className="bg-brand">Você está medindo MRR</span> numa fase
        <br />
        em que MRR não significa nada.
      </>
    ),
    body: (
      <>
        Pre-PMF, a métrica que importa é retenção nos primeiros 30 dias, não receita. Mas o dashboard mostra MRR, ARR e CAC. Você acha que está crescendo.{' '}
        <span className="text-brand-text">Mas está medindo vaidade enquanto o balde está furado.</span>
      </>
    ),
  },
]

export function FourProblemsSection() {
  return (
    <section className="bg-background px-5 sm:px-8 lg:px-[156px] py-24">
      <div className="flex flex-col items-center gap-16">

        {/* Headline */}
        <div className="flex flex-col gap-4 items-center text-center w-full lg:w-[552px]">
          <h2 className="font-medium text-[32px] lg:text-[40px] leading-[120%] tracking-[-1.5px] lg:tracking-[-2px] text-heading">
            Existem quatro problemas.
            <br />
            <span className="bg-brand px-1">Sempre os mesmos quatro.</span>
          </h2>
          <p className="text-[18px] lg:text-[20px] leading-[150%] tracking-[-0.4px] text-nav-text">
            Depois de trabalhar com mais de 15 founders técnicos em mentorias individuais, o padrão ficou impossível de ignorar.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-6 lg:gap-24 w-full">
          {problems.map(({ icon, bg, rotate, title, body, metrics }) => (
            <div key={icon} className={rotate}>
              <div className={`${bg} flex flex-col gap-6 items-center justify-center overflow-hidden pb-12 pt-8 px-8 lg:px-12 rounded-3xl w-full lg:w-[480px]`}>
                <img src={icon} alt="" width={120} height={120} loading="lazy" className="size-[120px] object-contain shrink-0" />
                <div className="flex flex-col gap-6 items-center w-full">
                  <div className="flex flex-col gap-2 items-center text-center">
                    <h3 className="font-medium text-[22px] lg:text-[24px] leading-[120%] tracking-[-0.72px] text-heading">
                      {title}
                    </h3>
                    <p className="text-[18px] lg:text-[20px] leading-[150%] tracking-[-0.4px] text-nav-text">
                      {body}
                    </p>
                  </div>
                  {metrics && (
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                      {metrics.map(({ dir, label }) => (
                        <span key={label} className="flex items-center gap-1 text-[16px] leading-[150%] tracking-[-0.32px] text-[#292524]">
                          <Arrow dir={dir} /> {label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-6 items-center">
          <CtaButton className="w-full max-w-[395px]">
            Quero construir meu negócio
          </CtaButton>
          <div className="flex items-center gap-2">
            <img src="/image_4.webp" alt="" width={24} height={24} loading="lazy" className="size-6 shrink-0" />
            <span className="text-base leading-[150%] tracking-[-0.32px] text-nav-text">
              Garantia de 7 dias · Risco zero
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
