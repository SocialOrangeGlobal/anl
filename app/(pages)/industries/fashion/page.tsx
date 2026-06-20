export default function FashionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        {/* Placeholder for the generated image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/industries/automotive/Fashion.png')" }}
        />
        {/* Fallback solid color if image fails to load while dev */}
        <div className="absolute inset-0 bg-slate-800/30"></div>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent"></div>
        <div className="container-max h-full relative flex items-end pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Fashion & Lifestyle
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
              From trend to shelf, on time
            </h2>
            <div className="text-[#0a2071] text-[14px] md:text-[15px] font-medium leading-[1.8] space-y-6 mb-10">
              <p>
                Fashion and lifestyle supply chains face multiple constraints: short life cycles, shifting consumer demand, variable volumes, and a need for sustainable solutions. Ensuring visibility, responsiveness, and flexibility is crucial to stay ahead. At the CMA CGM Group, our fashion experts offer tailored, agile, and robust solutions across global and local markets. Through our customized operations, specialized infrastructure, and advanced digital tools, we ensure your garments, textiles, and lifestyle products reach their final destination efficiently and securely.
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
                    <a href="/industries/fashion" className="flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      <span className="text-[#0a2071] font-bold">—</span>
                      <span className="underline underline-offset-4">Fashion</span>
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
              Tailor-made solutions for your Fashion & Lifestyle needs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Time-speed.svg" alt="Speed to market & flexibility" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Speed to market & flexibility</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Deliver collections on time with priority shipping solutions designed for launches, drops and peak seasons, ensuring your products reach the market as planned — even under pressure.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Hand-Eco.svg" alt="Sustainable end-to-end solutions" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Sustainable end-to-end solutions</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    CMA CGM supports Fashion & Lifestyle brands in reducing their carbon footprint through low-carbon fuels, modal shift solutions and certified emissions reporting aligned with your sustainability roadmap.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Container-Pin.svg" alt="Visibility & control" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Visibility & control</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    End-to-end visibility through My CMA CGM, SpotOn, Cargo Tracking, EDI/API connectivity and Control Tower solutions, enabling proactive decision-making across your flows.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <img src="/images/industries/automotive/Profile.svg" alt="Solid team of fashion experts" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>Solid team of fashion & lifestyle experts</h3>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    A solid organization of 350+ Fashion & Lifestyle experts located in 50+ countries, combining global coordination and strong local execution to support long-term partnerships.
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
              From Factory to Store, Seamlessly
            </h2>
            <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-8">
              Our comprehensive network connects manufacturing hubs with global retail markets. Through interconnected ocean, air, and inland solutions, we manage the entire journey—from sourcing origins to distribution centers and storefronts.
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
              Fashion & Lifestyle routes
            </h2>
            <div className="w-full mb-8">
              <img
                src="/images/industries/automotive/CCEC-43279-Automotive-Map.jpg"
                alt="Global Fashion Routes"
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
            <ul className="text-[#0a2071] font-bold text-[15px] space-y-4 mb-8 list-none">
              <li>- <span className="font-extrabold">Dedicated Fashion Corridors</span> from key manufacturing hubs</li>
              <li>- <span className="font-extrabold">Fast and agile connections</span> to major consumption markets</li>
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
                  &quot;Fashion supply chains operate on strict deadlines. Our dedicated global teams provide agile end-to-end solutions, adapting quickly to capacity constraints and ensuring your collections are shelf-ready, right on time.&quot;
                </p>
                <div>
                  <div className="font-extrabold text-[#0a2071] text-[15px]">Valerie LACH</div>
                  <div className="text-[#0a2071] text-[15px]">Fashion & Lifestyle Vertical Manager, CMA CGM</div>
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
                Specific services for your Fashion & Lifestyle needs
              </h2>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-12">
                At CMA CGM+, we design value-added solutions that empower Fashion & Lifestyle brands to adapt quickly, stay flexible and protect their brand image — whatever the season or market challenge. From production sites to retail stores and e-commerce channels, our tailored services support your entire supply chain journey
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
                  <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">SUPPLY CHAIN AGILITY</span>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>Seapriority Rea...</h3>
                  <div className="flex items-center justify-center mb-6">
                    <img src="/images/industries/automotive/Priority_white.png" alt="Seapriority Ready" className="w-48 md:w-56 lg:w-64 h-auto object-contain" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    Speed up your cargo&apos;s delivery to final destination
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#f0f4f8] text-[#0a2071] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-4">CARGO CARE</span>
                  <h3 className="font-bold text-[#0a2071] text-[18px] md:text-[20px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>Container Gar...</h3>
                  <div className="flex items-center justify-center mb-6">
                    <img src="/images/industries/automotive/Cargo_Preparation_white.png" alt="Container Garment" className="w-48 md:w-56 lg:w-64 h-auto object-contain" />
                  </div>
                  <p className="font-medium text-[14px] md:text-[15px] leading-[1.8]">
                    <a href="#" className="underline text-[#0a2071] hover:text-[#e02020] transition-colors">
                      Safe and secure service specially designed to ship clothes, leather and fragile fabrics directly on hangers
                    </a>
                  </p>
                </div>
              </div>
            </div></div>

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
