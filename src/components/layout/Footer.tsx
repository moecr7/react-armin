import logoGolden from "@/assets/logo-golden.png";
import repeateMusicIcon from "@/assets/repeate-music-icon.png";
import mapIcon from "@/assets/map-icon.png";

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-transparent">
      {/* ظرف بیرونی گرادیانی */}
      <div className="mx-3 mb-3 rounded-[28px] bg-gradient-to-b from-[#102B59] to-[#142038] text-white shadow-[0_12px_40px_rgba(2,6,23,0.35)]">
        <div className="p-5">
          {/* ستون راست: آدرس + لینک‌ها */}
          <div className="grid grid-cols-1 gap-6">
            {/* آدرس و ساعات کاری */}
            <div>
              <div className="flex items-start gap-2 justify-end text-right">
                <div className="w-5 h-5 mt-0.5 opacity-80 shrink-0">
                  <img src={mapIcon} alt="آدرس" className="w-full h-full object-contain" />
                </div>
                <p className="text-[14px] leading-7 text-white/90 text-right">
                  آدرس: خیابون دانشگاه، ساعت کاری: 6 صبح
                  <br />
                  تا 8 شب
                </p>
              </div>
            </div>

            {/* لینک‌های مهم */}
            <div>
              <div className="flex items-center gap-2 justify-end mb-2.5">
                <div className="w-5 h-5 opacity-80 shrink-0">
                  <img src={repeateMusicIcon} alt="لینک‌های مهم" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-[16px] font-medium">لینک های مهم</h4>
              </div>
              <nav className="text-[16px] space-y-3 text-right">
                <a className="block hover:text-white/90 transition-colors cursor-pointer">خانه</a>
                <a className="block hover:underline underline-offset-8 cursor-pointer">نقشه</a>
                <a className="block hover:text-white/90 transition-colors cursor-pointer">جستوجو</a>
                <a className="block hover:underline underline-offset-8 cursor-pointer">جزعیات شرکت</a>
              </nav>
            </div>
          </div>

          {/* کارت پایینی شیشه‌ای */}
          <div className="mt-6 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] backdrop-blur-md border border-white/10 px-4 py-5">
            {/* لوگو + عنوان در ردیف بالا */}
            <div className="flex items-center justify-end gap-3 mb-4">
              <h3 className="text-[18px] font-medium tracking-tight whitespace-nowrap text-right">
                پارک علم و فناوری
              </h3>
              <div className="h-10 w-10 shrink-0">
                <img
                  src={logoGolden}
                  alt="پارک علم و فناوری"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* اطلاعات تماس در ردیف پایین */}
            <div className="flex items-center justify-center gap-5">
              {/* شماره تماس */}
              <div className="text-right">
                <div className="text-white text-[16px] font-medium ltr:font-medium">
                  +98910 - 12558
                </div>
                <div className="text-white/70 text-[12px] mt-0.5">شماره تماس</div>
              </div>

              {/* جداکننده عمودی */}
              <div className="w-px h-8 bg-white/20" />

              {/* ایمیل */}
              <div className="text-right">
                <div className="text-white text-[16px] font-medium">info@gmail.com</div>
                <div className="text-white/70 text-[12px] mt-0.5">ایمیل</div>
              </div>
            </div>
          </div>
          {/* پایان کارت پایینی */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
