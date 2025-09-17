import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import officeCollaboration from "@/assets/office-collaboration.jpg";

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black/5 to-transparent">
      <div className="container mx-auto px-4 max-w-md">
        {/* Glass Card Container */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center space-y-6">
            {/* Title */}
            <h2 className="text-2xl font-bold text-primary">
              خدمات پارک
            </h2>
            
            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              مجموعه‌ای از خدمات تخصصی برای رشد و توسعه کسب‌وکارهای فناورانه، 
              شامل فضای کاری مشترک، خدمات اداری، مشاوره کسب‌وکار و 
              برنامه‌های شتاب‌دهی برای شرکت‌های نوپا و استارت‌اپ‌ها.
            </p>
          </div>
        </div>
        
        {/* Buttons Below Glass Card */}
        <div className="flex gap-3 mt-6">
          <Button 
            asChild 
            variant="outline"
            className="border-2 border-primary/50 text-primary hover:bg-primary/10 py-3 px-6 rounded-2xl text-sm font-medium transition-all duration-300 flex-1"
          >
            <Link to="/search">
              شروع جستجو
            </Link>
          </Button>
          
          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-2xl text-sm font-medium shadow-lg transition-all duration-300 flex-1"
          >
            <Link to="/map">
              مشاهده نقشه
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;