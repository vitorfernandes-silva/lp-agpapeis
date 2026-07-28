"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  Scissors, 
  Award, 
  Ruler, 
  Truck, 
  Phone, 
  Maximize2, 
  Sliders, 
  Layers, 
  Printer, 
  Zap, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  PackageCheck,
  Building2
} from "lucide-react"
import { Button } from "@/components/ui/button"

const stepItems = [
  {
    number: "1",
    title: "Definição das especificações do corte",
    desc: "Alinhamos larguras, diâmetros e gramaturas necessárias."
  },
  {
    number: "2",
    title: "Nossa equipe configura a máquina para o corte exato",
    desc: "Ajustes de precisão milimétrica em nossa estrutura própria."
  },
  {
    number: "3",
    title: "Bobinas refiladas com acabamento uniforme e controle de qualidade",
    desc: "Inspeção rigorosa do produto acabado durante todo o processo."
  },
  {
    number: "4",
    title: "Material pronto para utilização, entregue com agilidade",
    desc: "Embalado e despachado com logística rápida e pontual."
  }
]

const flexografiaBenefits = [
  { icon: Printer, text: "Impressão em até 4 cores" },
  { icon: Zap, text: "Alta velocidade de produção" },
  { icon: Target, text: "Excelente definição" },
  { icon: ShieldCheck, text: "Qualidade em tiragens" },
  { icon: TrendingUp, text: "Processo econômico" },
  { icon: PackageCheck, text: "Clichês de precisão" },
]

const diferenciasServico = [
  {
    icon: Scissors,
    title: "Precisão no corte",
    desc: "Cortes uniformes sem variação dimensional."
  },
  {
    icon: Award,
    title: "Qualidade garantida",
    desc: "Estrutura própria e processo calibrado."
  },
  {
    icon: Ruler,
    title: "Sob medida",
    desc: "Formatos conforme a especificação."
  },
  {
    icon: Truck,
    title: "Entrega ágil",
    desc: "Logística com prazo enxuto e frete ágil."
  }
]

