import React from 'react';
import Link from 'next/link';
import { EyeOff } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen relative pt-[56px] md:pt-[100px] lg:pt-[108px] bg-[#0a1628]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0a1628]">
        <img 
          src="/images/login/SignIn_Maintenance.png" 
          alt="Login Background" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <main className="flex-grow flex items-center relative z-10 py-20 lg:py-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            
            {/* Left Content: Maintenance Message */}
            <div className="flex-1 text-white max-w-xl">
              <span className="inline-block bg-white text-[#0a2071] text-[10px] font-black px-2.5 py-0.5 uppercase tracking-widest rounded-full mb-4 shadow-sm">
                SCHEDULED MAINTENANCE
              </span>
              
              <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-6 leading-tight tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                eBusiness Platform Maintenance
              </h1>
              
              <div className="space-y-4 text-[13px] sm:text-[14px] font-medium leading-relaxed">
                <p>
                  Please note that our eBusiness website will be unavailable due to scheduled maintenance during the following period:
                </p>
                <div className="pl-4 border-l-2 border-[#e02020] space-y-2 py-2">
                  <p className="font-bold">Start: Saturday, 20th June at 04:00 PM CEST</p>
                  <p className="font-bold">End: Sunday, 21st June at 08:30 AM CEST</p>
                </div>
                <p>
                  We apologize for any inconvenience this may cause and appreciate your understanding as we work to improve our services.
                </p>
                <p className="italic font-normal">
                  Please note : During this period, you can still access to My Customer Service website to reach out our agents for any questions.
                </p>
              </div>

              {/* Download the app */}
              <div className="mt-8">
                <h3 className="text-[20px] font-bold mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  Download the app
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button className="border border-white hover:bg-white/10 transition-colors rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-6" />
                  </button>
                  <button className="border border-white hover:bg-white/10 transition-colors rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content: Login Form Card */}
            <div className="w-full max-w-[400px] bg-white p-6 sm:p-8 shadow-2xl shrink-0">
              <h2 className="text-[#0a2071] text-[28px] font-bold mb-6 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                Welcome
              </h2>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-[#0a2071] text-[13px] font-medium mb-1.5">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full border border-gray-300 px-3 py-2 text-[14px] focus:outline-none focus:border-[#0a2071] transition-colors placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-[#0a2071] text-[13px] font-medium mb-1.5">Password</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      placeholder="Enter your password" 
                      className="w-full border border-gray-300 px-3 py-2 pr-10 text-[14px] focus:outline-none focus:border-[#0a2071] transition-colors placeholder:text-gray-400"
                    />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0a2071] hover:text-[#e02020] transition-colors">
                      <EyeOff size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex justify-start">
                  <Link href="/forgot-password" className="text-[#0a2071] text-[12px] underline hover:text-[#e02020] transition-colors">
                    Forgotten Password?
                  </Link>
                </div>

                <button type="submit" className="w-full bg-[#e02020] hover:bg-[#c81010] text-white font-bold py-2.5 text-[14px] transition-colors">
                  Log in
                </button>
              </form>

              <div className="mt-5 text-[13px] text-center">
                <span className="text-[#254674]">Don't have an account? </span>
                <Link href="/register" className="text-[#0a2071] underline font-medium hover:text-[#e02020] transition-colors">
                  Request an account
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
