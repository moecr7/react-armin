import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "درباره ما", href: "#about" },
    { label: "خدمات", href: "#services" },
    { label: "ویژگی‌ها", href: "#features" },
    { label: "تماس", href: "#contact" }
  ];

  const services = [
    { label: "مدیریت پروژه", href: "#" },
    { label: "تحلیل داده", href: "#" },
    { label: "مدیریت مالی", href: "#" },
    { label: "گزارش‌گیری", href: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">کسب‌وکار</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              پلتفرم جامع مدیریت کسب‌وکار که با ابزارهای پیشرفته، کسب‌وکار شما را به سطح جدیدی می‌رساند.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-primary-foreground/80">
                <Phone size={16} />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-primary-foreground/80">
                <Mail size={16} />
                <span>info@business.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-primary-foreground/80">
                <MapPin size={16} />
                <span>تهران، خیابان ولی‌عصر</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">دسترسی سریع</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">خدمات</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">خبرنامه</h3>
            <p className="text-primary-foreground/80 text-sm">
              از آخرین اخبار و به‌روزرسانی‌های ما مطلع شوید
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Input 
                  placeholder="ایمیل خود را وارد کنید"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  size="icon" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium"
                >
                  <Mail size={16} />
                </Button>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-medium">ما را دنبال کنید</h4>
              <div className="flex space-x-3 rtl:space-x-reverse">
                {[Instagram, Linkedin, Twitter].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-right text-primary-foreground/80 text-sm">
            © ۱۴۰۳ تمام حقوق محفوظ است | طراحی شده با ❤️ برای کسب‌وکارها
          </div>
          
          <div className="flex items-center space-x-6 rtl:space-x-reverse text-sm text-primary-foreground/80">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              حریم خصوصی
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              شرایط استفاده
            </a>
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-1 rtl:space-x-reverse hover:text-primary-foreground transition-colors group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              <span>بازگشت به بالا</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;