import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  PieChart, 
  CreditCard, 
  FileText,
  ArrowLeft,
  Check,
  Star
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "مدیریت پروژه",
      description: "ابزارهای کامل برای مدیریت پروژه‌ها، تعیین وظایف و پیگیری پیشرفت تیم",
      features: ["تقسیم‌بندی وظایف", "تقویم پروژه", "گزارش پیشرفت", "همکاری تیمی"],
      price: "۲۹۹,۰۰۰ تومان",
      period: "ماهانه",
      popular: false,
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-500"
    },
    {
      icon: PieChart,
      title: "تحلیل و گزارشات",
      description: "داشبورد تحلیلی پیشرفته با نمودارهای تعاملی و گزارش‌های دقیق",
      features: ["داشبورد تعاملی", "گزارش خودکار", "تحلیل روند", "پیش‌بینی هوش مصنوعی"],
      price: "۴۹۹,۰۰۰ تومان",
      period: "ماهانه",
      popular: true,
      color: "from-purple-500/10 to-purple-600/10",
      iconColor: "text-purple-500"
    },
    {
      icon: CreditCard,
      title: "مدیریت مالی",
      description: "سیستم حسابداری کامل با امکان صدور فاکتور و پیگیری تراکنش‌ها",
      features: ["حسابداری دوطرفه", "صدور فاکتور", "پیگیری پرداخت", "گزارش مالی"],
      price: "۷۹۹,۰۰۰ تومان",
      period: "ماهانه",
      popular: false,
      color: "from-green-500/10 to-green-600/10",
      iconColor: "text-green-500"
    }
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: "مدیریت اسناد",
      description: "نگهداری و مدیریت دیجیتال تمام اسناد و فایل‌های کسب‌وکار"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            خدمات <span className="text-primary">ما</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            بسته‌های جامع و انعطاف‌پذیر برای هر سایز کسب‌وکار از استارتاپ تا شرکت‌های بزرگ
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden hover:shadow-large transition-all duration-500 hover:-translate-y-2 ${
                service.popular ? 'border-primary scale-105' : 'border-border/50'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 left-0 h-1 gradient-primary"></div>
              )}
              
              <CardContent className="p-6 space-y-6 relative">
                {service.popular && (
                  <Badge className="absolute -top-2 right-4 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 ml-1" />
                    محبوب‌ترین
                  </Badge>
                )}

                {/* Icon and Title */}
                <div className="text-center space-y-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center space-y-1">
                  <div className="text-3xl font-bold text-primary">
                    {service.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {service.period}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'gradient-primary text-primary-foreground shadow-medium' 
                      : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  } transition-all duration-300`}
                >
                  <ArrowLeft className="ml-2 h-4 w-4 rtl:rotate-180" />
                  انتخاب پکیج
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-muted/30 to-accent/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              خدمات تکمیلی
            </h3>
            <p className="text-muted-foreground">
              خدمات اضافی برای تکمیل نیازهای کسب‌وکار شما
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="text-center space-y-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-primary text-primary-foreground">
                  <service.icon size={24} />
                </div>
                <h4 className="font-semibold text-card-foreground">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
            
            {/* Coming Soon Cards */}
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="text-center space-y-3 p-4 rounded-lg bg-card/30 border border-dashed border-primary/30"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted/50 text-muted-foreground">
                  <span className="text-2xl">+</span>
                </div>
                <h4 className="font-semibold text-muted-foreground">
                  به‌زودی...
                </h4>
                <p className="text-sm text-muted-foreground/70">
                  خدمات جدید در راه است
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;