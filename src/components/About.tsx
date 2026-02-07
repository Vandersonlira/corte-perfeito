import barberPortrait from "@/assets/barber-portrait.jpg";
import { Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Anos de Experiência" },
  { icon: Users, value: "5.000+", label: "Clientes Atendidos" },
  { icon: Award, value: "100%", label: "Satisfação" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded">
              <img
                src={barberPortrait}
                alt="Barbeiro profissional com navalha"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-primary/50" />
              <span className="text-primary text-xs font-body tracking-[0.3em] uppercase">
                Sobre Nós
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tradição que se{" "}
              <span className="text-gold-gradient italic">renova</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Com mais de 10 anos de experiência, nossa barbearia é referência
              em cortes masculinos e cuidados com a barba. Cada cliente recebe
              atenção personalizada em um ambiente acolhedor e sofisticado.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Utilizamos produtos premium e técnicas tradicionais combinadas com
              as tendências mais atuais para garantir que você saia sempre com o
              melhor visual.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-card rounded border border-border">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
