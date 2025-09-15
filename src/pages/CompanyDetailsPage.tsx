import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Crown, Mail, ExternalLink, Phone, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CompanyDetailsPage = () => {
  const companyDetails = {
    name: "هوش نگار",
    field: "حوزه: هوش مصنوعی",
    code: "پلاک: A_120-3w",
    introduction: "توسعه سامانه‌های بینایی ماشین و تحلیل داده برای صنایع تولیدی و پزشکی.",
    manager: "مهدی رضایی",
    address: "پلاک A، طبقه ۱، اتاق ۱۰۲",
    email: "info@gmail.com",
    website: "وب سایت شرکت",
    phone: "09156005626",
    categories: ["ورودی اصلی", "ورودی شمالی", "ورودی شرقی"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Header Section */}
        <div className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/search" className="flex items-center text-primary-foreground hover:text-primary-light">
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

        {/* Company Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Page Title */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground">جزئیات شرکت</h1>
            </div>

            {/* Main Company Info */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-primary">{companyDetails.name}</h2>
                    <p className="text-muted-foreground">{companyDetails.field} • {companyDetails.code}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 gradient-primary">
                      <Copy className="h-4 w-4 ml-2" />
                      کپی لینک
                    </Button>
                    <Button className="flex-1 gradient-primary">
                      نمایش مسیر روی نقشه
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="shadow-small">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-card-foreground">معرفی</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {companyDetails.introduction}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Manager */}
            <Card className="shadow-small">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-card-foreground">مدیر عامل</h3>
                  <p className="text-muted-foreground">{companyDetails.manager}</p>
                </div>
              </CardContent>
            </Card>

            {/* Internal Address */}
            <Card className="shadow-small">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-card-foreground">آدرس داخلی</h3>
                  <p className="text-muted-foreground">{companyDetails.address}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-small">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground">اطلاعات تماس</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{companyDetails.email}</span>
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{companyDetails.website}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{companyDetails.phone}</span>
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Entries */}
            <Card className="shadow-small">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground">ورودی‌های پارک</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {companyDetails.categories.map((category, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/search">
                  بازگشت
                </Link>
              </Button>
              <Button asChild className="flex-1 gradient-primary">
                <Link to="/map">
                  نمایش مسیر روی نقشه
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyDetailsPage;