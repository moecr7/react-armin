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
  const [activeFilter, setActiveFilter] = useState("all");
  const mockCompanies = [{
    id: 1,
    name: "هوش نگار",
    field: "مدیر:مهدی رضایی • حوزه:هوش مصنوعی",
    code: "پلاک:A_120"
  }, {
    id: 2,
    name: "فن‌آوا",
    field: "مدیر:علی محمدی • حوزه:نرم‌افزار",
    code: "پلاک:B_85"
  }, {
    id: 3,
    name: "راهکار",
    field: "مدیر:سارا احمدی • حوزه:مشاوره",
    code: "پلاک:C_42"
  }];
  const filterOptions = [{
    id: "all",
    label: "همه"
  }, {
    id: "tech",
    label: "فناوری"
  }, {
    id: "ai",
    label: "هوش مصنوعی"
  }, {
    id: "software",
    label: "نرم‌افزار"
  }, {
    id: "consulting",
    label: "مشاوره"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-14">
        {/* Header Section */}
        <div className="bg-primary px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary-foreground"> جستجو</h1>
            <Link to="/" className="flex items-center text-primary-foreground hover:text-accent">
              <ArrowLeft className="h-5 w-5 ml-2" />
              <span className="text-base font-medium">بازگشت</span>
            </Link>
          </div>
        </div>

        <div className="px-4 py-6 space-y-6">
          {/* Search Input */}
          <div className="max-w-md mx-auto">
            <Input type="text" placeholder="جستجو بر اساس نام شرکت، مدیر یا حوزه فعالیت" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full h-12 text-base border-border rounded-xl bg-input px-4" />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 max-w-lg mx-auto">
            {/* همه button on the left */}
            <div className="flex justify-start">
              <Button variant={activeFilter === "all" ? "default" : "secondary"} size="sm" onClick={() => setActiveFilter("all")} className={`rounded-full px-4 py-2 text-sm font-medium ${activeFilter === "all" ? "bg-accent text-accent-foreground shadow-sm" : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"}`}>
                همه
              </Button>
            </div>
            {/* Other buttons centered */}
            <div className="flex flex-wrap gap-2 justify-center flex-1">
              {filterOptions.slice(1).map(filter => <Button key={filter.id} variant={activeFilter === filter.id ? "default" : "secondary"} size="sm" onClick={() => setActiveFilter(filter.id)} className={`rounded-full px-4 py-2 text-sm font-medium ${activeFilter === filter.id ? "bg-accent text-accent-foreground shadow-sm" : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"}`}>
                  {filter.label}
                </Button>)}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {mockCompanies.length} شرکت یافت شد
            </p>
          </div>

          {/* Search Results */}
          <div className="space-y-4 max-w-md mx-auto">
            {mockCompanies.map(company => <Card key={company.id} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground">{company.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{company.field}</p>
                      <p className="text-sm text-muted-foreground">{company.code}</p>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button asChild size="sm" className="flex-1 text-sm py-2 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link to={`/company/${company.id}`}>
                          نمایش مسیر
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-sm py-2 rounded-lg border-border hover:bg-secondary">
                        جزئیات
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Footer Note */}
          <div className="text-center text-xs text-muted-foreground mt-8 px-4">
            برای مشاهده مستقیم مسیر می‌توانید از صفحه نقشه استفاده کنید
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default SearchPage;