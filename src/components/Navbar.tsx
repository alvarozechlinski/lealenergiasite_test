import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-leal.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Notícias", href: "/noticias" },
  { label: "São José dos Campos", href: "/sao-jose-dos-campos" },
  { label: "Contato", href: "/contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav className="container mx-auto flex items-center justify-between rounded-full bg-background/90 backdrop-blur-md px-6 py-2 shadow-md border border-border">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Leal Energia" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5512997750212"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Entre em contato
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mt-2 mx-4 rounded-2xl bg-background/95 backdrop-blur-md border border-border shadow-lg p-6 animate-fade-in">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Entre em contato
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
