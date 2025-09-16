import logoGolden from "@/assets/logo-golden.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-800 text-white py-16" dir="rtl">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-12">
          {/* Logo and Title */}
          <div className="flex items-center justify-center space-x-6 space-x-reverse">
            <div className="w-24 h-24 flex items-center justify-center">
              <img src={logoGolden} alt="پارک علم و فناوری" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl font-bold text-white">پارک علم و فناوری</h2>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-2xl mx-auto">
            {/* Phone Number */}
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-4">شماره تماس</div>
              <div className="text-2xl text-white font-medium">+98910 - 12558</div>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-4">ایمیل</div>
              <div className="text-2xl text-white font-medium">info@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;