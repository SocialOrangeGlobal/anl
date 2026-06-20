'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('ANL');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setCategory('ANL');
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Search Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 bg-white z-[100] shadow-2xl pb-10 pt-14 md:pb-16 md:pt-24"
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 md:top-10 md:right-8">
              <button
                onClick={onClose}
                className="p-2 text-[#0a2071] hover:text-[#e02020] transition-colors"
                aria-label="Close"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12 mt-2 md:mt-8">
              <h2 className="text-[#0a2071] text-[24px] md:text-[36px] mb-5 md:mb-8 font-medium">
                Search
              </h2>

              <div className="mb-2">
                <label className="text-[#0a2071] text-xs md:text-[15px]">
                  Type your request <span className="text-[#e02020]">*</span>
                </label>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type your request"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 w-full border border-[#0a2071]/30 hover:border-[#0a2071] focus:border-[#0a2071] px-4 py-2.5 md:py-3.5 text-sm md:text-base text-[#0a1628] outline-none placeholder:text-gray-400 min-w-0 transition-colors"
                />

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 w-full lg:w-auto flex-shrink-0">
                  <div className="relative w-full sm:flex-1 lg:w-[250px] xl:w-[300px]">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-full border border-[#0a2071] px-4 py-2.5 md:py-3.5 appearance-none text-sm md:text-base text-[#0a2071] outline-none bg-white cursor-pointer transition-colors focus:ring-1 focus:ring-[#0a2071]"
                    >
                      <option value="ANL">ANL</option>
                      <option value="Search in News">Search in News</option>
                      <option value="Container Tracking">Container Tracking</option>
                      <option value="Voyage">Voyage</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 md:right-4 flex items-center pointer-events-none text-[#0a2071]">
                      <ChevronDown size={18} className="md:w-5 md:h-5" />
                    </div>
                  </div>

                  <button className="bg-[#e02020] hover:bg-[#c81010] text-white font-bold text-sm md:text-[15px] px-10 py-2.5 md:py-3.5 transition-colors w-full sm:flex-1 lg:w-auto lg:min-w-[150px]">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
