import { Button } from "@/components/ui/button";
import { Map, ArrowLeft, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import techDeveloper from "@/assets/tech-developer.jpg";
import businessMeeting from "@/assets/business-meeting.jpg";

const Hero = () => {
  return (
    <>
      {/* Frame 50 - Mobile Hero with Background Image */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={techDeveloper} 
            alt="پارک علم و فناوری - توسعه دهنده فناوری"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col px-6 py-6">
          {/* Header with Menu and Logo */}
          <div className="flex items-center justify-between mb-8">
            {/* Menu Button */}
            <button className="p-4 bg-blue-600 rounded-2xl shadow-lg hover:bg-blue-700 transition-colors">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white rounded"></div>
                <div className="w-full h-0.5 bg-white rounded"></div>
                <div className="w-full h-0.5 bg-white rounded"></div>
              </div>
            </button>
            
            {/* Logo */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg">
              <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                <div className="w-6 h-6 bg-white/80 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Main Content - Centered */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-white max-w-sm mx-auto space-y-8">
              {/* Main Title */}
              <h1 className="text-4xl font-bold leading-tight text-white">
                پارک علم و فناوری
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-xl font-medium text-blue-300 leading-relaxed">
                جستجو و مسیریابی در پارک علم و فناوری
              </h2>
              
              {/* Description */}
              <p className="text-base leading-relaxed text-gray-200 px-4">
                معرفی شرکت ها، دستاوردها و رویدادهای پارک علم و فناوری برای جستجو و مسیریابی از دکمه زیر استفاده کنید.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col gap-4 pt-6">
                <Button 
                  asChild 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 py-4 px-8 rounded-2xl text-base font-medium bg-transparent transition-all duration-300"
                >
                  <Link to="/search">
                    شروع جستجو
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-2xl text-base font-medium shadow-lg transition-all duration-300"
                >
                  <Link to="/map">
                    مشاهده نقشه
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frame 72 - Business Section with Exact Image */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative dots - top right */}
        <div className="absolute top-10 right-10">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-blue-200 rounded-full"></div>
            ))}
          </div>
        </div>
        
        {/* Decorative dots - bottom left */}
        <div className="absolute bottom-10 left-10">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-blue-200 rounded-full"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Frame 72 Image Side */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative">
                <img 
                  src={businessMeeting} 
                  alt="همکاری و کار تیمی در پارک علم و فناوری"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            
            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  محیط کاری مدرن
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  همکاری و نوآوری
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  فضایی برای تبادل ایده‌ها و همکاری‌های سازنده بین تیم‌های مختلف
                </p>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">همکاری تیمی</h4>
                    <p className="text-gray-600">فضای مناسب برای کار گروهی و تبادل نظر</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">فناوری مدرن</h4>
                    <p className="text-gray-600">امکانات پیشرفته برای توسعه و نوآوری</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-lg inline-flex items-center gap-3 transition-all duration-300"
              >
                <Link to="/search">
                  بیشتر بدانید
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;