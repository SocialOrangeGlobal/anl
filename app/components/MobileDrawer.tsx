'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { megaMenus, utilityLinks } from '@/app/data/navigation';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

type AccordionKey = 'industries' | 'shipping' | 'solutions' | 'portal' | null;

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<AccordionKey>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpanded(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const toggle = (key: AccordionKey) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 z-[130] w-80 bg-white flex flex-col shadow-2xl overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-end px-5 py-4 border-b border-gray-100 bg-[#0a1628]">
              <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="p-4 flex gap-3 border-b border-gray-100">
              <Link href="/login" onClick={onClose} className="flex-1 btn-outline-red text-sm py-2 text-center">Login</Link>
              <Link href="/register" onClick={onClose} className="flex-1 btn-primary text-sm py-2 text-center">Register</Link>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 py-2">
              {/* Industries */}
              <button
                onClick={() => toggle('industries')}
                className="w-full flex items-center justify-between px-5 py-3.5 text-[#0a1628] font-medium hover:bg-gray-50 transition-colors"
              >
                <span>Industries</span>
                {expanded === 'industries' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              <AnimatePresence>
                {expanded === 'industries' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-gray-50"
                  >
                    {megaMenus.industries.sections.map((section, i) => (
                      <div key={i} className="px-5 py-3">
                        {section.heading === 'Industry Expertise' ? (
                          <Link href="/industries" onClick={onClose} className="block">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#0a1628] hover:text-[#e02020] mb-2 transition-colors">{section.heading}</p>
                          </Link>
                        ) : section.heading === 'Cargo Solutions' ? (
                          <Link href="/cargo-solutions" onClick={onClose} className="block">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#0a1628] hover:text-[#e02020] mb-2 transition-colors">{section.heading}</p>
                          </Link>
                        ) : (
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{section.heading}</p>
                        )}
                        {section.links.map((link) => (
                          <Link key={link.label} href={link.href} onClick={onClose} className="block py-1.5 text-sm text-[#0a1628] hover:text-[#e02020] transition-colors pl-3 border-l border-gray-200">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Shipping */}
              <button
                onClick={() => toggle('shipping')}
                className="w-full flex items-center justify-between px-5 py-3.5 text-[#0a1628] font-medium hover:bg-gray-50 transition-colors"
              >
                <span>Shipping</span>
                {expanded === 'shipping' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              <AnimatePresence>
                {expanded === 'shipping' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-gray-50"
                  >
                    {megaMenus.shipping.sections.map((section, i) => (
                      <div key={i} className="px-5 py-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{section.heading}</p>
                        {section.links.map((link) => (
                          <Link key={link.label} href={link.href} onClick={onClose} className="block py-1.5 text-sm text-[#0a1628] hover:text-[#e02020] transition-colors pl-3 border-l border-gray-200">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* End-to-End Solutions */}
              <button
                onClick={() => toggle('solutions')}
                className="w-full flex items-center justify-between px-5 py-3.5 text-[#0a1628] font-medium hover:bg-gray-50 transition-colors"
              >
                <span>End-to-End Solutions</span>
                {expanded === 'solutions' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              <AnimatePresence>
                {expanded === 'solutions' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-gray-50"
                  >
                    {megaMenus.solutions.sections.map((section, i) => (
                      <div key={i} className="px-5 py-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{section.heading}</p>
                        {section.links.map((link) => (
                          <Link key={link.label} href={link.href} onClick={onClose} className="block py-1.5 text-sm text-[#0a1628] hover:text-[#e02020] transition-colors pl-3 border-l border-gray-200">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/news" onClick={onClose} className="block w-full px-5 py-3.5 text-[#0a1628] font-medium hover:bg-gray-50 transition-colors">
                News
              </Link>

              {/* My Portal */}
              <button
                onClick={() => toggle('portal')}
                className="w-full flex items-center justify-between px-5 py-3.5 text-[#0a1628] font-medium hover:bg-gray-50 transition-colors"
              >
                <span>My Portal</span>
                {expanded === 'portal' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              <AnimatePresence>
                {expanded === 'portal' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-gray-50"
                  >
                    {megaMenus.portal.sections.map((section, i) => (
                      <div key={i} className="px-5 py-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{section.heading}</p>
                        {section.links.map((link) => (
                          <Link key={link.label} href={link.href} onClick={onClose} className="block py-1.5 text-sm text-[#0a1628] hover:text-[#e02020] transition-colors pl-3 border-l border-gray-200">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>

            {/* Utility Links */}
            <div className="border-t border-gray-100 p-4 bg-gray-50">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Quick Access</p>
              <div className="grid grid-cols-2 gap-1">
                {utilityLinks.map((link) => (
                  <Link key={link.label} href={link.href} onClick={onClose} className="text-xs text-gray-500 hover:text-[#e02020] py-1.5 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
