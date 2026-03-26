import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Equipe bem atenciosa, bem profissional! Bem atendido desde a área comercial até a entrega do serviço instalado! Ressaltando também o retorno do pós venda pelo interesse em saber da satisfação após as primeiras contas!",
    author: "Carlos Azevedo",
    role: "Sistema Residencial",
  },
  {
    text: "Excelente lugar e de fácil acesso! Muito impressionado com a infraestrutura da empresa! Além do produto ser de primeira linha, a confiabilidade e o tratamento aos clientes, inquestionável. Parabéns Leal Energia por seu trabalho! Recomendo!",
    author: "Cezar Justino",
    role: "Sistema Residencial",
  },
  {
    text: "Fomos muito bem atendidos pela Leal Energia Solar! Equipe de instalação muito experiente, muito obrigado pelo serviço prestado! Ótimo investimento!",
    author: "João",
    role: "Planta Industrial",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="depoimentos" className="py-20 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary-foreground/40 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-primary-foreground mb-8 leading-relaxed font-medium">
            {t.text}
          </p>
          <p className="text-primary-foreground font-bold text-lg">{t.author}</p>
          <p className="text-primary-foreground/70 text-sm">{t.role}</p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === current ? "bg-primary-foreground" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
