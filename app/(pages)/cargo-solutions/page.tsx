"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';

const LongArrowLeft = () => (
  <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M8 2L2 8L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 8H48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LongArrowRight = () => (
  <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M40 2L46 8L40 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M0 8H46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const refrigeratedItems = [
  {
    pill: 'REFRIGERATED CARGO',
    title: 'CLIMACTIVE',
    image: '/images/cargo-solutions/CMA CGM VAS_Digital_CLIMACTIVE_Card thumbnail image.png',
    desc: 'Using the latest technology, we can maintain an optimum atmosphere to keep your fruit cargo fresh and top quality.'
  },
  {
    pill: 'REFRIGERATED CARGO',
    title: 'COLD TREATMENT',
    image: '/images/cargo-solutions/CMA CGM VAS_Digital_COLDTREATMENT_Card thumbnail image.png',
    desc: 'With this service, you can ship your fruit without the concern of pests comprising your fruit cargo.'
  },
  {
    pill: 'REFRIGERATED CARGO',
    title: 'SMART REEFER',
    image: '/images/cargo-solutions/CMA CGM VAS_Digital_SMART REEFER CONTAINER_405x160px_Thumbnail.png',
    desc: 'With SMART Reefer, you are able to track your container and check the status and conditions of your cargo.'
  },
  {
    pill: 'REFRIGERATED CARGO',
    title: 'PHARMA REEFER',
    image: '/images/cargo-solutions/CMA CGM VAS_Digital_REEFER_Card thumbnail image.png',
    desc: 'A solution that maintains the integrity of your pharmaceutical goods during shipment.'
  },
  {
    pill: 'REFRIGERATED CARGO',
    title: 'CONTAINER HUMIDITY',
    image: '/images/cargo-solutions/CMA CGM VAS_Digital_CONTAINERhumidity_Card thumbnail image.png',
    desc: 'Our dehumidifying services help preserve your cargo to keep its quality throughout the shipping journey.'
  }
];

const specialisedItems = [
  {
    pill: 'OTHER CARGO',
    title: 'REEFLEX LIQUID',
    image: '/images/cargo-solutions/CMA CGM VAS_Digital_REEFLEX_Card thumbnail image.png',
    desc: 'The most cost-efficient and effective solution to ship liquid cargo in our refrigerated containers.'
  },
  {
    pill: 'OTHER CARGO',
    title: 'CONTAINER ON GARMENT',
    image: '/images/cargo-solutions/CMA CGM VAS_Digital_CONTAINERgarment_Card thumbnail image.png',
    desc: 'Ship your apparel goods in special containers fitted with hangers, specifically designed to ship clothes, leather and fragile fabrics.'
  },
  {
    pill: 'OTHER CARGO',
    title: 'BARLOCK SECURITY',
    image: '/images/cargo-solutions/D21897 CMA CGM BARLOCK security device Banner_PIM.png',
    desc: 'Lock your cargo in with Barlock security, protecting your valuable cargo from theft.'
  },
  {
    pill: 'OTHER CARGO',
    title: 'CONTAINER HUMIDITY',
    image: '/images/cargo-solutions/CMA CGM VAS_Digital_CONTAINERhumidity_Card thumbnail image.png',
    desc: 'Our dehumidifying services help preserve your cargo to keep its quality throughout the shipping journey.'
  }
];

export default function CargoSolutionsPage() {
  const refrigRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8; // scroll by 80% of container width
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cargo-solutions/banner_shipping_special_cargo.png')" }}
        />
        <div className="absolute inset-0 bg-[#0a1628]/40"></div>

        <div className="relative z-10 container-max h-full flex flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Cargo Solutions
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-max flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">

          <div className="flex-1 max-w-4xl min-w-0">
            {/* 2. Intro Title */}
            <h2
              className="mb-10 text-[#0a2071]"
              style={{
                fontFamily: "'Antonio', sans-serif",
                fontSize: 'clamp(32px, 5vw, 54px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              Expertise and solutions to ship a variety of cargo
            </h2>

            {/* Dry Cargo */}
            <div className="mb-12">
              <h3 className="font-bold text-[#0a2071] text-[28px] md:text-[34px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Dry Cargo</h3>
              <p className="text-[#0a2071] font-medium text-[15px] md:text-[16px] leading-[1.8] mb-6">
                Our container fleet can carry a variety of dry goods and can match the specific cargo needs of several industries.
              </p>
              <Link href="/cargo-solutions/dry-cargo" className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] text-[13px] font-bold tracking-widest uppercase transition-colors">
                <LinkIcon size={16} className="text-[#e02020]" />
                <span className="underline underline-offset-4">FIND OUT MORE</span>
              </Link>
            </div>

            {/* Refrigerated cargo */}
            <div className="mb-16 relative">
              <h3 className="font-bold text-[#0a2071] text-[28px] md:text-[34px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Refrigerated cargo</h3>
              <p className="text-[#0a2071] font-medium text-[15px] md:text-[16px] leading-[1.8] mb-6 max-w-3xl">
                Need to transport perishable cargo that require specific atmospheric, temperature or humidity conditions? We have one of the market's most modern and technologically advanced fleets of reefer containerships suited for these type of goods.
              </p>
              <Link href="/cargo-solutions/refrigerated-cargo" className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] text-[13px] font-bold tracking-widest uppercase transition-colors mb-10">
                <LinkIcon size={16} className="text-[#e02020]" />
                <span className="underline underline-offset-4">FIND OUT MORE</span>
              </Link>

              <div className="flex items-center gap-4 mb-8 group/carousel relative">
                <button onClick={() => scroll(refrigRef, 'left')} className="hidden md:flex text-[#0a2071] hover:text-[#e02020] transition-colors shrink-0">
                  <LongArrowLeft />
                </button>

                <div
                  ref={refrigRef}
                  className="flex-1 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {refrigeratedItems.map((item, index) => (
                    <div key={index} className="flex-none w-[85%] md:w-[calc(33.333%-1.5rem)] snap-start flex flex-col items-center text-center">
                      <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">{item.pill}</span>
                      <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[22px] mb-4 uppercase tracking-wide truncate w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>{item.title}</h4>
                      <div className="w-full h-48 md:h-56 overflow-hidden mb-6">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                      <p className="text-[#0a2071] font-medium text-[13px] md:text-[14px] leading-[1.6]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <button onClick={() => scroll(refrigRef, 'right')} className="hidden md:flex text-[#0a2071] hover:text-[#e02020] transition-colors shrink-0">
                  <LongArrowRight />
                </button>
              </div>
            </div>

            {/* Other specialised cargo */}
            <div className="mb-16">
              <h3 className="font-bold text-[#0a2071] text-[28px] md:text-[34px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Other specialised cargo</h3>
              <p className="text-[#0a2071] font-medium text-[15px] md:text-[16px] leading-[1.8] mb-10 max-w-3xl">
                We have a range of value-added services that cater to other types of specialised goods - whether thats liquid, apparel or valuable cargo.
              </p>

              <div className="flex items-center gap-4 relative">
                <button onClick={() => scroll(specRef, 'left')} className="hidden md:flex text-[#0a2071] hover:text-[#e02020] transition-colors shrink-0">
                  <LongArrowLeft />
                </button>

                <div
                  ref={specRef}
                  className="flex-1 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {specialisedItems.map((item, index) => (
                    <div key={index} className="flex-none w-[85%] md:w-[calc(33.333%-1.5rem)] snap-start flex flex-col items-center text-center">
                      <span className="bg-[#eef2f7] text-[#0a2071] text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">{item.pill}</span>
                      <h4 className="font-bold text-[#0a2071] text-[20px] md:text-[22px] mb-4 uppercase tracking-wide truncate w-full px-2" style={{ fontFamily: "'Antonio', sans-serif" }}>{item.title}</h4>
                      <div className="w-full h-48 md:h-56 overflow-hidden mb-6">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                      <p className="text-[#0a2071] font-medium text-[13px] md:text-[14px] leading-[1.6]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <button onClick={() => scroll(specRef, 'right')} className="hidden md:flex text-[#0a2071] hover:text-[#e02020] transition-colors shrink-0">
                  <LongArrowRight />
                </button>
              </div>
            </div>

            {/* Oversized cargo */}
            <div className="mb-12">
              <h3 className="font-bold text-[#0a2071] text-[28px] md:text-[34px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Oversized cargo</h3>
              <p className="text-[#0a2071] font-medium text-[15px] md:text-[16px] leading-[1.8] mb-6">
                Our expert Project Cargo team can offer and develop custom made logistics operations for your oversized cargo whether they are non standard, heavy, large or fragile. Your oversized goods are perfectly safe onboard our vessels supported with our state of the art equipment and lashing guides.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] text-[13px] font-bold tracking-widest uppercase transition-colors">
                <LinkIcon size={16} className="text-[#e02020]" />
                <span className="underline underline-offset-4">FIND OUT MORE</span>
              </Link>
            </div>

            {/* Dangerous and hazardous cargo */}
            <div className="mb-12">
              <h3 className="font-bold text-[#0a2071] text-[28px] md:text-[34px] mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Dangerous and hazardous cargo</h3>
              <p className="text-[#0a2071] font-medium text-[15px] md:text-[16px] leading-[1.8] mb-6">
                We offer a high level of professionalism for your hazardous goods applying very strict procedures for transporting your volatile materials respecting the highest of safety standards.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-[#0a2071] hover:text-[#e02020] text-[13px] font-bold tracking-widest uppercase transition-colors">
                <LinkIcon size={16} className="text-[#e02020]" />
                <span className="underline underline-offset-4">FIND OUT MORE</span>
              </Link>
            </div>

          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="top-32">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-8 h-[2px] bg-[#e02020]"></div>
                <h3 className="text-[#0a2071] font-bold text-[24px] md:text-[28px] border-b-2 border-[#0a2071] pb-1 inline-block uppercase" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  Cargo Solutions
                </h3>
              </div>
              <div>
                <ul className="space-y-5">
                  <li>
                    <Link href="/cargo-solutions/dry-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[16px] md:text-[18px] underline underline-offset-4">
                      Dry cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/refrigerated-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[16px] md:text-[18px] underline underline-offset-4">
                      Refrigerated cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/project-breakbulk-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[16px] md:text-[18px] underline underline-offset-4">
                      Project & Breakbulk cargo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cargo-solutions/dangerous-cargo" className="block text-[#0a2071] hover:text-[#e02020] font-medium transition-colors text-[16px] md:text-[18px] underline underline-offset-4">
                      Dangerous cargo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* CSS to hide scrollbar for webkit browsers */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
