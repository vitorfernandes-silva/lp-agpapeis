"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#produtos", label: "Produtos" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent pt-6 pb-4"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            {/* Se houver uma versão branca do logo, ela poderia ser trocada condicionalmente aqui. */}
            <Image
              src="/images/logo-agpapeis.jpeg"
              alt="AG Papéis"
              width={180}
              height={50}
              className="h-12 w-auto rounded-md" // rounded-md added to make the jpeg background look like a neat badge if it's not transparent
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 transition-colors font-medium text-sm tracking-wide uppercase text-white/90 hover:text-white group"
              >
                {link.label}
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black/20 group-hover:bg-black/40 transition-colors">
                  <ChevronDown className="w-3.5 h-3.5 text-[#F09436]" strokeWidth={3} />
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-[#F09436] hover:bg-[#e07d1a] text-white rounded-full px-6 font-medium border-none">
              <Link href="#contato">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-background/95 backdrop-blur-sm rounded-lg mt-4 p-4 shadow-xl border border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between text-foreground hover:text-[#F09436] transition-colors font-medium py-2 uppercase tracking-wide text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 text-[#F09436]" />
                </Link>
              ))}
              <Button asChild className="bg-[#F09436] hover:bg-[#e07d1a] text-white rounded-full w-full mt-2">
                <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
