import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const AppHeader = () => {
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
      {/* Sticky header for all pages */}
      <header dir="rtl" className="sticky top-0 z-50 w-full">
        <div className="mx-2 my-2">
          {/* کپسول گرادیانی */}
          <div className="
            h-[64px] w-full rounded-[16px]
            bg-gradient-to-tr from-[#0F2F6A] to-[#1E4E9A]
            shadow-[0_8px_24px_rgba(2,6,23,0.25)]
          ">
            {/* گرید 3ستونه: [40px | 1fr | 40px] برای مرکز دقیق عنوان */}
            <div className="grid grid-cols-[40px_1fr_40px] items-center h-full px-3">
              {/* ستون 1 (سمت چپ بصری): لوگو */}
              <Link to="/" className="h-[40px] w-[40px] grid place-items-center">
                <img
                  src={logo}
                  alt="پارک علم و فناوری"
                  className="h-[36px] w-auto object-contain"
                />
              </Link>

              {/* ستون وسط: عنوان */}
              <div className="text-center">
                <Link to="/" className="inline-block">
                  <span className="text-white font-bold text-[18px] leading-none tracking-tight">
                    پارک علم و فناوری
                  </span>
                </Link>
              </div>

              {/* ستون 3 (سمت راست بصری): دکمه منو */}
              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="باز کردن منو"
                className="
                  h-[40px] w-[40px] rounded-[12px]
                  bg-[#3B6BFF] hover:bg-[#2F59E0]
                  grid place-items-center transition-colors
                "
              >
                <Menu className="w-[20px] h-[20px] text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* اوورلی منو */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 backdrop-blur-md bg-black/60"
            : "opacity-0 pointer-events-none backdrop-blur-none bg-black/0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* پنل منو از سمت راست */}
      <aside
        dir="rtl"
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* بستن */}
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

          {/* آیتم‌ها */}
          <nav className="space-y-2">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block text-xl font-medium text-foreground py-4 px-4 rounded-xl transition-all duration-300 hover:bg-foreground/10 hover:translate-x-2 hover:shadow-lg border-b border-foreground/20 text-right ${
                  isActive(item.href) ? "bg-foreground/20 translate-x-1" : ""
                }`}
                style={{
                  animationDelay: `${i * 100}ms`,
                  animation: isMenuOpen ? "slide-in-right 0.6s ease-out forwards" : "none",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
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

export default AppHeader;
