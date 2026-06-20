import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function MaritimeSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Hero Banner ── */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#1a1a1a] flex items-end px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/shipping/maritime-solutions/banner_page_activities_maritime.png" 
            alt="Maritime Solutions" 
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        </div>

        {/* Hero Title */}
        <div className="max-w-[1400px] mx-auto w-full relative z-20 pb-12 sm:pb-16 md:pb-24">
          <h1 className="text-white text-[40px] sm:text-[56px] md:text-[64px] lg:text-[76px] font-bold tracking-wide leading-none" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Maritime Solutions
          </h1>
        </div>
      </section>

      <main className="flex-grow">
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            
            {/* Top Section: Intro & Sidebar */}
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
              
              {/* Left Intro Text */}
              <div className="flex-1 min-w-0 pr-0 lg:pr-12">
                <p className="text-[#0a2071] text-[16px] md:text-[18px] font-bold leading-[1.6]">
                  ANL Container Line, as part of the CMA CGM Group, operates one of the most extensive maritime networks in Oceania. Our highly efficient vessel fleet and diverse range of inland services allows us to offer worldwide integrated cargo transport solutions from anywhere in the world, coastal or otherwise.
                </p>
              </div>

              {/* Right Sidebar */}
              <div className="w-full lg:w-[320px] shrink-0 mt-8 lg:mt-0">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 h-[2px] bg-[#e02020] inline-block"></span>
                  <h3 className="text-[#0a2071] text-[20px] md:text-[24px] font-bold tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                    Maritime services
                  </h3>
                </div>
                <ul className="flex flex-col">
                  <li className="border-t border-b border-[#e5e7eb]">
                    <Link
                      href="#"
                      className="block py-4 text-[15px] font-medium text-[#0a2071] hover:text-[#e02020] underline underline-offset-4 transition-colors"
                    >
                      Lines & Services schedules
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* 4 Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-32">
              
              {/* Feature 1 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/images/shipping/maritime-solutions/boat.svg" alt="Ship Anywhere" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                  <h3 className="text-[#0a2071] text-[22px] md:text-[26px] font-bold tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                    Ship Anywhere
                  </h3>
                </div>
                <p className="text-[#0a2071] text-[13px] md:text-[14px] leading-relaxed">
                  Leveraging the CMA CGM Group network, ANL can ship your cargo to and from Oceania and beyond. The group operates on more than 200 shipping routes with over 504 vessels, across 420 ports of call and 160 countries.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/images/shipping/maritime-solutions/container.svg" alt="Ship Anything" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                  <h3 className="text-[#0a2071] text-[22px] md:text-[26px] font-bold tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                    Ship Anything
                  </h3>
                </div>
                <p className="text-[#0a2071] text-[13px] md:text-[14px] leading-relaxed">
                  Thanks to the expertise of our team and our large assortment of containers, we can ship any type of cargo ranging from liquids and food, through to yachts and heavy plant machinery.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/images/shipping/maritime-solutions/date-timer.svg" alt="Ship Efficiently" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                  <h3 className="text-[#0a2071] text-[22px] md:text-[26px] font-bold tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                    Ship Efficiently
                  </h3>
                </div>
                <p className="text-[#0a2071] text-[13px] md:text-[14px] leading-relaxed">
                  Our Group agency network across the globe is well-known for its broad coverage and comprehensive customer service, ensuring the quality, efficiency and safety of your cargo.
                </p>
              </div>

              {/* Feature 4 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/images/shipping/maritime-solutions/leaf.svg" alt="Ship Clean" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                  <h3 className="text-[#0a2071] text-[22px] md:text-[26px] font-bold tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                    Ship Clean
                  </h3>
                </div>
                <p className="text-[#0a2071] text-[13px] md:text-[14px] leading-relaxed">
                  Our vessel fleet is constantly being improved through innovative solutions that let us act in a more sustainable and eco-friendly way every day, allowing us to reduce our overall carbon footprint.
                </p>
              </div>

            </div>

            {/* "You may be interested in..." */}
            <div>
              <h2 className="text-[#0a2071] text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-normal mb-12 text-center" style={{ fontFamily: "'Antonio', sans-serif" }}>
                You may be interested in...
              </h2>

              <div className="flex items-center gap-4">
                <button className="hidden lg:flex items-center justify-center w-12 h-12 text-[#0a2071] hover:text-[#e02020] transition-colors shrink-0">
                  <ArrowLeft className="w-8 h-8" strokeWidth={1} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                  
                  {/* Card 1 */}
                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <span className="inline-block bg-[#eaf0f6] text-[#0a2071] text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4">
                      CORE SERVICES
                    </span>
                    <h3 className="text-[#0a2071] text-[28px] font-bold tracking-wide mb-6 group-hover:text-[#e02020] transition-colors" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Reefer
                    </h3>
                    <div className="w-full h-[200px] mb-6 overflow-hidden">
                      <img src="/images/shipping/maritime-solutions/CarouselCard_Reefer.png" alt="Reefer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <p className="text-[#0a2071] text-[14px] leading-relaxed px-4">
                      Our Reefer containers are specifically designed to transport your perishable goods in a temperature-controlled environment. They come in a wide variety of sizes and with all the latest technologies.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <span className="inline-block bg-[#eaf0f6] text-[#0a2071] text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4">
                      CORE SERVICES
                    </span>
                    <h3 className="text-[#0a2071] text-[28px] font-bold tracking-wide mb-6 group-hover:text-[#e02020] transition-colors" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Special Cargo
                    </h3>
                    <div className="w-full h-[200px] mb-6 overflow-hidden">
                      <img src="/images/shipping/maritime-solutions/SpecialCargo.png" alt="Special Cargo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <p className="text-[#0a2071] text-[14px] leading-relaxed px-4">
                      Our high-level transportation expertise covers a wide range of Special Cargo, from out-of gauge to XXL consignments.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <span className="inline-block bg-[#eaf0f6] text-[#0a2071] text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4">
                      OUR OFFICES
                    </span>
                    <h3 className="text-[#0a2071] text-[28px] font-bold tracking-wide mb-6 group-hover:text-[#e02020] transition-colors" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Agency network
                    </h3>
                    <div className="w-full h-[200px] mb-6 overflow-hidden">
                      <img src="/images/shipping/maritime-solutions/AgencyNetwork.png" alt="Agency network" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <p className="text-[#0a2071] text-[14px] leading-relaxed px-4">
                      Anywhere, everywhere, all over the world, there is a CMA CGM Group agency to provide you with efficient, innovative intermodal solutions designed to suit your specific cargo needs.
                    </p>
                  </div>

                </div>

                <button className="hidden lg:flex items-center justify-center w-12 h-12 text-[#0a2071] hover:text-[#e02020] transition-colors shrink-0">
                  <ArrowRight className="w-8 h-8" strokeWidth={1} />
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
