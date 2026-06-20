export default function AutomotivePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        {/* Placeholder for the generated image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/industries/automotive/auto.png')" }}
        />
        {/* Fallback solid color if image fails to load while dev */}
        <div className="absolute inset-0 bg-slate-800/30"></div>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent"></div>
        <div className="container-max h-full relative flex items-end pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Automotive
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
              Driving your automotive supply chain, from parts to performance
            </h2>
            <div className="text-[#0a2071] text-[14px] md:text-[15px] font-medium leading-[1.8] space-y-6 mb-10">
              <p>
                The automotive industry is undergoing a major transformation driven by electrification, connectivity, sustainability, and evolving mobility models, while facing growing pressure from supply chain disruptions, rising costs, geopolitical uncertainty, and tighter regulations.
              </p>
              <p>
                From inbound components to finished vehicle distribution, production continuity and schedule reliability are critical. Automotive supply chains demand precision, visibility, resilience, and contingency readiness at every step.
              </p>
              <p>
                With a global network, secure capacity and dedicated automotive experts, CMA CGM supports automotive manufacturers and suppliers worldwide, enabling them to navigate complexity while maintaining operational excellence and competitiveness.
              </p>
            </div>
            <button className="bg-[#e02020] hover:bg-[#c81010] text-white font-bold text-sm py-3 px-8 transition-colors">
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
                    <a href="#" className="flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      <span className="text-[#0a2071] font-bold">—</span>
                      <span className="underline underline-offset-4">Automotive</span>
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
              Tailor-made solutions for your automotive needs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Time-speed-cargo.svg" alt="Speed & priority" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Speed & priority handling</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Dedicated end-to-end solutions for finished vehicles, EV batteries, oversized cargo, and high-value automotive parts, combining RoRo, Car-in-Container, and project cargo expertise, with access to 70+ compounds.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Container-Pin.svg" alt="Visibility" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Visibility & control</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Real-time monitoring of inbound and outbound flows through digital tools, EDI/API connectivity, and control tower solutions for full traceability and decision-making.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Time-speed.svg" alt="Just in time" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Just-in-time & production continuity</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Ensure uninterrupted production with optimized routing, secured capacity, and contingency plans designed to avoid plant shutdowns and delays.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Profile.svg" alt="Experts" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Solid team of automotive experts</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    A solid team of 120+ automotive experts built around industry knowledge in 50+ countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Feature Highlight Block */}
          <div className="mb-24 bg-[#eef1f6] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-10 lg:gap-20 items-center">
            <div className="w-full md:w-[45%]">
              <img
                src="/images/industries/automotive/voiture-conteneur.png"
                alt="Car in Container"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-[55%] relative flex flex-col justify-center">
              {/* Red connecting line */}
              <div className="hidden md:block absolute left-[-64px] lg:left-[-96px] top-[24px] w-[40px] lg:w-[60px] h-[3px] bg-[#e02020] z-10"></div>

              <h3
                className="mb-6 relative text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(24px, 3.5vw, 40px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Car in container, a real asset for your automotive supply chain
              </h3>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                Designed for simplicity and efficiency, our Car in Container allows vehicles to be shipped without any dismantling, reducing handling risks and preparation time. Suitable for multimodal transportation, it ensures smooth coordination between road, rail, and sea, while offering optimal protection inside a secured container. With a fully managed door-to-door service, Car In Container provides end-to-end visibility, reliability, and peace of mind for all types of vehicles, including high-value or sensitive cargo.
              </p>
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
              From supplier to showroom
            </h2>
            <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-8">
              From component sourcing to finished vehicle delivery, CMA CGM provides integrated logistics solutions covering the entire automotive value chain. By combining shipping, intermodal transport, terminal operations and inland logistics, we ensure secure, efficient and reliable flows — from suppliers and plants to distribution networks and final destinations.
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
              Automotive routes
            </h2>
            <div className="w-full mb-8">
              <img
                src="/images/industries/automotive/CCEC-43279-Automotive-Map.jpg"
                alt="Global Automotive Routes"
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
            <ul className="text-[#0a2071] font-bold text-[15px] space-y-4 mb-8 list-none">
              <li>- <span className="font-extrabold">Strong presence in Asia & USA</span> and accompanying the growth on Intra-Asia and Latin America</li>
              <li>- <span className="font-extrabold">60+ CMA CGM Group-owned container terminals</span> (fully or partially) including 26 in automotive areas</li>
            </ul>
            <button className="bg-[#e02020] hover:bg-[#c81010] text-white font-bold py-3 px-8 transition-colors">
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
                  The automotive industry requires precision, reliability, and agility. At CMA CGM, our dedicated automotive teams work hand in hand with manufacturers and suppliers to secure production flows, manage complexity across the entire supply chain.
                </p>
                <div>
                  <div className="font-extrabold text-[#0a2071] text-[15px]">Reem HAMDAN</div>
                  <div className="text-[#0a2071] text-[15px]">Automotive Vertical Manager, CMA CGM</div>
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
              Specific services for specific automotive needs
            </h2>
            <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-12">
              At CMA CGM+, we design tailored logistics solutions to support automotive manufacturers and suppliers across all segments — from legacy ICE vehicles to electric and future mobility. Whatever your size, footprint, or maturity, our flexible approach allows us to support you in every market condition and at every stage of your supply chain.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">ACT+</span>
                <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>CO2 Reduction</h3>
                <div className="flex items-center justify-center mb-6">
                  <img src="/images/industries/automotive/CMACGM_VAS_illustrations.jpg" alt="CO2 Reduction" className="w-48 md:w-56 lg:w-64 h-auto object-contain" />
                </div>
                <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                  Reduce your CO2 emissions by up to 83%
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
                <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">BUSINESS SUPPORT</span>
                <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>Serenity Cargo ...</h3>
                <div className="flex items-center justify-center mb-6">
                  <img src="/images/industries/automotive/BUSINESSsupport2.png" alt="Serenity Cargo" className="w-48 md:w-56 lg:w-64 h-auto object-contain" />
                </div>
                <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                  A quick claims settlement in case of damage to your cargo
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
