import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Macias Landscape LLC"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-[#2d5016] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-foreground hover:text-[#2d5016] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-foreground hover:text-[#2d5016] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/government"
              className="px-4 py-2 rounded-md bg-[#4a5f5e] text-white hover:bg-[#3a4f4e] transition-colors"
            >
              Government Portal
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:+17202510341" className="flex items-center space-x-2 text-foreground hover:text-[#2d5016]">
              <Phone className="w-4 h-4" />
              <span className="text-sm">720 251 0341</span>
            </a>
            <Link to="/contact">
              <Button
                className="text-white"
                style={{ backgroundColor: '#0284c7' }}
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-[#2d5016] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-[#2d5016] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-foreground hover:text-[#2d5016] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/government"
                className="text-foreground hover:text-[#2d5016] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Government Portal
              </Link>
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:+17202510341"
                  className="flex items-center space-x-2 text-foreground py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>720 251 0341</span>
                </a>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full mt-2 text-white"
                    style={{ backgroundColor: '#0284c7' }}
                  >
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
