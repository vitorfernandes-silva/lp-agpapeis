import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Sobre } from "@/components/sobre"
import { Diferenciais } from "@/components/diferenciais"
import { Produtos } from "@/components/produtos"
import { Contato } from "@/components/contato"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Diferenciais />
      <Produtos />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
