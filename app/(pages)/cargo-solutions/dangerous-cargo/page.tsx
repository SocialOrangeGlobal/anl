import React from 'react';
import Link from 'next/link';
import { ChevronDown, Link2 } from 'lucide-react';

export default function DangerousCargoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cargo-solutions/dangerous-cargo/banner-cargo-dangerous.png')" }}
        ></div>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 container-max h-full flex flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Dangerous Cargo
          </h1>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="py-12 md:py-20">
        <div className="container-max flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">

          {/* Left Content Area */}
          <div className="flex-1 max-w-4xl min-w-0">
            {/* Introduction Text */}
            <p className="text-[#0a2071] font-bold text-[16px] md:text-[18px] leading-[1.6] mb-12 max-w-3xl">
              Dangerous Cargo Offices (DCO) are in charge of delivering acceptance for loading dangerous goods on board our vessels (Marseille, Le Havre, Norfolk, Hong Kong and Melbourne).
            </p>

            <div className="space-y-6 text-[#0a2071] text-[13px] md:text-[14px] leading-[1.7] mb-12">
              <p>
                No dangerous goods under an ANL Bill of Lading are allowed to be loaded on ANL vessels or vessels chartered by ANL or partner's vessels without prior acceptance of ANL Dangerous Cargo Office who will issue an acceptance number.
              </p>
              <p>
                Dangerous Cargo Offices only accept dangerous goods substances complying with IMO Rules/national and local regulations, ANL Policy, Lines Instructions and Ship Manager/Planner comments if particular restrictions due to ships configuration.
              </p>
              <p>
                It is also important to note that a dangerous goods booking under ANL Bill of Lading may be loaded on board partners vessels. In that case, our partners may impose additional restrictions to those previously listed.
              </p>
              <p>
                Acceptance of hazardous cargoes does not relieve shippers of their obligations and shippers will be held fully responsible for any consequences arising out of their negligence, or negligence of any person working for them directly or indirectly.<br />
                Referring to the <Link href="#" className="underline hover:text-[#e02020] transition-colors">IMDG Code</Link>, "<em>classification shall be made by the shipper/consignor or by the appropriate competent authority where specified in this Code</em>".
              </p>
              <p>
                The shipper/consignor is fully responsible of the product classification. The shipper shall provide our local agent with the Dangerous Goods Declaration and the packing certificate duly signed. <strong className="font-bold italic">No dangerous goods will be loaded on board vessels without these documents.</strong>
              </p>
            </div>

            {/* Hazardous Cargo Request Accordion */}
            <div className="border-t border-gray-200 py-6 mb-12">
              <button className="w-full flex items-center justify-between group text-left">
                <div>
                  <h3 className="text-[#0a2071] font-bold text-[24px] md:text-[28px] mb-2 group-hover:text-[#e02020] transition-colors" style={{ fontFamily: "'Antonio', sans-serif" }}>
                    Hazardous Cargo Request
                  </h3>
                  <p className="text-[#0a2071] text-[13px] md:text-[14px] font-bold">
                    Before booking a dangerous good, please prepare information below
                  </p>
                </div>
                <ChevronDown className="w-6 h-6 text-[#e02020] group-hover:translate-y-1 transition-transform flex-shrink-0 ml-4" />
              </button>
            </div>

            {/* References */}
            <h3 className="text-[#0a2071] font-bold text-[32px] md:text-[40px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>
              References
            </h3>

            <div className="flex flex-col gap-4 mb-16">
              <Link href="#" className="inline-flex items-center gap-3 text-[#0a2071] hover:text-[#e02020] font-bold text-[13px] md:text-[14px] underline underline-offset-4 transition-colors">
                <Link2 className="w-4 h-4 text-[#e02020]" />
                ISM Code
              </Link>
              <Link href="#" className="inline-flex items-center gap-3 text-[#0a2071] hover:text-[#e02020] font-bold text-[13px] md:text-[14px] underline underline-offset-4 transition-colors">
                <Link2 className="w-4 h-4 text-[#e02020]" />
                SOLAS regulation
              </Link>
              <Link href="#" className="inline-flex items-center gap-3 text-[#0a2071] hover:text-[#e02020] font-bold text-[13px] md:text-[14px] underline underline-offset-4 transition-colors">
                <Link2 className="w-4 h-4 text-[#e02020]" />
                MARPOL Convention
              </Link>
            </div>

            {/* Contact Banner */}
            <div className="bg-[#eef2f7] py-10 px-8 md:px-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="w-12 h-[4px] bg-[#e02020] mt-4 md:mt-5 flex-shrink-0"></div>
                <div>
                  <h3 className="text-[#0a2071] font-bold text-[32px] md:text-[40px] leading-[1.1] mb-8 max-w-xl" style={{ fontFamily: "'Antonio', sans-serif" }}>
                    For more information, contact your local representative
                  </h3>
                  <button className="bg-[#e02020] hover:bg-[#c81010] text-white font-bold text-[14px] py-3 px-8 transition-colors">
                    Contact us
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="top-32">
              <div className="mb-6 flex items-center gap-4">
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
                    <Link href="/cargo-solutions/project-breakbulk-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[14px] md:text-[15px] underline underline-offset-4">
                      Project & Breakbulk cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/dangerous-cargo" className="flex items-center gap-2 text-[#0a2071] font-bold transition-colors text-[14px] md:text-[15px]">
                      <span>–</span> Dangerous cargo
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
