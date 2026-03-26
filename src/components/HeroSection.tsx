import heroImg from "@/assets/hero-solar.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    />
    <div className="absolute inset-0 bg-foreground/50" />
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

    <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
      <div className="max-w-2xl lg:mx-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-primary-foreground mb-6">
          CONSTRUINDO CAMINHOS DO SOL ATÉ VOCÊ!
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-medium">
          Ajudamos empresas e pessoas a mudar sua relação com a energia!
        </p>
        <a
          href="https://wa.me/5512997750212"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg animate-pulse-glow hover:scale-105 transition-transform"
        >
          Comece a economizar agora!
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
