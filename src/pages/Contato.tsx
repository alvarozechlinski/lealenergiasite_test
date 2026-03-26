import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import solarField from "@/assets/solar-field.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContatoPage = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solarField})` }} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">Contato</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Entre em contato e solicite seu orçamento sem compromisso.
        </p>
      </div>
    </section>

    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Fale <span className="text-gradient">Conosco</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">São José dos Campos – SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Telefone / WhatsApp</h4>
                    <a href="https://wa.me/5512997750212" className="text-primary hover:underline">(12) 99775-0212</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">E-mail</h4>
                    <a href="mailto:contato@lealenergia.com.br" className="text-primary hover:underline">contato@lealenergia.com.br</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 08h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/5512997750212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-muted/30 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
                  const msg = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value;
                  window.open(`https://wa.me/5512997750212?text=${encodeURIComponent(`Olá! Meu nome é ${nome}. ${msg}`)}`, "_blank");
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
                  <input id="nome" name="nome" type="text" required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
                  <input id="email" name="email" type="email" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium mb-1">Telefone</label>
                  <input id="telefone" name="telefone" type="tel" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors" placeholder="(12) 99999-9999" />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows={4} required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Como podemos ajudar?" />
                </div>
                <button type="submit" className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <Footer />
  </div>
);

export default ContatoPage;
