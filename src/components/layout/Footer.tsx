import { Crown, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    "خانه",
    "نقشه", 
    "جستجو",
    "جزئیات شرکت"
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
          <CardContent className="p-6">
            <div className="text-center space-y-6">
              {/* Logo and Title */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 text-right">
                    آدرس: خیابان دانشگاه، ساعت کاری: صبح تا شب
                  </h3>
                  <p className="text-slate-300 text-sm text-right">تا ۶شب</p>
                </div>
              </div>

              {/* Important Links */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white text-right">لینک های مهم</h4>
                <div className="space-y-2 text-right">
                  {quickLinks.map((link) => (
                    <div key={link} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Info */}
              <div className="border-t border-slate-600 pt-6 space-y-4">
                <div className="flex items-center justify-end space-x-3 space-x-reverse">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center p-1">
                    <img src={logo} alt="پارک علم و فناوری" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-lg font-semibold text-white">پارک علم و فناوری صنعتی دانشگاه صنعتی سهند تبریز</span>
                </div>
                
                {/* Contact Info */}
                <div className="flex items-center justify-center space-x-4 space-x-reverse text-sm">
                  <div className="flex items-center space-x-2 space-x-reverse text-slate-300">
                    <span className="font-medium">info@gmail.com</span>
                    <span>ایمیل</span>
                    <Mail className="h-4 w-4" />
                  </div>
                  
                  <div className="w-px h-6 bg-slate-600"></div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse text-slate-300">
                    <span className="font-medium">+98910 - 12558</span>
                    <span>شماره تماس</span>
                    <Phone className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="text-right mt-6 text-slate-400 text-sm">
          <div className="flex items-center justify-end space-x-2 space-x-reverse">
            <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center p-1">
              <img src={logo} alt="پارک علم و فناوری" className="w-full h-full object-contain" />
            </div>
            <p>&copy; ۱۴۰۳ پارک علم و فناوری. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;