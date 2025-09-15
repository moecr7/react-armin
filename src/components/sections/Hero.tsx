import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Map, Building2, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-homepage-frame50.jpg";
import secondaryImage from "@/assets/secondary-homepage-frame72.jpg";

const Hero = () => {
  return (
    <>
      {/* Main Hero Section - Frame 50 */}
      <section className="min-h-screen relative overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="پارک علم و فناوری"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                  پارک علم و فناوری
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  مرکز نوآوری و توسعه فناوری که محیطی مناسب برای رشد کسب‌وکارهای دانش‌بنیان فراهم می‌کند
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-xl shadow-large hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link to="/search">
                    شروع جستجو
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Link to="/map">
                    مشاهده نقشه
                    <Map className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-accent">۱۲۰+</div>
                  <div className="text-primary-foreground/80">شرکت فعال</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-accent">۲۵+</div>
                  <div className="text-primary-foreground/80">واحد فناوری</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-accent">۵۰۰+</div>
                  <div className="text-primary-foreground/80">فارغ‌التحصیل</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-accent">۱۰+</div>
                  <div className="text-primary-foreground/80">سال فعالیت</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Section - Frame 72 */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-large">
                <img 
                  src={secondaryImage} 
                  alt="محیط کاری پارک علم و فناوری"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  محیطی برای
                  <span className="block text-accent">نوآوری و خلاقیت</span>
                </h2>
                <div className="w-16 h-1 bg-accent rounded-full"></div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                پارک علم و فناوری با ارائه امکانات مدرن و خدمات تخصصی، بستری مناسب برای توسعه ایده‌های نوآورانه و تبدیل آن‌ها به محصولات و خدمات کاربردی فراهم می‌آورد.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-foreground font-medium">مشاوره تخصصی</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-foreground font-medium">دسترسی به بازار</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-foreground font-medium">حمایت مالی</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-foreground font-medium">شبکه‌سازی</span>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
              >
                <Link to="/company/1">
                  بیشتر بدانید
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;