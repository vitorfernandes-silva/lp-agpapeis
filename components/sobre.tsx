import Image from "next/image"

export function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-2 px-4 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(240, 148, 54, 0.1)",
                color: "#F09436",
                border: "1px solid rgba(240, 148, 54, 0.2)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F09436] animate-pulse" />
              Quem somos
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Tradição e qualidade em papel e embalagem
            </h2>
            
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                A AG Papéis é especializada na venda de papel cortado e industrialização de papel para empresas de lojas de embalagem. Nosso compromisso é entregar sempre a melhor qualidade com agilidade no atendimento e flexibilidade para cada cliente.
              </p>
              <p>
                Trabalhamos com processos industriais otimizados que garantem eficiência em cada etapa de produção, com responsabilidade, confiança e excelência.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/refilamento.jpeg"
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
