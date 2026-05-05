export function StatsStrip() {
  const stats = [
    { value: "10+", label: "Anos de mercado" },
    { value: "100+", label: "Clientes atendidos" },
    { value: "Entrega", label: "Rápida e eficiente" },
    { value: "Qualidade", label: "Superior garantida" },
  ]

  return (
    <section className="bg-primary py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center relative"
            >
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-primary-foreground/30" />
              )}
              <div className="font-serif font-bold text-3xl md:text-5xl text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground/90 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
