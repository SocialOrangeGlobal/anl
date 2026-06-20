import { Play } from 'lucide-react';

export default function CmaCgmGroupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-[54px] md:pt-[80px] lg:pt-[100px]">
        {/* ── Hero Section ── */}
        <section className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] bg-[#0a1628] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/first-header/CMA CGM Group Banner.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative z-10 w-full h-full px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto flex items-end pb-10 md:pb-16">
            <h1
              className="text-white drop-shadow-lg"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: '1.1',
                fontWeight: 700,
              }}
            >
              The CMA CGM Group
            </h1>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:pl-24 xl:pl-32 lg:pr-8">
          <div className="w-full max-w-[1000px] mx-auto lg:mx-0">

            {/* Top 3-panel image */}
            <div className="mb-10 w-full">
              <img
                src="/images/first-header/Corporategroupheader-CMA.jpg"
                alt="CMA CGM Group Better Ways Banner"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full mb-12 md:mb-16">
              <p className="text-[#0a2071] text-[12px] md:text-[13px] font-bold tracking-widest uppercase mb-3">
                A Global Player in Sea, Land, Air and Logistics Solutions
              </p>

              <h2
                className="mb-6 md:mb-8"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  fontWeight: 700,
                  color: '#0a2071',
                  lineHeight: '1.1',
                }}
              >
                BETTER WAYS, making supply chains more sustainable every day
              </h2>

              <div className="space-y-5 md:space-y-6 text-[#0a2071] text-[14px] md:text-[15px] leading-[1.8] font-medium">
                <p>
                  The CMA CGM Group, present in 160 countries with 155,000 employees, is a global player in sea, land, air and logistics solutions. It is driven by a strong purpose to contribute to sustainable globalization through better balanced international trade that fosters both economic and social development while respecting the integrity of all men and women and the planet.
                </p>

                <h3 className="text-[18px] md:text-[24px] font-bold mt-8" style={{ fontFamily: "'Antonio', sans-serif" }}>Our Mission</h3>
                <p>
                  To contribute to sustainable globalization through better balanced international trade that fosters both economic and social development while respecting the integrity of all men and women and the planet.
                </p>

                <h4 className="text-[15px] md:text-[18px] font-bold uppercase mt-8 md:mt-10">PURPOSE AND VALUES</h4>
                <p>
                  At CMA CGM, we believe that it is possible to make globalization a lever for economic and social progress. We are committed to a more responsible and fairer globalization. This is the meaning of our purpose: &apos;BETTER WAYS&apos;, making supply chains more sustainable every day.
                </p>

                <h4 className="text-[15px] md:text-[18px] font-bold uppercase mt-8 md:mt-10">ACTING FOR THE PLANET</h4>
                <p>
                  Convinced that the future of our industry lies in the protection of the environment, we are taking bold actions to reduce the carbon footprint of our operations and protect biodiversity. We have committed to becoming Net Zero Carbon by 2050 and are pioneering the use of alternative fuels.
                </p>

                <h4 className="text-[15px] md:text-[18px] font-bold uppercase mt-8 md:mt-10">PROUD OF OUR VALUES, DRIVEN BY OUR PURPOSE</h4>
                <p>
                  Our values are the foundation of our identity and guide our actions every day: BOLD INITIATIVE, IMAGINATION, EXCELLENCE and EXEMPLARY. These values are the driving force behind our commitment to our customers, our partners and our employees.
                </p>

                <h4 className="text-[15px] md:text-[18px] font-bold uppercase mt-8 md:mt-10">BETTER WAYS, THE SIGNATURE OF THE NEW AMBITION OF THE CMA CGM GROUP</h4>
                <p>
                  Through our signature &apos;BETTER WAYS&apos;, we reaffirm our ambition to build more efficient, more resilient and more sustainable supply chains, leveraging our expertise across all transport and logistics domains.
                </p>

                <h4 className="text-[15px] md:text-[18px] font-bold uppercase mt-8 md:mt-10">AN EXPANDED RANGE OF SERVICES</h4>
                <p>
                  To offer our customers end-to-end solutions, we are developing our capabilities in logistics, air freight, and supply chain management, complementing our core maritime business to meet all your needs seamlessly.
                </p>
              </div>
            </div> {/* End Indented Text Section */}

            {/* Video Placeholder */}
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[450px] mb-12 md:mb-16 group cursor-pointer overflow-hidden bg-gray-900 rounded-sm shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: "url('/images/first-header/Corporategroupheader.png')" }}
              ></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:bg-white/30 transition-colors">
                  <Play className="text-white ml-1 md:ml-2 w-8 h-8 md:w-10 md:h-10" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-white text-[24px] sm:text-[36px] md:text-[56px] font-bold tracking-[0.2em] opacity-80" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  BETTER WAYS
                </h3>
              </div>
            </div>

            <div className="w-full mb-12 md:mb-16">
              <h2
                className="mb-6 md:mb-8"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  fontWeight: 700,
                  color: '#0a2071',
                  lineHeight: '1.1',
                }}
              >
                Our values, our strength
              </h2>

              <div className="space-y-5 md:space-y-6 text-[#0a2071] text-[14px] md:text-[15px] leading-[1.8] font-medium">
                <p>
                  Since its establishment in 1978, the CMA CGM Group has continued to grow, drawing its strength from its family dimension, from a long-term strategic vision and from the expertise of its teams animated by a common passion. In keeping with our history and with our culture, we are driven by the values that unite us.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> <div><strong className="font-bold">BOLD INITIATIVE:</strong> We dare to explore new paths and embrace change.</div></li>
                  <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> <div><strong className="font-bold">IMAGINATION:</strong> We are creative and innovative in our approach.</div></li>
                  <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> <div><strong className="font-bold">EXCELLENCE:</strong> We constantly strive for the highest quality in everything we do.</div></li>
                  <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> <div><strong className="font-bold">EXEMPLARY:</strong> We act with integrity, respect and responsibility.</div></li>
                </ul>
              </div>
            </div> {/* End Indented Text Section */}

            {/* Sustainability Image */}
            <div className="mb-8 md:mb-12 w-full rounded-sm overflow-hidden shadow-sm">
              <img
                src="/images/first-header/SustainabilityKV-CMA.jpg"
                alt="Our Sustainability Approach"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full mb-8 md:mb-12">
              <h2
                className="mb-6 md:mb-8"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  fontWeight: 700,
                  color: '#0a2071',
                  lineHeight: '1.1',
                }}
              >
                Our Sustainability Approach
              </h2>

              <div className="space-y-5 md:space-y-6 text-[#0a2071] text-[14px] md:text-[15px] leading-[1.8] font-medium mb-12 md:mb-16">
                <p>
                  As a global player in sea, land, air and logistics solutions, the CMA CGM Group is mobilized to accelerate the energy transition of the shipping and logistics industry. Our sustainability strategy is built around three pillars:
                </p>

                <h4 className="text-[15px] md:text-[18px] font-bold uppercase mt-8 md:mt-10">ACTING FOR PEOPLE</h4>
                <p>Protecting our employees, fostering diversity and inclusion, and supporting local communities.</p>

                <h4 className="text-[15px] md:text-[18px] font-bold uppercase mt-8 md:mt-10">ACTING FOR PLANET</h4>
                <p>Reducing our environmental footprint, fighting climate change, and preserving biodiversity.</p>

                <h4 className="text-[15px] md:text-[18px] font-bold uppercase mt-8 md:mt-10">ACTING FOR FAIR TRADE</h4>
                <p>Promoting ethical business practices, ensuring supply chain transparency, and partnering with our suppliers for sustainable growth.</p>
              </div>

              <h2
                className="mb-6 md:mb-8"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  fontWeight: 700,
                  color: '#0a2071',
                  lineHeight: '1.1',
                }}
              >
                A Premium Upgrade With Our Customers
              </h2>

              <div className="space-y-5 md:space-y-6 text-[#0a2071] text-[14px] md:text-[15px] leading-[1.8] font-medium">
                <p>
                  To offer the best possible experience to our customers, we are constantly upgrading our services and solutions. We invest in digital tools and innovative technologies to provide greater visibility, agility, and efficiency in the supply chain.
                </p>
                <p>
                  Our goal is to be more than just a carrier; we aim to be a true partner in your supply chain, working together to overcome challenges and seize new opportunities. We are dedicated to delivering excellence in every interaction.
                </p>
              </div>
            </div> {/* End Indented Text Section */}

          </div>
        </section>
      </main>
    </div>
  );
}
