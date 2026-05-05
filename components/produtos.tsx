import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Papel Jornal",
    description: "Papel offset leve, ideal para impressão de alta tiragem, embrulho e proteção de mercadorias durante o transporte.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S6t1lE5jkTVFNCOAO8OSim3kDqFyh6.png",
    imageAlt: "Bobina de papel jornal bege desenrolando",
  },
  {
    title: "Papel Strong",
    description: "Alta resistência mecânica para embalagens que precisam de durabilidade e proteção reforçada contra impactos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kh2hPWWKco7JGL7N0zxiLog8k8gEWN.png",
    imageAlt: "Folha avulsa de papel jornal cinza vista frontal",
  },
  {
    title: "Papel LWC",
    description: "Papel revestido de baixa gramatura com excelente qualidade de impressão para catálogos, folhetos e encartes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s5KlfSSjznZsx7nCSrWz6xvGwCItXw.png",
    imageAlt: "Folhas de papel LWC branco brilhante empilhadas",
  },
  {
    title: "Papel para Frios e Lanches",
    description: "Papel com barreira para contato direto com alimentos, garantindo higiene e frescor na embalagem de frios e lanches.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NklJ88gGY2ZIxbiFnJwLJSDbmRYHRX.png",
    imageAlt: "Caixa de papel para frios e lanches com estampas",
  },
  {
    title: "Bobina Papel Strong",
    description: "Bobina de papel strong em formato contínuo para alimentação de linhas automáticas de embalagem industrial.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dXtiLdglzVjf5imMltnE4Ox58raTk2.png",
    imageAlt: "Duas bobinas de papel strong branco",
  },
  {
    title: "Bobina Papel Jornal",
    description: "Bobina de papel jornal para impressão offset rotativa e aplicações de embrulho em larga escala.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oLQcQjIBMspfg6AFVkF2Bokr4aMpHi.png",
    imageAlt: "Bobina de papel strong cinza clara em fundo branco",
  },
  {
    title: "Bobina Papel LWC",
    description: "Bobina de papel revestido LWC para impressão contínua de alta definição em rotativas e equipamentos digitais.",
    image: "/images/D_NQ_NP_2X_606902-MLA95660371624_102025-F.webp",
    imageAlt: "Bobina de Papel LWC branca sendo desenrolada",
  },
  {
    title: "Bobina Papel Kraft",
    description: "Bobina de papel kraft natural, resistente e versátil, amplamente utilizada em embalagens, sacos e proteção de produtos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d6ld8zK3tZLiwsuQD44y2lGvMIem3i.png",
    imageAlt: "Bobinas de papel kraft empilhadas horizontalmente",
  },
]

export function Produtos() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-primary font-medium text-sm tracking-wide uppercase mb-4">
            Nossos produtos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Soluções completas em papel e bobina
          </h2>
          <p className="mt-4 text-secondary text-lg leading-relaxed">
            Folhas e bobinas nas principais especificações do mercado, prontas para atender sua operação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed flex-1">
                  {product.description}
                </p>
                <Link
                  href="#contato"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium text-sm transition-colors group/link mt-4"
                >
                  Solicitar cotação
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
