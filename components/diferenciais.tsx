"use client"

import { Star, Handshake, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    number: "01",
    icon: Star,
    title: "Qualidade Superior",
    description: "Papel de alta qualidade para atender às necessidades dos mais diversos segmentos do mercado."
  },
  {
    number: "02",
    icon: Handshake,
    title: "Atendimento Especializado",
    description: "Equipe técnica pronta para indicar a melhor solução para cada tipo de aplicação."
  },
  {
    number: "03",
    icon: Clock,
    title: "Agilidade no Pedido",
    description: "Processo de compra simplificado com resposta rápida para não travar sua produção."
  },
  {
    number: "04",
    icon: Shield,
    title: "Confiabilidade",
    description: "Parceiro sólido com anos de mercado e histórico comprovado com nossos clientes."
  }
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

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.02] pointer-events-none"
        style={{ background: "radial-gradient(circle, #F09436 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full shadow-xs"
              style={{
                backgroundColor: "rgba(240, 148, 54, 0.1)",
                color: "#F09436",
                border: "1px solid rgba(240, 148, 54, 0.2)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F09436] animate-pulse" />
              Por que escolher a AG Papéis
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
              Vantagens que fazem diferença no seu negócio
            </h2>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-2xl hover:shadow-[#F09436]/15 hover:border-[#F09436]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Animated Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F09436] to-[#f7b267] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Header Row: Icon + Number Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F09436]/15 via-[#F09436]/10 to-transparent flex items-center justify-center border border-[#F09436]/20 shadow-xs group-hover:bg-[#F09436] group-hover:border-[#F09436] transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#F09436] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <span className="font-serif font-bold text-3xl text-gray-200 group-hover:text-[#F09436]/30 transition-colors duration-300 select-none">
                      {benefit.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif font-bold text-xl text-gray-900 group-hover:text-[#F09436] transition-colors duration-300 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
