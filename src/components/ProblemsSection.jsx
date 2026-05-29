const ArrowUp = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M7.5 2.5L7.5 12.5M7.5 2.5L3.5 6.5M7.5 2.5L11.5 6.5" stroke="#292524" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowDown = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M7.5 12.5L7.5 2.5M7.5 12.5L3.5 8.5M7.5 12.5L11.5 8.5" stroke="#292524" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export function ProblemsSection() {
  return (
    <section className="bg-background px-5 sm:px-8 lg:px-[156px] py-24">
      <div className="flex flex-col items-center gap-16">

        {/* Headline */}
        <div className="flex flex-col gap-4 items-center text-center w-full lg:w-[552px]">
          <h2 className="font-['Archivo',sans-serif] font-medium text-[32px] lg:text-[40px] leading-[120%] tracking-[-1.5px] lg:tracking-[-2px] text-[#1c1917]">
            Existem quatro problemas.
            <br />
            <span className="bg-brand px-1">Sempre os mesmos quatro.</span>
          </h2>
          <p className="font-['Archivo',sans-serif] text-[18px] lg:text-[20px] leading-[150%] tracking-[-0.4px] text-nav-text">
            Depois de trabalhar com mais de 15 founders técnicos em mentorias individuais, o padrão ficou impossível de ignorar.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-6 lg:gap-24 w-full">

          {/* Card 1 */}
          <div className="-rotate-2">
            <div className="bg-white flex flex-col gap-6 items-center justify-center overflow-hidden pb-12 pt-8 px-8 lg:px-12 rounded-3xl w-full lg:w-[480px]">
              <img src="/image13.webp" alt="" className="size-[120px] object-contain shrink-0" />
              <div className="flex flex-col gap-6 items-center w-full">
                <div className="flex flex-col gap-2 items-center text-center">
                  <h3 className="font-['Archivo',sans-serif] font-medium text-[22px] lg:text-[24px] leading-[120%] tracking-[-0.72px] text-[#1c1917]">
                    A landing page fala do produto,
                    <br />
                    <span className="bg-brand">não da dor do cliente</span>
                  </h3>
                  <p className="font-['Archivo',sans-serif] text-[18px] lg:text-[20px] leading-[150%] tracking-[-0.4px] text-nav-text">
                    A página descreve features e tecnologia. O visitante não se vê no texto. Ele fecha em 8 segundos.{' '}
                    <span className="text-[#44403b]">Você paga pelo tráfego, ele não converte.</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                  <span className="flex items-center gap-1 font-['Archivo',sans-serif] text-[16px] leading-[150%] tracking-[-0.32px] text-[#292524]">
                    <ArrowUp /> Tráfego
                  </span>
                  <span className="flex items-center gap-1 font-['Archivo',sans-serif] text-[16px] leading-[150%] tracking-[-0.32px] text-[#292524]">
                    <ArrowDown /> Conversão
                  </span>
                  <span className="flex items-center gap-1 font-['Archivo',sans-serif] text-[16px] leading-[150%] tracking-[-0.32px] text-[#292524]">
                    <ArrowDown /> Frustração crescendo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rotate-2">
            <div className="bg-[#f1eddf] flex flex-col gap-6 items-center justify-center overflow-hidden pb-12 pt-8 px-8 lg:px-12 rounded-3xl w-full lg:w-[480px]">
              <img src="/image14.webp" alt="" className="size-[120px] object-contain shrink-0" />
              <div className="flex flex-col gap-2 items-center text-center">
                <h3 className="font-['Archivo',sans-serif] font-medium text-[22px] lg:text-[24px] leading-[120%] tracking-[-0.72px] text-[#1c1917]">
                  A marca parece hobby.
                  <br />
                  <span className="bg-brand">O produto quer ser levado a sério.</span>
                </h3>
                <p className="font-['Archivo',sans-serif] text-[18px] lg:text-[20px] leading-[150%] tracking-[-0.4px] text-nav-text">
                  Paleta escolhida pelo gosto do criador. Tom de voz sem relação com quem vai comprar. O SaaS B2B com visual de jogo. A ferramenta de gestão que parece portfolio criativo.{' '}
                  <span className="text-[#44403b]">Usuário abandona antes de ler a segunda linha.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="-rotate-2">
            <div className="bg-white flex flex-col gap-6 items-center justify-center overflow-hidden pb-12 pt-8 px-8 lg:px-12 rounded-3xl w-full lg:w-[480px]">
              <img src="/image15.webp" alt="" className="size-[120px] object-contain shrink-0" />
              <div className="flex flex-col gap-2 items-center text-center">
                <h3 className="font-['Archivo',sans-serif] font-medium text-[22px] lg:text-[24px] leading-[120%] tracking-[-0.72px] text-[#1c1917]">
                  O produto não tem onboarding.
                  <br />
                  <span className="bg-brand">O core foi tratado como suficiente.</span>
                </h3>
                <p className="font-['Archivo',sans-serif] text-[18px] lg:text-[20px] leading-[150%] tracking-[-0.4px] text-nav-text">
                  O usuário entra. Não sabe o que fazer. Não experimenta valor. Cancela antes do dia 14. O churn dos primeiros 30 dias não é problema de produto,{' '}
                  <span className="text-[#79716b]">é problema de ativação inexistente.</span>{' '}
                  <span className="text-[#44403b]">Receita que entra sai antes do segundo mês.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rotate-2">
            <div className="bg-[#f1eddf] flex flex-col gap-6 items-center justify-center overflow-hidden pb-12 pt-8 px-8 lg:px-12 rounded-3xl w-full lg:w-[480px]">
              <img src="/image16.webp" alt="" className="size-[120px] object-contain shrink-0" />
              <div className="flex flex-col gap-2 items-center text-center">
                <h3 className="font-['Archivo',sans-serif] font-medium text-[22px] lg:text-[24px] leading-[120%] tracking-[-0.72px] text-[#1c1917]">
                  <span className="bg-brand">Você está medindo MRR</span> numa fase
                  <br />
                  em que MRR não significa nada.
                </h3>
                <p className="font-['Archivo',sans-serif] text-[18px] lg:text-[20px] leading-[150%] tracking-[-0.4px] text-nav-text">
                  Pre-PMF, a métrica que importa é retenção nos primeiros 30 dias, não receita. Mas o dashboard mostra MRR, ARR e CAC. Você acha que está crescendo.{' '}
                  <span className="text-[#44403b]">Mas está medindo vaidade enquanto o balde está furado.</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex flex-col gap-6 items-center">
          <button className="bg-brand shadow-[0px_4px_0px_#e6da4e] rounded-2xl px-6 py-4 font-['Archivo',sans-serif] font-medium text-base text-[#1c1917] text-center cursor-pointer transition-transform active:translate-y-px active:shadow-none w-full max-w-[395px]">
            Quero construir meu negócio
          </button>
          <div className="flex items-center gap-2">
            <img src="/image_4.webp" alt="" className="size-6 shrink-0" />
            <span className="font-['Archivo',sans-serif] text-base leading-[150%] tracking-[-0.32px] text-nav-text">
              Garantia de 7 dias · Risco zero
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
