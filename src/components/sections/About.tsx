import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import techDeveloper from "@/assets/tech-developer.jpg";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "مرکز نوآوری",
      description: "میزبان شرکت‌های دانش‌بنیان در حوزه‌های مختلف فناوری"
    },
    {
      icon: Users,
      title: "همکاری تیمی", 
      description: "فضایی برای همکاری و شبکه‌سازی میان استارت‌اپ‌ها"
    },
    {
      icon: Target,
      title: "هدف محور",
      description: "تمرکز بر رشد و توسعه کسب‌وکارهای فناورانه"
    },
    {
      icon: Lightbulb,
      title: "ایده پردازی",
      description: "محیطی مناسب برای تولید و توسعه ایده‌های نوین"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            درباره <span className="text-primary">پارک</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              پارک علم و فناوری میزبان شرکت‌های دانش‌بنیان در 
              حوزه‌های مختلف است. هدف ما ایجاد زیرساختی 
              برای رشد نوآوری و تسهیل همکاری بین صنعت و 
              دانشگاه است. در این وب‌اپ می‌توانید درباره 
              شرکت‌ها بخوانید و برای جستجو یا مسیریابی از 
              متعاملات مربوطه مراجعه کنید.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Image */}
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={techDeveloper} 
                    alt="توسعه‌دهنده فناوری در حال کار"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold">مرکز نوآوری</h4>
                      <p className="text-primary-foreground/90">محیطی برای رشد ایده‌ها</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gradient-primary shadow-medium">
            <Link to="/search">
              شروع جستجو
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/companies">
              مشاهده نقشه
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;