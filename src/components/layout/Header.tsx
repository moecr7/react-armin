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
      {isMenuOpen && (
        <>
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 z-50 h-full w-80 bg-background shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Menu Items */}
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-lg font-medium text-foreground hover:text-primary py-3 border-b border-border"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Start Search Button */}
              <div className="mt-8">
                <Button 
                  asChild 
                  className="w-full gradient-primary text-lg py-6 rounded-xl"
                >
                  <Link to="/search" onClick={() => setIsMenuOpen(false)}>
                    شروع جستجو
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;