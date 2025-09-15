import { Button } from "@/components/ui/button";
import { Play, ArrowLeft, Star } from "lucide-react";
import heroImage from "@/assets/hero-app-showcase.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/5"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary-light/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-card/20 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary-foreground">پلتفرم برتر کسب‌وکار</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                مدیریت هوشمند
                <span className="block text-primary-light">کسب‌وکار شما</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto lg:mx-0">
                با ابزارهای پیشرفته تحلیل داده، مدیریت مالی و گزارش‌گیری دقیق، کسب‌وکارتان را به سطح جدیدی برسانید
              </p>
            </div>

            {/* Statistics */}
            <div className="flex justify-center lg:justify-start items-center space-x-8 rtl:space-x-reverse text-primary-foreground/90">
              <div className="text-center">
                <div className="text-2xl font-bold">+۱۰۰۰</div>
                <div className="text-sm opacity-75">کاربر فعال</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">۹۸٪</div>
                <div className="text-sm opacity-75">رضایت مشتری</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">۲۴/۷</div>
                <div className="text-sm opacity-75">پشتیبانی</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <Button size="lg" className="bg-card text-primary hover:bg-card/90 shadow-large transition-bounce">
                <ArrowLeft className="ml-2 h-5 w-5 rtl:rotate-180" />
                شروع رایگان
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-smooth"
              >
                <Play className="ml-2 h-5 w-5" />
                مشاهده دمو
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 shadow-large rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Business App Dashboard"
                className="w-full h-auto transition-smooth hover:scale-105"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 gradient-secondary rounded-xl shadow-medium opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/30 rounded-lg shadow-soft opacity-80 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;