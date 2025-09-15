import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Map, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-slate-900 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-right">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                جستجو و مسیریابی در پارک علم
                <span className="block text-primary-light">و فناوری</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl mx-auto lg:mx-0">
                معرفی شرکت ها، دستاوردها و رویدادهای
                پارک علم و فناوری برای جستجو و مسیریابی
                از دکمه زیر استفاده نمایید.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-large">
                <Link to="/search">
                  <Search className="ml-2 h-5 w-5" />
                  شروع جستجو
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/map">
                  <Map className="ml-2 h-5 w-5" />
                  مشاهده نقشه
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="space-y-6">
            {/* Main Visual Card */}
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="/src/assets/business-meeting.jpg" 
                    alt="جلسه کاری در پارک علم و فناوری"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">پارک علم و فناوری</h3>
                      <p className="text-primary-foreground/90">مرکز نوآوری و فناوری</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-medium">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-card-foreground">۱۲۰+</p>
                    <p className="text-sm text-muted-foreground">شرکت فعال</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardContent className="p-4 text-center">
                  <Building2 className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-card-foreground">۲۵+</p>
                    <p className="text-sm text-muted-foreground">واحد فناوری</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;