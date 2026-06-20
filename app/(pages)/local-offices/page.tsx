'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Loader2 } from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────────────────────────── */
type Continent = 'All' | 'Asia' | 'Europe' | 'Mediterranean' | 'Middle East' | 'North America' | 'Oceania' | 'South America';

interface Country {
  name: string;
  continents: Continent[];
}

const countries: Country[] = [
  /* ── Oceania ── */
  { name: 'American Samoa', continents: ['Oceania'] },
  { name: 'Australia', continents: ['Oceania'] },
  { name: 'Fiji', continents: ['Oceania'] },
  { name: 'French Polynesia', continents: ['Oceania'] },
  { name: 'New Caledonia', continents: ['Oceania'] },
  { name: 'New Zealand', continents: ['Oceania'] },
  { name: 'Papua New Guinea', continents: ['Oceania'] },
  { name: 'Samoa', continents: ['Oceania'] },
  { name: 'Solomon Islands', continents: ['Oceania'] },
  { name: 'Timor-Leste', continents: ['Oceania', 'Asia'] },
  { name: 'Tonga', continents: ['Oceania'] },
  { name: 'Vanuatu', continents: ['Oceania'] },
  { name: 'Wallis And Futuna', continents: ['Oceania'] },

  /* ── Asia ── */
  { name: 'Bangladesh', continents: ['Asia'] },
  { name: 'Cambodia', continents: ['Asia'] },
  { name: 'China', continents: ['Asia'] },
  { name: 'Hong Kong SAR, China', continents: ['Asia'] },
  { name: 'India', continents: ['Asia'] },
  { name: 'Indonesia', continents: ['Asia'] },
  { name: 'Japan', continents: ['Asia'] },
  { name: "Lao People's Democratic Republic", continents: ['Asia'] },
  { name: 'Malaysia', continents: ['Asia'] },
  { name: 'Maldives', continents: ['Asia'] },
  { name: 'Myanmar', continents: ['Asia'] },
  { name: 'Pakistan', continents: ['Asia'] },
  { name: 'Philippines', continents: ['Asia'] },
  { name: 'Singapore', continents: ['Asia'] },
  { name: 'South Korea', continents: ['Asia'] },
  { name: 'Sri Lanka', continents: ['Asia'] },
  { name: 'Taiwan, China', continents: ['Asia'] },
  { name: 'Thailand', continents: ['Asia'] },
  { name: 'Viet Nam', continents: ['Asia'] },

  /* ── Middle East ── */
  { name: 'Bahrain', continents: ['Middle East', 'Asia'] },
  { name: 'Iraq', continents: ['Middle East', 'Asia'] },
  { name: 'Jordan', continents: ['Middle East', 'Asia'] },
  { name: 'Kuwait', continents: ['Middle East', 'Asia'] },
  { name: 'Oman', continents: ['Middle East', 'Asia'] },
  { name: 'Qatar', continents: ['Middle East', 'Asia'] },
  { name: 'Saudi Arabia', continents: ['Middle East', 'Asia'] },
  { name: 'Syrian Arab Republic', continents: ['Middle East', 'Mediterranean'] },
  { name: 'United Arab Emirates', continents: ['Middle East', 'Asia'] },
  { name: 'Yemen', continents: ['Middle East', 'Asia'] },

  /* ── Mediterranean ── */
  { name: 'Egypt', continents: ['Mediterranean'] },
  { name: 'Greece', continents: ['Mediterranean', 'Europe'] },
  { name: 'Italy', continents: ['Mediterranean', 'Europe'] },
  { name: 'Malta', continents: ['Mediterranean', 'Europe'] },
  { name: 'Portugal', continents: ['Mediterranean', 'Europe'] },

  /* ── Europe ── */
  { name: 'Estonia', continents: ['Europe'] },
  { name: 'Finland', continents: ['Europe'] },
  { name: 'France', continents: ['Europe', 'Mediterranean'] },
  { name: 'Georgia', continents: ['Europe'] },
  { name: 'Germany', continents: ['Europe'] },
  { name: 'Ireland', continents: ['Europe'] },
  { name: 'Romania', continents: ['Europe'] },
  { name: 'Switzerland', continents: ['Europe'] },

  /* ── North America ── */
  { name: 'United States', continents: ['North America'] },

  /* ── South America ── */
  { name: 'Colombia', continents: ['South America'] },
];


