import logoGolden from "@/assets/logo-golden.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6" dir="rtl">
      <div className="container mx-auto max-w-md">
        <div className="bg-gradient-to-b from-blue-900 to-slate-900 rounded-3xl p-8 text-white">
          {/* Address and Working Hours */}
          <div className="text-right mb-8">
            <p className="text-sm text-blue-200 leading-relaxed">
              آدرس: خیابان دانشگاه، ساعت کاری: صبح
              <br />
              تا ۶شب
            </p>
          </div>

          {/* Important Links */}
          <div className="text-right mb-8">
            <h4 className="text-white text-base font-medium mb-4">لینک های مهم</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="hover:text-white transition-colors cursor-pointer">خانه</div>
              <div className="hover:text-white transition-colors cursor-pointer">نقشه</div>
              <div className="hover:text-white transition-colors cursor-pointer">جستجو</div>
              <div className="hover:text-white transition-colors cursor-pointer">جزئیات شرکت</div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex items-center justify-end space-x-3 space-x-reverse mb-8">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={logoGolden} alt="پارک علم و فناوری" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-white text-lg font-medium">پارک علم و فناوری</h3>
          </div>

          {/* Contact Information */}
          <div className="flex items-center justify-center space-x-8 space-x-reverse text-center">
            {/* Phone */}
            <div>
              <div className="text-blue-200 text-sm mb-1">شماره تماس</div>
              <div className="text-white text-base font-medium">+98910 - 12558</div>
            </div>
            
            {/* Divider */}
            <div className="w-px h-8 bg-blue-700"></div>
            
            {/* Email */}
            <div>
              <div className="text-blue-200 text-sm mb-1">ایمیل</div>
              <div className="text-white text-base font-medium">info@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;