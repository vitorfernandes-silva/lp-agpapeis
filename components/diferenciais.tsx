import { Truck, Star, Settings, Handshake, Clock, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística eficiente para garantir que seu pedido chegue no prazo certo, sem atrasos."
  },
  {
    icon: Star,
    title: "Qualidade Superior",
    description: "Papel com especificações técnicas rigorosas para atender os mais altos padrões do mercado."
  },
  {
    icon: Settings,
    title: "Industrialização Sob Medida",
    description: "Cortamos e processamos o papel nas dimensões exatas que sua operação precisa."
  },
  {
    icon: Handshake,
    title: "Atendimento Especializado",
    description: "Equipe técnica pronta para indicar a melhor solução para cada tipo de aplicação."
  },
  {
    icon: Clock,
    title: "Agilidade no Pedido",
    description: "Processo de compra simplificado com resposta rápida para não travar sua produção."
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Parceiro sólido com anos de mercado e histórico comprovado com nossos clientes."
  }
]

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(240, 148, 54, 0.1)",
              color: "#F09436",
              border: "1px solid rgba(240, 148, 54, 0.2)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#F09436] animate-pulse" />
            Por que escolher a AG Papéis
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Vantagens que fazem diferença no seu negócio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card border border-border hover:shadow-lg transition-shadow duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
