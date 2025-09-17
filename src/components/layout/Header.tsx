import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

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
      {/* Sticky Header (capsule gradient) */}
      <header dir="rtl" className="sticky top-0 z-50 w-full">
        <div className="backdrop-blur supports-[backdrop-filter]:bg-transparent">
          <div
            className="
              mx-3 my-2
              rounded-2xl md:rounded-3xl
              bg-gradient-to-tr from-indigo-900 to-blue-600
              text-white
              shadow-[0_8px_24px_rgba(2,6,23,0.25)]
            "
          >
            <div className="flex items-center justify-between gap-3 px-3 md:px-4 h-12 md:h-14">
              {/* Menu trigger (left) */}
              <button
                className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-blue-600 hover:bg-blue-700 grid place-items-center transition-colors shadow-lg"
                onClick={() => setIsMenuOpen(true)}
                aria-label="باز کردن منو"
              >
                <Menu className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </button>

              {/* Title (center) */}
              <div className="flex-1 text-center">
                <Link to="/" className="inline-block">
                  <span className="text-sm md:text-base font-semibold tracking-tight">
                    پارک علم و فناوری
                  </span>
                </Link>
              </div>

              {/* Logo (right) */}
              <Link to="/" className="flex items-center justify-end w-9 md:w-10">
                <div className="h-8 w-8 md:h-9 md:w-9 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 p-1 flex items-center justify-center shadow-lg">
                  <img
                    src={logo}
                    alt="پارک علم و فناوری"
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 backdrop-blur-md bg-black/60"
            : "opacity-0 pointer-events-none backdrop-blur-none bg-black/0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Panel (RTL: سمت راست) */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        dir="rtl"
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-start mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="بستن منو"
            >
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block text-xl font-medium text-foreground py-4 px-4 rounded-xl transition-all duration-300 hover:bg-foreground/10 hover:translate-x-2 hover:shadow-lg border-b border-foreground/20 text-right ${
                  isActive(item.href) ? "bg-foreground/20 translate-x-1" : ""
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? "slide-in-right 0.6s ease-out forwards" : "none",
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
              className="w-full bg-primary text-primary-foreground text-lg py-6 rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link to="/search" onClick={() => setIsMenuOpen(false)}>
                شروع جستجو
              </Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
