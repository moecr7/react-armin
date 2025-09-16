import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white py-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center p-2">
              <img src={logo} alt="پارک علم و فناوری" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-xl font-bold text-white">پارک علم و فناوری</h2>
          </div>

          {/* Contact Information */}
          <div className="flex items-center justify-center space-x-12 space-x-reverse">
            {/* Phone Number */}
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-1">شماره تماس</div>
              <div className="text-white">+98910 - 12558</div>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-1">ایمیل</div>
              <div className="text-white">info@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;