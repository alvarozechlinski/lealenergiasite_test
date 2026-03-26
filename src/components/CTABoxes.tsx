const boxes = [
  {
    title: "Quer reduzir os custos da sua residência ou comércio?",
    highlight: "reduzir",
    cta: "Comece a economizar!",
    href: "https://wa.me/5512997750212",
  },
  {
    title: "Sua empresa ou indústria precisa de soluções em energia?",
    highlight: "soluções",
    cta: "CONHEÇA AS SOLUÇÕES!",
    href: "https://wa.me/5512997750212",
  },
  {
    title: "Quer o sol trabalhando por você? Entenda como!",
    highlight: "trabalhando",
    cta: "DESCUBRA COMO!",
    href: "https://wa.me/5512997750212",
  },
];

const CTABoxes = () => (
  <section id="solucoes" className="grid lg:grid-cols-3">
    {boxes.map((box, i) => (
      <div
        key={i}
        className={`gradient-primary${i > 0 ? "-reverse" : ""} py-16 px-8 text-center flex flex-col items-center justify-center min-h-[320px]`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
          {box.title.split(box.highlight).map((part, j) =>
            j === 0 ? (
              <span key={j}>
                {part}
                <span className="text-accent">{box.highlight}</span>
              </span>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </h2>
        <a
          href={box.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 rounded-lg bg-background text-foreground font-bold hover:scale-105 transition-transform shadow-lg"
        >
          {box.cta}
        </a>
      </div>
    ))}
  </section>
);

export default CTABoxes;
