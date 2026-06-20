import React from 'react';
import Link from 'next/link';

export default function DryCargoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        {/* Placeholder for the generated image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cargo-solutions/cargo-dry/Dry-Cargo.png')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0a1628]/40"></div>

        <div className="relative z-10 container-max h-full flex flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Dry Cargo
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-max flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">

          <div className="flex-1 max-w-4xl min-w-0">
            {/* For a variety of goods */}
            <div className="mb-20">
              <h2
                className="mb-8 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(32px, 5vw, 42px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                For a variety of goods
              </h2>
              <p className="text-[#0a2071] font-medium text-[16px] md:text-[18px] leading-[1.6]">
                Our expertise and wide range of services helps you customise for all types of general cargo across broad range of industries.
              </p>
            </div>

            {/* Stress-free delivery */}
            <div className="mb-20">
              <h2
                className="mb-8 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Stress-free delivery
              </h2>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.8] mb-12">
                With our <Link href="#" className="text-blue-600 underline hover:text-blue-800">serenity</Link> range, we have a range of solutions to ensure you are covered if your cargo is damaged.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">GUARANTEE</span>
                  <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>SERENITY cargo ...</h4>
                  <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center">
                    <img src="/images/cargo-solutions/cargo-dry/CMA CGM VAS_Digital_SERENITYcargovalueguarantee_Card thumbnail image.png" alt="SERENITY cargo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                    A service revolutionizing claims management should your cargo be damaged. No matter what happens or who is to blame, you will be indemnified under this policy offering total peace of mind.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">GUARANTEE</span>
                  <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>SERENITY conta...</h4>
                  <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center">
                    <img src="/images/cargo-solutions/cargo-dry/CMA CGM VAS_Digital_SERENITYContainer_Card thumbnail image.png" alt="SERENITY container" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                    This cover curbs the implications to your business of accidental or unforeseen damage to our containers while they are your responsibility.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">GUARANTEE</span>
                  <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>SERENITY deduc...</h4>
                  <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center">
                    <img src="/images/cargo-solutions/cargo-dry/CMA-CGM-VAS_Digital_SERENITYdeductible-guarantee_Card thumbnail image.png" alt="SERENITY deductible" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7] underline underline-offset-4 decoration-1 hover:text-blue-800 cursor-pointer">
                    Should your cargo be damaged, your insurance policy may apply a deductible. With this service, you can obtain compensation covering these costs, for which you would normally be liable.
                  </p>
                </div>
              </div>
            </div>

            {/* Have specific needs? */}
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
                Have specific needs?
              </h2>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col items-center text-center">
                  <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">CONTAINER SELECTION</span>
                  <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>CONTAINER grade selection</h4>
                  <div className="w-full h-56 overflow-hidden mb-8 flex items-center justify-center">
                    <img src="/images/cargo-solutions/cargo-dry/CMA CGM VAS_Digital_CONTAINERselection_Card thumbnail image.png" alt="CONTAINER selection" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                    With this service you can select the grade of container that best suits your cargo needs with food grade or premium+ grade options available.
                  </p>
                </div>
              </div>
            </div>

            {/* Why choose us? */}
            <div className="mb-24">
              <h2
                className="mb-12 text-[#0a2071]"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                }}
              >
                Why choose us?
              </h2>

              <div className="flex flex-col gap-12">
                <div className="flex gap-8 items-start">
                  <div className="shrink-0 mt-1">
                    <img src="/images/cargo-solutions/cargo-dry/list.svg" alt="Suitable For Any Industry" className="w-14 h-14" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-3 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>Suitable For Any Industry</h4>
                    <p className="text-[#0a2071] font-medium text-[15px] md:text-[16px] leading-[1.7]">
                      All CMA CGM Group containers meet ISO standards 1496 and 6346, as well as C.S.C. criteria (Convention for Safe Containers) and are fitted for all industry cargo needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="shrink-0 mt-1">
                    <img src="/images/cargo-solutions/cargo-dry/truck-train.svg" alt="Fully Multi-Modal" className="w-14 h-14" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-3 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>Fully Multi-Modal</h4>
                    <p className="text-[#0a2071] font-medium text-[15px] md:text-[16px] leading-[1.7]">
                      Enabling transit by ship, train, barge and truck.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="shrink-0 mt-1">
                    <img src="/images/cargo-solutions/cargo-dry/board-gear.svg" alt="Tailored To Your Needs" className="w-14 h-14" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-3 uppercase tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>Tailored To Your Needs</h4>
                    <p className="text-[#0a2071] font-medium text-[15px] md:text-[16px] leading-[1.7]">
                      With an extensive range of dry containers available you can choose what's best suited for your cargo, with serenity to ensure your cargo is protected and container grade selection to further suit your cargo's needs.
                    </p>
                  </div>
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
                    <Link href="/cargo-solutions/dry-cargo" className="flex items-center gap-2 text-[#0a2071] font-bold transition-colors text-[14px] md:text-[15px]">
                      <span>–</span> Dry cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/refrigerated-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[14px] md:text-[15px] underline underline-offset-4">
                      Refrigerated cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/project-breakbulk-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[14px] md:text-[15px] underline underline-offset-4">
                      Project & Breakbulk cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[14px] md:text-[15px] underline underline-offset-4">
                      Dangerous cargo
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

        </div>

        {/* You may be interested in... */}
        <div className="container-max mb-12 border-t border-gray-200 pt-20">
          <h2
            className="mb-14 text-[#0a2071] text-center"
            style={{
              fontFamily: "'Antonio', sans-serif",
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 700,
              lineHeight: '1.1',
            }}
          >
            You may be interested in...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center">
              <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">SERVICES</span>
              <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>Refrigerated cargo</h4>
              <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center relative">
                <img src="/images/cargo-solutions/cargo-dry/Reefer blanc.png" alt="Refrigerated cargo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                Those containers are designed for the transport of perishable goods in a temperature-controlled environment.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center">
              <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">SERVICES</span>
              <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>Project and Breakbulk Cargo</h4>
              <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center relative">
                <img src="/images/cargo-solutions/cargo-dry/SpecialCargo.png" alt="Project and Breakbulk Cargo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                Our high-level transportation expertise covers a wide range of Special Cargo, from OOGs to XXL consignments.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center">
              <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">CMA CGM GROUP</span>
              <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[24px] mb-5 uppercase tracking-wide w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>Agency network</h4>
              <div className="w-full h-48 md:h-56 overflow-hidden mb-8 flex items-center justify-center relative">
                <img src="/images/cargo-solutions/cargo-dry/AgencyNetwork.png" alt="Agency network" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-[#0a2071] font-medium text-[14px] md:text-[15px] leading-[1.7]">
                Anywhere, everywhere, all over the world, there's a CMA CGM Group agency to provide you with efficient, innovative intermodal solutions designed to suit your specific cargo needs.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
