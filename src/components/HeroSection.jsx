export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[156px] pt-16 pb-24">

      <div className="flex flex-col gap-10 w-full lg:w-[599px]">
        <div className="flex flex-col gap-4">

          <h1 className="font-['Archivo',sans-serif] font-semibold text-[40px] leading-[120%] tracking-[-1.2px] text-[#1c1917]">
            Seu produto{' '}
            <img src="/image_1.webp" alt="" className="inline-block size-12 align-middle" />
            {' '}está pronto,
            <br />
            Seu negócio{' '}
            <img src="/image_2.webp" alt="" className="inline-block size-12 align-middle" />
            {' '}<span className="bg-brand px-1">ainda não existe.</span>
          </h1>

          <p className="font-['Archivo',sans-serif] text-[20px] leading-[150%] tracking-[-0.6px] text-nav-text max-w-[520px]">
            Você domina o código. Domina o design. Talvez até o no-code. O que ninguém te ensinou foi a outra metade do trabalho, e essa lacuna está te custando clientes, receita e tempo todo mês.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-6 w-full max-w-[360px]">
          <button className="w-full bg-brand shadow-[0px_4px_0px_#e6da4e] rounded-2xl px-6 py-4 font-['Archivo',sans-serif] font-medium text-base text-[#1c1917] text-center cursor-pointer transition-transform active:translate-y-px active:shadow-none">
            Quero construir meu negócio (R$197)
          </button>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2">
              <img src="/image_4.webp" alt="" className="size-6 shrink-0" />
              <span className="font-['Archivo',sans-serif] text-base leading-[150%] tracking-[-0.32px] text-nav-text">
                Garantia de 7 dias · Risco zero
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/image_10.webp" alt="" className="size-6 shrink-0" />
              <span className="font-['Archivo',sans-serif] text-base leading-[150%] tracking-[-0.32px] text-nav-text">
                Acesso imediato ao grupo fundador
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
