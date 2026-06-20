'use client';

import { useState } from 'react';
import { Search, Anchor, ChevronDown } from 'lucide-react';
import { ports } from '@/app/data/news';
import Link from 'next/link';

const portSchedules = [
  { port: 'Sydney', country: 'Australia', vessel: 'MV Pacific Pioneer', voyage: 'OLP001W', eta: '2026-07-02', etd: '2026-07-03', berth: 'Patrick Terminals Berth 3', service: 'APS1' },
  { port: 'Melbourne', country: 'Australia', vessel: 'MV Coral Arrow', voyage: 'OLC003W', eta: '2026-07-05', etd: '2026-07-06', berth: 'VICT Berth 2', service: 'APS2' },
  { port: 'Auckland', country: 'New Zealand', vessel: 'MV Tasman Explorer', voyage: 'OLT002E', eta: '2026-06-25', etd: '2026-06-26', berth: 'Ports of Auckland Berth 6', service: 'TAS1' },
  { port: 'Brisbane', country: 'Australia', vessel: 'MV Southern Star', voyage: 'OLS004W', eta: '2026-07-10', etd: '2026-07-11', berth: 'DP World Brisbane Berth 1', service: 'PIS1' },
  { port: 'Singapore', country: 'Singapore', vessel: 'MV Indian Bridge', voyage: 'OLI005W', eta: '2026-06-28', etd: '2026-06-29', berth: 'PSA Tanjong Pagar Berth 7', service: 'ISC1' },
  { port: 'Fremantle', country: 'Australia', vessel: 'MV Ocean Venture', voyage: 'OLO006W', eta: '2026-07-08', etd: '2026-07-09', berth: 'Fremantle Berth 4', service: 'APS3' },
];

export default function PortSchedulesPage() {
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');

  const regions = ['All', ...Array.from(new Set(ports.map((p) => p.region)))];

  const filtered = portSchedules.filter((ps) =>
    !search || ps.port.toLowerCase().includes(search.toLowerCase()) || ps.vessel.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#0a1628] py-14 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-3">Schedules</p>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6">Port Schedules</h1>
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search port or vessel..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 text-sm bg-white focus:outline-none"
              />
            </div>
            <div className="relative">
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="w-full sm:w-48 px-4 py-3.5 text-sm bg-white appearance-none pr-9 text-gray-600 focus:outline-none"
              >
                {regions.map((r) => <option key={r}>{r}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          {/* Port Cards */}
          <div className="grid gap-4">
            {filtered.map((ps, i) => (
              <div key={i} className="bg-white border border-gray-100 hover:border-[#e02020] hover:shadow-md transition-all duration-300 p-5 md:p-6">
                <div className="flex flex-wrap items-start gap-6">
                  <div className="flex items-center gap-3 min-w-[160px]">
                    <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                      <Anchor size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-black text-[#0a1628]">{ps.port}</p>
                      <p className="text-xs text-gray-400">{ps.country}</p>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Vessel</p>
                      <p className="text-sm font-semibold text-[#0a1628]">{ps.vessel}</p>
                      <p className="text-xs text-gray-400">{ps.voyage}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">ETA</p>
                      <p className="text-sm font-semibold text-[#0a1628]">{ps.eta}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">ETD</p>
                      <p className="text-sm font-semibold text-[#0a1628]">{ps.etd}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Berth</p>
                      <p className="text-xs text-gray-600">{ps.berth}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 font-semibold border border-blue-200">{ps.service}</span>
                    <Link href="/booking" className="text-[#e02020] text-xs font-bold hover:underline whitespace-nowrap">Book →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
