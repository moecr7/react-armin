import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoGolden from "@/assets/logo-golden.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "خانه" },
    { href: "/search", label: "جستجو" },
    { href: "/map", label: "نقشه" },
    { href: "/company/1", label: "جزئیات شرکت" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-medium">
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary/90 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo and Title */}
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-lg font-bold text-primary-foreground">
                  پارک علم و فناوری
                </span>
              </div>
            </Link>

            {/* Logo */}
            <Link to="/">
              <img src={logoGolden} alt="لوگو" className="h-10 w-10 rounded-full" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${isMenuOpen 
          ? 'opacity-100 backdrop-blur-md bg-black/60' 
          : 'opacity-0 pointer-events-none backdrop-blur-none bg-black/0'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Menu Panel */}
      <div className={`fixed top-0 right-0 z-50 h-full w-80 bg-primary shadow-2xl transform transition-all duration-500 ease-out ${isMenuOpen 
        ? 'translate-x-0' 
        : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block text-xl font-medium text-primary-foreground py-4 px-4 rounded-xl transition-all duration-300 hover:bg-primary-foreground/10 hover:translate-x-2 hover:shadow-lg border-b border-primary-foreground/20 ${
                  isActive(item.href) ? 'bg-primary-foreground/20 translate-x-1' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? 'slide-in-right 0.6s ease-out forwards' : 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Start Search Button */}
          <div className="mt-10">
            <Button 
              asChild 
              className="w-full bg-primary-foreground text-primary text-lg py-6 rounded-xl hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link to="/search" onClick={() => setIsMenuOpen(false)}>
                شروع جستجو
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;