import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessTeamMeeting from "@/assets/business-team-meeting.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
      {/* پس‌زمینه */}
      <div className="absolute inset-0">
        <img
          src={businessTeamMeeting}
          alt="پارک علم و فناوری - جلسه کاری تیم"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* کارت شیشه‌ای */}
      <div className="relative z-10 max-w-sm w-full">
        <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-3xl p-6 shadow-2xl">
          <div className="text-center text-white space-y-4">
            {/* تیتر اصلی */}
            <h1 className="text-xl md:text-2xl font-bold leading-tight">
              جستجو و مسیریابی در{" "}
              <span className="text-blue-400">پارک علم و فناوری</span>
            </h1>

            {/* توضیحات */}
            <p className="text-sm leading-relaxed text-gray-200">
              معرفی شرکت‌ها، دستاوردها و رویدادهای پارک علم و فناوری.
              برای جستجو و مسیریابی از دکمه‌های زیر استفاده کنید.
            </p>

            {/* دکمه‌ها */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                asChild
                variant="secondary"
                className="bg-white text-black hover:bg-gray-200 rounded-xl px-6 py-3 text-sm font-semibold shadow-md"
              >
                <Link to="/search">شروع جستجو</Link>
              </Button>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 text-sm font-semibold shadow-md"
              >
                <Link to="/map">مشاهده نقشه</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
