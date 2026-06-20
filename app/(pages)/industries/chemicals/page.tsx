export default function ChemicalsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        {/* Placeholder for the generated image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/industries/automotive/Chemical.png')" }}
        />
        {/* Fallback solid color if image fails to load while dev */}
        <div className="absolute inset-0 bg-slate-800/30"></div>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent"></div>
        <div className="container-max h-full relative flex items-end pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Chemicals
          </h1>
        </div>
      </section>

      <div className="container-max py-12 md:py-16">

        {/* Intro Section with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl min-w-0">
            <h2
              className="mb-6 md:mb-8 text-[#0a2071]"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              Delivering chemicals safely, efficiently and responsibly
            </h2>
            <div className="text-[#0a2071] text-[14px] md:text-[15px] font-medium leading-[1.8] space-y-6 mb-10">
              <p>
                The chemical industry is undergoing a profound transformation, driven by innovation in specialty products, the energy transition, and global demand growth. At the same time, companies face increasing pressure from the management of cross-border trade constraints and variable prices. These factors make chemical supply chains more complex, demanding and subject to disruption. Ensuring conformity, compliance, and on-time delivery requires flawless planning, full visibility, and expert handling of dangerous goods. At CMA CGM, with our advanced capabilities, digital tools, and solid team of chemical experts help secure your flow of raw materials and support manufacturing and distribution — keeping operations running smoothly, safely and efficiently.
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
                <h3 className="text-[#0a2071] font-bold text-lg uppercase tracking-wider border-b border-[#0a2071] pb-1 inline-block">
                  Industry expertise
                </h3>
              </div>

              <div>
                <ul className="space-y-4">
                  <li>
                    <a href="/industries/automotive" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Automotive
                    </a>
                  </li>
                  <li>
                    <a href="/industries/chemicals" className="flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      <span className="text-[#0a2071] font-bold">—</span>
                      <span className="underline underline-offset-4">Chemicals</span>
                    </a>
                  </li>
                  <li>
                    <a href="/industries/fashion" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a href="/industries/fmcg-beverages" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Beverages
                    </a>
                  </li>
                  <li>
                    <a href="/industries/retail" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Retail
                    </a>
                  </li>
                  <li>
                    <a href="/industries/soft-commodities" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Soft Commodities
                    </a>
                  </li>
                  <li>
                    <a href="/industries/technology" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Technology
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Full Width Content Sections */}
        <div className="max-w-[1000px] w-full">

          {/* 3. Solutions Grid */}
          <div className="mb-24">
            <h2
              className="mb-8 md:mb-12 text-[#0a2071]"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              Tailor-made solutions for your chemicals needs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Hand-Vessel.svg" alt="Flexibility & agility" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Flexibility & agility</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Enhance your supply chain with DIT (Drop-off In Transit) solutions and customized storage options for accelerated delivery, improved safety and cost-efficiency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Optimize-check.svg" alt="Safety & compliance" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Safety & compliance excellence</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Zero compromise when it comes to compliance. Our teams ensure strict adherence to International Maritime Organization (IMO), dangerous goods, and local regulations, protecting people, cargo, and the environment across all trade lanes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Hand-Eco.svg" alt="Sustainable solutions" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Sustainable end-to-end solutions</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Leverage low-carbon transport options, intermodal solutions, and ACT+ to reduce emissions and align your logistics decisions with your ESG and regulatory commitments.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Profile.svg" alt="Chemical experts" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Solid team of chemical experts</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Rely on a strong and experienced organization with 150+ dedicated IMO and Shipper-Owned Container (SOC) experts, supported by a global commercial and operational network ensuring consistent execution worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Infographics: Supply Chain */}
          <div className="mb-24">
            <h2
              className="mb-6 md:mb-8 text-[#0a2071]"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              From production to end markets, your chemicals move safely and under control
            </h2>
            <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-8">
              The CMA CGM Group offers dedicated end-to-end solutions tailored to your specific supply chain needs. Supported by our global maritime network, logistics solutions and extensive inland connectivity, we provide reliable, secure and efficient delivery from production facilities to end markets.
            </p>
            <div className="w-full">
              <img
                src="/images/industries/automotive/Infographic-Automotive-Suppliers.jpg"
                alt="Supply Chain Process"
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* 5b. Infographics: Routes */}
          <div className="mb-24">
            <h2
              className="mb-6 md:mb-8 text-[#0a2071]"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              Chemicals routes
            </h2>
            <div className="w-full mb-8">
              <img
                src="/images/industries/automotive/CCEC-43279-Automotive-Map.jpg"
                alt="Global Chemicals Routes"
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
            <ul className="text-[#0a2071] font-bold text-[15px] space-y-4 mb-8 list-none">
              <li>- <span className="font-extrabold">Strong integration across the global network</span> across the world</li>
              <li>- <span className="font-extrabold">Specific expertise and robust solutions</span> from major chemicals hubs to global markets</li>
            </ul>
            <button className="bg-[#e02020] hover:bg-[#c81010] text-white font-bold text-sm uppercase py-3 px-8 transition-colors">
              Find your route
            </button>
          </div>

          {/* 6. Expert Testimonial */}
          <div className="mb-24">
            <h2
              className="mb-6 md:mb-8 text-[#0a2071]"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              A word from our expert
            </h2>
            <div className="bg-[#f0f4f8] p-8 md:p-14 relative flex">
              <div className="mr-6 pt-2 flex-shrink-0">
                <img src="/images/industries/automotive/quote.svg" alt="Quote" className="w-12 h-auto" />
              </div>
              <div>
                <p className="text-[#0a2071] font-medium text-[16px] md:text-[18px] italic leading-relaxed mb-8">
                  &quot;The chemicals sector faces unique logistical challenges. At CMA CGM, our dedicated chemicals experts work with you to ensure safety, regulatory compliance, and seamless end-to-end delivery of your products.&quot;
                </p>
                <div>
                  <div className="font-extrabold text-[#0a2071] text-[15px]">Mario CAPPUCCI</div>
                  <div className="text-[#0a2071] text-[15px]">Chemicals Vertical Manager, CMA CGM</div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Specific Services */}
          <div className="mb-24">
            <h2
              className="mb-6 md:mb-8 text-[#0a2071]"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              Specific services for specific chemicals needs
            </h2>
            <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-12">
              At CMA CGM+, we design value-added services that address the specific operational, regulatory, and commercial challenges of the chemical industry. Our modular approach allows you to scale, adapt, and optimize your logistics — regardless of your market conditions or growth ambitions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">SUPPLY CHAIN AGILITY</span>
                <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>Freetime Exten...</h3>
                <div className="flex items-center justify-center mb-6">
                  <img src="/images/industries/automotive/Flexibility_white.png" alt="Freetime Extension" className="w-48 md:w-56 lg:w-64 h-auto object-contain" />
                </div>
                <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                  Choose the package most adapted to your needs and extend your freetime conditions!
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">BUSINESS SUPPORT</span>
                <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>My Exclusive C...</h3>
                <div className="flex items-center justify-center mb-6">
                  <img src="/images/industries/automotive/BUSINESSsupport.png" alt="My Exclusive C..." className="w-48 md:w-56 lg:w-64 h-auto object-contain" />
                </div>
                <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                  Premium customer service with a dedicated team, 24/7
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">ACT+</span>
                <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>CO2 Reduction</h3>
                <div className="flex items-center justify-center mb-6">
                  <img src="/images/industries/automotive/CMACGM_VAS_Illustrations.jpg" alt="CO2 Reduction" className="w-48 md:w-56 lg:w-64 h-auto object-contain" />
                </div>
                <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                  Reduce your CO2 emissions by up to 83%
                </p>
              </div>
            </div>
          </div>

          {/* 8. Contact Block */}
          <div className="bg-[#eef1f6] p-10 md:p-14 relative flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-16 bg-[#e02020]"></div>
            <h2
              className="text-[#0a2071] mb-6 md:mb-0 ml-4"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              Need more details? Contact us!
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
