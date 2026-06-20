import Link from 'next/link';

export const metadata = {
  title: 'Sustainability | ANL',
  description: "Sustainability: Acting for Planet, People and Fair Trade. ANL Delivers on Sustainable Goals.",
};

const sidebarLinks = [
  { label: 'Company Overview', href: '/about-us' },
  { label: 'Sustainability', href: '/about-us/sustainability', active: true },
  { label: 'Anti-Modern Day Slavery', href: '/about-us/anti-modern-day-slavery' },
  { label: 'Volun-TEU Program', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Partners', href: '#' },
];

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-[54px] md:pt-[64px] lg:pt-[108px]">

        {/* ── Hero Section ── */}
        <section className="relative w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[360px] bg-[#0a1628] flex items-end">
          <div className="absolute inset-0">
            <img
              src="/images/about-us/Sustainability_approach_CMA_CGM.png"
              alt="Sustainability Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto pb-4 sm:pb-6 md:pb-10 lg:pb-14">
            <h1 className="text-white text-[28px] sm:text-[40px] md:text-[52px] lg:text-[68px] font-bold leading-none tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
              Sustainability: Acting for Planet, People and Fair Trade
            </h1>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="bg-white py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto">

            {/* ── Mobile: Sidebar shown first as horizontal pill nav ── */}
            <div className="lg:hidden mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-6 h-[2px] bg-[#e02020] flex-shrink-0" />
                <span className="text-[#0a1628] text-[13px] font-bold uppercase tracking-wide">
                  About Us
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[12px] border px-3 py-1.5 transition-colors ${link.active
                      ? 'border-[#e02020] text-[#e02020]'
                      : 'border-[#d0d8e4] text-[#254674] hover:border-[#e02020] hover:text-[#e02020]'
                      }`}
                  >
                    {link.active && <span className="mr-1">-</span>}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Two-column layout ── */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-20">

              {/* ── Left: Main Content ── */}
              <div className="flex-1 min-w-0">

                {/* Quote block */}
                <div className="flex flex-col md:flex-row gap-6 mb-10">
                  <div className="flex-shrink-0 pt-1">
                    {/* Large red double quote SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#e02020" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] italic leading-[1.8] font-bold mb-4">
                      The CMA CGM Group's mission is to contribute to sustainable globalization through better balanced international trade that fosters both economic and social development while respecting the integrity of all men and women and the planet.
                    </p>
                    <p className="text-[#0a2071] text-[13px] sm:text-[14px] font-bold mb-1">
                      Rodolphe Saade
                    </p>
                    <p className="text-[#0a2071] text-[12px] sm:text-[13px] mb-6">
                      CEO & Chairman of the CMA CGM Group
                    </p>
                  </div>
                </div>

                <div className="pl-0 md:pl-[60px] mb-12">
                  <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-6">
                    In 2024, the CMA CGM Group reinforced our commitments to sustainable growth. The Group's CSR strategy is based on three pillars and objectives aligned with the United Nations Sustainable Development Goals (SDGs).
                  </p>
                  <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-8">
                    The 2024 edition of our Sustainable Development Report, details the work and progress we have done in the past year towards our sustainable commitments.
                  </p>
                  <a href="#" className="inline-block bg-[#e02020] text-white text-[13px] sm:text-[14px] font-bold py-3 px-6 hover:bg-[#c81c1c] transition-colors rounded-sm">
                    Our Sustainability Development Report 2024
                  </a>
                </div>

                {/* ANL Delivers on Sustainable Goals */}
                <h2
                  className="mb-6 mt-16 text-[#0a2071] font-bold"
                  style={{
                    fontFamily: "'Antonio', sans-serif",
                    fontSize: 'clamp(28px, 4vw, 44px)',
                    lineHeight: '1.166',
                  }}
                >
                  ANL Delivers on Sustainable Goals
                </h2>

                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-4">
                  As part of the CMA CGM Group, we as ANL pride ourselves on <span className="italic font-bold">building Oceania's sustainable shipping network</span>: A priority that addresses the Group's mission: contributing to sustainable globalization.
                </p>

                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-8">
                  This commitment is what leads our action and our strategy in every domain including:
                </p>
              </div>

              {/* ── Right: Sidebar (Desktop only) ── */}
              <div className="hidden lg:block lg:w-[220px] xl:w-[240px] flex-shrink-0">
                <div className="top-[120px]">
                  {/* "About Us" heading with red dash */}
                  <div className="flex items-center gap-3 mb-3 border-b border-[#d0d8e4] pb-3">
                    <span className="block w-7 h-[2px] bg-[#e02020] flex-shrink-0" />
                    <span className="text-[#0a1628] text-[14px] lg:text-[15px] font-bold">
                      About Us
                    </span>
                  </div>

                  {/* Sidebar links */}
                  <ul className="flex flex-col">
                    {sidebarLinks.map((link) => (
                      <li key={link.label} className="border-b border-[#e5e7eb]">
                        <Link
                          href={link.href}
                          className="block text-[#254674] text-[13px] lg:text-[14px] py-3 hover:text-[#e02020] hover:underline transition-colors font-medium flex items-center"
                        >
                          {link.active && <span className="mr-2 text-[#0a1628] font-bold">—</span>}
                          <span className={link.active ? 'text-[#0a1628] font-bold underline' : 'underline'}>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ── Our Pillars Section (Spans Full Width of Container) ── */}
            <div className="relative mt-8 mb-20">
              {/* Blue Background restricted to left column width */}
              <div className="absolute top-0 left-0 bottom-[80px] flex flex-row gap-6 md:gap-10 lg:gap-20 w-full pointer-events-none">
                <div className="flex-1 bg-[#0a2071]"></div>
                <div className="hidden lg:block lg:w-[220px] xl:w-[240px] flex-shrink-0"></div>
              </div>

              {/* Header "Our pillars" aligned to left column */}
              <div className="relative z-10 flex flex-row gap-6 md:gap-10 lg:gap-20 pt-10 w-full">
                <div className="flex-1">
                  <h3 className="text-white text-center text-[36px] sm:text-[44px] md:text-[52px] font-bold mb-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                    Our pillars
                  </h3>
                </div>
                <div className="hidden lg:block lg:w-[220px] xl:w-[240px] flex-shrink-0"></div>
              </div>

              {/* 3 Cards Grid spanning full width */}
              <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-8">
                {/* Planet */}
                <div className="relative aspect-[3/4] group overflow-hidden bg-black flex flex-col justify-end p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                  <img src="/images/building-oceania-sustainable-shipping-network/planet-without-text.png" alt="We act for Our Planet" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-50" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <h4 className="text-white font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[1.1] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      We act for Our Planet
                    </h4>
                    <div className="w-12 h-[3px] bg-[#e02020] mb-4"></div>
                    <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] font-bold leading-[1.6]">
                      By preserving air quality, fighting climate change and accelerating the energy transition of our industry in order to achieve net zero carbon by 2050 while preserving marine biodiversity.
                    </p>
                  </div>
                </div>

                {/* People */}
                <div className="relative aspect-[3/4] group overflow-hidden bg-black flex flex-col justify-end p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                  <img src="/images/building-oceania-sustainable-shipping-network/people without text.png" alt="We act for Our People" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-50" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <h4 className="text-white font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[1.1] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      We act for Our People
                    </h4>
                    <div className="w-12 h-[3px] bg-[#e02020] mb-4"></div>
                    <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] font-bold leading-[1.6]">
                      By ensuring the protection and professional development of our staff members and by supporting social innovations to local communities.&nbsp;
                    </p>
                  </div>
                </div>

                {/* Partners */}
                <div className="relative aspect-[3/4] group overflow-hidden bg-black flex flex-col justify-end p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                  <img src="/images/building-oceania-sustainable-shipping-network/fair trade without text.png" alt="We act for Our Partners" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-50" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <h4 className="text-white font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[1.1] mb-3" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      We act for Our Partners
                    </h4>
                    <div className="w-12 h-[3px] bg-[#e02020] mb-4"></div>
                    <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] font-bold leading-[1.6]">
                      Acting ethically and with integrity across the supply chain and offering a range of innovative and sustainable solutions to our customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
