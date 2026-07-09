import { CONTAINER } from './Layout'
import { CtaButton } from './CtaButton'

export function HeroSection() {
  return (
    <section className={`${CONTAINER} pt-16 pb-24`}>

      <div className="flex flex-col gap-10 w-full lg:w-[599px]">
        <div className="flex flex-col gap-4">

          <h1 className="font-semibold text-[40px] leading-[120%] tracking-[-1.2px] text-heading">
            Seu produto{' '}
            <img src="/image_1.webp" alt="" width={48} height={48} className="inline-block size-12 align-middle" />
            {' '}está pronto,
            <br />
            Seu negócio{' '}
            <img src="/image_2.webp" alt="" width={48} height={48} className="inline-block size-12 align-middle" />
            {' '}<span className="bg-brand px-1">ainda não existe.</span>
          </h1>

          <p className="text-[20px] leading-[150%] tracking-[-0.6px] text-nav-text max-w-[520px]">
            Você domina o código. Domina o design. Talvez até o no-code. O que ninguém te ensinou foi a outra metade do trabalho, e essa lacuna está te custando clientes, receita e tempo todo mês.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-6 w-full max-w-[360px]">
          <CtaButton className="w-full">
            Quero construir meu negócio (R$197)
          </CtaButton>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2">
              <img src="/image_4.webp" alt="" width={24} height={24} className="size-6 shrink-0" />
              <span className="text-base leading-[150%] tracking-[-0.32px] text-nav-text">
                Garantia de 7 dias · Risco zero
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/image_10.webp" alt="" width={24} height={24} className="size-6 shrink-0" />
              <span className="text-base leading-[150%] tracking-[-0.32px] text-nav-text">
                Acesso imediato ao grupo fundador
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
