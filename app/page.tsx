'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { newsItems } from '@/app/data/news';

const needsCategories = [
  {
    group: 'SHIPPING',
    items: [
      { label: 'LINE AND SERVICES', href: '/shipping', image: '/images/what-are-your-needs/Lines and Services.png', watermark: 'line' },
      { label: 'OVERSIZED CARGO', href: '/shipping', image: '/images/what-are-your-needs/Oversized Cargo.jpg', watermark: 'over' },
      { label: 'SEA REWARD', href: '/shipping', image: '/images/what-are-your-needs/sea-reward.png', watermark: 'sea ' },
    ],
  },
  {
    group: 'CMA CGM+ FOR ANL',
    items: [
      { label: 'CO2 REDUCTION', href: '/shipping', image: '/images/what-are-your-needs/CO2 reduction.png', watermark: 'co2' },
      { label: 'CARBON OFFSET', href: '/shipping', image: '/images/what-are-your-needs/crbon offset.png', watermark: 'carb' },
      { label: 'CLIMACTIVE CONTROLLED ATMOSPHERE', href: '/shipping', image: '/images/what-are-your-needs/COLD TREATMENT.png', watermark: 'clim' },
      { label: 'FREETIME EXTENDED', href: '/shipping', image: '/images/what-are-your-needs/freetime.png', watermark: 'free' },
    ],
  },
  {
    group: 'MY ANL',
    items: [
      { label: 'SCHEDULES', href: '/schedule-search', image: '/images/what-are-your-needs/Schedules.png', watermark: 'sche' },
      { label: 'ROUTE FINDER', href: '/my-portal', image: '/images/what-are-your-needs/Route Finder.png', watermark: 'rout' },
    ],
  },
];

