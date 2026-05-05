"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MessageCircle, Mail, Phone, Clock } from "lucide-react"

export function Contato() {
  const [isWhatsApp, setIsWhatsApp] = useState(false)

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#3A3535]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-[#4A4444] rounded-2xl p-6 md:p-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
              Solicite um orçamento
            </h2>
            <p className="text-white/70 mb-8">
              Preencha o formulário e nossa equipe entrará em contato em até 24h.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input 
                  placeholder="Nome completo"
                  className="bg-[#3A3535] border-[#5A5454] text-white placeholder:text-white/50 h-12"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Empresa"
                  className="bg-[#3A3535] border-[#5A5454] text-white placeholder:text-white/50 h-12"
                />
              </div>
              
              <div className="space-y-3">
                <Input 
                  placeholder="Telefone"
                  type="tel"
                  className="bg-[#3A3535] border-[#5A5454] text-white placeholder:text-white/50 h-12"
                />
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="whatsapp" 
                    checked={isWhatsApp}
                    onCheckedChange={(checked) => setIsWhatsApp(checked as boolean)}
                    className="border-white/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label htmlFor="whatsapp" className="text-white/70 text-sm cursor-pointer">
                    Este número é WhatsApp
                  </label>
                </div>
              </div>
              
              <div>
                <Input 
                  placeholder="E-mail"
                  type="email"
                  className="bg-[#3A3535] border-[#5A5454] text-white placeholder:text-white/50 h-12"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Mensagem"
                  rows={4}
                  className="bg-[#3A3535] border-[#5A5454] text-white placeholder:text-white/50 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-base font-semibold"
              >
                Enviar solicitação
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
                Fale diretamente com a gente
              </h3>
              
              <Button 
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-14 text-base font-semibold"
              >
                <a href="https://wa.me/5519993828731" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="w-full h-px bg-white/20" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">E-mail</p>
                  <a href="mailto:contato@agpapeis.com.br" className="text-white hover:text-primary transition-colors">
                    contato@agpapeis.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Telefone</p>
                  <a href="tel:+5519993828731" className="text-white hover:text-primary transition-colors">
                    (19) 99382-8731
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Horário de atendimento</p>
                  <p className="text-white">Seg–Sex 8h às 18h</p>
                </div>
              </div>
            </div>

            <p className="text-white/50 text-sm">
              Atendemos empresas e distribuidores em todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
