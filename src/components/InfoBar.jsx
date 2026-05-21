export function InfoBar() {
  return (
    <div className="w-full bg-brand px-5 py-3 sm:px-6 flex items-center justify-center">
      <p className="text-brand-text text-center text-[12.5px] leading-[1.25] font-normal">
        <span>50 vagas fundadoras · R$197</span>
        <span className="hidden sm:inline"> — </span>
        <br className="sm:hidden" />
        <span>Preço sobe para R$497 no lançamento público</span>
      </p>
    </div>
  )
}
