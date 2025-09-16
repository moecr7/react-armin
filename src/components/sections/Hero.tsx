import { Button } from "@/components/ui/button";
import { Map, ArrowLeft, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import businessTeamMeeting from "@/assets/business-team-meeting.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <>
      {/* Frame 50 - Mobile Hero with Background Image */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={businessTeamMeeting} 
            alt="پارک علم و فناوری - جلسه کاری تیم"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col px-6 py-6">
          {/* Header with Hamburger Menu */}
          <div className="flex items-center justify-between mb-8">
            {/* Hamburger Menu Button - Figma Style */}
            <button className="p-3 bg-accent rounded-xl shadow-lg hover:bg-accent/90 transition-colors">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <div className="w-full h-0.5 bg-accent-foreground rounded-full"></div>
                <div className="w-4 h-0.5 bg-accent-foreground rounded-full"></div>
                <div className="w-full h-0.5 bg-accent-foreground rounded-full"></div>
              </div>
            </button>
            
            {/* Logo - Figma Style */}
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg p-2">
              <img src={logo} alt="پارک علم و فناوری" className="w-full h-full object-contain" />
            </div>
          </div>
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
                   className="border-2 border-white text-white hover:bg-white hover:text-primary py-4 px-8 rounded-2xl text-base font-medium bg-transparent transition-all duration-300"
                 >
                   <Link to="/search">
                     شروع جستجو
                   </Link>
                 </Button>
                 
                 <Button 
                   asChild 
                   className="bg-accent hover:bg-accent/90 text-accent-foreground py-4 px-8 rounded-2xl text-base font-medium shadow-lg transition-all duration-300"
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
    </>
  );
};

export default Hero;