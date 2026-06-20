'use client';

import { useState } from 'react';
import { Search, Ship, Calendar, Download } from 'lucide-react';
import { formatDateLong } from '@/app/lib/utils';
import Link from 'next/link';

const voyages = [
  { vessel: 'MV Pacific Pioneer', voyage: 'OLP001W', service: 'APS1', status: 'Sailing', departure: '2026-06-18', ports: ['Shanghai', 'Busan', 'Sydney', 'Melbourne'] },
  { vessel: 'MV Tasman Explorer', voyage: 'OLT002E', service: 'TAS1', status: 'In Port', departure: '2026-06-20', ports: ['Auckland', 'Wellington', 'Sydney', 'Melbourne'] },
  { vessel: 'MV Coral Arrow', voyage: 'OLC003W', service: 'PIS1', status: 'Scheduled', departure: '2026-06-22', ports: ['Brisbane', 'Port Moresby', 'Suva', 'Noumea'] },
  { vessel: 'MV Southern Star', voyage: 'OLS004W', service: 'APS2', status: 'Sailing', departure: '2026-06-25', ports: ['Singapore', 'Port Klang', 'Fremantle', 'Adelaide'] },
  { vessel: 'MV Indian Bridge', voyage: 'OLI005W', service: 'ISC1', status: 'Scheduled', departure: '2026-07-01', ports: ['Dubai', 'Colombo', 'Melbourne', 'Sydney'] },
  { vessel: 'MV Ocean Venture', voyage: 'OLO006W', service: 'NAP1', status: 'Scheduled', departure: '2026-07-05', ports: ['Los Angeles', 'Long Beach', 'Auckland', 'Sydney'] },
];

const statusColors: Record<string, string> = {
  'Sailing': 'bg-blue-50 text-blue-700 border border-blue-200',
  'In Port': 'bg-green-50 text-green-700 border border-green-200',
  'Scheduled': 'bg-gray-50 text-gray-600 border border-gray-200',
};

export default function VoyagesPage() {
  const [search, setSearch] = useState('');

  const filtered = voyages.filter((v) =>
    !search || v.vessel.toLowerCase().includes(search.toLowerCase()) || v.voyage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#0a1628] py-14 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-3">Schedules</p>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6">Voyages</h1>
          <div className="relative max-w-lg">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by vessel or voyage number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 text-sm bg-white focus:outline-none"
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">{filtered.length} voyages found</p>
            <button className="flex items-center gap-2 btn-outline-red text-xs py-2 px-4">
              <Download size={12} /> Export
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((v, i) => (
              <div key={i} className="bg-white border border-gray-100 hover:border-[#e02020] hover:shadow-md transition-all duration-300 p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                      <Ship size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0a1628] text-sm">{v.vessel}</p>
                      <p className="text-xs text-gray-400">{v.voyage} • {v.service}</p>
                    </div>
                  </div>
                  <span className={`status-badge text-xs ${statusColors[v.status]}`}>{v.status}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Calendar size={12} className="text-gray-300" />
                  <span>Departure: <strong className="text-[#0a1628]">{formatDateLong(v.departure)}</strong></span>
                </div>

                {/* Port stops */}
                <div className="flex items-center gap-1 flex-wrap mb-4">
                  {v.ports.map((port, pi) => (
                    <div key={pi} className="flex items-center gap-1">
                      <span className="text-xs text-gray-600 bg-gray-50 px-2 py-0.5 border border-gray-100">{port}</span>
                      {pi < v.ports.length - 1 && <span className="text-gray-300 text-xs">→</span>}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <Link href="/schedule-search" className="text-[#e02020] text-xs font-semibold hover:underline">View Schedule</Link>
                  <Link href="/booking" className="text-[#e02020] text-xs font-semibold hover:underline">Book</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
