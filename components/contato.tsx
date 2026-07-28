"use client"

import { MessageCircle, Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react"

export function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[#0d0d0d] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #25D366 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F09436 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(37, 211, 102, 0.1)",
              color: "#25D366",
              border: "1px solid rgba(37, 211, 102, 0.2)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Fale Conosco
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para solicitar sua cotação?
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Atendimento direto e sem burocracia. Fale com nosso time de especialistas pelo WhatsApp ou através dos nossos canais de atendimento.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Big WhatsApp CTA Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#16271c] via-[#1c241e] to-[#121c15] border border-emerald-500/25 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient inner glow */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-8 shadow-inner">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>

              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                Atendimento Instantâneo
              </span>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Chame a AG Papéis no WhatsApp
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Tire dúvidas sobre medidas, gramaturas e receba um orçamento personalizado para sua empresa de forma rápida e prática.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <a
                href="https://wa.me/5519993828731"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 group/btn"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>Solicitar Cotação no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-xs text-emerald-400/80 mt-4 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                Atendimento ativo em horário comercial
              </p>
            </div>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1c1c1c] to-[#252525] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-6 pb-4 border-b border-white/10">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F09436]/15 border border-[#F09436]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F09436]/25 transition-colors">
                    <MapPin className="w-6 h-6 text-[#F09436]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                      Endereço
                    </p>
                    <a
                      href="https://maps.google.com/?q=Rua+José+Graziano+111+Distrito+Industrial+III+Araras+SP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#F09436] font-medium text-sm md:text-base leading-snug transition-colors block"
                    >
                      Rua José Graziano, 111<br />
                      Distrito Industrial III – Araras - SP
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                      Telefone
                    </p>
                    <a
                      href="tel:+5519993828731"
                      className="text-white hover:text-primary font-medium text-base transition-colors"
                    >
                      (19) 99382-8731
                    </a>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                      E-mail
                    </p>
                    <a
                      href="mailto:contato@agpapeis.com.br"
                      className="text-white hover:text-primary font-medium text-base transition-colors break-all"
                    >
                      contato@agpapeis.com.br
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                      Horário de atendimento
                    </p>
                    <p className="text-white font-medium text-base">
                      Segunda a Sexta, 7h30 às 17h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
