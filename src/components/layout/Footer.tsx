import { Crown, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                  <Crown className="h-8 w-8 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    آدرس: خیابان دانشگاه، ساعت کاری: صبح تا شب
                  </h3>
                  <p className="text-slate-300 text-sm">تا ۶شب</p>
                </div>
              </div>

              {/* Important Links */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">لینک های مهم</h4>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <div key={link} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Info */}
              <div className="border-t border-slate-600 pt-6 space-y-4">
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                  <Crown className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg font-semibold text-white">پارک علم و فناوری</span>
                </div>
                
                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-slate-300">
                    <Mail className="h-4 w-4" />
                    <span>ایمیل</span>
                    <span className="font-medium">info@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-slate-300">
                    <Phone className="h-4 w-4" />
                    <span>شماره تماس</span>
                    <span className="font-medium">+98910 - 12558</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="text-center mt-6 text-slate-400 text-sm">
          <p>&copy; ۱۴۰۳ پارک علم و فناوری. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;