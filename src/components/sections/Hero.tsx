import { Button } from "@/components/ui/button";
import { Map, ArrowLeft, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import businessTeamMeeting from "@/assets/business-team-meeting.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <>
      {/* Compact Glass Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={businessTeamMeeting} 
            alt="پارک علم و فناوری - جلسه کاری تیم"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Glass Card Container */}
        <div className="relative z-10 max-w-md mx-auto">
          <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center text-white space-y-6">
              {/* Main Title */}
              <h1 className="text-2xl font-bold leading-tight text-blue-300">
                جستجو و مسیریابی در پارک علم و فناوری
              </h1>
              
              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-200">
                معرفی شرکت ها، دستاوردها و رویدادهای پارک علم و فناوری برای جستجو و مسیریابی از دکمه زیر استفاده کنید.
              </p>
              
              {/* Button */}
              <div className="pt-4">
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-2xl text-base font-medium shadow-lg transition-all duration-300 w-full"
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