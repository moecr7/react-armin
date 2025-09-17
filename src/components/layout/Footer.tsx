import logoGolden from "@/assets/logo-golden.png";
import repeateMusicIcon from "@/assets/repeate-music-icon.png";
import mapIcon from "@/assets/map-icon.png";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-b from-blue-900 to-slate-900 text-white"
      dir="rtl"
    >
      <div className="mx-auto max-w-md p-8">
        {/* بخش بالایی */}
        <div className="flex gap-6">
          {/* ستون چپ - محتوای اصلی */}
          <div className="flex-1">
            {/* آدرس و ساعت کاری */}
            <div className="text-right mb-8">
              <p className="text-sm text-blue-200 leading-relaxed">
                آدرس: خیابان دانشگاه، ساعت کاری: صبح
                <br />
                تا ۶ شب
              </p>
            </div>

            {/* لینک‌های مهم */}
            <div className="text-right mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src={repeateMusicIcon}
                    alt="لینک‌های مهم"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-white text-base font-medium">لینک‌های مهم</h4>
              </div>
              <div className="space-y-2 text-sm text-blue-200">
                <div className="hover:text-white transition-colors cursor-pointer">خانه</div>
                <div className="hover:text-white transition-colors cursor-pointer">نقشه</div>
                <div className="hover:text-white transition-colors cursor-pointer">جستجو</div>
                <div className="hover:text-white transition-colors cursor-pointer">جزئیات شرکت</div>
              </div>
            </div>

            {/* بخش آدرس */}
            <div className="text-right mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src={mapIcon}
                    alt="آدرس"
                    className="w-full h-full object-contain"
                  />
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

          {/* ستون راست (خالی برای آیکون‌ها) */}
          <div className="flex flex-col justify-end items-center space-y-4 pb-8"></div>
        </div>

        {/* لوگو */}
        <div className="flex items-center justify-start gap-3 mb-8">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src={logoGolden}
              alt="پارک علم و فناوری"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-white text-lg font-medium">پارک علم و فناوری</h3>
        </div>

        {/* اطلاعات تماس */}
        <div className="flex items-center justify-center gap-8 text-center">
          {/* تلفن */}
          <div>
            <div className="text-blue-200 text-sm mb-1">شماره تماس</div>
            <div className="text-white text-base font-medium">+98 910 125 58</div>
          </div>

          {/* جداکننده */}
          <div className="w-px h-8 bg-blue-700"></div>

          {/* ایمیل */}
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
