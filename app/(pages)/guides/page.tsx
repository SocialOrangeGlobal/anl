'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function GuidesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-[56px] md:pt-[80px] lg:pt-[100px]">

        {/* ── Main Content ── */}
        <section className="py-8 md:py-12 lg:py-16">
          <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

              {/* Left Column (Main Article) */}
              <div className="flex-1 max-w-[850px]">

                {/* Intro Paragraph */}
                <p className="text-[#0a2071] text-[18px] md:text-[22px] font-bold leading-[1.6] mb-12">
                  At ANL Container Line, we take utmost care to ensure the safe transportation of your cargo. We are also committed to provide a safe working environment for our staff at both sea and landside when guarding and transporting your goods.
                </p>

                {/* Section: What is Verified Gross Mass? */}
                <h2
                  className="mb-6"
                  style={{
                    fontFamily: "'Antonio', sans-serif",
                    fontSize: 'clamp(28px, 3.5vw, 42px)',
                    fontWeight: 700,
                    color: '#0a2071',
                    lineHeight: '1.15',
                  }}
                >
                  What is Verified Gross Mass?
                </h2>

                <div className="space-y-6 text-[#0a2071] text-[14px] md:text-[15px] leading-[1.75] mb-10 font-medium">
                  <p>
                    Misdeclaration of cargo weight is a major hazard which often results in cargo claims, structural damages to vessels and also poses a significant risk to the lives of staff.
                  </p>
                  <p>
                    The International Maritime Organization (IMO) has amended the SOLAS (Safety of Life at Sea) convention under regulation 2 of chapter VI which mandates the declaration of the Verified Gross Mass (VGM) of a packed container before loading on board vessels within a prescribed cut-off date / time to the shipping line and / or port terminal authorities.
                  </p>
                  <p>
                    Effective 1st July 2016, the regulation stipulates the use of two approved methods to declare the VGM for each container by the shipper or his representative.
                  </p>
                  <p>
                    SOLAS regulation for weighing containers allows two ways for weighing packed containers in order to obtain the Verified Gross Mass (VGM) for each container by the shipper or his representative.
                  </p>
                  <p>
                    As per the regulation, either of the <strong className="font-bold">two approved methods</strong> must be used to declare the verified gross mass:
                  </p>
                </div>

                {/* Methods Layout */}
                <div className="border-t border-[#e5e7eb] pt-6 mt-2 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    {/* Method 1 */}
                    <div>
                      <h3 className="text-[#0a2071] text-[15px] font-bold mb-4">Method 1</h3>
                      <div className="border-t border-[#e5e7eb] pt-4">
                        <p className="text-[#0a2071] text-[14px] leading-[1.6] min-h-[50px] mb-4">
                          Real weight of the container including tare when cargo is packed
                        </p>
                        <img
                          src="/images/first-header/Guidlines1.png"
                          alt="Method 1 Diagram"
                          className="w-full max-w-[220px] h-auto object-contain"
                        />
                      </div>
                    </div>
                    {/* Method 2 */}
                    <div>
                      <h3 className="text-[#0a2071] text-[15px] font-bold mb-4">Method 2</h3>
                      <div className="border-t border-[#e5e7eb] pt-4">
                        <p className="text-[#0a2071] text-[14px] leading-[1.6] min-h-[50px] mb-4 opacity-60">
                          Addition of the whole cargo including packing and the tare weight of the container
                        </p>
                        <img
                          src="/images/first-header/Guidelines2.png"
                          alt="Method 2 Diagram"
                          className="w-full max-w-[220px] h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[#e5e7eb]"></div>
                </div>

                <p className="text-[#0a2071] text-[14px] md:text-[15px] leading-[1.75] mb-6 font-medium">
                  For an overview of this regulation, a <Link href="#" className="text-[#0a2071] underline hover:text-[#e02020] transition-colors">PDF document</Link> has been jointly published by the <Link href="#" className="text-[#0a2071] underline hover:text-[#e02020] transition-colors">WSC</Link>, <Link href="#" className="text-[#0a2071] underline hover:text-[#e02020] transition-colors">Regional Implementation Information</Link> (Consult <Link href="#" className="text-[#0a2071] underline hover:text-[#e02020] transition-colors">FAQ</Link>), TT Club, ICHCA and the Global Shippers Forum (GSF). It is important to refer to it to get the main guidelines for the implementation of the SOLAS amendment regarding the Verified Gross Mass (VGM) of a container carrying cargo.
                </p>

                <p className="text-[#0a2071] text-[14px] md:text-[15px] font-medium mb-4">
                  Consult our flyers for additional information:
                </p>

                {/* Document Links */}
                <div className="flex flex-col gap-3 mb-14">
                  <Link href="/images/first-header/Guidelins documents/Flyer SOLAS EN V2.pdf" target="_blank" className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] text-[14px] font-semibold group transition-colors">
                    <FileText size={20} className="text-[#e02020] group-hover:translate-y-[-1px] transition-transform" />
                    <span className="underline underline-offset-2">English Version</span>
                  </Link>
                  <Link href="/images/first-header/Guidelins documents/Flyer SOLAS_CN  v2.pdf" target="_blank" className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] text-[14px] font-semibold group transition-colors">
                    <FileText size={20} className="text-[#e02020] group-hover:translate-y-[-1px] transition-transform" />
                    <span className="underline underline-offset-2">Chinese version</span>
                  </Link>
                  <Link href="/images/first-header/Guidelins documents/VGM FAQ.pdf" target="_blank" className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] text-[14px] font-semibold group transition-colors">
                    <FileText size={20} className="text-[#e02020] group-hover:translate-y-[-1px] transition-transform" />
                    <span className="underline underline-offset-2">FAQ</span>
                  </Link>
                </div>

                {/* Section: VGM Submission */}
                <h2
                  className="mb-6 max-w-[700px]"
                  style={{
                    fontFamily: "'Antonio', sans-serif",
                    fontSize: 'clamp(26px, 3.2vw, 38px)',
                    fontWeight: 700,
                    color: '#0a2071',
                    lineHeight: '1.15',
                  }}
                >
                  VGM Submission: CMA CGM Offers Organized Procedures for Minimum Hassle
                </h2>

                <p className="text-[#0a2071] text-[14px] md:text-[15px] leading-[1.75] mb-5 font-medium">
                  CMA CGM&apos;s objective is to ensure easy submission of the Verified Gross Mass (VGM) for our customers as well as easy information exchange with terminals. As per the SOLAS (Safety of Life at Sea) regulations the provision of the following are mandatory. Please note that the responsibility for obtaining and providing the VGM lies with the shipper or the party designated by the shipper for all the containers:
                </p>

                <ul className="space-y-2 mb-6 text-[#0a2071] text-[14px] md:text-[15px] font-medium">
                  <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> VGM (Verified Gross Mass -&gt; Numeric weight)</li>
                  <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> UOM (Unit of Measurement/ KGM, TNE, TON or LBS)</li>
                  <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> Name or Signature of the person who declare the VGM (Free text)</li>
                </ul>

                <p className="text-[#0a2071] text-[14px] md:text-[15px] leading-[1.75] mb-12 font-medium">
                  At ANL Container Line, we bring full compliance measures on VGM requirements with minimum controls. We gather the VGM information, compile and submit the same to the terminals. Shippers can provide VGM information of their containers on their Shipping Instructions (SI) or through a separate submission. We can accept this information from our eBusiness portal, EDI and using Market Places (INTTRA, GTNexus and CargoSmart). And in exceptional circumstances we can accept manual submission using our own <Link href="#" className="text-[#0a2071] underline hover:text-[#e02020] transition-colors">template</Link>.
                </p>

              </div>

              {/* Right Column (Sidebar) */}
              <aside className="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-8 h-[2px] bg-[#e02020]" />
                  <h3
                    style={{
                      fontFamily: "'Antonio', sans-serif",
                      fontSize: 'clamp(26px, 3.2vw, 38px)',
                      fontWeight: 700,
                      color: '#0a2071',
                      lineHeight: '1.15',
                    }}
                  >
                    Guides
                  </h3>
                </div>

                <div className="border-t border-[#e5e7eb] pt-4 mb-4">
                  <ul className="space-y-5">
                    <li>
                      <Link href="#" className="text-[#0a2071] font-semibold text-[14px] hover:text-[#e02020] hover:underline underline-offset-4 transition-colors block">
                        Vessel Certificates
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-[#0a2071] font-semibold text-[14px] hover:text-[#e02020] hover:underline underline-offset-4 transition-colors block">
                        Customs
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-[#0a2071] font-semibold text-[14px] hover:text-[#e02020] hover:underline underline-offset-4 transition-colors block">
                        Regulations
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-[#0a2071] font-semibold text-[14px] hover:text-[#e02020] hover:underline underline-offset-4 transition-colors block">
                        ANL Terms and Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-[#e5e7eb]"></div>
              </aside>

            </div> {/* End of Top Two-Column Layout */}

            {/* ── Bottom Full-Width Content ── */}
            <div className="w-full mt-12 md:mt-16">

              <div className="space-y-5 text-[#0a2071] text-[14px] md:text-[15px] leading-[1.75] mb-10 font-medium">
                <p>
                  All our Shippers with an eBusiness account can avail our eVGM service online, we will also offer the service to companies authorized by shippers for managing the VGM submission.
                </p>
                <p>
                  ANL eBusiness eVGM offers a comprehensive dashboard view along with an active online verification process, ensures an error free VGM submission. Shippers can rely on our single window system for real time view on SOLAS compliance.
                </p>
              </div>

              {/* Subheading: Integrated visibility */}
              <h3
                className="mb-6"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 3.2vw, 38px)',
                  fontWeight: 700,
                  color: '#0a2071',
                  lineHeight: '1.15',
                }}
              >
                Integrated visibility
              </h3>

              <div className="space-y-5 text-[#0a2071] text-[14px] md:text-[15px] leading-[1.75] mb-6 font-medium">
                <p>
                  ANL eBusiness offers to shippers a unique business space, allowing you to follow the SOLAS status of all your containers in a single view.
                </p>
                <p>
                  Maximum Visibility will be also offred on VGM transmission, with a precise VGM Information status at Container level among &apos;Pending&apos;, &apos;Submitted&apos;, &apos;Integrated&apos; or &apos;Rejected&apos;
                </p>
              </div>

              <img
                src="/images/first-header/Solas-Dashboard-2.png"
                alt="VGM Dashboard Screenshot"
                className="w-full border border-gray-200 shadow-sm mb-12"
              />

              {/* Subheading: Online Verification Process */}
              <h3
                className="mb-6"
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(26px, 3.2vw, 38px)',
                  fontWeight: 700,
                  color: '#0a2071',
                  lineHeight: '1.15',
                }}
              >
                Online Verification Process
              </h3>

              <div className="space-y-5 text-[#0a2071] text-[14px] md:text-[15px] leading-[1.75] mb-6 font-medium">
                <p>
                  VGM at ANL eBusiness will control and verify the data entered to limit the risk of rejections. It verifies the declared weights are compatible with the tare weight and allowed weight. The process also verifies the match between the booking number and containers.
                </p>
                <p>
                  Keeping the same philosophy of the Online Business Center, we offer several tips to improve your team productivity:
                </p>
              </div>

              <ul className="space-y-2 mb-8 text-[#0a2071] text-[14px] md:text-[15px] font-medium">
                <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> Mass VGM entry mode via an Excel file upload or individual entry mode via an online form.</li>
                <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> Pre-fill forms for shippers with booking / BL numbers, associated container numbers and tare.</li>
                <li className="flex gap-3"><span className="text-[#0a2071] font-bold">–</span> Easy access and cross navigation from eBusiness Booking / Shipment Dashboards for proceeding with VGM submissions.</li>
              </ul>

              <img
                src="/images/first-header/solas-VGM-KO-2.png"
                alt="Online Verification Process Screenshot"
                className="w-full border border-gray-200 shadow-sm mb-16"
              />

              {/* ── Bottom Call to Action Banner ── */}
              <div className="bg-[#eef1f8] p-8 md:p-10 lg:p-12 w-full">
                <div className="flex items-start gap-4 md:gap-5 max-w-[800px]">
                  {/* Red dash */}
                  <span className="block w-10 md:w-14 min-w-[40px] md:min-w-[56px] h-[4px] md:h-[6px] bg-[#e02020] mt-[10px] flex-shrink-0" />
                  <div className="flex flex-col">
                    <h2
                      style={{
                        fontFamily: "'Antonio', sans-serif",
                        fontSize: 'clamp(24px, 3.5vw, 36px)',
                        fontWeight: 700,
                        color: '#0a2071',
                        lineHeight: '1.15',
                        marginBottom: '24px',
                      }}
                    >
                      For more information, contact your local representative
                    </h2>
                    <Link
                      href="/contact"
                      className="inline-block self-start bg-[#e02020] text-white text-[13px] md:text-[14px] font-semibold px-6 md:px-8 py-2.5 hover:bg-[#c81010] transition-colors"
                    >
                      Contact us
                    </Link>
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
