import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png"; // لوگوی طلایی/زرد سمت راست

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
      {/* Sticky Header - سبک تصویر */}
      <header dir="rtl" className="fixed top-0 left-0 right-0 z-50">
        <div className="px-3">
          <div className="relative flex items-center justify-between h-12">
            {/* دکمه منو (سمت چپ بصری) */}
            <button
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              onClick={() => setIsMenuOpen(true)}
              aria-label="باز کردن منو"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-3/4 h-0.5 bg-white rounded-full" />
                <span className="w-full h-0.5 bg-white rounded-full" />
              </div>
            </button>

            {/* عنوان وسط */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="block">
                <span className="text-base md:text-lg font-bold text-white drop-shadow-sm whitespace-nowrap">
                  پارک علم و فناوری
                </span>
              </Link>
            </div>

            {/* لوگو سمت راست */}
            <Link to="/" className="flex items-center justify-center">
              <img
                src={logo}
                alt="پارک علم و فناوری"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* فاصله برای محتوای زیر هدر */}
      <div className="h-12" />

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 backdrop-blur-md bg-black/60"
            : "opacity-0 pointer-events-none backdrop-blur-none bg-black/0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* پنل منو */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        dir="rtl"
      >
        <div className="p-6">
          {/* دکمه بستن */}
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

          {/* آیتم‌های منو */}
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

          {/* دکمه شروع جستجو */}
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
