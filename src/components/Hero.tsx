import heroImage from "@/assets/hero-barber.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior da barbearia com cadeira vintage e iluminação quente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-body tracking-[0.3em] uppercase">
              Tradição & Estilo
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            A Arte do{" "}
            <span className="text-gold-gradient italic">Corte</span>
            <br />
            Perfeito
          </h1>

          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Mais do que um corte de cabelo — uma experiência de cuidado masculino com atenção a cada detalhe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Agendar Horário
            </a>
            <a
              href="#servicos"
              className="px-8 py-4 border border-primary/40 text-foreground font-semibold tracking-wider uppercase text-sm rounded hover:border-primary hover:text-primary transition-all duration-300"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
