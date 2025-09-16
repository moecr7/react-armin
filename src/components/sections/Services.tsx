import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, CheckCircle } from "lucide-react";
import officeCollaboration from "@/assets/office-collaboration.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "خدمات اداری",
      description: "ارائه خدمات اداری و پشتیبانی کسب‌وکار",
      features: ["مدیریت اسناد", "خدمات حقوقی", "مشاوره کسب‌وکار"],
      popular: false
    },
    {
      icon: Users,
      title: "فضای کاری مشترک",
      description: "محیط کاری مدرن برای تیم‌ها و استارت‌اپ‌ها",
      features: ["فضای انعطاف‌پذیر", "اتاق جلسات", "امکانات فناوری"],
      popular: true
    },
    {
      icon: Target,
      title: "شتاب‌دهنده کسب‌وکار",
      description: "برنامه‌های شتاب‌دهی برای شرکت‌های نوپا",
      features: ["منتورینگ", "سرمایه‌گذاری", "شبکه‌سازی"],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            خدمات <span className="text-primary">پارک</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای از خدمات تخصصی برای رشد و توسعه کسب‌وکارهای فناورانه
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 relative">
                  {service.popular && (
                    <Badge className="absolute -top-2 right-4 bg-primary text-primary-foreground">
                      محبوب
                    </Badge>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-card-foreground">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Office Image */}
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={officeCollaboration} 
                    alt="همکاری تیمی در محیط کاری"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold">محیط کاری مدرن</h4>
                      <p className="text-primary-foreground/90">فضایی برای همکاری و نوآوری</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="shadow-medium">
            اطلاعات بیشتر
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;