const sustainabilityCards = [
  {
    group: 'ABOUT US',
    items: [{ label: 'COMPANY OVERVIEW', href: '/about-us', image: '/images/building-oceania-sustainable-shipping-network/company-overview.png', watermark: 'comp' }],
  },
  {
    group: 'WORK WITH US',
    items: [
      { label: 'CAREERS', href: '/contact', image: '/images/building-oceania-sustainable-shipping-network/carrers.png', watermark: 'care' },
      { label: 'VOLUNTEERING PROGRAM', href: '/contact', image: '/images/building-oceania-sustainable-shipping-network/voluntering-program.png', watermark: 'volu' },
    ],
  },
  {
    group: 'SUSTAINABILITY',
    items: [
      { label: 'SUSTAINABILITY OVERVIEW', href: '/shipping', image: '/images/building-oceania-sustainable-shipping-network/sustainability-report.jpg', watermark: 'sust' },
      { label: 'WE ACT FOR OUR PLANET', href: '/shipping', image: '/images/building-oceania-sustainable-shipping-network/planet-without-text.png', watermark: 'we a' },
      { label: 'WE ACT FOR OUR PEOPLE', href: '/shipping', image: '/images/building-oceania-sustainable-shipping-network/people without text.png', watermark: 'we a' },
      { label: 'WE ACT FOR OUR PARTNERS', href: '/shipping', image: '/images/building-oceania-sustainable-shipping-network/fair trade without text.png', watermark: 'we a' },
    ],
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'tracking' | 'schedule' | 'price'>('schedule');
  const [trackingInput, setTrackingInput] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [needsPage, setNeedsPage] = useState<Record<number, number>>({ 0: 0, 1: 0, 2: 0 });
  const [sustPage, setSustPage] = useState<Record<number, number>>({ 0: 0, 1: 0, 2: 0 });

  const latestNews = newsItems.slice(0, 5);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0a1628] min-h-[480px] md:min-h-[640px] flex items-end overflow-hidden pt-[100px] md:pt-[120px] pb-16">
        <div className="absolute inset-0">
          <img src="/images/hero.png" alt="Hero Background" className="w-full h-full object-cover object-center-[50%]" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0a1628]/40"></div>
        </div>

        <div className="relative z-10 w-full px-2 md:px-8">
          <div className="flex flex-col lg:flex-row items-end gap-10">
            <div className="flex-1 mb-2">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <h1 className="text-[32px] md:text-[40px] lg:text-[44px] text-white leading-[1.1] tracking-tight mb-6">
                  <span className="font-normal">BUILT TO GROW. Oceania &gt;&lt; North America</span>
                </h1>
                <div className="mt-4">
                  <Link href="/booking" className="bg-[#e02020] hover:bg-[#c01a1a] text-white text-[15px] font-bold px-8 py-3.5 inline-block transition-colors underline decoration-2 underline-offset-4">
                    BOOK NOW
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Quick Action Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-[460px] bg-white flex-shrink-0"
            >
              <div className="flex">
                {(['tracking', 'schedule', 'price'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 md:py-5 text-[10px] md:text-[12px] font-bold uppercase tracking-widest transition-all ${activeTab === tab
                      ? 'text-[#254674] border-b-[3px] border-[#e02020]'
                      : 'text-[#254674] hover:text-[#254674]/80'
                      }`}
                  >
                    {tab === 'tracking' ? 'TRACKING' : tab === 'schedule' ? 'SCHEDULE' : 'PRICE'}
                  </button>
                ))}
              </div>

              <div className="p-6 md:p-10">
                {activeTab === 'tracking' && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-[13px] text-[#254674] block mb-2">
                        Container, Bill of lading or Booking Number
                      </label>
                      <input
                        type="text"
                        placeholder="ex:ABCD1234567"
                        value={trackingInput}
                        onChange={(e) => setTrackingInput(e.target.value)}
                        className="w-full border border-gray-300 px-4 py-2.5 text-sm text-[#0a1628] placeholder:text-[#254674]/60 placeholder:italic focus:outline-none focus:border-[#0a1628] transition-colors"
                      />
                      <p className="text-[11px] text-gray-500 mt-2 leading-tight">
                        To track up to three containers, please enter references separated by a comma.
                      </p>
                    </div>
                    <div className="pt-3">
                      <Link href={`/shipment-tracking${trackingInput ? `?q=${encodeURIComponent(trackingInput)}` : ''}`} className="block w-full bg-[#e02020] hover:bg-[#c01a1a] text-white text-center text-[15px] font-bold py-3 transition-colors">
                        Shipment Tracking
                      </Link>
                    </div>
                  </div>
                )}

                {activeTab === 'schedule' && (
                  <div className="space-y-6">
                    <div>
                      <label className="text-[13px] text-[#254674] block mb-1">Origin</label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#254674]" />
                        <input
                          type="text"
                          placeholder="Port, City, Country name or code"
                          value={origin}
                          onChange={(e) => setOrigin(e.target.value)}
                          className="w-full border border-gray-300 pl-10 pr-4 py-2.5 text-sm text-[#0a1628] placeholder:text-[#254674]/60 placeholder:italic focus:outline-none focus:border-[#0a1628] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[13px] text-[#254674] block mb-1">Destination</label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#254674]" />
                        <input
                          type="text"
                          placeholder="Port, City, Country name or code"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full border border-gray-300 pl-10 pr-4 py-2.5 text-sm text-[#0a1628] placeholder:text-[#254674]/60 placeholder:italic focus:outline-none focus:border-[#0a1628] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex gap-4">
                      <Link href={`/schedule-search`} className="flex-1 bg-[#e02020] hover:bg-[#c01a1a] text-white text-center text-[15px] font-bold py-3 transition-colors">
                        Search
                      </Link>
                      <Link href="/schedule-search" className="flex-1 bg-white border border-[#e02020] text-[#e02020] text-center text-[14px] font-bold py-3 underline decoration-1 underline-offset-4 hover:bg-[#e02020] hover:text-white transition-colors">
                        Advanced Search
                      </Link>
                    </div>
                  </div>
                )}

                {activeTab === 'price' && (
                  <div className="space-y-6 pt-2">
                    <p className="text-[13px] text-[#254674] leading-relaxed pr-4">
                      Need a price for your transportation ? Access our instant quotation module and discover SpotOn on pilot trades
                    </p>
                    <Link href="/my-portal" className="block w-full bg-[#e02020] hover:bg-[#c01a1a] text-white text-center text-[15px] font-bold py-3 transition-colors">
                      Get a price
                    </Link>
                    <p className="text-[12px] text-[#254674]">
                      Prices module is accessible for registered customers
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are Your Needs? */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <h2 className="text-[40px] md:text-[50px] lg:text-[62px] leading-[1.1] md:leading-[67px] font-extralight text-[#254674] mb-6" style={{ fontFamily: '"Resolve Sans Light", sans-serif' }}>
              What are your needs?
            </h2>
            <p className="text-[#254674] text-[15px] max-w-5xl leading-relaxed">
              With decades of experience in blue water shipping throughout the Oceania region and beyond, ANL is here to help with integrated cargo transport solutions from anywhere in the world, coastal or otherwise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {needsCategories.map((cat, ci) => (
              <div key={ci} className="border-l-[1.5px] border-[#e02020] flex flex-col pt-1">
                <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-[#e02020] mb-8 pl-5">{cat.group}</p>
                <div className="space-y-6 flex-1 min-h-0 md:min-h-[424px]">
                  {cat.items.slice(needsPage[ci] * 2, needsPage[ci] * 2 + 2).map((item, ii) => (
                    <motion.div key={ii} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: ii * 0.08 }}>
                      <Link href={item.href} className="group block relative bg-[#f4f6f8] hover:bg-[#eef1f5] transition-colors overflow-hidden flex h-[140px] md:h-[200px] ml-5">
                        {/* Left Image */}
                        <div className="w-[100px] md:w-[150px] h-full flex-shrink-0">
                          <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 relative px-5 py-6 flex flex-col justify-center overflow-hidden">
                          {/* Watermark */}
                          <div className="absolute -bottom-4 -right-2 md:-bottom-12 md:-right-6 opacity-[0.25] pointer-events-none">
                            <span className="text-[80px] md:text-[150px] font-light text-[#b0bdcc] leading-none tracking-tighter whitespace-nowrap">
                              {item.watermark}
                            </span>
                          </div>

                          <span className="relative z-10 text-[13px] md:text-[15px] font-medium text-[#254674] tracking-[0.15em] leading-[1.6] uppercase underline underline-offset-[5px] decoration-[1.5px]">
                            {item.label}
                          </span>

                          <ArrowUpRight size={18} strokeWidth={2} className="absolute bottom-3 right-3 text-[#e02020] group-hover:scale-110 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                {/* Pagination Dots */}
                {Math.ceil(cat.items.length / 2) > 1 && (
                  <div className="flex items-center gap-2 mt-6 pl-5">
                    {Array.from({ length: Math.ceil(cat.items.length / 2) }).map((_, pageIdx) => (
                      <button
                        key={pageIdx}
                        onClick={() => setNeedsPage(prev => ({ ...prev, [ci]: pageIdx }))}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${needsPage[ci] === pageIdx ? 'bg-[#e02020]' : 'border-[1.5px] border-[#e02020] bg-transparent hover:bg-[#e02020]/20'}`}
                        aria-label={`Go to page ${pageIdx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability / About Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <h2 className="text-[40px] md:text-[50px] lg:text-[62px] leading-[1.1] md:leading-[67px] font-extralight text-[#254674] mb-6" style={{ fontFamily: '"Resolve Sans Light", sans-serif' }}>
              Building Oceania&apos;s Sustainable Shipping Network
            </h2>
            <p className="text-[#254674] text-[15px] max-w-5xl leading-relaxed">
              OceanLink Logistics specialises in moving your product to and from Oceania and beyond. Placing great focus on sustainability, customer service, and a competitive approach — we not only know your cargo, but more importantly, how to transport it. OceanLink offers shipping services to all major Oceania destinations, with coverage throughout Asia, Australia, New Zealand, the Pacific Islands, Indian Subcontinent, and North America.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sustainabilityCards.map((cat, ci) => (
              <div key={ci} className="border-l-[1.5px] border-[#e02020] flex flex-col pt-1">
                <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-[#e02020] mb-8 pl-5">{cat.group}</p>
                <div className="space-y-6 flex-1 min-h-0 md:min-h-[424px]">
                  {cat.items.slice(sustPage[ci] * 2, sustPage[ci] * 2 + 2).map((item, ii) => (
                    <motion.div key={ii} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: ii * 0.08 }}>
                      <Link href={item.href} className="group block relative bg-[#f4f6f8] hover:bg-[#eef1f5] transition-colors overflow-hidden flex h-[140px] md:h-[200px] ml-5">
                        {/* Left Image */}
                        <div className="w-[100px] md:w-[150px] h-full flex-shrink-0">
                          <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 relative px-5 py-6 flex flex-col justify-center overflow-hidden">
                          {/* Watermark */}
                          <div className="absolute -bottom-3 -right-2 md:-bottom-10 md:-right-6 opacity-[0.25] pointer-events-none">
                            <span className="text-[80px] md:text-[130px] font-light text-[#b0bdcc] leading-none tracking-tighter whitespace-nowrap">
                              {item.watermark}
                            </span>
                          </div>

                          <span className="relative z-10 text-[13px] md:text-[15px] font-medium text-[#254674] tracking-[0.15em] leading-[1.6] uppercase underline underline-offset-[5px] decoration-[1.5px]">
                            {item.label}
                          </span>

                          <ArrowUpRight size={18} strokeWidth={2} className="absolute bottom-3 right-3 text-[#e02020] group-hover:scale-110 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                {/* Pagination Dots */}
                {Math.ceil(cat.items.length / 2) > 1 && (
                  <div className="flex items-center gap-2 mt-6 pl-5">
                    {Array.from({ length: Math.ceil(cat.items.length / 2) }).map((_, pageIdx) => (
                      <button
                        key={pageIdx}
                        onClick={() => setSustPage(prev => ({ ...prev, [ci]: pageIdx }))}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${sustPage[ci] === pageIdx ? 'bg-[#e02020]' : 'border-[1.5px] border-[#e02020] bg-transparent hover:bg-[#e02020]/20'}`}
                        aria-label={`Go to page ${pageIdx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-[#f4f6f8]" style={{ backgroundImage: "url('/images/news/bg-gradient.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Big News */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Link href={`/news/${latestNews[0]?.slug}`} className="group block relative">
                <div className="relative overflow-hidden mb-6" style={{ aspectRatio: '16/10' }}>
                  <img src="/images/news/visual-big-news.jpg" alt="News" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2">
                    <span className="text-[#254674] text-[13px] font-bold tracking-[0.2em] uppercase">News</span>
                  </div>
                </div>
                <div className="relative pr-8 pb-8">
                  <p className="text-[#e02020] text-[14px] font-bold tracking-[0.15em] mb-4 uppercase">
                    15/06/26
                  </p>
                  <h3 className="text-[#254674] font-normal text-[28px] md:text-[38px] leading-[1.3] md:leading-[1.5] underline underline-offset-[6px] decoration-[1px] group-hover:no-underline transition-colors">
                    {latestNews[0]?.title}
                  </h3>
                  <ArrowUpRight size={20} strokeWidth={2} className="absolute bottom-2 right-0 text-[#e02020]" />
                </div>
              </Link>
            </motion.div>

            {/* Right List News */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col h-full">
              <div className="divide-y divide-[#d1d9e6] border-y border-[#d1d9e6]">
                {latestNews.slice(1, 4).map((item) => (
                  <Link key={item.id} href={`/news/${item.slug}`} className="group block relative py-4 md:py-8 transition-colors">
                    <p className="text-[#e02020] text-[13px] font-bold tracking-[0.15em] mb-4 uppercase">
                      11/06/26
                    </p>
                    <h4 className="text-[#254674] font-normal text-[18px] md:text-[24px] leading-[1.3] underline underline-offset-[5px] decoration-[1px] group-hover:no-underline transition-colors pr-10">
                      {item.title}
                    </h4>
                    <ArrowUpRight size={18} strokeWidth={2} className="absolute bottom-8 right-2 text-[#e02020]" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-16 flex justify-center w-full">
            <Link href="/news" className="text-[#e02020] text-[14px] font-bold underline underline-offset-[4px] decoration-[1.5px] hover:text-[#0a1628] transition-colors">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Cards */}
      <section className="py-12 md:py-24 bg-white">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col h-full">
              <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden">
                <img src="/images/home-bottoms/discover1.png" alt="Discover My ANL Features" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-[#e02020] px-3 py-1.5 md:px-5 md:py-2.5 max-w-[85%]">
                  <span className="text-white text-[11px] md:text-[14px] font-bold tracking-[0.2em] uppercase block">
                    Discover My ANL Features
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 text-center">
                <p className="text-[#254674] text-[24px] md:text-[32px] font-light leading-[1.3] px-4 md:px-10 mb-8 flex-1">
                  The fastest digital solution to book and manage your shipments
                </p>
                <div className="mt-auto pb-4">
                  <Link href="/login" className="inline-block bg-[#e02020] text-white text-[15px] font-bold py-3 px-6 md:py-4 md:px-12 hover:bg-[#c81010] transition-colors">
                    Sign In
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="flex flex-col h-full">
              <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden">
                <img src="/images/home-bottoms/discover2.png" alt="Discover SpotOn Feature" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-[#e02020] px-3 py-1.5 md:px-5 md:py-2.5 max-w-[85%]">
                  <span className="text-white text-[11px] md:text-[14px] font-bold tracking-[0.2em] uppercase block">
                    Discover SpotOn Feature
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 text-center">
                <p className="text-[#254674] text-[24px] md:text-[32px] font-light leading-[1.3] px-4 md:px-10 mb-8 flex-1">
                  Discover SpotOn
                </p>
                <div className="mt-auto pb-4">
                  <Link href="/my-portal" className="inline-block bg-[#e02020] text-white text-[15px] font-bold py-3 px-6 md:py-4 md:px-12 hover:bg-[#c81010] transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
