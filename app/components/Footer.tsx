'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isMinimal = pathname === '/login';

  return (
    <footer className="w-full">
      {/* Top light grey section */}
      {!isMinimal && (
      <div className="bg-[#f4f6f8] pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-16">

            {/* Column 1: Logo */}
            <div>
              <Link href="/">
                <img src="/images/anl-logo.svg" alt="ANL Logo" className="h-[42px] md:h-[50px] lg:h-16 w-auto" />
              </Link>
            </div>

            {/* Column 2: DISCOVER CMA CGM */}
            <div className="lg:mr-10">
              <h4 className="text-[#0a1628] text-[11px] md:text-[12px] lg:text-[13px] font-bold tracking-[0.15em] uppercase mb-4 md:mb-6">
                Discover CMA CGM
              </h4>
              <div className="flex flex-col gap-1">
                {[
                  { title: "CMA CGM'S\nGROUP VISION", watermark: "cma" },
                  { title: "SUSTAINABILITY\n& INNOVATION", watermark: "sust" },
                  { title: "JOIN US", watermark: "join" },
                  { title: "NEWS\n& MEDIA", watermark: "news" },
                ].map((box, idx) => (
                  <Link href="#" key={idx} className="group relative border border-[#e5e7eb] hover:bg-[#e9ecf0] hover:shadow-sm transition-all duration-300 p-3 md:p-4 min-h-[72px] md:min-h-[80px] h-auto lg:h-[100px] flex items-center overflow-hidden">
                    {/* Watermark */}
                    <div className="absolute -bottom-2 -right-4 md:-bottom-8 md:-right-20 opacity-[0.25] pointer-events-none">
                      <span className="text-[60px] md:text-[80px] lg:text-[130px] font-light text-[#b0bdcc] leading-none tracking-[0.05em] whitespace-nowrap">
                        {box.watermark}
                      </span>
                    </div>
                    <span className="text-[#254674] font-light text-[13px] md:text-[15px] lg:text-[18px] tracking-[0.1em] leading-[1.6] whitespace-pre-line uppercase relative z-10">
                      {box.title}
                    </span>
                    <ArrowUpRight size={14} strokeWidth={2} className="absolute bottom-3 right-3 text-[#e02020] group-hover:scale-110 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: OUR SERVICES */}
            <div className="lg:ml-10">
              <h4 className="text-[#0a1628] text-[11px] md:text-[12px] lg:text-[13px] font-bold tracking-[0.15em] uppercase mb-4 md:mb-6">
                Our Services
              </h4>
              <div className="flex flex-col items-start gap-2 md:gap-3">
                <Link href="/shipping" className="text-[#254674] text-[12px] md:text-[13px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">Shipping</Link>
                <Link href="/end-to-end-solutions" className="text-[#254674] text-[12px] md:text-[13px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">End-to-End Solutions</Link>
                <Link href="/news" className="text-[#254674] text-[12px] md:text-[13px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">News</Link>
                <Link href="/my-anl" className="text-[#254674] text-[12px] md:text-[13px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">My ANL</Link>

                <div className="w-10 md:w-12 h-[2px] bg-[#e02020] my-2 md:my-3" />

                <Link href="/local-offices" className="text-[#254674] text-[12px] md:text-[13px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">Find your local offices</Link>
                <Link href="/corporate" className="text-[#254674] text-[12px] md:text-[13px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">To our corporate website</Link>
                <Link href="/customer-service" className="text-[#254674] text-[12px] md:text-[13px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">My Customer Service</Link>
              </div>
            </div>

            {/* Column 4: FOLLOW US & JOIN #BETTERWAYS ! */}
            <div>
              <h4 className="text-[#0a1628] text-[11px] md:text-[12px] lg:text-[13px] font-bold tracking-[0.15em] uppercase mb-4 md:mb-6">
                Follow Us
              </h4>
              <div className="flex gap-2 mb-8 md:mb-14">
                <a href="https://www.linkedin.com/company/anl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[38px] lg:h-[38px] bg-[#0a1628] flex items-center justify-center hover:bg-[#1a3a6b] transition-colors">
                  <span className="text-white font-bold text-[14px] md:text-[16px] lg:text-[18px] font-serif leading-none tracking-tighter">in</span>
                </a>
                <a href="https://twitter.com/ANLShipping" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[38px] lg:h-[38px] bg-[#0a1628] flex items-center justify-center hover:bg-[#1a3a6b] transition-colors">
                  <span className="text-white font-normal text-[13px] md:text-[15px] lg:text-[17px] font-sans leading-none">X</span>
                </a>
              </div>

              <h4 className="text-[#0a1628] text-[11px] md:text-[12px] lg:text-[13px] font-bold tracking-[0.15em] uppercase mb-4 md:mb-6">
                Join #Betterways !
              </h4>
              <Link href="/act" className="inline-block bg-[#e02020] text-white text-[12px] md:text-[13px] font-bold py-2.5 px-7 md:py-3 md:px-10 hover:bg-[#c81010] transition-colors uppercase">
                Act
              </Link>
            </div>

          </div>
        </div>
      </div>
      )}

      {/* Bottom white section */}
      <div className="bg-white py-6 md:py-8 lg:py-10 border-t border-[#e5e7eb]">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto text-center">
          {isMinimal ? (
            <div className="flex flex-wrap justify-center items-center gap-3 text-[13px] md:text-[14px] text-[#0a2071] font-medium">
              <span>&copy; 2026 ANL</span>
              <span className="text-gray-400">&bull;</span>
              <Link href="/legal" className="hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">Legals terms</Link>
              <span className="text-gray-400">&bull;</span>
              <Link href="/privacy" className="hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">Privacy Notice</Link>
              <span className="text-gray-400">&bull;</span>
              <Link href="/cyber-security" className="hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">Cyber Security</Link>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6">
                <Link href="/site-map" className="text-[#254674] text-[11px] md:text-[12px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">Site Map</Link>
                <Link href="/privacy" className="text-[#254674] text-[11px] md:text-[12px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">Privacy Notice</Link>
                <Link href="/customer-service" className="text-[#254674] text-[11px] md:text-[12px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">My Customer Service</Link>
                <Link href="/legal" className="text-[#254674] text-[11px] md:text-[12px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">Legal Terms</Link>
                <Link href="/accessibility" className="text-[#254674] text-[11px] md:text-[12px] font-normal hover:text-[#e02020] underline underline-offset-[3px] decoration-[1px] hover:no-underline transition-colors">Accessibility: not compliant</Link>
              </div>
              <p className="text-[#254674] text-[11px] md:text-[12px] font-normal">
                &copy; 2026 CMA CGM Group
              </p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
