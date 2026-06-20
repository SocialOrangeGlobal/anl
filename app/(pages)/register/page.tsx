'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className="flex flex-col min-h-screen bg-white pt-[56px] md:pt-[100px] lg:pt-[108px]">
      {/* ── Top Hero Banner ── */}
      <section className="relative w-full h-[200px] sm:h-[250px] bg-[#0a2071] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Registration Banner" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-[32px] sm:text-[40px] font-bold mb-4 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Registration process
          </h1>
          <p className="text-white text-[15px] sm:text-[16px] font-medium max-w-lg mx-auto">
            Welcome to our registration page.<br/>
            Please fill out the form below to request a web account.
          </p>
        </div>
      </section>

      {/* ── Dark Blue Logos Bar ── */}
      <div className="w-full bg-[#0a2071] py-8 flex justify-center items-center gap-16 md:gap-24 text-white">
        <div className="flex flex-col items-center">
          <img src="/images/register/logo_white.svg" alt="CMA CGM" className="h-10 object-contain hover:opacity-80 transition-opacity cursor-pointer" />
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/register/logo_ANL_white.svg" alt="ANL" className="h-8 object-contain hover:opacity-80 transition-opacity cursor-pointer" />
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/register/logo_APL_white.svg" alt="APL" className="h-8 object-contain hover:opacity-80 transition-opacity cursor-pointer" />
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/register/logo_CNC_white.svg" alt="CNC" className="h-8 object-contain hover:opacity-80 transition-opacity cursor-pointer" />
        </div>
      </div>

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 relative">
        
        {/* Vertical Stepper Left */}
        <div className="hidden lg:flex flex-col items-center absolute left-0 top-20 bottom-20 w-16">
          <div className="w-[1px] bg-gray-200 absolute top-4 bottom-4 z-0"></div>
          
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step}
              onClick={() => setActiveStep(step)}
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all ${
                activeStep === step 
                  ? 'bg-[#0a2071] border-none shadow-md' 
                  : activeStep > step 
                    ? 'bg-white border-2 border-[#0a2071]'
                    : 'bg-white border border-gray-300'
              } ${step !== 4 ? 'mb-auto' : ''} relative`}
            >
              <span className={`font-bold text-xs ${activeStep === step ? 'text-white' : activeStep > step ? 'text-[#0a2071]' : 'text-gray-400'}`}>
                {step}
              </span>
              {activeStep === step && (
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#e02020] rounded-full border border-white"></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="w-full lg:pl-24 space-y-16">
          
          {/* Section 1: Account Settings */}
          <section className="flex flex-col md:flex-row gap-8 transition-all">
            <div className="md:w-1/4 cursor-pointer" onClick={() => setActiveStep(1)}>
              <h2 className={`text-[22px] font-bold tracking-wide transition-colors ${activeStep === 1 ? 'text-[#0a2071]' : 'text-gray-400'}`} style={{ fontFamily: "'Antonio', sans-serif" }}>
                Account Settings
              </h2>
            </div>
            {activeStep === 1 && (
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Preferred language</label>
                <select className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] text-[#0a2071] focus:outline-none">
                  <option>Choose a preferred language</option>
                </select>
              </div>
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Email</label>
                <input type="email" placeholder="Enter your business email address*" className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] placeholder:text-[#254674]/50 focus:outline-none" />
              </div>
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Password</label>
                <div className="relative">
                  <input type="password" placeholder="Enter your password*" className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] placeholder:text-[#254674]/50 focus:outline-none" />
                  <span className="absolute right-2 top-2 text-[#254674]/50 cursor-pointer text-xs">SHOW</span>
                </div>
              </div>
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Confirm password</label>
                <div className="relative">
                  <input type="password" placeholder="Confirm password*" className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] placeholder:text-[#254674]/50 focus:outline-none" />
                  <span className="absolute right-2 top-2 text-[#254674]/50 cursor-pointer text-xs">SHOW</span>
                </div>
              </div>
              </div>
            )}
          </section>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200"></div>

          {/* Section 2: User Information */}
          <section className="flex flex-col md:flex-row gap-8 transition-all">
            <div className="md:w-1/4 cursor-pointer" onClick={() => setActiveStep(2)}>
              <h2 className={`text-[22px] font-bold tracking-wide transition-colors ${activeStep === 2 ? 'text-[#0a2071]' : 'text-gray-400'}`} style={{ fontFamily: "'Antonio', sans-serif" }}>
                User Information
              </h2>
            </div>
            {activeStep === 2 && (
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">First name</label>
                <input type="text" placeholder="Enter your first name*" className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] placeholder:text-[#254674]/50 focus:outline-none" />
              </div>
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Last name</label>
                <input type="text" placeholder="Enter your last name*" className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] placeholder:text-[#254674]/50 focus:outline-none" />
              </div>
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Job function</label>
                <select className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] text-[#254674]/50 focus:outline-none">
                  <option>Choose your job function</option>
                </select>
              </div>
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Job title</label>
                <input type="text" placeholder="Enter your title" className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] placeholder:text-[#254674]/50 focus:outline-none" />
              </div>
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Department</label>
                <select className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] text-[#254674]/50 focus:outline-none">
                  <option>Choose your department</option>
                </select>
              </div>
              <div className="hidden md:block"></div>
              
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Phone type</label>
                <select className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] text-[#254674]/50 focus:outline-none">
                  <option>Choose a phone type</option>
                </select>
              </div>
              <div>
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Phone number</label>
                <div className="flex gap-2">
                  <div className="w-16 border-b border-[#0a2071] bg-transparent py-2 text-[14px] text-center text-[#254674]/50">+</div>
                  <input type="text" placeholder="Enter phone number (without zero)*" className="flex-1 border-b border-[#0a2071] bg-transparent py-2 text-[14px] placeholder:text-[#254674]/50 focus:outline-none" />
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <button type="button" className="text-[#0a2071] font-bold text-[13px] flex items-center gap-2 hover:text-[#e02020] transition-colors">
                  <span className="text-lg">+</span> Add phone
                </button>
              </div>
              </div>
            )}
          </section>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200"></div>

          {/* Section 3: Corporate Information */}
          <section className="flex flex-col md:flex-row gap-8 transition-all">
            <div className="md:w-1/4 cursor-pointer" onClick={() => setActiveStep(3)}>
              <h2 className={`text-[22px] font-bold tracking-wide transition-colors ${activeStep === 3 ? 'text-[#0a2071]' : 'text-gray-400'}`} style={{ fontFamily: "'Antonio', sans-serif" }}>
                Corporate Information
              </h2>
            </div>
            {activeStep === 3 && (
              <div className="md:w-3/4 space-y-6 animate-fadeIn">
              <button className="bg-[#0a2071] text-white font-bold text-[13px] px-6 py-2.5 rounded hover:bg-[#1a3081] transition-colors">
                Add organization
              </button>

              <div className="w-full md:w-1/2">
                <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Organization type</label>
                <select className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] text-[#254674]/50 focus:outline-none">
                  <option>Choose organization type</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#0a2071] text-[13px] font-medium mb-1">CMA CGM Shipping Documentation etc. (Optional)</label>
                  <input type="text" placeholder="Enter your booking reference" className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] placeholder:text-[#254674]/50 focus:outline-none" />
                  <label className="flex items-start gap-2 mt-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-[11px] text-[#254674]/80">You will need any details from our Agencies for a Prepaid account request</span>
                  </label>
                </div>
                <div>
                  <label className="block text-[#0a2071] text-[13px] font-medium mb-1">Customer Admin Update (Optional)</label>
                  <input type="text" placeholder="Enter customer admin email address" className="w-full border-b border-[#0a2071] bg-transparent py-2 text-[14px] placeholder:text-[#254674]/50 focus:outline-none" />
                  <label className="flex items-start gap-2 mt-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-[11px] text-[#254674]/80">You can add your account details on the next step to automatically link your existing accounts and your newly registered web user</span>
                  </label>
                </div>
              </div>
              </div>
            )}
          </section>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200"></div>

          {/* Section 4: Preferences */}
          <section className="flex flex-col md:flex-row gap-8 pb-12 transition-all">
            <div className="md:w-1/4 cursor-pointer" onClick={() => setActiveStep(4)}>
              <h2 className={`text-[22px] font-bold tracking-wide transition-colors ${activeStep === 4 ? 'text-[#0a2071]' : 'text-gray-400'}`} style={{ fontFamily: "'Antonio', sans-serif" }}>
                Preferences
              </h2>
              {activeStep === 4 && (
                <p className="text-[#0a2071] text-[12px] mt-4 font-light leading-relaxed animate-fadeIn">
                  Define the user preferences for which you are authorized as the Admin.
                </p>
              )}
            </div>
            {activeStep === 4 && (
              <div className="md:w-3/4 space-y-6 animate-fadeIn">
              
              <div className="bg-[#f8f9fc] p-6 rounded-sm border-l-4 border-[#0a2071]">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0a2071]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                  </div>
                  <p className="text-[13px] text-[#0a2071] font-medium leading-relaxed">
                    Our platform offers Bill of Lading features. The assigned Customer Admin(s) will be able to grant rights to user for these features, once the account is created and your user is approved. We kindly ask you to read and review your options below:
                  </p>
                </div>
              </div>

              {/* Paperless Bill of Lading */}
              <div className="flex flex-col md:flex-row border border-gray-200">
                <div className="p-6 md:w-3/5 bg-white">
                  <h3 className="text-[#0a2071] font-bold text-[15px] mb-2">Paperless Bill of Lading</h3>
                  <p className="text-[#254674] text-[13px] leading-relaxed mb-4">
                    Bill of Lading Paperless is a value added service (VAS) offered on our eBusiness platform, which helps you easily manage your BLs electronically without having to physically print it.
                    Benefit from a service as secure and reliable as the paper version, legal as secure following the same steps as a traditional paper B/L.
                  </p>
                  <a href="#" className="text-[#0a2071] underline text-[13px] font-medium hover:text-[#e02020]">
                    What is Bill of Lading Paperless?
                  </a>
                </div>
                <div className="p-6 md:w-2/5 bg-[#f8f9fc] border-l border-gray-200">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-[#0a2071] font-bold text-[14px]">All Carriers : CMA CGM - CNC - ANL - APL</span>
                  </label>
                </div>
              </div>

              {/* Print original negotiable */}
              <div className="flex flex-col md:flex-row border border-gray-200">
                <div className="p-6 md:w-3/5 bg-white">
                  <h3 className="text-[#0a2071] font-bold text-[15px] mb-2">Print original negotiable</h3>
                  <p className="text-[#254674] text-[13px] leading-relaxed mb-4">
                    Access and print your Original Bill of Lading.
                    This service is new and available as a premium feature adding some cost per transaction to your account depending on your account options and when you access and print your Original Bill of Lading.
                  </p>
                  <a href="#" className="text-[#0a2071] underline text-[13px] font-medium hover:text-[#e02020]">
                    How to print your Original Bill of Lading (OBL) online?
                  </a>
                </div>
                <div className="p-6 md:w-2/5 bg-[#f8f9fc] border-l border-gray-200 space-y-4">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-[#0a2071] font-bold text-[14px]">CMA CGM</span>
                  </label>
                  <div className="h-px bg-gray-200 w-full"></div>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-[#0a2071] font-bold text-[14px]">CNC</span>
                  </label>
                  <div className="h-px bg-gray-200 w-full"></div>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-[#0a2071] font-bold text-[14px]">ANL</span>
                  </label>
                  <div className="h-px bg-gray-200 w-full"></div>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-[#0a2071] font-bold text-[14px]">APL</span>
                  </label>
                </div>
              </div>

            </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}
