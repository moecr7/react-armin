import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Crown, Plus, Minus, Navigation, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const MapPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [pathType, setPathType] = useState("اصلی");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Header Section */}
        <div className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center text-primary-foreground hover:text-primary-light">
                <ArrowRight className="h-5 w-5 ml-2" />
                بازگشت
              </Link>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Crown className="h-6 w-6 text-yellow-400" />
                <span className="text-lg font-semibold">پارک علم و فناوری</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Page Title */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground">نقشه</h1>
            </div>

            {/* Search Form */}
            <Card className="shadow-medium">
              <CardContent className="p-6 space-y-4">
                {/* Company Name Dropdown */}
                <div className="space-y-2">
                  <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="نام شرکت" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="company1">شرکت ۱</SelectItem>
                      <SelectItem value="company2">شرکت ۲</SelectItem>
                      <SelectItem value="company3">شرکت ۳</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Company Manager Input */}
                <Input
                  placeholder="نام شرکت، مدیر یا حوزه"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full"
                />

                {/* Get Route Button */}
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Navigation className="h-4 w-4 ml-2" />
                  کپی لینک مسیر
                </Button>

                {/* Path Type and Zoom Controls */}
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Select value={pathType} onValueChange={setPathType}>
                      <SelectTrigger>
                        <SelectValue placeholder="ورودی اصلی" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="اصلی">ورودی اصلی</SelectItem>
                        <SelectItem value="شمالی">ورودی شمالی</SelectItem>
                        <SelectItem value="جنوبی">ورودی جنوبی</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    مرکز کردن
                  </Button>
                </div>

                {/* Zoom Controls */}
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Minus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Display */}
            <Card className="shadow-medium">
              <CardContent className="p-0">
                <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden">
                  {/* Map Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-blue-200/20"></div>
                  
                  {/* Mock Map Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <MapPin className="h-12 w-12 text-primary mx-auto" />
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-slate-700">نقشه پارک علم و فناوری</h3>
                        <p className="text-sm text-slate-600">برای مشاهده مسیر، شرکت مورد نظر را انتخاب کنید</p>
                      </div>
                    </div>
                  </div>

                  {/* Route Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path d="M 50 300 Q 200 200 350 100" stroke="#3B82F6" strokeWidth="3" fill="none" strokeDasharray="5,5" />
                    <circle cx="50" cy="300" r="6" fill="#10B981" />
                    <circle cx="350" cy="100" r="6" fill="#EF4444" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="shadow-small">
              <CardContent className="p-4">
                <h3 className="font-semibold text-card-foreground mb-3 text-center">راهنما</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>ورودی</span>
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>شرکت</span>
                    <div className="w-4 h-4 bg-destructive rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>مسیر</span>
                    <div className="w-8 h-1 bg-primary"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MapPage;