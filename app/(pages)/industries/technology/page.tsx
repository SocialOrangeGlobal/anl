import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        {/* Placeholder for the generated image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/industries/soft-comodities/Tech.png')" }} // Use appropriate Technology image here
        />
        {/* Fallback solid color if image fails to load while dev */}
        <div className="absolute inset-0 bg-slate-800/30"></div>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent"></div>
        <div className="container-max h-full relative flex items-end pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Technologies
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
              Where technology crosses the world expertly
            </h2>
            <div className="text-[#0a2071] text-[14px] md:text-[15px] font-medium leading-[1.8] space-y-6 mb-10">
              <p>
                The tech industry is one of the most dynamic and fast-paced, driving global trends and innovation. From microchips to electronics, battery storage to smart home devices, product lifecycles are short and demand is volatile.
              </p>
              <p>
                Moving products requires a robust, agile, and secure supply chain that can react quickly and effectively.
              </p>
              <p>
                With our extensive network and innovative solutions, CMA CGM helps companies build end-to-end resilient tech supply chains and ensure seamless delivery.
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
                    <a href="/industries/chemicals" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Chemicals
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
                    <a href="/industries/technology" className="flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      <span className="text-[#0a2071] font-bold">—</span>
                      <span className="underline underline-offset-4">Technology</span>
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
              Tailor-made solutions for your Technology needs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Time-speed-cargo.svg" alt="Speed & priority handling" className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Speed & priority handling</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Accelerate your supply chain with Priority Boarding and Express Release to ensure your high-value tech products reach the market on time, ahead of the competition.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Container-Pin.svg" alt="Visibility & control" className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Visibility & control</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Track your high-value tech products throughout the supply chain. Gain real-time insights, anticipate potential disruptions, and secure your products end-to-end.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/soft-comodities/Gears.svg" alt="Innovation" className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Innovation</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Leverage CMA CGM&apos;s advanced technology and digitalization initiatives to optimize your tech supply chain end-to-end, unlocking new efficiencies and visibility.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Profile.svg" alt="Solid team of technology experts" className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Solid team of technology experts</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    A global network of dedicated tech experts providing local knowledge and global reach, ready to support your complex end-to-end tech supply chain.
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
              From tech hubs to global hands
            </h2>
            <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-8">
              An agile and responsive supply chain designed for technology. We connect global production hubs with key consumption markets through an integrated approach that spans ocean, air, and inland transportation.
            </p>
            <div className="w-full">
              <img
                src="/images/industries/automotive/Infographic-Automotive-Suppliers.jpg" // Update with Tech infographic
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
              Tech routes
            </h2>
            <div className="w-full mb-8">
              <img
                src="/images/industries/automotive/CCEC-43279-Automotive-Map.jpg" // Update with Tech map
                alt="Global Tech Routes"
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
            <ul className="text-[#0a2071] font-bold text-[15px] space-y-4 mb-8 list-none">
              <li>- <span className="font-extrabold">Extensive global coverage</span></li>
              <li>- <span className="font-extrabold">Fast transit times</span></li>
              <li>- <span className="font-extrabold">Dedicated services</span></li>
              <li>- <span className="font-extrabold">Comprehensive inland networks</span> connecting major tech hubs globally</li>
            </ul>
            <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-8">
              At CMA CGM, our integrated network and local expertise empower tech companies to build agile, responsive, and secure supply chains.
            </p>
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
                  &quot;The tech industry moves fast, and your supply chain must be just as dynamic. We provide agile, secure, and end-to-end logistics solutions tailored to the unique demands of the technology sector, ensuring your products reach the market efficiently and safely.&quot;
                </p>
                <div>
                  <div className="font-extrabold text-[#0a2071] text-[15px]">CMA CGM Expert</div>
                  <div className="text-[#0a2071] text-[15px]">Global Tech & Electronics Vertical Manager</div>
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
              Specific services for specific technology needs
            </h2>
            <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-12">
              At CMA CGM+, we design value-added solutions that empower tech brands to adapt quickly, stay flexible, and secure their supply chain. Whether you&apos;re optimizing tracking, security, or distribution, our tailored services support your entire journey from production to consumers worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
              <div className="flex flex-col items-center text-center">
                <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">CARGO CARE</span>
                <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>Security Devices</h3>
                <div className="flex items-center justify-center mb-6">
                  <img src="/images/industries/automotive/Priority_white.png" alt="Security Devices" className="w-48 md:w-56 lg:w-64 h-auto object-contain" />
                </div>
                <p className="font-medium text-[14px] md:text-[15px] leading-[1.8]">
                  <a href="#" className="underline text-[#0a2071] hover:text-[#e02020] transition-colors">
                    Protect your high-value tech products against theft and damage
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">SUPPLY CHAIN AGILITY</span>
                <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>Seapriority Go</h3>
                <div className="flex items-center justify-center mb-6">
                  <img src="/images/industries/automotive/BUSINESSsupport2.png" alt="Seapriority Go" className="w-48 md:w-56 lg:w-64 h-auto object-contain" />
                </div>
                <p className="font-medium text-[14px] md:text-[15px] leading-[1.8]">
                  <a href="#" className="underline text-[#0a2071] hover:text-[#e02020] transition-colors">
                    Enjoy priority status for equipment release and space on board
                  </a>
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
