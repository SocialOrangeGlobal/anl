import React from 'react';
import Link from 'next/link';
import { Play, Handshake, ClipboardList, CalendarCheck, Users, Settings, Ship, ShieldCheck, Link2 } from 'lucide-react';

export default function ProjectBreakbulkCargoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cargo-solutions/breakup-cargo/Project-Cargo-Banner.png')" }}
        ></div>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 container-max h-full flex flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Oversized cargo
          </h1>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="py-12 md:py-20">
        <div className="container-max flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">

          {/* Left Content Area */}
          <div className="flex-1 max-w-4xl min-w-0">
            {/* Title & Introduction */}
            <h2 className="text-[#0a2071] font-bold text-[36px] md:text-[44px] mb-6" style={{ fontFamily: "'Antonio', sans-serif" }}>
              Project Cargo Division
            </h2>
            <p className="text-[#0a2071] font-medium text-[16px] md:text-[18px] leading-[1.8] mb-12">
              We offer solutions for a range of oversized cargo such as breakbulk and out of gauge that requires extra care and planning. Combining experience and expertise, we assist to successfully deliver your special cargo to its destination.
            </p>

            {/* Video Placeholder 1 */}
            <div className="relative mb-16 cursor-pointer group">
              <img src="/images/cargo-solutions/breakup-cargo/image.jpg" alt="CMA CGM Project Cargo Division" className="w-full h-auto rounded shadow-sm" />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1 fill-current" />
                </div>
              </div>
            </div>

            {/* How can we help? */}
            <h3 className="text-[#0a2071] font-bold text-[32px] md:text-[36px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>
              How can we help?
            </h3>

            <div className="space-y-8 mb-16">
              {/* Feature Items */}
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Time-speed-cargo.svg" alt="door-to-door" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#0a2071] font-bold text-[28px] md:text-[32px] mb-2" style={{ fontFamily: "'Antonio', sans-serif" }}>Tailor-Made Offers</h4>
                  <p className="text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">Based on your requirements pertaining to route, equipment, licenses, permissions, schedules and more.</p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/cargo-solutions/breakup-cargo/list.svg" alt="Precise Project Plan" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#0a2071] font-bold text-[28px] md:text-[32px] mb-2" style={{ fontFamily: "'Antonio', sans-serif" }}>Precise Project Plan</h4>
                  <p className="text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">Detailing each element of your project.</p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/cargo-solutions/breakup-cargo/date-timer.svg" alt="A Realistic Proposal" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#0a2071] font-bold text-[28px] md:text-[32px] mb-2" style={{ fontFamily: "'Antonio', sans-serif" }}>A Realistic Proposal</h4>
                  <p className="text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">With an all inclusive-quote provided within the time allocated.</p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/cargo-solutions/breakup-cargo/contact.svg" alt="Dedicated Team Of Experts" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#0a2071] font-bold text-[28px] md:text-[32px] mb-2" style={{ fontFamily: "'Antonio', sans-serif" }}>Dedicated Team Of Experts</h4>
                  <p className="text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">Supervising all aspects of your project from origin to final destination, providing consistent updates.</p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/cargo-solutions/breakup-cargo/container.svg" alt="Anticipation Of All Operational Aspects" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#0a2071] font-bold text-[28px] md:text-[32px] mb-2" style={{ fontFamily: "'Antonio', sans-serif" }}>Anticipation Of All Operational Aspects</h4>
                  <p className="text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">Including lashing, cargo surveying, port liaison and adapted loading.</p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Hand-Vessel.svg" alt="vessel" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#0a2071] font-bold text-[28px] md:text-[32px] mb-2" style={{ fontFamily: "'Antonio', sans-serif" }}>Modern Container Vessels And Terminals</h4>
                  <p className="text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">Vessels are now able to carry up to 500 tons of cargo and container terminals are efficient in loading and discharging capabilities</p>
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 flex flex-col gap-2 pl-[72px]">
                <Link href="#" className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] font-bold text-[13px] uppercase tracking-wide transition-colors">
                  <Link2 className="w-4 h-4 text-[#e02020]" />
                  FIND OUT MORE ON OUT OF GAUGE
                </Link>
                <Link href="/cargo-solutions/dangerous-cargo" className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] font-bold text-[13px] uppercase tracking-wide transition-colors">
                  <Link2 className="w-4 h-4 text-[#e02020]" />
                  FIND OUT MORE ON DANGEROUS CARGO
                </Link>
              </div>
            </div>

            {/* In the News */}
            <h3 className="text-[#0a2071] font-bold text-[32px] md:text-[40px] mb-6" style={{ fontFamily: "'Antonio', sans-serif" }}>
              In the News
            </h3>
            <p className="text-[#0a2071] text-[16px] md:text-[18px] leading-[1.8] mb-6">
              In February this year, a record-breaking number of trays was loaded onto the ANL Darwin Trader. This was a great success from our Project Cargo division.
            </p>
            <p className="text-[#0a2071] text-[16px] md:text-[18px] leading-[1.8] mb-6">
              This was the first large-scale operation involving a 16-Mining tray order at IDBTM, with the entire vessel full of breakbulk cargo only, marking a significant milestone for our project cargo team.
            </p>
            <p className="text-[#0a2071] text-[16px] md:text-[18px] leading-[1.8] mb-8">
              Each tray weighed an average of 29 tons, with dimensions of 13 meters long, 8.6 meters wide, and 4 meters high.
            </p>

            {/* Video Placeholder 2 */}
            <div className="relative w-full aspect-video group cursor-pointer mb-16">
              <img src="/images/cargo-solutions/breakup-cargo/image2.jpg" alt="Breakbulk shipment on the road" className="w-full h-full object-cover rounded shadow-sm" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1 fill-current" />
                </div>
              </div>
            </div>

            {/* Want to learn more? */}
            <h3 className="text-[#0a2071] font-bold text-[32px] md:text-[36px] mb-6" style={{ fontFamily: "'Antonio', sans-serif" }}>
              Want to learn more?
            </h3>
            <div className="mb-10">
              <a
                href="/images/cargo-solutions/breakup-cargo/Project-Cargo-Brochure-Global-English.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] text-[15px] font-bold underline underline-offset-4 transition-colors"
              >
                <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded text-[#e02020] text-[10px] font-bold border border-red-200">PDF</span>
                Download our Brochure
              </a>
            </div>

          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="top-32">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-8 h-[2px] bg-[#e02020]"></div>
                <h3 className="text-[#0a2071] font-bold text-[28px] md:text-[32px] underline decoration-[#0a2071] decoration-[3px] underline-offset-[12px]" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  Cargo Solutions
                </h3>
              </div>
              <nav className="border-t border-b border-gray-200 py-6 mt-4">
                <ul className="space-y-6">
                  <li>
                    <Link href="/cargo-solutions/dry-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[14px] md:text-[15px] underline underline-offset-4">
                      Dry cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/refrigerated-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[14px] md:text-[15px] underline underline-offset-4">
                      Refrigerated cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/project-breakbulk-cargo" className="flex items-center gap-2 text-[#0a2071] font-bold transition-colors text-[14px] md:text-[15px]">
                      <span>–</span> Project & Breakbulk cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/dangerous-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[14px] md:text-[15px] underline underline-offset-4">
                      Dangerous cargo
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>

        {/* You may be interested in... */}
        <div className="container-max mb-20">
          <div className="flex items-center gap-6 mb-12 justify-center">
            <h3 className="text-[#0a2071] font-bold text-[36px] md:text-[48px] text-center" style={{ fontFamily: "'Antonio', sans-serif" }}>
              You may be interested in...
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="#" className="group block bg-white hover:shadow-lg transition-shadow border border-gray-100">
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-[#0a2071] font-bold text-[22px] text-center group-hover:text-[#e02020] transition-colors" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  Dry Containers
                </h4>
              </div>
              <div className="aspect-[16/9] relative bg-gray-100 overflow-hidden">
                <img src="/images/cargo-solutions/breakup-cargo/Dry Container.png" alt="Dry Containers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-[#0a2071] text-[13px] md:text-[14px] leading-[1.6] text-center">
                  Our wide range of standard dry containers allows you to find the exact type of container required for your cargo.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="#" className="group block bg-white hover:shadow-lg transition-shadow border border-gray-100">
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-[#0a2071] font-bold text-[22px] text-center group-hover:text-[#e02020] transition-colors uppercase" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  SERENITY container guarantee
                </h4>
              </div>
              <div className="aspect-[16/9] relative overflow-hidden bg-[#c37e10]">
                <img src="/images/cargo-solutions/cargo-dry/CMA CGM VAS_Digital_SERENITYContainer_Card thumbnail image.png" alt="SERENITY container guarantee" className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-[#0a2071] text-[13px] md:text-[14px] leading-[1.6] text-center">
                  Because damages may happen to your containers, we offer you the easiest and simplest way to avoid repair costs associated with any container damage.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="#" className="group block bg-white hover:shadow-lg transition-shadow border border-gray-100">
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-[#0a2071] font-bold text-[22px] text-center group-hover:text-[#e02020] transition-colors uppercase" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  SERENITY cargo value guarantee
                </h4>
              </div>
              <div className="aspect-[16/9] relative overflow-hidden bg-[#88b111]">
                <img src="/images/cargo-solutions/cargo-dry/CMA CGM VAS_Digital_SERENITYcargovalueguarantee_Card thumbnail image.png" alt="SERENITY cargo value guarantee" className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-[#0a2071] text-[13px] md:text-[14px] leading-[1.6] text-center">
                  Always ensure peace of mind by extending your guarantee for your commercial cargo.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Contacts & Bookings Banner - Full Width */}
        <div className="container-max">
          <div className="bg-[#eef2f7] py-12 px-8 md:px-16 lg:py-16 lg:px-20 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-8">
              <div className="w-12 h-[4px] bg-[#e02020] mt-4 flex-shrink-0"></div>
              <h3 className="text-[#0a2071] font-bold text-[32px] md:text-[40px] leading-[1.1]" style={{ fontFamily: "'Antonio', sans-serif" }}>Contacts & Bookings</h3>
            </div>
            <p className="text-[#0a2071] font-medium text-[15px] md:text-[17px] leading-[1.8] mb-8 pl-0 md:pl-[80px]">
              For more information, contact your local representative<br />
              Connect to the <Link href="#" className="text-blue-600 hover:text-blue-800 underline underline-offset-4">My Customer Service</Link> 24/7 digital assistance Here you can:
            </p>
            <ul className="text-[#0a2071] font-bold text-[15px] md:text-[17px] space-y-3 pl-0 md:pl-[80px]">
              <li className="flex items-start gap-4">
                <span className="text-[#0a2071]">-</span> Request for a quotation
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#0a2071]">-</span> Book a container
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#0a2071]">-</span> Obtain details on my shipment and my equipment
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#0a2071]">-</span> Print my documents & invoices
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#0a2071]">-</span> Receive tailored notifications & alerts
              </li>
            </ul>
          </div>
        </div>

      </section>
    </div>
  );
}
