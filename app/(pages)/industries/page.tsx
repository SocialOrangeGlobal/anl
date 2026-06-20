import Link from 'next/link';
import { Ship, Truck, Plane, Warehouse, Package } from 'lucide-react';

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        {/* Placeholder for the generated image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/industries/Homepage.png')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0a1628]/60"></div>

        <div className="relative z-10 container-max h-full flex flex-col justify-end pb-12 md:pb-16">
          <div className="flex items-center gap-4 mb-6 text-white/80">
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center"><Ship size={18} /></div>
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center"><Truck size={18} /></div>
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center"><Plane size={18} /></div>
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center"><Warehouse size={18} /></div>
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center"><Package size={18} /></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Industry Expertise
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-white">
        <div className="container-max flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">

          <div className="flex-1 max-w-4xl min-w-0">
            {/* 2. Intro */}
            <h2
              className="mb-6 md:mb-8 text-[#0a2071]"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(26px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              Tailored solutions for every industry, from end to end
            </h2>
            <p className="text-[#0a2071] font-medium text-[14px] md:text-[16px] leading-[1.8] mb-16">
              At CMA CGM, we bring deep expertise across a wide range of industries and commodities. Our teams understand the specific challenges, constraints and opportunities of each sector. This strong vertical knowledge allows us to design tailored logistics solutions that match your operational realities and support your long-term ambitions. Whatever your industry, we combine market insight, technical know-how and a client-first mindset to deliver sustainable, measurable value.
            </p>

            {/* 3. Industries Grid */}
            <div className="mb-24">
              <h2
                className="mb-10 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Industries
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">

                {/* Automotive */}
                <div className="flex flex-col items-center group">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">INDUSTRIES</span>
                  <h3 className="font-bold text-[#0a2071] text-[22px] md:text-[26px] mb-5 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>Automotive</h3>
                  <Link href="/industries/automotive" className="block w-full text-center">
                    <div className="w-full h-48 md:h-[220px] overflow-hidden bg-gray-100">
                      <img src="/images/industries/automotive/auto.png" alt="Automotive" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className="text-[#0a2071] text-[14px] font-medium mt-4 inline-block group-hover:text-[#e02020] transition-colors">Learn more</span>
                  </Link>
                </div>

                {/* Chemicals */}
                <div className="flex flex-col items-center group">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">INDUSTRIES</span>
                  <h3 className="font-bold text-[#0a2071] text-[22px] md:text-[26px] mb-5 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>Chemicals</h3>
                  <Link href="/industries/chemicals" className="block w-full text-center">
                    <div className="w-full h-48 md:h-[220px] overflow-hidden bg-gray-100">
                      <img src="/images/industries/automotive/Chemical.png" alt="Chemicals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className="text-[#0a2071] text-[14px] font-medium mt-4 inline-block group-hover:text-[#e02020] transition-colors">Learn more</span>
                  </Link>
                </div>

                {/* Fashion & Lifestyle */}
                <div className="flex flex-col items-center group">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">INDUSTRIES</span>
                  <h3 className="font-bold text-[#0a2071] text-[22px] md:text-[26px] mb-5 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>Fashion & Lifestyle</h3>
                  <Link href="/industries/fashion" className="block w-full text-center">
                    <div className="w-full h-48 md:h-[220px] overflow-hidden bg-gray-100">
                      <img src="/images/industries/automotive/Fashion.png" alt="Fashion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className="text-[#0a2071] text-[14px] font-medium mt-4 inline-block group-hover:text-[#e02020] transition-colors">Learn more</span>
                  </Link>
                </div>

                {/* FMCG & Beverages */}
                <div className="flex flex-col items-center group">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">INDUSTRIES</span>
                  <h3 className="font-bold text-[#0a2071] text-[22px] md:text-[26px] mb-5 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>FMCG & Beverages</h3>
                  <Link href="/industries/fmcg-beverages" className="block w-full text-center">
                    <div className="w-full h-48 md:h-[220px] overflow-hidden bg-gray-100">
                      <img src="/images/industries/automotive/FMCG-crop.png" alt="FMCG & Beverages" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className="text-[#0a2071] text-[14px] font-medium mt-4 inline-block group-hover:text-[#e02020] transition-colors">Learn more</span>
                  </Link>
                </div>

                {/* Retail */}
                <div className="flex flex-col items-center group">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">INDUSTRIES</span>
                  <h3 className="font-bold text-[#0a2071] text-[22px] md:text-[26px] mb-5 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>Retail</h3>
                  <Link href="/industries/retail" className="block w-full text-center">
                    <div className="w-full h-48 md:h-[220px] overflow-hidden bg-gray-100">
                      <img src="/images/industries/automotive/Retail.png" alt="Retail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className="text-[#0a2071] text-[14px] font-medium mt-4 inline-block group-hover:text-[#e02020] transition-colors">Learn more</span>
                  </Link>
                </div>

                {/* Soft Commodities */}
                <div className="flex flex-col items-center group">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">INDUSTRIES</span>
                  <h3 className="font-bold text-[#0a2071] text-[22px] md:text-[26px] mb-5 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>Soft Commodities</h3>
                  <Link href="/industries/soft-commodities" className="block w-full text-center">
                    <div className="w-full h-48 md:h-[220px] overflow-hidden bg-gray-100">
                      <img src="/images/industries/soft-comodities/KV-REEFER_Selection3.png" alt="Soft Commodities" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className="text-[#0a2071] text-[14px] font-medium mt-4 inline-block group-hover:text-[#e02020] transition-colors">Learn more</span>
                  </Link>
                </div>
              </div>

              {/* Technologies - Centered */}
              <div className="flex justify-center mt-16">
                <div className="w-full md:w-1/2 flex flex-col items-center group">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">INDUSTRIES</span>
                  <h3 className="font-bold text-[#0a2071] text-[22px] md:text-[26px] mb-5 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>Technologies</h3>
                  <Link href="/industries/technology" className="block w-full text-center">
                    <div className="w-full h-48 md:h-[220px] overflow-hidden bg-gray-100">
                      <img src="/images/industries/soft-comodities/Tech.png" alt="Technologies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className="text-[#0a2071] text-[14px] font-medium mt-4 inline-block group-hover:text-[#e02020] transition-colors">Learn more</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Why choose CMA CGM */}
            <div className="mb-20">
              <h2
                className="mb-8 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Why choose CMA CGM
              </h2>

              <h3 className="text-[#0a2071] font-bold text-[18px] md:text-[20px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>A global organization built for excellence</h3>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-8">
                With shipping operations connecting to all global ports, you have the assurance that our vessels, infrastructure, network and agility match the ambition of your business. Our network reaches all continents and markets seamlessly giving you access to all destinations, helping your business to overcome supply chain challenges.
              </p>

              <h3 className="text-[#0a2071] font-bold text-[18px] md:text-[20px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Unmatched global coverage</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-12">
                <li>Global presence including 420 ports of call</li>
                <li>State-of-the-art fleet</li>
                <li>More than 250 shipping services covering 5 continents</li>
                <li>Integrated approach with terminal presence and solutions offering inland shipping with dedicated capacity tailored to local specificities</li>
                <li>Our global network allows cargo to reach its destination with speed, flexibility, and reliability</li>
              </ul>
            </div>

            {/* 5. A partner in your decarbonization journey */}
            <div className="mb-20">
              <h2
                className="mb-6 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                A partner in your decarbonization journey
              </h2>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-6">
                Sustainability is at the heart of our strategy. With ACT with CMA CGM+, we provide solutions to reduce your supply chain&apos;s carbon footprint and navigate your operations.
              </p>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-6">
                With ACT with CMA CGM+, our extensive array of solutions you reduce your impact and leap forward.
              </p>
              <Link href="#" className="inline-block text-[#0a2071] hover:text-[#e02020] underline underline-offset-4 text-sm font-bold transition-colors">
                Discover ACT+ {'>'}
              </Link>
            </div>

            {/* 6. Going the extra mile */}
            <div className="mb-20">
              <h2
                className="mb-6 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Going the extra mile
              </h2>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-4">
                CMA CGM has scaled its operations to cover every transport requirement, supported by a dedicated shipping intermodal transport network.
              </p>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8]">
                During PR campaigns CMA CGM ensures full compliances to global markets — reaffirming our commitment to enrich the lives of others.
              </p>
            </div>

            {/* 7. CMA CGM+: Services beyond shipping */}
            <div className="">
              <h2
                className="mb-6 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                CMA CGM+: Services beyond shipping
              </h2>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-6">
                CMA CGM+ gives you access to a comprehensive range designed to strengthen your supply chain without disruption. We ensure your cargo receives the utmost protection. Explore value added services through CMA CGM+ for the peace of mind throughout the entire supply chain and beyond.
              </p>
              <Link href="#" className="inline-block text-[#0a2071] hover:text-[#e02020] underline underline-offset-4 text-sm font-bold transition-colors">
                Discover CMA CGM+ {'>'}
              </Link>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="top-32">
              <div className="mb-6 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-[#e02020]"></div>
                <h3 className="text-[#0a2071] font-bold text-[22px] md:text-[24px] border-b border-[#0a2071] pb-1 inline-block uppercase" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  Industry Expertise
                </h3>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    <Link href="/industries/automotive" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Automotive
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/chemicals" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Chemicals
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/fashion" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Fashion
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/fmcg-beverages" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Beverages
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/retail" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Retail
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/soft-commodities" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Soft Commodities
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/technology" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[15px]">
                      Technology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
