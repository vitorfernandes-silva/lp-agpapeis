import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#produtos", label: "Produtos" },
    { href: "#contato", label: "Contato" },
  ]

  const socialLinks = [
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://wa.me/5519993828731", icon: MessageCircle, label: "WhatsApp" },
  ]

  return (
    <footer className="bg-[#2C2A2A] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="bg-white p-3 rounded-lg">
            <Image
              src="/images/logo-agpapeis.jpeg"
              alt="AG Papéis"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© 2025 AG Papéis. Todos os direitos reservados.</p>
            <Link href="/privacidade" className="hover:text-primary transition-colors">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
