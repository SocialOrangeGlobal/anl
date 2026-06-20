import React from 'react';
import Link from 'next/link';

export default function VolunTeuPage() {
  const links = [
    { label: 'Volun-TEU Program', href: '/about-us/volun-teu', active: true },
    { label: 'Sustainability', href: '/about-us/sustainability' },
    { label: 'Anti-Modern Day Slavery', href: '/about-us/anti-modern-day-slavery' },
    { label: 'Partners', href: '/about-us/partners' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Hero Banner ── */}
      <section className="relative w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[380px] bg-[#1a1a1a] flex px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full flex justify-between relative z-10">
          <div className="flex items-end pb-8 sm:pb-10 md:pb-16">
            <h1 className="text-white text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-bold tracking-wide leading-none" style={{ fontFamily: "'Antonio', sans-serif" }}>
              Our CSR Program
            </h1>
          </div>
          <div className="flex items-center pt-4 sm:pt-0">
            <img src="/images/volunteu/website-banner.png" alt="VolunTEU All Hands On Deck" className="w-[240px] sm:w-[320px] md:w-[420px] lg:w-[500px] xl:w-[600px] object-contain" />
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <section className="w-full bg-white py-10 sm:py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-24">

            {/* ── Left: Main Content ── */}
            <div className="flex-1 min-w-0">

              {/* 1. The VolunTEUs Block */}
              <div className="flex flex-col md:flex-row bg-[#0a2071] text-white overflow-hidden mb-16">
                <div className="w-full md:w-[55%] h-[300px] md:h-auto relative">
                  <img src="/images/volunteu/image2.jpg" alt="The VolunTEUs" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-[45%] p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-[3px] bg-[#e02020] inline-block"></span>
                    <h2 className="text-[32px] sm:text-[40px] font-bold tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                      The VolunTEUs
                    </h2>
                  </div>
                  <p className="text-[15px] leading-relaxed mb-8 font-light">
                    Our <span className="italic font-bold">VolunTEU program</span> was created to give all team members an opportunity to volunteer and give back to the environment and local communities. This program expands across our Oceania network.
                  </p>
                  <div>
                    <a href="#" className="inline-block bg-[#e02020] hover:bg-[#c81a1a] text-white text-[14px] font-bold px-8 py-3 transition-colors">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Dynamic Sections */}
              {[
                {
                  title: "PEOPLE-FOCUSED INITIATIVES - GIVING BACK TO COMMUNITIES",
                  items: [
                    {
                      tag: "PEOPLE FOCUSED",
                      title: "Big Umbrella (Australia)",
                      desc: ["Our VolunTEUs have supported the Big Umbrella for several years, volunteering their time to help prepare and cook a variety of meals and then later on serve to those that are in need of a 'real meal' in Melbourne's CBD.", "Our team members get a chance to aid along with the Big Umbrella crew and connect with our friends on the street."],
                      image: "/images/volunteu/big-umbrella.png",
                      imagePosition: 'right',
                      carouselImages: ["/images/volunteu/Carosoul1_1.png", "/images/volunteu/Carosoul1_2.jpg", "/images/volunteu/Carosoul1_3.jpg"]
                    },
                    {
                      tag: "PEOPLE FOCUSED",
                      title: "Bike Build for Variety (Australia)",
                      desc: ["In celebration of World Bicycle Day 2024, our VolunTEUs in Melbourne participated in the Variety - the Children's Charity Victoria's Bike Build.", "We have been participating in this inspiring initiative for two years now, in which our team members build a number of bikes for children in need. This encourages bike education to disadvantaged youth."],
                      image: "/images/volunteu/bike-build.png",
                      imagePosition: 'left',
                      carouselImages: ["/images/volunteu/Carosoul2_1.png", "/images/volunteu/Carosoul2_2.png", "/images/volunteu/Carosoul2_3.png"]
                    },
                    {
                      tag: "PEOPLE FOCUSED",
                      title: "Days for Girls (Australia)",
                      desc: ["Days for Girls advances menstrual equity, health, dignity and opportunity for all. Our VolunTEUs joined hands to help create washable, reusable menstrual hygiene kits for women and girls in developing countries.", "Through this initiative, we are helping to break the stigma and ensure girls do not miss out on vital days of education."],
                      image: "/images/volunteu/days-for-girls.png",
                      imagePosition: 'right',
                      carouselImages: ["/images/volunteu/Carosoul3_1.png", "/images/volunteu/Carosoul3_2.png", "/images/volunteu/Carosoul3_3.png"]
                    },
                    {
                      tag: "PEOPLE FOCUSED",
                      title: "Saga Tahiti",
                      desc: ["Saga Tahiti is an organization dedicated to helping children in precarious situations in French Polynesia. Our team in Tahiti volunteered their time and resources to support the Saga's summer camps.", "These camps provide a safe and nurturing environment for children to enjoy recreational activities, learn new skills, and create positive memories away from their difficult daily lives."],
                      image: "/images/volunteu/saga-tahiti.png",
                      imagePosition: 'left',
                      carouselImages: ["/images/volunteu/Carosoul4_1.png", "/images/volunteu/Carosoul4_2.png", "/images/volunteu/Carosoul4_3.png"]
                    }
                  ]
                },
                {
                  title: "ENVIRONMENTAL INITIATIVES - PROTECTING OUR PLANET FOR THE FUTURE",
                  items: [
                    {
                      tag: "ENVIRONMENTAL",
                      title: "Trees That Count (New Zealand)",
                      desc: ["Our New Zealand team joined the Trees That Count initiative, rolling up their sleeves to plant native trees in local reserves. This effort helps to restore and enhance the natural environment, supporting biodiversity and mitigating climate change.", "By planting native trees, we are contributing to a healthier, greener future for the communities we operate in."],
                      image: "/images/volunteu/tree-nz.png",
                      imagePosition: 'right',
                      carouselImages: ["/images/volunteu/Carosoul5_1.png", "/images/volunteu/Carosoul5_2.png", "/images/volunteu/Carosoul5_3.png"]
                    },
                    {
                      tag: "ENVIRONMENTAL",
                      title: "Clean Up Days (Australia)",
                      desc: ["As part of our commitment to a cleaner environment, our staff participated in Clean Up Australia Day. Teams gathered across various locations to collect and properly dispose of litter from local parks, beaches, and waterways.", "This hands-on initiative not only improves the local environment but also raises awareness about the impact of waste and the importance of responsible disposal."],
                      image: "/images/volunteu/clean-ups.png",
                      imagePosition: 'left',
                      carouselImages: ["/images/volunteu/Carosoul6_1.png", "/images/volunteu/Carosoul6_2.png", "/images/volunteu/Carosoul6_3.png"]
                    },
                    {
                      tag: "ENVIRONMENTAL",
                      title: "Project Jonah (New Zealand)",
                      desc: ["Project Jonah is dedicated to the protection and rescue of marine mammals. Our VolunTEUs took part in specialized Marine Mammal Medic training to learn how to assist in whale stranding emergencies.", "Equipped with these skills, our team is now ready to support Project Jonah in their vital rescue operations along the New Zealand coastline."],
                      image: "/images/volunteu/project-jonah.png",
                      imagePosition: 'right',
                      carouselImages: ["/images/volunteu/Carosoul7_1.png", "/images/volunteu/Carosoul7_2.png", "/images/volunteu/Carosoul7_3.png"]
                    }
                  ]
                },
                {
                  title: "HEALTH, WELLBEING & SUPPORTING LOCAL CHARITIES",
                  items: [
                    {
                      tag: "HEALTH & WELLBEING",
                      title: "Run for the Kids (Australia)",
                      desc: ["Our team proudly participated in the Run for the Kids, a major community event in Melbourne that raises funds for the Royal Children's Hospital.", "By running and walking the course, our VolunTEUs contributed to the crucial funding needed to provide world-class care, equipment, and research for sick children and their families."],
                      image: "/images/volunteu/run-for-the-kids.png",
                      imagePosition: 'left',
                      carouselImages: ["/images/volunteu/PXL_1.png", "/images/volunteu/PXL_2.png", "/images/volunteu/PXL_3.png"]
                    },
                    {
                      tag: "HEALTH & WELLBEING",
                      title: "Beyond Blue (Australia)",
                      desc: ["Mental health is a vital part of overall wellbeing. Our team organized activities to raise awareness and funds for Beyond Blue, an organization providing support for anxiety, depression, and suicide prevention.", "Through our collective efforts, we aim to reduce stigma, encourage open conversations about mental health, and support the essential services provided by Beyond Blue."],
                      image: "/images/volunteu/beyond-blue.png",
                      imagePosition: 'right',
                      carouselImages: ["/images/volunteu/PXL_4.png", "/images/volunteu/PXL_5.png", "/images/volunteu/PXL_1.png"]
                    },
                    {
                      tag: "HEALTH & WELLBEING",
                      title: "Round the Bays (New Zealand)",
                      desc: ["Our New Zealand staff took part in the iconic Round the Bays fun run, promoting health, fitness, and community spirit.", "The event also serves as a platform to raise funds for various local charities, aligning perfectly with our goal to support and uplift the communities in which we live and work."],
                      image: "/images/volunteu/round-the-bays.png",
                      imagePosition: 'left',
                      carouselImages: ["/images/volunteu/PXL_2.png", "/images/volunteu/PXL_3.png", "/images/volunteu/PXL_4.png"]
                    }
                  ]
                }
              ].map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-16">
                  {/* Section Title */}
                  <h2 className="text-[#0a2071] text-[28px] sm:text-[36px] md:text-[40px] font-bold mb-8 tracking-wide leading-tight uppercase" style={{ fontFamily: "'Antonio', sans-serif" }}>
                    {section.title}
                  </h2>

                  {/* Section Items */}
                  <div className="space-y-12">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="w-full">
                        
                        {/* Item Block */}
                        <div className={`flex flex-col ${item.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} bg-[#0a2071] overflow-hidden`}>
                          <div className="w-full md:w-[50%] h-[300px] md:h-auto relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          
                          <div className="w-full md:w-[50%] p-8 sm:p-12 flex flex-col justify-center relative">
                            <div className="mb-4">
                              <span className="inline-block bg-white text-[#0a2071] text-[11px] font-black px-3 py-1 uppercase tracking-widest rounded-sm">
                                {item.tag}
                              </span>
                            </div>
                            <h3 className="text-white text-[24px] sm:text-[32px] font-bold mb-6 tracking-wide leading-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
                              {item.title}
                            </h3>
                            <div className="space-y-4 text-white text-[15px] font-light leading-relaxed">
                              {item.desc.map((p, i) => (
                                <p key={i}>{p}</p>
                              ))}
                            </div>
                            {/* Decorative Line matches design */}
                            <div className={`hidden md:block absolute top-1/2 ${item.imagePosition === 'right' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} -translate-y-1/2 w-8 h-[2px] bg-[#0a2071] z-10`} />
                          </div>
                        </div>

                        {/* Carousel */}
                        <div className="flex flex-col items-center justify-center mt-6 relative w-full overflow-hidden py-4">
                          <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
                            <button className="text-[#0a2071] hover:text-[#e02020] transition-colors p-2 z-20">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>

                            <div className="flex items-center justify-center relative flex-1 max-w-[800px] h-[160px] sm:h-[240px]">
                              {/* Left Small Image */}
                              <div className="absolute left-[5%] md:left-[15%] w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] z-0 opacity-60">
                                <img src={item.carouselImages[0]} alt="Carousel Left" className="w-full h-full object-cover" />
                              </div>
                              
                              {/* Center Main Image */}
                              <div className="absolute left-1/2 -translate-x-1/2 w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] z-10 shadow-xl border-4 border-white">
                                <img src={item.carouselImages[1]} alt="Carousel Center" className="w-full h-full object-cover" />
                              </div>
                              
                              {/* Right Small Image */}
                              <div className="absolute right-[5%] md:right-[15%] w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] z-0 opacity-60">
                                <img src={item.carouselImages[2]} alt="Carousel Right" className="w-full h-full object-cover" />
                              </div>
                            </div>

                            <button className="text-[#0a2071] hover:text-[#e02020] transition-colors p-2 z-20">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                          </div>

                          {/* Dots indicator */}
                          <div className="flex gap-2 mt-6">
                            <span className="w-6 h-1 bg-[#0a2071]"></span>
                            <span className="w-6 h-1 bg-[#a0a0a0]"></span>
                            <span className="w-6 h-1 bg-[#a0a0a0]"></span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>

            {/* ── Right: Sidebar Navigation ── */}
            <div className="w-full lg:w-[320px] shrink-0">
              <div className="bg-[#f8f9fa] border border-[#e5e7eb] p-6 sticky top-24">
                <h3 className="text-[#0a2071] text-[20px] font-bold mb-4 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  ABOUT US
                </h3>
                <ul className="flex flex-col">
                  {links.map((link) => (
                    <li key={link.label} className="border-b border-[#e5e7eb]">
                      <Link
                        href={link.href}
                        className={`block py-3 text-[14px] font-medium transition-colors ${link.active
                            ? 'text-[#e02020]'
                            : 'text-[#254674] hover:text-[#e02020]'
                          }`}
                      >
                        {link.active ? `- ${link.label}` : link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
