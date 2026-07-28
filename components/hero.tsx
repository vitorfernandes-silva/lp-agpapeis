import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-2.png"
          alt="Instalação industrial"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-8">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] text-balance">
            Papel de <span className="text-[#F09436]">qualidade superior</span> para o seu negócio crescer
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
            A AG Papéis fornece papel cortado e industrialização para empresas e lojas de embalagens, oferecendo qualidade e compromisso com as necessidades de cada cliente.
          </p>
          
          <div className="pt-4">
            <Link 
              href="#produtos"
              className="group inline-flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2 pl-6 pr-2 rounded-full text-white font-medium uppercase tracking-wider text-sm transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              Conheça nossos produtos
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F09436]/20 group-hover:bg-[#F09436]/30 transition-colors">
                <ArrowRight className="w-5 h-5 text-[#F09436]" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
