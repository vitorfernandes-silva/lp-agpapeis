"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Package, Cylinder, ChevronRight, ChevronLeft } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { motion } from "framer-motion"

type Product = {
  title: string
  description: string
  images: string[]
  imageAlt: string
  category: "folha" | "bobina"
  highlights?: string[]
}

const products: Product[] = [
  // — Papéis Cortados —
  {
    title: "Papel Strong",
    description:
      "Papel resistente e versátil. Ideal para embalagens de marmitas, caixa de sapatos, forrações e proteção contra impactos.",
    images: [
      "/images/papel-strong.jpeg"
    ],
    imageAlt: "Pacote de papel strong",
    category: "folha",
    highlights: ["Resistente", "Proteção", "Atóxico"],
  },
  {
    title: "Papel Acoplado",
    description:
      "Papel com barreira impermeável, ideal para lanches, frios e doces. Preserva o frescor e protege contra gordura.",
    images: [
      "/images/papel-acoplado.jpeg"
    ],
    imageAlt: "Caixa e pacote de papel acoplado",
    category: "folha",
    highlights: ["Alimentos", "Impermeável", "Higiênico"],
  },
  // — Bobinas —
  {
    title: "Bobina Papel Strong",
    description:
      "Bobina composta por papel strong. Ideal para embrulhos, embalagens e diversos fins.",
    images: [
      "/images/bobina-strong.jpeg"
    ],
    imageAlt: "Bobina de papel strong",
    category: "bobina",
    highlights: ["40cm e 60cm", "Larga escala", "Menos desperdício"],
  },
  {
    title: "Bobina Papel Semi Kraft",
    description:
      "Bobina composta por papel semi kraft. Papel resistente, ideal para embrulhos, sacos e proteção.",
    images: [
      "/images/bobina-semicraft.jpeg"
    ],
    imageAlt: "Bobina de papel kraft",
    category: "bobina",
    highlights: ["40cm e 60cm", "Alta resistência", "Sacos e embrulhos"],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

function ProductCard({ product }: { product: Product }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  }

  return (
    <motion.div variants={cardVariants} className="h-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="h-full cursor-pointer focus:outline-none rounded-2xl ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Card className="group relative overflow-hidden border border-white/5 shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]">
              {/* Image section */}
              <div className="relative h-56 overflow-hidden bg-white/5">
                <Image
                  src={product.images[0]}
                  alt={product.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Gallery icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-black/50 text-white backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    {product.images.length > 1 ? `Ver ${product.images.length} fotos` : "Ampliar imagem"}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <Badge
                    className="text-xs font-semibold px-3 py-1 rounded-full border-0 shadow-md backdrop-blur-sm"
                    style={{
                      backgroundColor: product.category === "folha" ? "rgba(240, 148, 54, 0.9)" : "rgba(30, 30, 30, 0.85)",
                      color: "#fff",
                    }}
                  >
                    {product.category === "folha" ? (
                      <Package className="w-3 h-3 mr-1" />
                    ) : (
                      <Cylinder className="w-3 h-3 mr-1" />
                    )}
                    {product.category === "folha" ? "Papel Cortado" : "Bobina"}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <CardHeader className="pb-2 pt-5 px-5">
                <CardTitle className="font-serif text-xl font-bold text-white leading-tight group-hover:text-[#F09436] transition-colors duration-300">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-5 pb-2 flex-1">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {product.description}
                </p>

                {/* Highlights / tags */}
                {product.highlights && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {product.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#F09436]/20 text-[#ffb870] border border-[#F09436]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="px-5 pb-5 pt-2">
                <Link
                  href="#contato"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F09436] hover:text-[#d47e24] transition-colors duration-300 group/link"
                >
                  Solicitar cotação
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F09436]/10 group-hover/link:bg-[#F09436]/20 transition-colors duration-300">
                    <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </Link>
              </CardFooter>

              {/* Accent border on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F09436] to-[#f7b267] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          </div>
        </DialogTrigger>

        <DialogContent className="w-[95vw] max-w-[70vw] max-h-[85vh] bg-[#1c1c1c] border-white/10 p-2 sm:p-4 gap-0 overflow-hidden" showCloseButton={true}>
          <DialogTitle className="sr-only">{product.title}</DialogTitle>
          <DialogDescription className="sr-only">{product.description}</DialogDescription>
          
          <div className="relative w-full h-[75vh] bg-black/50 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={product.images[currentImage]}
              alt={`${product.title} - Imagem ${currentImage + 1}`}
              fill
              className="object-contain"
            />
            
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors backdrop-blur-sm z-10 focus:outline-none focus:ring-2 focus:ring-[#F09436]"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors backdrop-blur-sm z-10 focus:outline-none focus:ring-2 focus:ring-[#F09436]"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* Dots */}
            {product.images.length > 1 && (
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 sm:gap-2 z-10 max-w-[80%]">
                {product.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                    className={`h-1.5 sm:h-2 rounded-full transition-all focus:outline-none ${idx === currentImage ? 'bg-[#F09436] w-4 sm:w-6' : 'bg-white/50 hover:bg-white w-1.5 sm:w-2'}`}
                  />
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

export function Produtos() {
  const folhas = products.filter((p) => p.category === "folha")
  const bobinas = products.filter((p) => p.category === "bobina")

  return (
    <section id="produtos" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, transparent, #F09436, transparent)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #F09436 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #F09436 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(240, 148, 54, 0.1)",
                color: "#F09436",
                border: "1px solid rgba(240, 148, 54, 0.2)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F09436] animate-pulse" />
              Conheça alguns dos nossos produtos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance mt-4">
              Soluções completas em{" "}
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: "#F09436" }}>
                  papel e bobina
                </span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 opacity-20 -z-0 rounded"
                  style={{ backgroundColor: "#F09436" }}
                />
              </span>
            </h2>
            <p className="mt-6 text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Folhas e bobinas nas principais especificações do mercado, prontas
              para atender a sua operação com qualidade e agilidade.
            </p>
          </motion.div>
        </div>

        {/* All Products in a single row layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Category 1: Papéis Cortados (spans 2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200/80"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl shadow-xs"
                style={{
                  backgroundColor: "rgba(240, 148, 54, 0.1)",
                  border: "1px solid rgba(240, 148, 54, 0.2)",
                }}
              >
                <Package className="w-5 h-5" style={{ color: "#F09436" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-serif">
                  Papéis Cortados
                </h3>
                <p className="text-xs text-gray-500">Folhas prontas nas medidas que você precisa</p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {folhas.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </motion.div>
          </div>

          {/* Category 2: Bobinas (spans 2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200/80"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl shadow-xs"
                style={{
                  backgroundColor: "rgba(240, 148, 54, 0.1)",
                  border: "1px solid rgba(240, 148, 54, 0.2)",
                }}
              >
                <Cylinder className="w-5 h-5" style={{ color: "#F09436" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-serif">
                  Bobinas
                </h3>
                <p className="text-xs text-gray-500">Formato facilitado para produções eficientes</p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {bobinas.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #F09436 0%, #e07d1a 50%, #d47020 100%)",
          }}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-serif mb-3">
              Precisa de um papel de qualidade?
            </h3>
            <p className="text-white/85 text-base md:text-lg max-w-xl mx-auto mb-8">
              Industrializamos e cortamos o que sua operação precisa.
              Fale com nosso time para uma cotação personalizada.
            </p>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm md:text-base"
            >
              Solicitar cotação agora
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

