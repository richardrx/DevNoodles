import { InfoBar } from './InfoBar'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <InfoBar />
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-[18px] sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="#" className="shrink-0">
          <img src="/logo.webp" alt="DevNoodles" className="h-8 w-auto" />
        </a>

        {/* Nav links — desktop only */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-['Archivo',sans-serif] text-[14px] tracking-[-0.02em] text-nav-text hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="border border-nav-border rounded-2xl px-6 py-3 font-['Archivo',sans-serif] font-medium text-base text-nav-text hover:bg-muted transition-colors whitespace-nowrap"
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
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dev Noodles. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
