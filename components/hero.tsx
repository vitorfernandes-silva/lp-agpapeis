import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-muted hidden lg:block" 
           style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block text-primary font-medium text-sm tracking-wide uppercase">
              Especialistas em papel e embalagem
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Papel de qualidade superior para o seu negócio crescer
            </h1>
            
            <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-xl">
              A AG Papéis fornece papel cortado e industrialização sob medida para empresas e lojas de embalagens, com logística eficiente e entrega rápida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base">
                <Link href="#contato">Solicitar Orçamento</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full px-8 text-base">
                <Link href="#produtos">Conheça nossos produtos</Link>
              </Button>
            </div>
            
            <Link 
              href="https://wa.me/5511999999999" 
              target="_blank"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mt-4"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">Fale agora pelo WhatsApp</span>
            </Link>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
              alt="Rolos de papel industrial"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
