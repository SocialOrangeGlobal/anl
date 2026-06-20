export default function SoftCommoditiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/industries/soft-comodities/GettyImages.png')" }}
        />
        <div className="absolute inset-0 bg-slate-800/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent"></div>
        <div className="container-max h-full relative flex items-end pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Soft Commodities
          </h1>
        </div>
      </section>

      <div className="container-max py-12 md:py-16">

        {/* Intro Section with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl min-w-0">
            <div className="text-[#0a2071] text-[14px] md:text-[15px] font-medium leading-[1.8] space-y-6 mb-10">
              <p>
                Soft commodities are a cornerstone of the global economy, connecting producers, supply chains, brands, and consumers. With deep expertise across major agricultural value chains, CMA CGM understands the challenges faced by commodity traders and producers. Our mission is to secure supply, strengthen resilience, improve efficiency, and create lasting impacts in sectors that are complex, fragmented, and rapidly evolving.
              </p>
            </div>
            <button className="bg-[#e02020] hover:bg-[#c81010] text-white font-bold text-sm uppercase py-3 px-8 transition-colors">
              Contact us
            </button>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="mb-6 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-[#e02020]"></div>
                <h3 className="text-[#0a2071] font-bold text-[22px] md:text-[24px] border-b border-[#0a2071] pb-1 inline-block" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  Soft Commodities
                </h3>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    <a href="/industries/soft-commodities/coffee" className="inline-block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px] underline underline-offset-2">
                      Coffee
                    </a>
                  </li>
                  <li>
                    <a href="/industries/soft-commodities/cotton" className="inline-block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px] underline underline-offset-2">
                      Cotton
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Full Width Content Sections */}
        <div className="max-w-[1000px] w-full">

          {/* 3. Commodity Cards Grid */}
          <div className="mb-24">
            <h2
              className="mb-8 md:mb-12 text-[#0a2071] text-center"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              CMA CGM expertise for all your commodities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Coffee */}
              <div className="flex flex-col items-center text-center">
                <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">SOFT COMMODITIES</span>
                <h3 className="font-bold text-[#0a2071] text-[20px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Coffee</h3>
                <div className="w-full h-[200px] bg-gray-200 overflow-hidden">
                  <img
                    src="/images/industries/soft-comodities/KV-REEFER_Selection.png"
                    alt="Coffee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Cotton */}
              <div className="flex flex-col items-center text-center">
                <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">SOFT COMMODITIES</span>
                <h3 className="font-bold text-[#0a2071] text-[20px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Cotton</h3>
                <div className="w-full h-[200px] bg-gray-200 overflow-hidden">
                  <img
                    src="/images/industries/soft-comodities/KV-REEFER_Selection3.png"
                    alt="Cotton"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Cocoa - half width, centered */}
            <div className="flex justify-center">
              <div className="w-full md:w-1/2">
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">SOFT COMMODITIES</span>
                  <h3 className="font-bold text-[#0a2071] text-[20px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Cocoa</h3>
                  <div className="w-full h-[200px] bg-gray-200 overflow-hidden">
                    <img
                      src="/images/industries/soft-comodities/KV-REEFER_Selection2.jpg"
                      alt="Cocoa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Solutions Grid */}
          <div className="mb-24">
            <h2
              className="mb-8 md:mb-12 text-[#0a2071] text-center"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              Tailor-made solutions for your soft commodities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Container-3D.svg" alt="Food Grade & Quality Preservation" className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Food Grade & Quality Preservation</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Protect your cargo&apos;s quality and aroma with food-grade containers to help preserved freshness and prevent contamination from origin to destination.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/soft-comodities/Preserve_cargo_quality.svg" alt="Humidity Control & Climate Protection" className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Humidity Control & Climate Protection</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Maintain optimal moisture levels and shield your commodities from climatic variations with advanced humidity-control dressing options that safeguard quality throughout the export journey.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/soft-comodities/Ecocalc.svg" alt="Sustainable End-to-End Solutions" className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Sustainable End-to-End Solutions</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Prepare for upcoming soft commodities regulations with CMA CGM&apos;s end-to-end sustainable transport solutions, enhancing transparency and supporting your ESG goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Profile.svg" alt="Solid team of experts" className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Solid team of experts</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Our experienced team brings deep, on-the-ground commodity expertise across major origins, enabling tailored solutions, real-time insights, and operational excellence throughout the coffee value chain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Contact Block */}
          <div className="bg-[#0a2071] p-10 md:p-14 relative flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-16 bg-[#e02020]"></div>
            <h2
              className="text-white mb-6 md:mb-0 ml-4"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              Need more details ? Contact us !
            </h2>
            <button className="bg-[#e02020] hover:bg-[#c81010] text-white font-bold text-sm uppercase py-4 px-10 transition-colors whitespace-nowrap">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