export function Refilamento() {
  return (
    <section id="refilamento" className="py-20 md:py-28 bg-[#E17E1C] text-gray-900 relative overflow-hidden">
      {/* Subtle background ambient overlays */}
      <div 
        className="absolute top-1/4 -left-48 w-[600px] h-[600px] rounded-full opacity-[0.15] pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-10 -right-48 w-[600px] h-[600px] rounded-full opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(circle, #000000 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10 space-y-20 md:space-y-28">

        {/* =========================================================================
            HEADER & MAIN SERVICE OVERVIEW ("Refilamento de Papel & Corte Sob Medida")
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#181818] text-white rounded-3xl p-6 md:p-10 border border-black/20 shadow-2xl">
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[#E17E1C] text-black shadow-md">
                O SERVIÇO
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Refilamento de Papel &{" "}
                <span className="text-[#E17E1C]">Corte Sob Medida</span>
              </h2>

              <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
                Oferecemos serviços de refilamento de papel com cortes precisos e personalizados para atender às necessidades da indústria.
              </p>

              <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                Com ampla experiência no segmento, somos especialistas na prestação de mão de obra de refilamento de bobinas, garantindo precisão dimensional, padronização e eficiência para os processos produtivos. Realizamos cortes sob medida de acordo com a necessidade de cada cliente, assegurando alto padrão de qualidade e acabamento.
              </p>
            </div>

            {/* How it works / Passo a Passo */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded bg-white/10 text-gray-300">
                  PASSO A PASSO
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#E17E1C]">
                  COMO FUNCIONA
                </span>
              </div>

              <div className="space-y-4">
                {stepItems.map((step) => (
                  <div key={step.number} className="flex items-start gap-4 group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E17E1C] text-black font-bold flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image Showcase Column (Refilamento photos) */}
          <motion.div 
            className="lg:col-span-6 flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Top Main Image: Refilamento process */}
            <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
              <Image 
                src="/images/refilamento.jpeg"
                alt="Processo de Refilamento de Papel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#E17E1C] text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  Processo Industrial
                </span>
                <p className="text-white font-medium text-sm mt-1">Corte e rebobinamento de alta precisão</p>
              </div>
            </div>

            {/* Bottom 2 Images: Entrada e Saída */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {/* Entrada */}
              <div className="relative h-52 sm:h-auto rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
                <Image 
                  src="/images/bobina_entrada.jpeg"
                  alt="Bobina Inicial Posicionada para Corte"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="bg-[#E17E1C] text-black text-xs font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                    ENTRADA
                  </span>
                  <p className="text-white text-xs font-medium mt-1">Bobina inicial posicionada para corte</p>
                </div>
              </div>

              {/* Saída */}
              <div className="relative h-52 sm:h-auto rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
                <Image 
                  src="/images/bobina_saida.jpeg"
                  alt="Bobinas Cortadas e Refiladas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="bg-[#E17E1C] text-black text-xs font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                    SAÍDA
                  </span>
                  <p className="text-white text-xs font-medium mt-1">Bobinas cortadas e refiladas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* =========================================================================
            APLICAÇÕES, VANTAGENS & PARCEIRO DE CONFIANÇA
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Applications & Advantages (Light Card for High Contrast) */}
          <motion.div 
            className="lg:col-span-7 bg-white text-gray-900 rounded-3xl p-8 shadow-2xl border border-black/10 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3.5 py-1.5 rounded-full bg-[#E17E1C]/15 text-[#c46407]">
                APLICAÇÕES E VANTAGENS
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Para que serve o <span className="text-[#c46407]">refilamento?</span>
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
                O refilamento é ideal para indústrias que precisam de bobinas em larguras específicas, reduzindo desperdício e otimizando o uso do papel na linha de produção.
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-extrabold tracking-widest uppercase text-[#c46407] mb-4">
                  VANTAGENS DO REFILAMENTO:
                </h4>
                {[
                  "Medidas conforme especificação do cliente;",
                  "Alto padrão de qualidade e precisão;",
                  "Atendimento a pequenas e grandes demandas;",
                  "Compromisso com prazos de entrega."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E17E1C] flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Segment Box */}
            <div className="bg-gray-100 rounded-2xl p-5 border border-gray-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E17E1C] text-black flex items-center justify-center flex-shrink-0 shadow">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm md:text-base">
                  INDÚSTRIAS DE EMBALAGEM & TUBETES
                </h5>
                <p className="text-xs md:text-sm text-gray-600">
                  Fitas de papel e bobinas refiladas em larguras personalizadas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Partner & Contact Box (Dark Card for Contrast Balance) */}
          <motion.div 
            className="lg:col-span-5 bg-[#181818] text-white rounded-3xl p-8 border border-black/20 flex flex-col justify-between shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded bg-white/10 text-gray-300">
                SOBRE A EMPRESA
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
                AG Papéis – <span className="text-[#E17E1C]">parceiro de confiança</span>
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif font-extrabold text-4xl md:text-5xl text-[#E17E1C]">
                    +15
                  </span>
                  <span className="text-sm md:text-base text-gray-300 font-medium">
                    anos servindo empresas com papel e industrialização
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="font-serif font-extrabold text-4xl md:text-5xl text-[#E17E1C]">
                    100%
                  </span>
                  <span className="text-sm md:text-base text-gray-300 font-medium">
                    estrutura própria para corte e refilamento
                  </span>
                </div>
              </div>

              <div className="bg-[#242424] rounded-2xl p-4 border border-white/5 flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#E17E1C]/20 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-[#E17E1C]" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">Atendimento Dedicado</h5>
                  <p className="text-xs text-gray-400">Cobertura completa com logística dedicada</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Action */}
            <div className="bg-gradient-to-r from-[#E17E1C]/20 to-transparent p-5 rounded-2xl border border-[#E17E1C]/40">
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#E17E1C] block mb-2">
                FALE COM A GENTE
              </span>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E17E1C] flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:gap-4 font-bold text-white text-sm md:text-base">
                  <a href="https://wa.me/5519993828731" target="_blank" rel="noopener noreferrer" className="hover:text-[#E17E1C] transition-colors">
                    (19) 99382-8731
                  </a>
                  <span className="hidden sm:inline text-gray-500">|</span>
                  <a href="https://wa.me/5519967488878" target="_blank" rel="noopener noreferrer" className="hover:text-[#E17E1C] transition-colors">
                    (19) 99674-8878 <span className="text-xs font-normal text-gray-400">(Ailton)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* =========================================================================
            TECHNICAL SPECIFICATIONS ("Especificações Técnicas")
           ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="inline-block text-xs font-extrabold tracking-widest uppercase mb-2 px-3.5 py-1.5 rounded-full bg-black text-white shadow">
                PARÂMETROS
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-black">
                ESPECIFICAÇÕES TÉCNICAS
              </h3>
            </div>
            <span className="self-start sm:self-auto text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-black/90 text-white shadow">
              PADRÃO INDUSTRIAL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Entrada da Bobina */}
            <motion.div 
              className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-black/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E17E1C]/15 flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-[#c46407]" />
                </div>
                <h4 className="font-bold text-gray-900 text-base">ENTRADA DA BOBINA</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Largura máx:</span>
                  <span className="font-bold text-gray-900 text-lg">1020mm</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm">Diâmetro máx:</span>
                  <span className="font-bold text-gray-900 text-lg">1027mm</span>
                </div>
              </div>
            </motion.div>

            {/* Saída da Bobina */}
            <motion.div 
              className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-black/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E17E1C]/15 flex items-center justify-center">
                  <Sliders className="w-5 h-5 text-[#c46407]" />
                </div>
                <h4 className="font-bold text-gray-900 text-base">SAÍDA DA BOBINA</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Largura:</span>
                  <span className="font-bold text-[#c46407] text-lg">a partir de 40mm</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm">Diâmetro:</span>
                  <span className="font-bold text-gray-900 text-lg">1000mm</span>
                </div>
              </div>
            </motion.div>

            {/* Gramatura */}
            <motion.div 
              className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-black/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E17E1C]/15 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[#c46407]" />
                </div>
                <h4 className="font-bold text-gray-900 text-base">GRAMATURA</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Mínima:</span>
                  <span className="font-bold text-gray-900 text-lg">45 g/m²</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm">Máxima:</span>
                  <span className="font-bold text-gray-900 text-lg">600 g/m²</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


        {/* =========================================================================
            FLEXOGRAFIA & DIFERENCIAIS DO SERVIÇO
           ========================================================================= */}
        <div className="space-y-16">
          {/* Flexografia Box (Dark Card for Contrast) */}
          <motion.div 
            className="bg-[#181818] text-white rounded-3xl p-8 md:p-12 border border-black/20 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <span className="inline-block text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded bg-white/10 text-gray-300 self-start">
                IMPRESSÃO ROTATIVA DIRETA
              </span>
              <span className="text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#E17E1C] text-black self-start md:self-auto shadow">
                ALTA PRODUTIVIDADE
              </span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Flexografia <span className="text-[#E17E1C]">(Até 4 Cores)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-sm md:text-base leading-relaxed mb-10">
              <p>
                A flexografia é um processo de impressão rotativa direta que utiliza clichês flexográficos para transferir tinta ao substrato com alta precisão. Nossa estrutura permite impressão em até quatro cores.
              </p>
              <p>
                É um processo indicado para produções em larga escala, oferecendo alta produtividade, repetibilidade e qualidade constante, com otimização de custos para impressão em papéis de embalagem.
              </p>
            </div>

            {/* Benefits Grid */}
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
                VANTAGENS CHAVE &bull; PRINCIPAIS BENEFÍCIOS DA FLEXOGRAFIA
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {flexografiaBenefits.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="bg-[#242424] rounded-2xl p-4 border border-white/10 flex items-center gap-3.5 hover:border-[#E17E1C]/50 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#E17E1C]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#E17E1C]" />
                      </div>
                      <span className="text-sm font-semibold text-white">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Differentials Cards (White Cards on Orange Background) */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-extrabold tracking-widest uppercase mb-3 px-3.5 py-1.5 rounded-full bg-black text-white shadow">
                EXCELÊNCIA AG PAPÉIS
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-black">
                DIFERENCIAIS DO NOSSO SERVIÇO
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diferenciasServico.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div 
                    key={idx}
                    className="bg-white text-gray-900 rounded-2xl p-6 shadow-2xl border border-black/10 flex flex-col justify-between group hover:-translate-y-1 transition-transform"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#E17E1C]/15 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#c46407]" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM CTA BANNER
           ========================================================================= */}
        <div className="bg-black text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10">
          <div>
            <span className="text-xs font-black tracking-widest uppercase block text-[#E17E1C] mb-1">
              FALE COM UM ESPECIALISTA
            </span>
            <h4 className="font-serif font-extrabold text-2xl md:text-3xl text-white">
              SOLICITE SUA COTAÇÃO
            </h4>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Button 
              asChild 
              className="bg-[#E17E1C] hover:bg-[#c96c10] text-black font-bold rounded-full px-6 py-6 w-full sm:w-auto text-base shadow-lg border-none"
            >
              <a href="https://wa.me/5519993828731" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-black" />
                (19) 99382-8731
              </a>
            </Button>
            <Button 
              asChild 
              className="bg-white/10 hover:bg-white/20 text-white font-bold rounded-full px-6 py-6 w-full sm:w-auto text-base border border-white/20"
            >
              <a href="https://wa.me/5519967488878" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                (19) 99674-8878 (Ailton)
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
