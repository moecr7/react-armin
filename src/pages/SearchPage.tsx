import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SearchPage = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const mockCompanies = [
    {
      id: 1,
      name: "هوش نگار",
      field: "مدیر:مهدی رضایی • حوزه:هوش مصنوعی",
      code: "پلاک:A_120"
    },
    {
      id: 2,
      name: "هوش نگار",
      field: "مدیر:مهدی رضایی • حوزه:هوش مصنوعی",
      code: "پلاک:A_120"
    },
    {
      id: 3,
      name: "هوش نگار",
      field: "مدیر:مهدی رضایی • حوزه:هوش مصنوعی",
      code: "پلاک:A_120"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-14">
        {/* Header Section */}
        <div className="bg-primary px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-primary-foreground hover:text-primary-light">
              <ArrowLeft className="h-5 w-5 ml-2" />
              بازگشت
            </Link>
            <h1 className="text-lg font-semibold text-primary-foreground">جستجو</h1>
          </div>
        </div>

        <div className="px-4 py-6 space-y-4 max-w-md mx-auto">
          {/* Search Form */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <CardContent className="p-4 space-y-4">
              {/* Company Name Dropdown */}
              <div className="space-y-2">
                <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                  <SelectTrigger className="w-full border-slate-200 rounded-lg bg-slate-50">
                    <SelectValue placeholder="نام شرکت" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">همه شرکت‌ها</SelectItem>
                    <SelectItem value="hoshnegar">هوش نگار</SelectItem>
                    <SelectItem value="fanava">فن‌آوا</SelectItem>
                    <SelectItem value="rahkar">راهکار</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Input */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="نام شرکت،مدیر یا حوزه"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-slate-200 rounded-lg bg-slate-50"
                />
              </div>
            </CardContent>
          </Card>

          {/* Search Results */}
          <div className="space-y-3">
            {mockCompanies.map((company) => (
              <Card key={company.id} className="bg-white border border-slate-200 rounded-xl shadow-sm">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                      <p className="text-sm text-slate-600">{company.field} • {company.code}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 text-sm py-2 rounded-lg border-slate-300 text-slate-600">
                        جزئیات
                      </Button>
                      <Button asChild size="sm" className="flex-1 text-sm py-2 rounded-lg bg-primary hover:bg-primary/90 text-white">
                        <Link to={`/company/${company.id}`}>
                          نمایش مسیر
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center text-xs text-slate-500 mt-6 px-4">
            برای مشاهده مستقیم مسیر می‌توانید از صفحه نقشه استفاده کنید
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;