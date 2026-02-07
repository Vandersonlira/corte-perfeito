import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-primary text-xs font-body tracking-[0.3em] uppercase">
              Contato
            </span>
            <div className="h-px w-8 bg-primary/50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Venha nos <span className="text-gold-gradient italic">visitar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Rua Exemplo, 123 — Centro
                  <br />
                  São Paulo — SP, 01001-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Telefone / WhatsApp
                </h3>
                <p className="text-muted-foreground text-sm">
                  (11) 99999-9999
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Horário de Funcionamento
                </h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Segunda a Sexta: 9h — 20h</p>
                  <p>Sábado: 9h — 18h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="relative overflow-hidden rounded border border-border bg-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976831248866!2d-46.63611788502159!3d-23.55052128468026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sPra%C3%A7a%20da%20S%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da barbearia"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
