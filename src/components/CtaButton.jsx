export function CtaButton({ children, className = '' }) {
  return (
    <button
      className={`bg-brand shadow-[0px_4px_0px_var(--color-brand-shadow)] rounded-2xl px-6 py-4 font-medium text-base text-heading text-center cursor-pointer transition-transform active:translate-y-px active:shadow-none ${className}`}
    >
      {children}
    </button>
  )
}
