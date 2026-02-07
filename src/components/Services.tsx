import { Scissors, Droplets, Sparkles } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte Masculino",
    description: "Corte personalizado com técnicas modernas e acabamento impecável.",
    price: "R$ 45",
    duration: "40 min",
  },
  {
    icon: Scissors,
    title: "Corte + Barba",
    description: "Combo completo com corte de cabelo e barba alinhada com navalha.",
    price: "R$ 70",
    duration: "1h",
  },
  {
    icon: Droplets,
    title: "Barba Completa",
    description: "Barba desenhada com toalha quente, navalha e produtos premium.",
    price: "R$ 35",
    duration: "30 min",
  },
  {
    icon: Sparkles,
    title: "Degradê",
    description: "Corte degradê com transição perfeita e acabamento com máquina.",
    price: "R$ 50",
    duration: "45 min",
  },
  {
    icon: Scissors,
    title: "Corte Infantil",
    description: "Corte especial para crianças com paciência e cuidado.",
    price: "R$ 35",
    duration: "30 min",
  },
  {
    icon: Sparkles,
    title: "Pigmentação",
    description: "Pigmentação capilar para cobertura de fios brancos com acabamento natural.",
    price: "R$ 60",
    duration: "45 min",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-primary text-xs font-body tracking-[0.3em] uppercase">
              Nossos Serviços
            </span>
            <div className="h-px w-8 bg-primary/50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            O que <span className="text-gold-gradient italic">oferecemos</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 bg-card rounded border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Price & Duration */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-display text-2xl font-bold text-primary">
                  {service.price}
                </span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
