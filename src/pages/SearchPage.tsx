import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Navigation, FileText, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SearchPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const searchResults = [
    {
      id: 1,
      name: "هوش نگار",
      manager: "مدیر: مهدی رضایی",
      field: "حوزه: هوش مصنوعی",
      code: "پلاک: A_120-3w"
    },
    {
      id: 2,
      name: "هوش نگار", 
      manager: "مدیر: مهدی رضایی",
      field: "حوزه: هوش مصنوعی",
      code: "پلاک: A_120-3w"
    },
    {
      id: 3,
      name: "هوش نگار",
      manager: "مدیر: مهدی رضایی", 
      field: "حوزه: هوش مصنوعی",
      code: "پلاک: A_120-3w"
    }
  ];

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

        {/* Search Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Page Title */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">جستجو</h1>
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
              </CardContent>
            </Card>

            {/* Search Results */}
            <div className="space-y-4">
              {searchResults.map((result) => (
                <Card key={result.id} className="shadow-small hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Company Info */}
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-primary">{result.name}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>{result.manager} • {result.field}</p>
                          <p className="font-medium">{result.code}</p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                      <Button className="flex-1 gradient-primary">
                        <Navigation className="h-4 w-4 ml-2" />
                        نمایش مسیر
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link to="/company/1">
                          <FileText className="h-4 w-4 ml-2" />
                          جزئیات
                        </Link>
                      </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="text-center text-sm text-muted-foreground">
              برای مشاهده مستقیم مسیر می‌توانید از صفحه نقشه استفاده کنید
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;