const continents: Continent[] = [
  'All', 'Asia', 'Europe', 'Mediterranean', 'Middle East', 'North America', 'Oceania', 'South America',
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function LocalOfficesPage() {
  const [activeTab, setActiveTab] = useState<Continent>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayList, setDisplayList] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /* Compute the filtered list based on current tab + search */
  const filtered = useMemo(() => {
    let list = activeTab === 'All'
      ? countries
      : countries.filter(c => c.continents.includes(activeTab));

    if (searchQuery.trim()) {
      list = list.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [activeTab, searchQuery]);

  /* Loader: show spinner briefly on every filter change */
  useEffect(() => {
    setIsLoading(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDisplayList(filtered);
      setIsLoading(false);
    }, 350);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [filtered]);

  /* Helpers */
  const handleTabChange = (tab: Continent) => {
    setActiveTab(tab);
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-[54px] md:pt-[64px] lg:pt-[108px]">

        {/* ── Top Section ── */}
        <section className="bg-white py-8 md:py-12 lg:py-16">
          <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">

            {/* Heading + Search Row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8 md:mb-10">
              <h1
                style={{
                  fontFamily: "'Antonio', sans-serif",
                  fontSize: 'clamp(28px, 4.5vw, 56px)',
                  lineHeight: '1.1',
                  fontWeight: 700,
                  color: '#0a2071',
                  maxWidth: '600px',
                }}
              >
                Over 650 shipping agencies all over the world
              </h1>

              {/* Search */}
              <div className="flex-shrink-0 w-full sm:w-[240px] md:w-[280px]">
                <label className="block text-[#0a2071] text-[13px] font-semibold mb-1.5 tracking-wide">
                  Search a country
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Country or region"
                    className="w-full border border-[#ccd3de] text-[#0a2071] text-[14px] px-3 py-2.5 pr-9 focus:outline-none focus:border-[#0a2071] placeholder:text-[#aab0bf]"
                  />
                  {isLoading
                    ? <Loader2 size={16} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#e02020] animate-spin" />
                    : <Search size={16} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#aab0bf] pointer-events-none" />
                  }
                </div>
              </div>
            </div>

            {/* ── Continent Tabs ── */}
            <div className="border-b border-[#e5e7eb] mb-8 md:mb-10 overflow-x-auto">
              <div className="flex gap-0 min-w-max">
                {continents.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`px-4 md:px-5 py-3 text-[14px] md:text-[15px] font-semibold whitespace-nowrap border-b-2 transition-all duration-200 ${activeTab === tab
                      ? 'border-[#e02020] text-[#e02020]'
                      : 'border-transparent text-[#0a2071] hover:text-[#e02020] hover:border-[#e02020]/40'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Countries Grid ── */}
            <div className="min-h-[200px] relative">
              {isLoading ? (
                /* ── Loader ── */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 py-16">
                  <Loader2 size={36} className="text-[#e02020] animate-spin" />
                  <p className="text-[#0a2071] text-[14px] font-medium">Loading countries…</p>
                </div>
              ) : displayList.length === 0 ? (
                <p className="text-[#888] text-[15px] py-12 text-center">
                  No countries found{searchQuery ? ` for "${searchQuery}"` : ''}.
                </p>
              ) : (
                <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-x-4 sm:gap-x-6 lg:gap-x-8 mb-8">
                  {displayList.map((country) => (
                    <li key={country.name} className="break-inside-avoid mb-2">
                      <Link
                        href={`/local-offices/${country.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="inline-block text-[#254674] text-[14px] md:text-[15px] py-1 hover:text-[#e02020] hover:underline transition-colors leading-snug"
                      >
                        {country.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </section>

        {/* ── Banner 1: ANL Mobile App ── */}
        <section className="py-4 md:py-8 bg-white">
          <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
            <div className="flex flex-col sm:flex-row overflow-hidden" style={{ background: '#eef1f8' }}>

              {/* Left: Blue image panel — fills full height */}
              <div
                className="w-full sm:w-[48%] md:w-[50%] min-h-[260px] sm:min-h-[340px] md:min-h-[400px] flex items-center justify-center"
                style={{ background: '#c8d8f0' }}
              >
                <img
                  src="/images/first-header/download app.png"
                  alt="ANL Mobile App"
                  className="w-full h-full object-contain"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              {/* Right: Content */}
              <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-14">
                <div className="flex items-start gap-4 md:gap-5">
                  {/* Red dash */}
                  <span className="block w-10 md:w-14 min-w-[40px] md:min-w-[56px] h-[4px] md:h-[6px] bg-[#e02020] mt-[10px] md:mt-[13px] flex-shrink-0" />
                  <div className="flex flex-col">
                    <h2
                      style={{
                        fontFamily: "'Antonio', sans-serif",
                        fontSize: 'clamp(20px, 4vw, 34px)',
                        fontWeight: 700,
                        color: '#0a2071',
                        lineHeight: '1.15',
                        marginBottom: '14px',
                      }}
                    >
                      ANL Mobile App: new design, new features
                    </h2>
                    <p className="text-[#0a2071] text-[13px] md:text-[14px] leading-[1.75] mb-6 md:mb-7 max-w-[400px]">
                      Track your container shipments, learn about vessel and voyage schedules, get routing information, and read the latest ANL news on this revamped app.
                    </p>
                    <Link
                      href="#"
                      className="inline-block self-start bg-[#e02020] text-white text-[13px] md:text-[14px] font-semibold px-5 md:px-6 py-2.5 hover:bg-[#c81010] transition-colors"
                    >
                      Download the app
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Banner 2: Customer Service ── */}
        <section className="py-4 md:py-8 bg-white pb-12 md:pb-16 lg:pb-20">
          <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
            <div className="flex flex-col sm:flex-row overflow-hidden" style={{ background: '#eef1f8' }}>

              {/* Left: Blue image panel — fills full height */}
              <div
                className="w-full sm:w-[48%] md:w-[50%] min-h-[260px] sm:min-h-[340px] md:min-h-[400px] flex items-center justify-center"
                style={{ background: '#c8d8f0' }}
              >
                <img
                  src="/images/first-header/customer service.png"
                  alt="Customer Service"
                  className="w-full h-full object-contain"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              {/* Right: Content */}
              <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-14">
                <div className="flex items-start gap-4 md:gap-5">
                  {/* Red dash */}
                  <span className="block w-10 md:w-14 min-w-[40px] md:min-w-[56px] h-[4px] md:h-[6px] bg-[#e02020] mt-[10px] md:mt-[13px] flex-shrink-0" />
                  <div className="flex flex-col">
                    <h2
                      style={{
                        fontFamily: "'Antonio', sans-serif",
                        fontSize: 'clamp(20px, 4vw, 34px)',
                        fontWeight: 700,
                        color: '#0a2071',
                        lineHeight: '1.15',
                        marginBottom: '14px',
                      }}
                    >
                      Have questions? We&apos;ve got you covered. Discover My Customer Service portal and save time!
                    </h2>
                    <p className="text-[#0a2071] text-[13px] md:text-[14px] leading-[1.75] mb-6 md:mb-7 max-w-[400px]">
                      Use our new digital platform to quickly and easily find the answers to your questions regarding your shipment, CMA CGM Group services and much more.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block self-start bg-[#e02020] text-white text-[13px] md:text-[14px] font-semibold px-5 md:px-6 py-2.5 hover:bg-[#c81010] transition-colors"
                    >
                      Visit My Customer Service
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
