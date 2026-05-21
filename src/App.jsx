import { Layout, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from './components'

export default function App() {
  return (
    <Layout>
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Bem-vindo ao <span className="text-primary">Dev Noodles</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Seu projeto React + Vite + Tailwind v4 está pronto. Edite os componentes em{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
            src/components
          </code>{' '}
          para começar.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button size="lg">Começar</Button>
          <Button variant="outline" size="lg">Ver docs</Button>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>Variantes: primary, secondary, outline, ghost</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Primary</Button>
              <Button variant="secondary" size="sm">Secondary</Button>
              <Button variant="outline" size="sm">Outline</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
            </div>
          </CardContent>
          <CardFooter>
            <span className="text-xs text-muted-foreground">src/components/Button.jsx</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card</CardTitle>
            <CardDescription>Componente de cartão com subpeças compostas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use <code className="bg-muted px-1 rounded text-xs">CardHeader</code>,{' '}
              <code className="bg-muted px-1 rounded text-xs">CardContent</code> e{' '}
              <code className="bg-muted px-1 rounded text-xs">CardFooter</code> para compor.
            </p>
          </CardContent>
          <CardFooter>
            <span className="text-xs text-muted-foreground">src/components/Card.jsx</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Layout</CardTitle>
            <CardDescription>Header, main e footer responsivos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Envolve toda a página com largura máxima de{' '}
              <code className="bg-muted px-1 rounded text-xs">max-w-6xl</code> e padding responsivo.
            </p>
          </CardContent>
          <CardFooter>
            <span className="text-xs text-muted-foreground">src/components/Layout.jsx</span>
          </CardFooter>
        </Card>
      </section>
    </Layout>
  )
}
