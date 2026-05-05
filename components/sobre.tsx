import Image from "next/image"

export function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block text-primary font-medium text-sm tracking-wide uppercase">
              Quem somos
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Tradição e qualidade em papel e embalagem
            </h2>
            
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                A AG Papéis é especializada na venda de papel cortado e industrialização de papel para empresas de embalagem, gráficas e distribuidores. Nosso compromisso é entregar sempre a melhor qualidade com agilidade no atendimento e flexibilidade para cada cliente.
              </p>
              <p>
                Trabalhamos com processos industriais otimizados que garantem precisão no corte, uniformidade no produto final e rastreabilidade em cada lote entregue.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop"
              alt="Fábrica de papel industrial"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
