import { InfoBar } from './InfoBar'

export const CONTAINER = 'mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[156px]'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <InfoBar />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

const navLinks = ['Plataforma', 'Depoimentos', 'Criador', 'Planos']

function Header() {
  return (
    <header className="border-b border-nav-border bg-background">
      <div className={`${CONTAINER} flex items-center justify-between py-[18px]`}>

        {/* Logo */}
        <a href="#" className="shrink-0">
          <img src="/logo.webp" alt="DevNoodles" width={128} height={32} className="h-8 w-auto" />
        </a>

        {/* Nav links — desktop only */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[14px] tracking-[-0.02em] text-nav-text hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="border border-nav-border rounded-2xl px-6 py-3 font-medium text-base text-nav-text hover:bg-muted transition-colors whitespace-nowrap"
        >
          <span className="hidden sm:inline">Garantir minha vaga</span>
          <span className="sm:hidden">Garantir vaga</span>
        </a>

      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className={`${CONTAINER} py-6`}>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dev Noodles. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
