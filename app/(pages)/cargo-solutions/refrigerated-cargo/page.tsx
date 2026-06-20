import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function RefrigeratedCargoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        {/* Placeholder for the generated image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cargo-solutions/refrigerter-cargo/Reefer-Banner.png')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0a1628]/40"></div>

        <div className="relative z-10 container-max h-full flex flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Refrigerated Cargo
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-max flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 w-full overflow-hidden">

          <div className="flex-1 max-w-4xl min-w-0">
            {/* Intro */}
            <div className="mb-20">
              <h2
                className="mb-8 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(32px, 4vw, 42px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Our reefer solutions for your refrigerated cargo
              </h2>
              <p className="text-[#0a2071] font-medium text-[16px] md:text-[18px] leading-[1.6]">
                Our reefer fleet and solutions are customized to your specific needs for your refrigerated cargo, such as specific atmosphere, temperature or humidity conditions.
              </p>
            </div>

            {/* Controlled atmosphere, temperature and humidity */}
            <div className="mb-20">
              <h2
                className="mb-12 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Controlled atmosphere, temperature and humidity
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">REFRIGERATED CARGO</span>
                  <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>CLIMACTIVE con...</h4>
                  <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center">
                    <img src="/images/cargo-solutions/CMA CGM VAS_Digital_CLIMACTIVE_Card thumbnail image.png" alt="CLIMACTIVE" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                    Using the latest technology, we can maintain the right in container atmosphere to keep your fresh cargo fresh and top quality.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">REFRIGERATED CARGO</span>
                  <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>COLD TREATMEN...</h4>
                  <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center">
                    <img src="/images/cargo-solutions/CMA CGM VAS_Digital_COLDTREATMENT_Card thumbnail image.png" alt="COLD TREATMENT" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                    With this solution, you can ship your fruit without the constraints of pesticides during your fruit's voyage.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">REFRIGERATED CARGO</span>
                  <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>CONTAINER hum...</h4>
                  <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center bg-teal-600">
                    <img src="/images/cargo-solutions/CMA CGM VAS_Digital_CONTAINERhumidity_Card thumbnail image.png" alt="CONTAINER humidity control" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                    Our dehumidifying solutions help preserve your cargo in top grade quality through out the shipping journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Track your refrigerated cargo */}
            <div className="mb-20">
              <h2
                className="mb-12 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Track your refrigerated cargo
              </h2>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">REFRIGERATED CARGO</span>
                  <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>SMART REEFER</h4>
                  <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center bg-[#0a58a6]">
                    <img src="/images/cargo-solutions/CMA CGM VAS_Digital_SMART REEFER CONTAINER_405x160px_Thumbnail.png" alt="SMART REEFER" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                    24/7 internet tracker giving you real time tracking of your container and allowing you to set notifications of your cargo.
                  </p>
                </div>
              </div>
            </div>

            {/* Solutions for your specialised reefer cargo */}
            <div className="">
              <h2
                className="mb-12 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Solutions for your specialised reefer cargo
              </h2>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">REFRIGERATED CARGO</span>
                  <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>PHARMA reefer division</h4>
                  <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center bg-purple-200">
                    <img src="/images/cargo-solutions/CMA CGM VAS_Digital_REEFER_Card thumbnail image.png" alt="PHARMA reefer division" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                    A service that maintains the integrity of your pharmaceutical goods during shipment.
                  </p>
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
                    <Link href="/cargo-solutions/refrigerated-cargo" className="flex items-center gap-2 text-[#0a2071] font-bold transition-colors text-[14px] md:text-[15px]">
                      <span>–</span> Refrigerated cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/project-breakbulk-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[14px] md:text-[15px] underline underline-offset-4">
                      Project & Breakbulk cargo
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

        {/* Contact & Help Banner - Full Width */}
        <div className="container-max">

          {/* Download section */}
          <div className="mb-10">
            <p className="text-[#0a2071] font-medium text-[15px] md:text-[16px] leading-[1.8] mb-4">
              Want to find out more about our reefer expertise?
            </p>
            <a
              href="/images/cargo-solutions/refrigerter-cargo/REEFER - A4 - 6 pages - pbyp -EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] text-[15px] font-bold underline underline-offset-4 transition-colors"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-red-100 rounded text-[#e02020] text-[10px] font-bold border border-red-200">PDF</span>
              Download our Brochure
            </a>
          </div>

          <div className="bg-[#eef2f7] flex flex-col md:flex-row relative">
            <div className="w-full md:w-1/2 min-h-[350px] md:min-h-[450px] relative">
              <img src="/images/cargo-solutions/refrigerter-cargo/Reefer-help.png" alt="Contact & Help" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 py-12 px-8 md:px-16 lg:py-20 lg:px-20 flex flex-col justify-center">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-[4px] bg-[#e02020]"></div>
                <h3 className="text-[#0a2071] font-bold text-[36px] md:text-[48px]" style={{ fontFamily: "'Antonio', sans-serif" }}>Contact & Help</h3>
              </div>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-8">
                For more information, <Link href="#" className="text-blue-600 hover:text-blue-800 underline underline-offset-4">contact your local representative</Link>.<br />
                Connect to the <Link href="#" className="text-blue-600 hover:text-blue-800 underline underline-offset-4">My ANL portal</Link> to access to 24 / 7 digital reefer solutions:
              </p>
              <ul className="text-[#0a2071] font-bold text-[14px] md:text-[15px] space-y-3">
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
        </div>
      </section>

    </div>
  );
}
