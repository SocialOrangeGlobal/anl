'use client';

import { useState } from 'react';
import { Search, Package, MapPin, Clock, ChevronRight, Ship, CheckCircle2, Circle } from 'lucide-react';
import { mockShipments } from '@/app/data/news';
import { formatDateLong } from '@/app/lib/utils';

const statusColors: Record<string, string> = {
  'In Transit': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Delivered': 'bg-green-50 text-green-700 border border-green-200',
  'Pending': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Customs Hold': 'bg-red-50 text-red-700 border border-red-200',
};

const timelineSteps = [
  { label: 'Booking Confirmed', date: '10 Jun 2026', done: true },
  { label: 'Container Gated In', date: '11 Jun 2026', done: true },
  { label: 'Vessel Departed', date: '12 Jun 2026', done: true },
  { label: 'In Transit', date: 'Est. 15 Jun 2026', done: true, active: true },
  { label: 'Arrived at Destination Port', date: 'Est. 28 Jun 2026', done: false },
  { label: 'Customs Clearance', date: 'Est. 30 Jun 2026', done: false },
  { label: 'Container Gated Out', date: 'Est. 1 Jul 2026', done: false },
  { label: 'Delivered', date: 'Est. 2 Jul 2026', done: false },
];

export default function ShipmentTrackingPage() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState(mockShipments[0]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0a1628] py-16 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-3">My Portal</p>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6">Shipment Tracking</h1>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Package size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Container, Bill of Lading, or Booking Number"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 text-sm text-[#0a1628] bg-white focus:outline-none focus:ring-2 focus:ring-[#e02020]"
              />
            </div>
            <button type="submit" className="btn-primary text-sm font-bold px-8 py-3.5 whitespace-nowrap flex items-center gap-2">
              <Search size={15} /> Track Shipment
            </button>
          </form>
          <p className="text-gray-400 text-xs mt-3">Search multiple references separated by commas</p>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-max">
          {/* Shipments List */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              {searched ? 'Search Results' : 'Recent Shipments'} ({mockShipments.length})
            </h2>
            <div className="space-y-2">
              {mockShipments.map((ship) => (
                <button
                  key={ship.id}
                  onClick={() => setSelectedShipment(ship)}
                  className={`w-full text-left bg-white border transition-all duration-200 p-4 flex flex-wrap md:flex-nowrap items-center gap-4 ${
                    selectedShipment.id === ship.id ? 'border-[#e02020] shadow-md' : 'border-gray-100 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Ship size={18} className="text-[#0a1628]" />
                    <div>
                      <p className="text-xs font-bold text-[#0a1628]">{ship.blNumber}</p>
                      <p className="text-xs text-gray-400">{ship.container}</p>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin size={11} className="text-gray-300" />
                      <span className="font-medium text-[#0a1628]">{ship.origin}</span>
                      <ChevronRight size={11} />
                      <span className="font-medium text-[#0a1628]">{ship.destination}</span>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
                    <Clock size={11} />
                    <span>ETA: {formatDateLong(ship.eta)}</span>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`status-badge text-xs ${statusColors[ship.status] || 'bg-gray-100 text-gray-600'}`}>
                      {ship.status}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Shipment Detail */}
          {selectedShipment && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Details + Timeline */}
              <div className="lg:col-span-2 space-y-5">
                {/* Shipment Info */}
                <div className="bg-white border border-gray-100 p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-black text-[#0a1628]">{selectedShipment.blNumber}</h3>
                      <p className="text-sm text-gray-400">{selectedShipment.container}</p>
                    </div>
                    <span className={`status-badge ${statusColors[selectedShipment.status] || 'bg-gray-100 text-gray-600'}`}>
                      {selectedShipment.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-6">
                    {[
                      { label: 'Origin', value: selectedShipment.pol },
                      { label: 'Destination', value: selectedShipment.pod },
                      { label: 'ETD', value: formatDateLong(selectedShipment.etd) },
                      { label: 'ETA', value: formatDateLong(selectedShipment.eta) },
                    ].map((info) => (
                      <div key={info.label}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{info.label}</p>
                        <p className="text-sm font-semibold text-[#0a1628]">{info.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-5 pt-5 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Vessel</p>
                      <p className="text-sm font-semibold text-[#0a1628]">{selectedShipment.vessel}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Voyage</p>
                      <p className="text-sm font-semibold text-[#0a1628]">{selectedShipment.voyage}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white border border-gray-100 p-6">
                  <h3 className="font-bold text-[#0a1628] text-sm uppercase tracking-wider mb-6">Container Movement</h3>
                  <div className="relative space-y-0">
                    {timelineSteps.map((step, i) => (
                      <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
                        {/* Line */}
                        {i < timelineSteps.length - 1 && (
                          <div className={`absolute left-[11px] top-6 bottom-0 w-0.5 ${step.done ? 'bg-[#e02020]' : 'bg-gray-100'}`} />
                        )}
                        {/* Dot */}
                        <div className="flex-shrink-0 mt-0.5">
                          {step.done ? (
                            step.active ? (
                              <div className="w-6 h-6 rounded-full bg-[#e02020] flex items-center justify-center ring-4 ring-red-50">
                                <div className="w-2.5 h-2.5 rounded-full bg-white" />
                              </div>
                            ) : (
                              <CheckCircle2 size={24} className="text-[#e02020]" />
                            )
                          ) : (
                            <Circle size={24} className="text-gray-200" />
                          )}
                        </div>
                        {/* Content */}
                        <div className="flex-1 pt-0.5">
                          <p className={`text-sm font-semibold ${step.done ? 'text-[#0a1628]' : 'text-gray-400'}`}>{step.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Placeholder + Actions */}
              <div className="space-y-5">
                <div className="bg-white border border-gray-100 p-4">
                  <h3 className="font-bold text-[#0a1628] text-xs uppercase tracking-wider mb-3">Live Vessel Position</h3>
                  <div className="bg-gradient-to-br from-[#0a1628] to-[#0d6e6e] relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <svg viewBox="0 0 300 200" className="w-full h-full opacity-60">
                      <rect width="300" height="200" fill="#061018" />
                      {/* Simplified ocean map */}
                      <ellipse cx="80" cy="150" rx="60" ry="25" fill="#0a3d5a" opacity="0.6" />
                      <ellipse cx="230" cy="130" rx="55" ry="30" fill="#0a3d5a" opacity="0.5" />
                      {/* Route line */}
                      <path d="M 60 140 Q 150 80 240 120" stroke="#e02020" strokeWidth="1.5" fill="none" strokeDasharray="5 3" />
                      <circle cx="60" cy="140" r="4" fill="#e02020" />
                      <circle cx="240" cy="120" r="4" fill="#e02020" />
                      {/* Vessel position */}
                      <circle cx="150" cy="100" r="6" fill="#e02020" />
                      <circle cx="150" cy="100" r="10" fill="none" stroke="#e02020" strokeWidth="1" opacity="0.5" />
                    </svg>
                    <div className="absolute top-3 left-3 text-white text-[10px] font-bold opacity-70">VESSEL POSITION</div>
                    <div className="absolute bottom-3 left-3 text-gray-300 text-[10px] opacity-60">Map placeholder — live data available in portal</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 p-5 space-y-3">
                  <h3 className="font-bold text-[#0a1628] text-xs uppercase tracking-wider mb-4">Actions</h3>
                  <button className="w-full btn-primary text-xs py-3 flex items-center justify-center gap-2">
                    <Package size={13} /> Download Documents
                  </button>
                  <button className="w-full btn-outline-red text-xs py-3 flex items-center justify-center gap-2">
                    <Search size={13} /> View Invoice
                  </button>
                  <button className="w-full border border-gray-200 text-[#0a1628] text-xs py-3 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    Export CSV
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
