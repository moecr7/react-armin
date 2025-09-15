import { Button } from "@/components/ui/button";
import { Map, ArrowLeft, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-frame-50.jpg";
import secondaryImage from "@/assets/hero-frame-72.png";
import logoImage from "@/assets/logo-golden.jpg";

const Hero = () => {
  return (
    <>
      {/* Main Hero Section - Frame 50 - Mobile First Design */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="پارک علم و فناوری"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header with Menu and Logo */}
          <div className="flex items-center justify-between p-6">
            <button className="p-3 bg-blue-600 rounded-lg">
              <Menu className="h-6 w-6 text-white" />
            </button>
            <img 
              src={logoImage} 
              alt="Logo" 
              className="h-12 w-12 rounded-full"
            />
          </div>
          
          {/* Main Content - Centered */}
          <div className="flex-1 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-sm mx-auto space-y-6">
              {/* Main Title */}
              <h1 className="text-3xl font-bold leading-tight">
                پارک علم و فناوری
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-xl font-medium text-blue-300">
                جستجو و مسیریابی در پارک علم و فناوری
              </h2>
              
              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-200">
                معرفی شرکت ها، دستاوردها و رویدادهای پارک علم و فناوری برای جستجو و مسیریابی از دکمه زیر استفاده کنید.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col gap-4 pt-4">
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-base font-medium"
                >
                  <Link to="/search">
                    مشاهده نقشه
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-black py-3 px-6 rounded-xl text-base font-medium bg-transparent"
                >
                  <Link to="/map">
                    شروع جستجو
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Section - Frame 72 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src={secondaryImage} 
                  alt="محیط کاری پارک علم و فناوری"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
            
            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  محیطی برای نوآوری و خلاقیت
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                پارک علم و فناوری با ارائه امکانات مدرن و خدمات تخصصی، بستری مناسب برای توسعه ایده‌های نوآورانه و تبدیل آن‌ها به محصولات و خدمات کاربردی فراهم می‌آورد.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">مشاوره تخصصی</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">دسترسی به بازار</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">حمایت مالی</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">شبکه‌سازی</span>
                </div>
              </div>
              
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium mt-8"
              >
                <Link to="/search">
                  بیشتر بدانید
                  <ArrowLeft className="mr-2 h-4 w-4" />
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