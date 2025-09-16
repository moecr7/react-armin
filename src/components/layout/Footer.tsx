import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-12" dir="rtl">
      <div className="container mx-auto px-8">
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center p-3 shadow-lg">
                <img src={logo} alt="پارک علم و فناوری" className="w-full h-full object-contain filter brightness-0" />
              </div>
              <h2 className="text-2xl font-bold text-white">پارک علم و فناوری</h2>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
              {/* Phone Number */}
              <div className="text-center bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                <div className="text-lg font-semibold text-white mb-3">شماره تماس</div>
                <div className="text-xl text-blue-200 font-medium">+98910 - 12558</div>
              </div>

              {/* Email */}
              <div className="text-center bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                <div className="text-lg font-semibold text-white mb-3">ایمیل</div>
                <div className="text-xl text-blue-200 font-medium">info@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;