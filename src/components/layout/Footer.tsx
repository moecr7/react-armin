import logoGolden from "@/assets/logo-golden.png";
import repeateMusicIcon from "@/assets/repeate-music-icon.png";
import mapIcon from "@/assets/map-icon.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-slate-900 text-white p-6" dir="rtl">
      <div className="container mx-auto max-w-md rounded-3xl bg-gradient-to-b from-blue-900 to-slate-900 p-8">
        <div className="flex gap-6">
          {/* Left side - Main content */}
          <div className="flex-1">
            {/* Address and Working Hours */}
            <div className="text-right mb-8">
              <p className="text-sm text-blue-200 leading-relaxed">
                آدرس: خیابان دانشگاه، ساعت کاری: صبح
                <br />
                تا ۶شب
              </p>
            </div>

            {/* Important Links */}
            <nav className="text-right mb-8" aria-label="لینک های مهم">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src={repeateMusicIcon} alt="Links" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-white text-base font-medium">لینک های مهم</h4>
              </div>
              <ul className="space-y-2 text-sm text-blue-200">
                <li className="hover:text-white transition-colors cursor-pointer">خانه</li>
                <li className="hover:text-white transition-colors cursor-pointer">نقشه</li>
                <li className="hover:text-white transition-colors cursor-pointer">جستجو</li>
                <li className="hover:text-white transition-colors cursor-pointer">جزئیات شرکت</li>
              </ul>
            </nav>

            {/* Address Section */}
            <div className="text-right mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src={mapIcon} alt="Address" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-white text-base font-medium">آدرس</h4>
              </div>
              <div className="text-sm text-blue-200 leading-relaxed">
                <p>تهران، خیابان دانشگاه</p>
                <p>پارک علم و فناوری تهران</p>
                <p>کد پستی: ۱۴۱۷۹۳۳۵۳۳</p>
              </div>
            </div>
          </div>

          {/* Right side - Icons */}
          <div className="flex flex-col justify-end items-center space-y-4 pb-8"></div>
        </div>

        {/* Logo Section */}
        <div className="flex items-center justify-start space-x-3 space-x-reverse mb-8">
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
    </footer>
  );
};

export default Footer;
