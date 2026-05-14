"use client";

import { LogoCloud } from "@/components/ui/logo-cloud";

const clientLogos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tpack_logo-a5gSl2EkUu9TDf09fAo5sOjZOyGZvD.jpg",
    alt: "TPACK Embalagens",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vtc_embalagens_logo-Mj7ixu7G71kawgDSJNiD60jGvQa0bE.png",
    alt: "VTC",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/embaleme_logo-bS2j2JSyObjeeMlrejH5upQOhjGois.png",
    alt: "Embaleme Embalagens & Festas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lacopah_logo-yyp2VtjVd0k00L2hCo6Gvd4AMNudpQ.png",
    alt: "Lacopah",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comdescart_logo-bh6QKVFvcgPWhwyZNotaH5EiRte9Wp.jpg",
    alt: "Comdescart",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sonoco_logo-SzrhdBYoq8gr3Q9Ls9SGctrs5Dl4bu.png",
    alt: "Sonoco",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-esRQKn52lgg01hqs8LtQrehkdBxppE.png",
    alt: "Richester",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casa_das_embalagens_logo-Wwj7I09AqyeKSAoDVbrktE4S9JQl9O.png",
    alt: "Casa das Embalagens",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comercial_santa_helena_logo-c737EGzIMsPGUVm8i6NsjnIBsurYB6.png",
    alt: "Santa Helena",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plaspel_logo-a9RonMGrhuvyhNeOICPHJ3EWDI8ml3.png",
    alt: "Plaspel Embalagens",
  },
];

export function Clientes() {
  return (
    <section className="relative bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <span
          className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(240, 148, 54, 0.1)",
            color: "#F09436",
            border: "1px solid rgba(240, 148, 54, 0.2)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#F09436] animate-pulse" />
          Nossos Parceiros
        </span>
        <h2 className="mb-8 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
          Empresas que escolheram a AG Papéis
        </h2>
        
        <div className="mx-auto my-6 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={clientLogos} />

        <div className="mx-auto mt-6 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
}
