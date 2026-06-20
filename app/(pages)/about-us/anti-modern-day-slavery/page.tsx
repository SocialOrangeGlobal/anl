import Link from 'next/link';

export const metadata = {
  title: 'Anti-Modern Day Slavery | ANL',
  description: "Modern Day Slavery Statement. ANL supports the passing of the Australian Modern Day Slavery Act 2018 (Cth) and the efforts to combat modern slavery in all its forms.",
};

const sidebarLinks = [
  { label: 'Company Overview', href: '/about-us' },
  { label: 'Sustainability', href: '/about-us/sustainability' },
  { label: 'Anti-Modern Day Slavery', href: '/about-us/anti-modern-day-slavery', active: true },
  { label: 'Volun-TEU Program', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Partners', href: '#' },
];

export default function AntiModernDaySlaveryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-[54px] md:pt-[64px] lg:pt-[108px]">

        {/* ── Hero Section ── */}
        <section className="relative w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[360px] bg-[#0a1628] flex items-end">
          <div className="absolute inset-0">
            <img
              src="/images/about-us/banner-ANL.jpg"
              alt="Anti-Modern Day Slavery Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto pb-4 sm:pb-6 md:pb-10 lg:pb-14">
            <h1 className="text-white text-[28px] sm:text-[40px] md:text-[52px] lg:text-[68px] font-bold leading-none tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
              Anti-Modern Day Slavery
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

                <h2 className="text-[#0a2071] text-[36px] sm:text-[44px] md:text-[52px] font-bold mb-2 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  Modern Day Slavery Statement
                </h2>

                <p className="text-[#254674] text-[14px] mb-8 font-medium">
                  Reporting Period: 1 January to 31 December 2020
                </p>

                <div className="space-y-10">
                  {/* Introduction */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Introduction
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        With the enactment of the Modern Slavery Act (2018) (the "Act"), the Australian Government is demonstrating a global leadership role in the ongoing fight against modern slavery in international supply chain practices. The Act focuses on problems associated with modern slavery such as human trafficking, forced labour, child labour and slavery-like practices in global supply chains. At its core, the Act follows the growing expectations globally placed on businesses, especially large corporations, to publicly report on and manage their human rights risks and impacts.
                      </p>
                      <p>
                        This statement is made pursuant to the Act by ANL Container Line Pty Ltd ("ANL"), headquartered in Melbourne, Australia for the financial year 1 January to 31 December 2020, for itself and on behalf of its fully owned subsidiaries including ANL Singapore Pte Ltd.
                      </p>
                      <p>
                        ANL is ultimately owned by the French shipping line - CMA CGM S.A. ("CMA CGM"), the world's fourth largest shipping company based in Marseille, France. ANL is an integral part of the global operations of the CMA CGM Group.
                      </p>
                      <p>
                        Within the CMA CGM Group, policies, strategies and actions are centralised and harmonised for effective and aligned implementation globally and regionally. The aim is not only to tackle human rights, fundamental freedom, labour, health and safety issues, but also to achieve the United Nations' Sustainable Development Goals ("SDGs"), which underpin the overall CMA CGM Group's ethics and compliance commitments.
                      </p>
                      <p>
                        As part of the CMA CGM Group, we at ANL are committed to maintaining the highest standards of business ethics, personal and professional integrity in our worldwide operations and supply chains.
                      </p>
                      <p>
                        ANL follows and implements in its own business operations and supply chains the business ethics and compliance policies, processes and actions mandated and implemented by the CMA CGM Group.
                      </p>
                    </div>
                  </section>

                  {/* Structure, Operations and Supply Chains */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-6 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Structure, Operations and Supply Chains
                    </h3>

                    <h4 className="text-[#0a2071] text-[24px] sm:text-[28px] font-bold mb-4 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Structure and Operations
                    </h4>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7] mb-8">
                      <p>
                        ANL is the largest ocean shipping container carrier based in Australia. Formally known as the Australian National Line Limited, ANL was established in 1956 by the Australian Government to operate shipping services around the Australian coast. Over many decades ANL became the backbone of maritime activity in Australia carrying goods around the Australian coast and to many ports around the world.
                      </p>
                      <p>
                        In 1998 ANL was privatised and became part of the CMA CGM Group. ANL Singapore Pte Ltd, a 100% owned subsidiary of ANL, is an ocean container carrier based in Singapore and is responsible for Asian ocean carriage services operated under the ANL brand.
                      </p>
                      <p>
                        Today ANL has 33 chartered vessels in operation for 20 dedicated services at 331 ports of call. With more than 300 employees ANL offers 19 direct services and connections to 420 ports via the CMA CGM Group network. The scope of ANL's operations consists of:
                      </p>

                      <ul className="pl-2 space-y-4">
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div><span className="font-bold">a. Maritime / Shipping:</span> Liner container shipping is ANL's core business with growing expansion into intermodal, break-bulk and value-added services. In 2020 ANL carried 1.29 million containers, consolidating its role as a leading ocean carrier in the Oceania region.</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div><span className="font-bold">Container Park operations:</span> ANL repairs and manages its extensive container fleet through a fully owned container park in Melbourne, Australia – ANL Container Park Pty Ltd.</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div><span className="font-bold">Shipping Agencies:</span> To support ANL's shipping services in the Oceania region ANL relies on a number of CMA CGM owned agencies as well as two subsidiary agencies owned by ANL - ANL Timor Unipessoal Lda in Timor Leste, and ANL Agencies PNG Limited in Papua New Guinea.</div>
                        </li>
                      </ul>
                    </div>

                    <h4 className="text-[#0a2071] text-[24px] sm:text-[28px] font-bold mb-4 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Supply Chains of ANL
                    </h4>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        Noting the extensive operations and activities undertaken by ANL, we collaborate with a large network of suppliers and sub-contractors globally. These include suppliers of products and services to facilitate ANL's business operations as outlined above, including chartering of vessels, equipment leasing, terminal services, bunkering supplies, feedering services, intermodal service providers, IT equipment purchase and IT services, office leasing and office support services.
                      </p>
                      <p>
                        ANL seeks to build long-term and sustainable relations with its suppliers who share the same values as us: excellence, exemplarity, imagination and boldness, because we want our shipping business to be a model of sustainable prosperity, not just for our customers but for all our stakeholders.
                      </p>
                    </div>
                  </section>

                  {/* Risks of Modern Slavery */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Risks of Modern Slavery in ANL's Operations and Supply Chains
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        ANL is aware of the innate modern slavery risks which may potentially be present in certain geographic regions in which we operate, or in certain vulnerable workforces, such as seafarers.
                      </p>
                      <p>
                        Within our global operations, ANL is headquartered in Melbourne with key offices in the capital cities across Australia as well as a regional office in Singapore. Therefore, a significant proportion of our employees are based in low-risk countries for modern slavery.
                      </p>
                      <p>
                        In 2020 ANL engaged an independent third-party expert to conduct a high-level modern slavery risk assessment to identify the overall potential modern slavery risks across ANL's global supply chain. As a result of this initial assessment, a number of sustainable related risks were identified for ANL including: human rights and working conditions, as well as partnerships with our suppliers and subcontractors. As such, ANL will ensure appropriate measures to be put in place in 2021 to address such vulnerable areas as set out below.
                      </p>
                    </div>
                  </section>

                  {/* ANL in the Oceania Region */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      ANL in the Oceania Region
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        Within the Oceania region, in 2020 ANL's Legal Department held a number of meetings with key ANL departments to identify the most vulnerable aspects of our supply chain operations. ANL has identified two main ways to ascertain potential modern slavery risks in our business based on either the area of services/goods to be supplied / sourced or the geographic locations of our operations.
                      </p>

                      <p className="font-bold">Services/Goods of High Risk:</p>
                      <p>
                        ANL charterers vessels for its commercial ocean carriage operations. Therefore, ANL is not directly responsible for crew management on its chartered vessels; this being the responsibility of the vessel owners and its crew managers. ANL does; however, only work with reputable ship owners and ship brokers in our industry, and we only engage with vessel owners who are of good standing.
                      </p>
                      <p>
                        Notwithstanding our best endeavours; however, we acknowledge that the International Transport Workers' Federation ("ITF") has expressed concern at some vessel charterers' levels of due diligence concerning the working conditions aboard ships they charter. Similarly, some government agencies have recorded examples of vessel owners and crew managers of practices having slavery like attributes including: withholding crew pay, restrictions on crew movement and mistreatment of crews. Whilst ANL has not identified any instances of this nature on our chartered vessels, clearly this is one key area of focus for ANL to develop appropriate strategies and controls to ensure good crew working conditions on our chartered vessels.
                      </p>

                      <p className="font-bold">Geographic Locations of High Risk:</p>
                      <p>
                        Within the Oceania region, ANL considers some countries may have a higher modern slavery risks than others in the region due to political, economic, cultural and social conditions. ANL endeavours to provide effective awareness-raising training across all of the business areas and geographic regions of our operations, so that our local staff are empowered to make sustainable procurement choices to the best of their abilities.
                      </p>
                    </div>
                  </section>

                  {/* Impact of COVID-19 */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Impact of COVID-19 - Crew Change and Well-being of Seafarers
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        The COVID-19 pandemic marked much of 2020 and continues today. Due to prolonged and stringent border closures and travel restrictions, which were mandated by sovereign states to counter the spread of coronavirus, the ITF has criticised the inaction by governments to alleviate the crew change problems1 . In July 2020 the UN's International Maritime Organization (IMO) also described the pandemic-induced situation as a "humanitarian crisis" whilst the ITF declared that COVID-19 border and travel restrictions considerably increased the risks of forced labour and even modern slavery. During 2020 worldwide COVID-19 travel restrictions led to many seafarers being trapped onboard vessels and working beyond their standard term of employment.
                      </p>
                      <p>
                        In response to the global pandemic, ANL made the protection and wellbeing of seafarers on its chartered vessels a top priority and implemented various measures to do its part to ease the crew change issues. Measures taken by ANL are outlined further in this statement.
                      </p>
                    </div>
                  </section>

                  {/* Actions Taken to Assess */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Actions Taken to Assess and Address the Risk of Modern Slavery
                    </h3>

                    <h4 className="text-[#0a2071] text-[24px] sm:text-[28px] font-bold mb-4 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Corporate Governance
                    </h4>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        As part of the CMA CGM Group, ANL is guided by the Group's robust corporate governance framework. The Group's Code of Conduct and Third Party Code of Conduct set out the fundamental principles of ethics and compliance that must be respected by all employees and partners.
                      </p>
                    </div>
                  </section>

                  {/* Sustainable Procurement */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Sustainable Procurement
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        Considering the vision and mission of being an exemplary leader in international shipping business and the "Acting for Responsible Trade" commitment, ANL aims to develop structured, systemic and long-term relationships, partnerships and support for suppliers and subcontractors. As noted above, the Third-Party Code of Conduct applies to all contractual relationships between ANL and its business partners and suppliers. This Code sets out non-negotiable minimum standards that ANL expects from our partners, especially our suppliers, their employees and subcontractors.
                      </p>

                      <p className="font-bold">Dedicated Digital Portal for Supplier Relationship Management</p>
                      <p>
                        The CMA CGM Group has developed a digital Supplier Relationship Management (SRM) portal in order to simplify the qualification process and enhance its deployment, the process of which is essential and strategic to ensure sustainable collaboration with our suppliers.
                      </p>

                      <p className="font-bold">The Responsible Purchasing Policy – "The Way to Buy"</p>
                      <p>
                        In order to strengthen the monitoring of supplier risks and share best practices ANL follows the CMA CGM Group published responsible purchasing policy "The Way to Buy". This policy is applicable to all ANL employees involved in any part of the procurement and supplier engagement process.
                      </p>

                      <p className="font-bold">Model Business and Ethics Contractual Clause</p>
                      <p>
                        Furthermore, to reinforce sustainable procurement and to encourage responsible and ethical supplier behaviours, contractual business and ethics clauses have been inserted in all ANL service contracts and general terms of purchase with our suppliers. As such, compliance by the supplier becomes a contractual obligation when providing goods and services to ANL, and provides us with a strong avenue for enforcement should we be concerned with any potential breach.
                      </p>
                    </div>
                  </section>

                  {/* Policies and Processes */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Policies and Processes
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        ANL's fundamental respect and commitment to human rights and labour standards is supported and implemented through a framework of policies and standards, which are designed to mitigate potential risks of modern slavery, human trafficking and human rights breaches in our core business operations and in our international supply chains.
                        <br />
                        ANL strictly adheres to our key business ethics polices as set out in our key documents including our:
                      </p>
                      <ul className="pl-2 space-y-4">
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>a. Code of Ethics;</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>b. Third-Party Code of Conduct;</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>c. Sustainable Procurement Policy;</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>d. Whistle-blowers Ethics Hotline;</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>e. Ethics Charter.</div>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Awareness and Training */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Awareness and Training
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        To create a compliance corporate culture and a deeper understanding of these policies ANL ensures awareness raising and employees' training are key components of ANL's compliance policy.
                      </p>
                      <ul className="pl-2 space-y-4">
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>a. All ANL employees must complete annual E-learning training modules, which cover ethics and compliance training.</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>b. All new ANL employees are required to complete a detailed training course on ethics and compliance. They must also read and sign that they agree with and will abide by the Code of Ethics before starting their employment contract. Employees then receive a reminder email concerning all the e-learning modules on compliance that they are required to complete.</div>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* ANL's Anti Modern Slavery Training */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      ANL's Anti Modern Slavery Training in the Oceania Region
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        During 2020 ANL facilitated an "Anti-Modern Slavery" training programme for middle and senior management of ANL in the Oceania region including Papua New Guinea and Timor Leste, as well as for those managers who are responsible for procurement and purchasing within ANL. The training programme provided insights on several key topics that relate to modern slavery including:
                      </p>
                      <ul className="pl-2 space-y-4">
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>a. the current state of modern slavery and the risks for the international shipping industry;</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>b. types of modern slavery practices;</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>c. an overview of the Australian Modern Slavery Act (2018);</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>d. the statutory reporting requirements under the Australian Modern Slavery Act (2018); and</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>e. the actions ANL is taking to assess and address modern slavery risks in our supply chain.</div>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Grievances and Reporting */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Grievances and Reporting - Ethics and Compliance Hotline
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        ANL is committed to promoting responsible international trade through strict compliance with applicable laws and regulations, and by encouraging our suppliers and customers to adopt best practices with us. In order to provide easy and clear avenues for reporting any concerns including modern slavery risks, an Ethics Hotline which covers ANL was launched by the CMA CGM Group in 2018. This Hotline can be accessed by all ANL employees as well as third parties (suppliers, subcontractors, etc.). It operates 24/7 and can take calls in several languages.
                      </p>
                      <p>
                        Further in line with CMA CGM's Non-Retaliation Policy, ANL undertakes to protect anyone who reports in good faith a potential breach of the law or internal policies from any form of reprisal. For persons who raise such issues in good faith, whether through management channels, the Ethics Hotline or other means, there are no adverse professional or other consequences.
                      </p>
                    </div>
                  </section>

                  {/* ANL's First Anti-Modern Slavery Officer */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      ANL's First Anti-Modern Slavery Officer
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        In the Oceania region ANL has appointed an experienced marine specialist as ANL's Anti-Modern Slavery Officer. This senior manager is responsible for liaising with relevant Australian maritime regulators and vessel owners and operators to observe, report and manage any potential modern slavery risks on board any ANL chartered vessels.
                      </p>
                    </div>
                  </section>

                  {/* Response to COVID-19 */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Response to COVID-19
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p className="font-bold">- Employees of ANL</p>
                      <p>
                        Throughout the unprecedented COVID-19 pandemic the protection and wellbeing of ANL's employees has been a priority for ANL. With proactive communications throughout the pandemic, ANL employees in the Oceania region have been regularly updated on operational developments and have been given support and encouragement to maintain their motivation and wellbeing when working from home. Initiatives have included regular online "Town Hall" updates from ANL senior management, teambased development workshops (on resilience, time management, effective communication and social connecting), daily engagement activities, sports classes and nutritional tips.
                      </p>

                      <p className="font-bold mt-8">- Actions to Address Vessel Crew Change Issues</p>
                      <p>
                        In the absence of a unified approach by sovereign states to address the vessel crew change requirement during COVID-19, ANL has been actively working with vessel owners and crew management companies to arrange for ANL chartered vessels to call ports as required for the sole purposes of facilitating crew changes.
                      </p>
                      <p>
                        In 2020, ANL chartered vessels made port calls at the Port of Brisbane to assist crew changes, as Brisbane is considered to be the most convenient Australian port for crew changes. Crews were also changed on ANL chartered vessels at the Port of Manila, the Philippines as this port is considered another convenient choice of port for crew changes in the Oceania region. Such deviations have taken place despite that the vessel schedule may not include Brisbane or Manila as a port of call for the commercial route. Such deviations were taken so that vessel crews could finally come onshore after an extensive period of staying onboard vessels.
                      </p>
                      <p>
                        In January 2021 the CMA CGM Group signed the Global Maritime Forum's Neptune Declaration on Seafarer Well-being and Crew Change, which is designed to alleviate the ongoing crew-change problem due to COVID-19. In signing the Neptune Declaration the CMA CGM Group and ANL have committed, alongside 300 other maritime organizations and companies, to implement four major actions in response to COVID-19:
                      </p>

                      <ul className="pl-2 space-y-4">
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>a. Recognize seafarers as key workers and give them priority access to COVID-19 vaccines;</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>b. Establish and implement gold standard health protocols based on existing best practice;</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>c. Increase collaboration between ship operators and charterers to facilitate crew changes;</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>d. Ensure air connectivity between key maritime hubs for seafarers.</div>
                        </li>
                      </ul>

                      <p className="mt-6">
                        As such, ANL pledges to deliver on a "shared responsibility" to resolve the crew change issues through strengthened collaboration between ship owners, operators and charterers, in particular:
                      </p>

                      <ul className="pl-2 space-y-4">
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>a. Share relevant information transparently and collaborate to ensure that necessary crew changes can be carried out with the least impact possible in terms of cost and delays. The vessel owner is to provide the vessel charterer with as much notice as possible on intended crew changes, while the vessel charterer will make all reasonable efforts to accommodate crew changes including when the vessel has to make a reasonable deviation.</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>b. No vessel charter contracts should contain clauses preventing necessary crew changes from being carried out.</div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">-</span>
                          <div>c. By implementing high-quality health protocols, vessel owners can reduce the risk of trade disruption which creates benefits to vessel charterers. These benefits should be reflected in chartering decisions to create incentives for shipowners to implement high-quality health protocols and be transparent about actions taken as well as costs incurred.</div>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Assessment and Effectiveness */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Assessment and Effectiveness of Actions Taken
                    </h3>

                    <h4 className="text-[#0a2071] text-[24px] sm:text-[28px] font-bold mb-4 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Feedback from ANL's Stakeholders
                    </h4>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        Identifying our sustainable priorities in line with external and internal stakeholders' concerns is essential in our approach. Consequently, in 2020 the CMA CGM Group conducted several workshops with our staff members worldwide and launched an online questionnaire for staff, customers and suppliers to probe their interests and concerns about the Group's and ANL's sustainable development pillars and challenges. This exercise gives us insight into future developments and trends, enables ANL to share good practices and inspires proposals on sustainable changes in transport and logistics activities.
                      </p>
                      <p>
                        In 2021 ANL plans to establish a specific Anti Modern Slavery Committee with key staff from ANL Legal, HR, Operations, Communication and Sales departments to oversee the continued efforts of minimising and eradicating any modern slavery risks in our operations and procurement.
                      </p>
                    </div>

                    <h4 className="text-[#0a2071] text-[24px] sm:text-[28px] font-bold mb-4 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Membership and Assessment by External Rating Platforms
                    </h4>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p className="font-bold">EcoVadis (https://ecovadis.com/) – CMA CGM Group</p>
                      <p>
                        EcoVadis is a ratings platform to assess corporate social responsibility and sustainable procurement. Since its creation in 2007 EcoVadis has grown to become the world's largest and most trusted provider of business sustainability ratings, creating a global network of more than 75,000 rated companies. Every year the CMA CGM Group fills out the EcoVadis questionnaire comprising four themes, three of which are directly related to human rights: labour and human rights, ethics, and sustainable procurement.
                      </p>
                      <p>
                        EcoVadis also performs a study using a multitude of data from external stakeholders. The aim is to collect information and opinions, both positive and negative, on a company's performance regarding labour, the environment and ethics. If a case is significant, for instance, involving a fine, a sanction or conviction, the score for each theme will be negatively impacted. EcoVadis factors in information and data from over 100,000 sources across media, governments, trade unions, NGOs and business networks.
                      </p>
                      <p>
                        In the past few years the CMA CGM Group including ANL has significantly improved our performance in the "Labour & Human Right" theme. After receiving the Gold Label for five consecutive years CMA CGM was awarded the Platinum Label in 2020, the highest level of certification delivered by EcoVadis. The CMA CGM Group is in the top 1 percent of all companies assessed by EcoVadis.
                      </p>

                      <p className="font-bold mt-8">SEDEX (www.sedex.com) – ANL in Oceania</p>
                      <p>
                        In addition to the Group's EcoVadis membership and rating, locally in Oceania ANL is a member of Sedex which is a membership organisation that provides leading online platforms for companies to manage and improve working conditions in global supply chains.
                      </p>
                      <p>
                        By becoming a member of Sedex ANL can provide more transparency to its customers, many of whom are also corporate members of Sedex, via the online capability and visibility, to share ANL's compliance and procurement data in an efficient and effective manner.
                      </p>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section>
                    <h3 className="text-[#0a2071] text-[32px] sm:text-[36px] md:text-[44px] font-bold mb-5 tracking-wide mt-10" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      Conclusion
                    </h3>
                    <div className="space-y-5 text-[#0a2071] text-[15px] md:text-[16px] leading-[1.7]">
                      <p>
                        This Modern Slavery Statement was prepared by the ANL Legal Department in consultation with ANL management, Human Resources, Operations, Customer Services and Sustainability teams.
                      </p>
                      <p>
                        ANL is committed to further developing its anti-modern slavery systems and procedures on an ongoing basis. ANL considers this a key requirement of its successful business operations into the future and it is fully committed to maintaining the highest standards of business ethics, personal integrity and compliance in all of our business activities. ANL has zero-tolerance for any form of modern slavery with any of its business operations, employment practices or supply chain partners.
                      </p>
                      <p>
                        This Statement was approved by the Board of directors of ANL Container Line on 18 June 2021 and is hereby signed by a member of the Board.
                      </p>
                    </div>

                    <div className="mt-10">
                      <a href="/images/about-us/MODERN SLAVERY STATEMENT FY2024.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a2071" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <span className="text-[#0a2071] font-bold text-[15px] underline underline-offset-4">
                          Anti-Modern Day Slavery Document
                        </span>
                      </a>
                    </div>
                  </section>
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
          </div>
        </section>
      </main>
    </div>
  );
}
