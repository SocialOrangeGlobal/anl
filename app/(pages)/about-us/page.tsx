import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About Us | ANL',
  description:
    "Building Oceania's Sustainable Shipping Network. Learn about ANL's history, company overview, sustainability initiatives and more.",
};

const sidebarLinks = [
  { label: 'Company Overview', href: '/about-us' },
  { label: 'Sustainability', href: '/about-us/sustainability' },
  { label: 'Anti-Modern Day Slavery', href: '/about-us/anti-modern-day-slavery' },
  { label: 'Volun-TEU Program', href: '/about-us/volunteu' },
  { label: 'Careers', href: '#' },
  { label: 'Partners', href: '#' },
];

const stats = [
  { value: '55.5 billion', label: 'Global revenue in 2024 (USD)' },
  { value: '160,000', label: 'Staff Members' },
  { value: '177', label: 'Countries' },
  { value: '400', label: 'Offices' },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-[54px] md:pt-[64px] lg:pt-[108px]">

        {/* ── Hero Section ── */}
        <section className="relative w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[360px] bg-[#0a1628] flex items-end">
          <div className="absolute inset-0">
            <img
              src="/images/first-header/about-us.png"
              alt="About Us Hero"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto pb-4 sm:pb-6 md:pb-10 lg:pb-14">
            <h1 className="text-white text-[28px] sm:text-[40px] md:text-[52px] lg:text-[68px] font-bold leading-none tracking-tight">
              About Us
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
                    className="text-[#254674] text-[12px] border border-[#d0d8e4] px-3 py-1.5 hover:border-[#e02020] hover:text-[#e02020] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Two-column layout ── */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-20">

              {/* ── Left: Main Content ── */}
              <div className="flex-1 min-w-0" id="company-overview">

                {/* Main Heading — matches .v3-1 h2 exactly */}
                <h2
                  style={{
                    fontFamily: "'Antonio', sans-serif",
                    fontSize: 'clamp(22px, 4vw, 48px)',
                    letterSpacing: 'calc(48px * -0.015)',
                    lineHeight: '1.166',
                    marginBottom: 'clamp(16px, 3vw, 40px)',
                    marginTop: 0,
                    fontWeight: 550,
                    color: '#0a2071',
                    padding: 0,
                  }}
                >
                  Building Oceania&apos;s Sustainable Shipping Network
                </h2>

                {/* Sub-heading */}
                <h3
                  style={{
                    fontFamily: "'Antonio', sans-serif",
                    fontSize: 'clamp(16px, 2.5vw, 28px)',
                    letterSpacing: 'calc(28px * -0.015)',
                    lineHeight: '1.2',
                    fontWeight: 400,
                    color: '#0a2071',
                    marginBottom: 'clamp(12px, 2vw, 20px)',
                    marginTop: 0,
                  }}
                >
                  History &amp; Company Overview
                </h3>

                {/* Body paragraphs */}
                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-4">
                  ANL* specialises in moving your cargo to all major ports throughout Oceania and coverage throughout Asia, Australia, New Zealand, the Pacific Islands, Indian Subcontinent and North America.
                </p>

                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-4">
                  ANL was originally established by the Australian government in 1956 and later became part of the larger CMA CGM Group in 1998. ANL takes pride in being an Australian-based company and embodies these foundations through our brand identity: Better Ways.
                </p>

                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-4">
                  Aligning with the values of our parent company, ANL maintains a firm stance on sustainability, holding particular focus on our oceans with respect for marine life and biodiversity. ANL recently launched the{' '}
                  <Link href="#" className="!text-[#254674] underline hover:text-[#e02020] transition-colors">
                    Reef Recovery Program
                  </Link>{' '}
                  – an initiative dedicated to aiding the coral reef&apos;s regeneration and alleviating the impacts of coral bleaching.
                </p>

                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-5">
                  At ANL, sustainability and CSR is at the forefront of how we operate. We offer the VolunTEU program to all our team members to help integrate sustainability initiatives to something they can be part of. The program gives a unique opportunity to volunteer and give back to the local environment and communities. Initiatives they can be a part of relate to giving back to local communities, supporting the growth of biodiversity, supporting local charities and clean up days.
                </p>

                {/* Blue underlined links */}
                <div className="mb-5 flex flex-col gap-1">
                  <Link href="/about-us/sustainability" className="!text-[#254674] text-[13px] sm:text-[14px] md:text-[15px] underline hover:text-[#e02020] transition-colors">
                    Sustainability
                  </Link>
                  <Link href="/about-us/volunteu" className="!text-[#254674] text-[13px] sm:text-[14px] md:text-[15px] underline hover:text-[#e02020] transition-colors">
                    VolunTEU program
                  </Link>
                </div>

                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-3">
                  ANL is the leading brand for The CMA CGM Group in Oceania, with the Group being the 4th biggest container shipping company in the world, a leader in maritime and logistics.
                </p>

                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-6 md:mb-8">
                  Some key facts about The Group worldwide:
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 mb-6 md:mb-8">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center py-5 sm:py-7 md:py-10 px-2 sm:px-4 border border-[#d0d8e4]"
                    >
                      <div className="text-[#254674] text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-none text-center mb-1 md:mb-2">
                        {stat.value}
                      </div>
                      <div className="text-[#0a2071] text-[10px] sm:text-[11px] md:text-[13px] font-semibold text-center leading-snug mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-4">
                  While our core business is shipping, the CMA CGM Group offers a wide range of ancillary services that provides customers with added convenience and ease when it comes to their broader shipping needs.
                </p>

                <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-8 md:mb-10">
                  To our loyal customers, we would like to thank you for your ongoing support, and we will continue working hard to build a bigger and stronger ANL to meet all your shipping and logistics needs. If you haven&apos;t used us before, call your nearest ANL office to discuss how ANL can make such an impactful different to your shipping needs.
                </p>

                {/* Acknowledgement */}
                <div className="border-t border-[#e5e7eb] pt-6 md:pt-7">
                  <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-3">
                    <span className="font-bold">Acknowledgement:</span>
                  </p>
                  <p className="text-[#0a2071] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] mb-4">
                    In the spirit of reconciliation, ANL* acknowledges the Traditional Custodians of country throughout Australia and their connections to land, sea and community. We pay our respects to their elders past and present and extend that respect to all Aboriginal and Torres Strait Islander peoples today.
                  </p>
                  <p className="text-[#888] text-[11px] md:text-[12px] leading-[1.7]">
                    *ANL is a brand representing both ANL Container Line Pty Ltd and ANL Singapore Pte Ltd as the two ocean carriers.
                  </p>
                </div>

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
                          className="block text-[#254674] text-[13px] lg:text-[14px] py-2.5 underline underline-offset-2 hover:text-[#e02020] hover:no-underline transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
