import logoGolden from "@/assets/logo-golden.png";
import repeateMusicIcon from "@/assets/repeate-music-icon.png";
import mapIcon from "@/assets/map-icon.png";

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-transparent">
      {/* ظرف بیرونی با گرادیان و شعاع بزرگ مشابه طرح */}
      <div className="mx-3 mb-3 rounded-[32px] bg-gradient-to-br from-[#102B59] to-[#142038] text-white shadow-[0_12px_40px_rgba(2,6,23,0.35)]">
        <div className="p-6 md:p-8">
          {/* بالای فوتر: ستون راست (آدرس + لینک‌ها) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* ستون راست؛ در دسکتاپ حدود 5 ستون از 12 */}
            <div className="md:col-start-8 md:col-span-5">
              {/* آدرس و ساعات کاری */}
              <div className="mb-10">
                <div className="flex items-start gap-3 justify-end">
                  <div className="w-6 h-6 mt-0.5 shrink-0 opacity-80">
                    <img
                      src={mapIcon}
                      alt="آدرس"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[15px] leading-7 text-white/90 text-right">
                    آدرس: خیابان دانشگاه، ساعت کاری: 6 صبح
                    <br />
                    تا 8 شب
                  </p>
                </div>
              </div>

              {/* لینک های مهم */}
              <div className="mb-6">
                <div className="flex items-center gap-3 justify-end mb-4">
                  <div className="w-6 h-6 shrink-0 opacity-80">
                    <img
                      src={repeateMusicIcon}
                      alt="لینک‌های مهم"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-[18px] font-medium">لینک های مهم</h4>
                </div>

                <nav className="text-[16px] space-y-4 text-right">
                  <a className="block hover:text-white/90 transition-colors cursor-pointer">
                    خانه
                  </a>
                  <a className="block underline underline-offset-8 decoration-white/70 cursor-pointer">
                    نقشه
                  </a>
                  <a className="block hover:text-white/90 transition-colors cursor-pointer">
                    جستوجو
                  </a>
                  <a className="block underline underline-offset-8 decoration-white/70 cursor-pointer">
                    جزئیات شرکت
                  </a>
                </nav>
              </div>
            </div>

            {/* فضای تهی سمت چپ برای حفظ نسبت‌ها مثل طرح */}
            <div className="hidden md:block md:col-span-7" />
          </div>

          {/* کارت داخلی پایین */}
          <div className="mt-10 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] backdrop-blur-md border border-white/10 px-5 py-6">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
              {/* لوگو سمت راست */}
              <div className="md:col-span-2 flex justify-end">
                <div className="h-12 w-12">
                  <img
                    src={logoGolden}
                    alt="پارک علم و فناوری"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* عنوان وسط */}
              <div className="md:col-span-5 text-center">
                <h3 className="text-[20px] font-medium tracking-tight">
                  پارک علم و فناوری
                </h3>
              </div>

              {/* اطلاعات تماس سمت چپ */}
              <div className="md:col-span-5">
                <div className="flex items-center justify-center md:justify-start gap-8">
                  {/* ایمیل */}
                  <div className="text-center md:text-right">
                    <div className="text-white text-[18px] font-medium">
                      info@gmail.com
                    </div>
                    <div className="text-white/70 text-[13px] mt-1">ایمیل</div>
                  </div>

                  {/* جداکننده عمودی */}
                  <div className="hidden md:block w-px h-10 bg-white/20" />

                  {/* تلفن */}
                  <div className="text-center md:text-right">
                    <div className="text-white text-[18px] font-medium ltr:font-medium">
                      +98910 - 12558
                    </div>
                    <div className="text-white/70 text-[13px] mt-1">شماره تماس</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* پایان کارت داخلی */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
