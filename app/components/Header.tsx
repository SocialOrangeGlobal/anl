'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Search, User, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { megaMenus } from '@/app/data/navigation';
import SearchModal from './SearchModal';
import MobileDrawer from './MobileDrawer';

type MenuKey = 'industries' | 'shipping' | 'solutions' | 'portal' | null;

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTopHovered, setIsTopHovered] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = (key: MenuKey) => {
    setActiveMenu(activeMenu === key ? null : key);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    if (activeMenu !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  const portalMenu = megaMenus.portal;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 ${scrolled ? 'shadow-md -translate-y-0' : 'translate-y-0'}`}>
        {/* Utility Bar */}
        <div
          className={`relative z-[110] hidden lg:block transition-all duration-300 overflow-hidden origin-top ${scrolled ? 'max-h-0 opacity-0 border-transparent' : 'max-h-[50px] opacity-100 border-b'
            } ${searchOpen ? 'bg-white border-gray-200' : (!isHomePage
              ? 'bg-white border-gray-200'
              : isTopHovered
                ? 'bg-white border-gray-200'
                : 'bg-white/50 border-white/20'
            )}`}
          onMouseEnter={() => setIsTopHovered(true)}
          onMouseLeave={() => setIsTopHovered(false)}
        >
          <div className="w-full px-3 md:px-4 lg:px-6">
            <div className="flex items-center justify-end h-8 md:h-9">
              <div className="flex items-center gap-4 lg:gap-6 overflow-x-auto hide-scrollbar pr-2 md:pr-4">
                {[
                  { label: 'Schedules', href: '/schedule-search' },
                  { label: 'About us', href: '/about-us' },
                  { label: 'Find your local offices', href: '/local-offices' },
                  { label: 'My Customer Service', href: '/contact' },
                  { label: 'Guides', href: '/guides' },
                  { label: 'The CMA CGM Group', href: '/the-cma-cgm-group' },
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="text-[11px] lg:text-[13px] font-normal text-[#254674] hover:text-[#e02020] transition-colors whitespace-nowrap">
                    {link.label}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => setSearchOpen(true)}
                className="text-[#254674] hover:text-[#e02020] transition-colors flex-shrink-0 ml-2"
                aria-label="Search"
              >
                <Search size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`relative z-40 border-b transition-colors duration-300 ${!isHomePage
            ? 'bg-white border-gray-200'
            : (scrolled || activeMenu !== null || isHovered)
              ? 'bg-white border-gray-200'
              : 'bg-white/50 border-white/20'
            }`}
          ref={menuRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full px-3 md:px-4 lg:px-6">
            <div className="flex items-center justify-between h-14 md:h-16 lg:h-[72px]">
              {/* Logo */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <img src="/images/anl-logo.svg" alt="ANL Logo" className="h-[38px] md:h-[42px] lg:h-12 w-auto" />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center">
                <div className={`w-px transition-all duration-300 ${activeMenu === 'industries' ? 'h-8 bg-[#e02020]' : 'h-4 bg-[#254674]/30'}`} />

                {/* Industries */}
                <div className="relative">
                  <button onClick={() => toggleMenu('industries')} className={`flex items-center nav-link border-b-2 border-transparent ${activeMenu === 'industries' ? 'text-[#e02020]' : 'text-[#254674]'} transition-all font-normal text-[13px] xl:text-[15px] px-3 xl:px-5`}>
                    Industries
                  </button>
                </div>

                <div className={`w-px transition-all duration-300 ${activeMenu === 'shipping' ? 'h-8 bg-[#e02020]' : 'h-4 bg-[#254674]/30'}`} />

                {/* Shipping */}
                <div className="relative">
                  <button onClick={() => toggleMenu('shipping')} className={`flex items-center nav-link border-b-2 border-transparent ${activeMenu === 'shipping' ? 'text-[#e02020]' : 'text-[#254674]'} transition-all font-normal text-[13px] xl:text-[15px] px-3 xl:px-5`}>
                    Shipping
                  </button>
                </div>

                <div className={`w-px transition-all duration-300 ${activeMenu === 'solutions' ? 'h-8 bg-[#e02020]' : 'h-4 bg-[#254674]/30'}`} />

                {/* End-to-End Solutions */}
                <div className="relative">
                  <button onClick={() => toggleMenu('solutions')} className={`flex items-center nav-link border-b-2 border-transparent ${activeMenu === 'solutions' ? 'text-[#e02020]' : 'text-[#254674]'} transition-all font-normal text-[13px] xl:text-[15px] px-3 xl:px-5`}>
                    End-to-End Solutions
                  </button>
                </div>

                <div className="w-px h-4 bg-[#254674]/30" />

                <Link href="/news" className="nav-link border-b-2 border-transparent text-[#254674] hover:text-[#e02020] transition-all font-normal text-[13px] xl:text-[15px] px-3 xl:px-5">
                  News
                </Link>

                <div className={`w-px transition-all duration-300 ${activeMenu === 'portal' ? 'h-8 bg-[#e02020]' : 'h-4 bg-[#254674]/30'}`} />

                {/* My ANL */}
                <div className="relative ml-3 xl:ml-5">
                  <button onClick={() => toggleMenu('portal')} className={`flex items-center gap-1.5 xl:gap-2 nav-link border-b-2 border-transparent ${activeMenu === 'portal' ? 'text-[#e02020]' : 'text-[#254674]'} transition-all font-normal text-[13px] xl:text-[15px]`}>
                    <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full border border-[#e02020] flex items-center justify-center text-[#e02020]">
                      <User size={14} />
                    </div>
                    My ANL
                  </button>
                </div>
              </nav>

              {/* Mobile/Tablet: Search + Hamburger */}
              <div className="lg:hidden flex items-center gap-1">
                <button
                  className="p-1.5 md:p-2 text-[#0a1628] hover:text-[#e02020] transition-colors"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                >
                  <Search size={20} className="md:hidden" />
                  <Search size={22} className="hidden md:block" />
                </button>
                <button
                  className="p-1.5 md:p-2 text-[#0a1628]"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={20} className="md:hidden" />
                  <Menu size={24} className="hidden md:block" />
                </button>
              </div>
            </div>
          </div>

          {/* Mega Menu Dropdown */}
          <AnimatePresence>
            {activeMenu && activeMenu !== 'portal' && (
              <motion.div
                key={activeMenu}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50"
              >
                <div className="container-max py-8 md:py-10">
                  <div className="flex gap-12 lg:gap-20 xl:gap-28 flex-wrap">
                    {activeMenu === 'industries' && megaMenus.industries.sections.map((section, i) => (
                      <div key={i} className="flex">
                        <div className="w-[2px] bg-[#254674]/20 mr-5 h-full" />
                        <div>
                          {section.heading === 'Industry Expertise' ? (
                            <Link href="/industries" onClick={() => setActiveMenu(null)} className="block">
                              <p className="text-[#0a2071] hover:text-[#e02020] font-bold text-[14px] lg:text-[16px] mb-5 uppercase tracking-wide transition-colors">{section.heading}</p>
                            </Link>
                          ) : section.heading === 'Cargo Solutions' ? (
                            <Link href="/cargo-solutions" onClick={() => setActiveMenu(null)} className="block">
                              <p className="text-[#0a2071] hover:text-[#e02020] font-bold text-[14px] lg:text-[16px] mb-5 uppercase tracking-wide transition-colors">{section.heading}</p>
                            </Link>
                          ) : (
                            <p className="text-[#0a2071] font-bold text-[14px] lg:text-[16px] mb-5 uppercase tracking-wide">{section.heading}</p>
                          )}
                          <ul className="space-y-4">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <Link href={link.href} className="text-[#254674] text-[15px] lg:text-[16px] font-medium hover:text-[#e02020] transition-colors" onClick={() => setActiveMenu(null)}>
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                    {activeMenu === 'shipping' && megaMenus.shipping.sections.map((section, i) => (
                      <div key={i} className="flex">
                        <div className="w-[2px] bg-[#254674]/20 mr-5 h-full" />
                        <div>
                          {section.heading === 'Maritime Services' ? (
                            <Link href="/shipping/maritime-solutions" onClick={() => setActiveMenu(null)} className="block">
                              <p className="text-[#0a2071] hover:text-[#e02020] font-bold text-[14px] lg:text-[16px] mb-5 uppercase tracking-wide transition-colors">{section.heading}</p>
                            </Link>
                          ) : (
                            <p className="text-[#0a2071] font-bold text-[14px] lg:text-[16px] mb-5 uppercase tracking-wide">{section.heading}</p>
                          )}
                          <ul className="space-y-4">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <Link href={link.href} className="text-[#254674] text-[15px] lg:text-[16px] font-medium hover:text-[#e02020] transition-colors" onClick={() => setActiveMenu(null)}>
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                    {activeMenu === 'solutions' && megaMenus.solutions.sections.map((section, i) => (
                      <div key={i} className="flex">
                        <div className="w-[2px] bg-[#254674]/20 mr-5 h-full" />
                        <div>
                          <p className="text-[#0a2071] font-bold text-[14px] lg:text-[16px] mb-5 uppercase tracking-wide">{section.heading}</p>
                          <ul className="space-y-4">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <Link href={link.href} className="text-[#254674] text-[15px] lg:text-[16px] font-medium hover:text-[#e02020] transition-colors" onClick={() => setActiveMenu(null)}>
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeMenu === 'portal' && (
              <motion.div
                key="portal"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50"
              >
                <div className="container-max px-4 md:px-6 lg:px-8 xl:px-12 py-5 md:py-7 lg:py-8">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-8">
                      {portalMenu.sections.map((section, i) => (
                        <div key={i} className="flex">
                          <div className="w-[2px] bg-[#254674]/20 mr-5 h-full" />
                          <div>
                            <p className="text-[#0a2071] font-bold text-[14px] lg:text-[16px] mb-5 uppercase tracking-wide">{section.heading}</p>
                            <ul className="space-y-4">
                              {section.links.map((link) => (
                                <li key={link.label}>
                                  <Link href={link.href} className="text-[#254674] text-[15px] lg:text-[16px] font-medium hover:text-[#e02020] transition-colors" onClick={() => setActiveMenu(null)}>
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col space-y-4">
                      <Link href="/login" className="block w-full bg-[#e02020] hover:bg-[#c81010] text-white font-bold text-[15px] text-center py-4 transition-colors" onClick={() => setActiveMenu(null)}>
                        Log In
                      </Link>
                      <Link href="/register" className="block w-full border border-[#e02020] text-[#e02020] hover:bg-gray-50 font-bold text-[15px] text-center py-4 transition-colors" onClick={() => setActiveMenu(null)}>
                        Register an account
                      </Link>
                      <div className="pt-2 space-y-4">
                        {portalMenu.cta.map((item, i) => (
                          <Link key={i} href={item.href} className="block group bg-[#f8f9fc] p-6 hover:bg-[#f1f4f9] transition-colors relative" onClick={() => setActiveMenu(null)}>
                            <p className="font-bold text-[#0a2071] text-[16px] mb-2">{item.label}</p>
                            <p className="text-[13px] text-[#254674] leading-relaxed pr-4">{item.description}</p>
                            <span className="absolute bottom-4 right-4 text-[#e02020] text-lg font-bold group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>

      {/* Removed spacer to allow hero image to go behind navbar */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
