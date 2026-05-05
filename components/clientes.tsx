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
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-center font-sans text-xl font-medium tracking-tight text-muted-foreground md:text-2xl">
          Parceiros que confiam em nós.
        </h2>
        <p className="mb-2 text-center font-sans text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Empresas que escolheram a AG Papéis.
        </p>
        
        <div className="mx-auto my-6 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={clientLogos} />

        <div className="mx-auto mt-6 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
}
