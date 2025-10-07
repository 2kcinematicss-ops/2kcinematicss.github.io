"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Film, Camera, Video, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const whatsappNumber = "5519981824892"
  const message = "Olá! Vim através do site da 2K Cinematics e gostaria de solicitar um orçamento."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const photos = [
    { src: "/images/design-mode/FOTO-1.png", alt: "Sorradinho - Evento Social", title: "Evento 1" },
    { src: "/images/design-mode/FOTO-2.png", alt: "Evento 2", title: "Evento 2" },
    { src: "/images/design-mode/FOTO-3.png", alt: "Evento 3", title: "Evento 3" },
    { src: "/images/design-mode/FOTO-4.png", alt: "Evento 4", title: "Evento 4" },
    { src: "/images/design-mode/FOTO-5.png", alt: "Evento 5", title: "Evento 5" },
    { src: "/images/design-mode/image.png", alt: "Evento 6", title: "Evento 6" },
    { src: "/images/design-mode/image.png", alt: "Evento 7", title: "Evento 7" },
    { src: "/images/design-mode/image.png", alt: "Evento 8", title: "Evento 8" },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === photos.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,87,51,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,87,51,0.1),transparent_50%)]" />

        <div className="absolute left-5 top-10 h-20 w-20 animate-float rounded-full bg-primary/5 blur-2xl md:left-10 md:top-20 md:h-32 md:w-32 md:blur-3xl" />
        <div
          className="absolute bottom-10 right-5 h-24 w-24 animate-float rounded-full bg-primary/5 blur-2xl md:bottom-20 md:right-10 md:h-40 md:w-40 md:blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="animate-fade-in-up mb-8 flex justify-center md:mb-16">
            <div className="relative">
              <div className="absolute inset-0 animate-glow rounded-lg blur-xl" />
              <Image
                src="/images/design-mode/Imagem%20do%20WhatsApp%20de%202025-09-24%20%C3%A0%28s%29%2010.39.55_fb46d23e.jpg"
                alt="2K Cinematics"
                width={500}
                height={250}
                className="relative max-w-[280px] drop-shadow-2xl md:max-w-lg w-full h-auto leading-7"
                priority
              />
            </div>
          </div>

          <h1
            className="animate-fade-in-up mb-6 hidden text-balance font-sans text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:mb-8 md:block md:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.2s" }}
          >
            Transforme Suas Ideias em{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Realidade Cinematográfica
              </span>
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-primary via-primary to-primary/80 opacity-30" />
            </span>
          </h1>

          <h1
            className="animate-fade-in-up mb-6 block text-balance font-sans text-3xl font-bold leading-tight tracking-tight text-foreground md:hidden"
            style={{ animationDelay: "0.2s" }}
          >
            Produção{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Cinematográfica
              </span>
            </span>
            <br />
            Profissional
          </h1>

          <div
            className="animate-fade-in-up mb-10 flex items-center justify-center gap-2 md:mb-16"
            style={{ animationDelay: "0.4s" }}
          >
            <Sparkles className="hidden h-5 w-5 text-primary md:block" />
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-2xl lg:text-3xl">
              <span className="md:hidden">Eleve sua marca com vídeos profissionais</span>
              <span className="hidden md:inline">Produção audiovisual profissional para elevar sua marca</span>
            </p>
            <Sparkles className="hidden h-5 w-5 text-primary md:block" />
          </div>

          <div className="animate-fade-in-up flex flex-col items-center gap-6" style={{ animationDelay: "0.6s" }}>
            <div className="relative w-full md:w-auto">
              <div className="absolute -inset-1 animate-glow rounded-2xl bg-gradient-to-r from-primary via-primary to-primary/80 opacity-75 blur-lg" />
              <Button
                asChild
                size="lg"
                className="group relative h-auto w-full gap-3 bg-primary px-8 py-6 text-lg font-bold text-primary-foreground shadow-2xl transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/50 md:w-auto md:px-12 md:py-8 md:text-2xl"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-12 group-hover:scale-110 md:h-7 md:w-7" />
                  <span className="md:hidden">Solicitar Orçamento</span>
                  <span className="hidden md:inline">Fale Comigo no WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          <div
            className="animate-fade-in-up mt-16 flex flex-col gap-4 border-t border-border/50 pt-12 md:mt-24 md:grid md:grid-cols-3 md:gap-6 md:pt-16"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/50 hover:bg-card hover:shadow-xl hover:shadow-primary/10 md:flex-col md:p-8">
              <div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 transition-all group-hover:from-primary/30 group-hover:to-primary/10 group-hover:shadow-lg group-hover:shadow-primary/20 md:p-5">
                <Film className="h-8 w-8 text-primary transition-transform group-hover:scale-110 md:h-10 md:w-10" />
              </div>
              <div className="flex-1 text-left md:text-center">
                <p className="mb-1 text-base font-semibold text-foreground md:mb-0 md:text-lg">Produção de Vídeo</p>
                <p className="text-sm text-muted-foreground md:mt-2">Conteúdo cinematográfico de alta qualidade</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/50 hover:bg-card hover:shadow-xl hover:shadow-primary/10 md:flex-col md:p-8">
              <div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 transition-all group-hover:from-primary/30 group-hover:to-primary/10 group-hover:shadow-lg group-hover:shadow-primary/20 md:p-5">
                <Camera className="h-8 w-8 text-primary transition-transform group-hover:scale-110 md:h-10 md:w-10" />
              </div>
              <div className="flex-1 text-left md:text-center">
                <p className="mb-1 text-base font-semibold text-foreground md:mb-0 md:text-lg">Fotografia</p>
                <p className="text-sm text-muted-foreground md:mt-2">Imagens profissionais que contam histórias</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/50 hover:bg-card hover:shadow-xl hover:shadow-primary/10 md:flex-col md:p-8">
              <div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 transition-all group-hover:from-primary/30 group-hover:to-primary/10 group-hover:shadow-lg group-hover:shadow-primary/20 md:p-5">
                <Video className="h-8 w-8 text-primary transition-transform group-hover:scale-110 md:h-10 md:w-10" />
              </div>
              <div className="flex-1 text-left md:text-center">
                <p className="mb-1 text-base font-semibold text-foreground md:mb-0 md:text-lg">Edição Profissional</p>
                <p className="text-sm text-muted-foreground md:mt-2">Pós-produção com atenção aos detalhes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Gallery Section */}
      <section className="relative overflow-hidden border-t border-border/50 px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-balance font-sans text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Nosso{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  Portfólio
                </span>
                <span className="absolute inset-0 blur-lg bg-gradient-to-r from-primary via-primary to-primary/80 opacity-30" />
              </span>
            </h2>
            <p className="text-pretty text-base text-muted-foreground md:text-xl">
              Confira alguns dos nossos trabalhos em eventos e produções
            </p>
          </div>

          {/* Videos Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="mb-6 text-xl font-semibold text-foreground md:text-2xl">Vídeos</h3>
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Video 1 */}
              <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/xniRiS0SrdI"
                    title="Vídeo 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-sm font-semibold text-foreground md:text-base">Yamaha Corporative Private Event</p>
                  <p className="text-xs text-muted-foreground md:text-sm">festa privada yamaha</p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/bPgCKBqEXZo"
                    title="Vídeo 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-sm font-semibold text-foreground md:text-base">Lançamento BMW X3 M50</p>
                  <p className="text-xs text-muted-foreground md:text-sm">bmw x3 m50</p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/LcHT2Kl472M"
                    title="Vídeo 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-sm font-semibold text-foreground md:text-base">Lançamento Mini Cooper Aceman S</p>
                  <p className="text-xs text-muted-foreground md:text-sm">mini cooper aceman s</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photos Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground md:text-2xl">Fotos</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:from-black/60 md:via-transparent md:opacity-0 md:transition-opacity md:group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white md:p-4 md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
                    <p className="text-xs font-semibold md:text-sm">{photo.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center md:mt-16">
            <Button
              asChild
              size="lg"
              className="group gap-3 bg-primary px-8 py-6 text-lg font-bold text-primary-foreground shadow-xl transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/50"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Solicite Seu Orçamento
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Viewing Photos */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 rounded-full bg-primary/20 p-2 text-white transition-all hover:bg-primary/30 hover:scale-110"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 z-50 rounded-full bg-primary/20 p-2 text-white transition-all hover:bg-primary/30 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 z-50 rounded-full bg-primary/20 p-2 text-white transition-all hover:bg-primary/30 hover:scale-110 md:right-20"
            aria-label="Próxima"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image container */}
          <div className="relative h-[80vh] w-[90vw] md:h-[85vh] md:w-[80vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[selectedImage].src || "/placeholder.svg"}
              alt={photos[selectedImage].alt}
              fill
              className="object-contain"
              priority
            />
            {/* Image title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
              <p className="text-lg font-semibold text-white">{photos[selectedImage].title}</p>
            </div>
          </div>
        </div>
      )}

      <footer className="relative border-t border-border/50 bg-card/30 py-12 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">Direção e Produção</p>
            <p className="text-lg font-bold text-primary">Kevin Prado & Keendy William</p>
          </div>

          <div className="border-t border-border/30 pt-6 text-center">
            <p className="text-sm text-muted-foreground">© 2025 2K Cinematics. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
