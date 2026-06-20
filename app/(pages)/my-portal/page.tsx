import Link from 'next/link';
import { Search, FileText, Package, BarChart2, DollarSign, Navigation, Lock } from 'lucide-react';

const portalModules = [
  {
    category: 'Find Your Route',
    color: 'from-blue-900 to-blue-700',
    items: [
      { icon: Navigation, label: 'Routing Finder', href: '/schedule-search', description: 'Find the best route for your cargo' },
      { icon: Package, label: 'Port Schedules', href: '/port-schedules', description: 'View all port arrivals and departures' },
      { icon: Search, label: 'Voyages', href: '/voyages', description: 'Search upcoming vessel voyages' },
    ],
  },
  {
    category: 'Get Your Price',
    color: 'from-emerald-800 to-emerald-600',
    items: [
      { icon: DollarSign, label: 'Instant Quote', href: '/login', description: 'Get a competitive spot rate instantly' },
      { icon: FileText, label: 'Quotation Dashboard', href: '/login', description: 'Manage all your rate quotations' },
      { icon: BarChart2, label: 'General Tariffs', href: '/login', description: 'View standard tariff structures' },
    ],
  },
  {
    category: 'Organise Your Shipment',
    color: 'from-purple-900 to-purple-700',
    items: [
      { icon: Package, label: 'Booking', href: '/booking', description: 'Create and manage bookings' },
      { icon: FileText, label: 'Shipping Instructions', href: '/login', description: 'Submit Bill of Lading instructions' },
      { icon: Search, label: 'VGM', href: '/login', description: 'Submit verified gross mass declarations' },
    ],
  },
  {
    category: 'Monitor Your Shipment',
    color: 'from-cyan-800 to-cyan-600',
    items: [
      { icon: Search, label: 'Shipment Tracking', href: '/shipment-tracking', description: 'Track containers and Bills of Lading' },
      { icon: BarChart2, label: 'Shipment Dashboard', href: '/login', description: 'Overview of all active shipments' },
      { icon: Package, label: 'Customer Hub', href: '/login', description: 'Centralised shipment management' },
    ],
  },
  {
    category: 'Handle Your Documents',
    color: 'from-orange-800 to-orange-600',
    items: [
      { icon: FileText, label: 'Document Dashboard', href: '/document-dashboard', description: 'Access all shipping documents' },
      { icon: FileText, label: 'Draft Review', href: '/login', description: 'Review and approve draft BLs' },
      { icon: Package, label: 'Original Available', href: '/login', description: 'Request original document release' },
    ],
  },
  {
    category: 'Manage Your Invoices',
    color: 'from-red-900 to-red-700',
    items: [
      { icon: DollarSign, label: 'Invoice Dashboard', href: '/invoice-dashboard', description: 'View and pay freight invoices' },
      { icon: BarChart2, label: 'D&D Charges', href: '/login', description: 'Manage detention and demurrage' },
      { icon: FileText, label: 'Rate of Exchange', href: '/login', description: 'View current exchange rates' },
    ],
  },
];

export default function MyPortalPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#0a1628] py-20 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-4">My Portal</p>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Your Digital Shipping Hub</h1>
              <p className="text-gray-300 text-base max-w-xl leading-relaxed mb-8">
                My Portal gives you complete online control over every step of your shipping cycle — from route planning and booking to document management and invoice payments.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/login" className="btn-primary text-sm font-bold px-7 py-3.5">Log In</Link>
                <Link href="/register" className="btn-outline-red text-sm font-bold px-7 py-3.5 border-white text-white hover:bg-white hover:text-[#0a1628]">Register</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: 'Track', d: 'Real-time container tracking' },
                { v: 'Book', d: 'Online booking in minutes' },
                { v: 'Pay', d: 'Secure invoice payments' },
                { v: 'Manage', d: 'Full document control' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 p-5">
                  <div className="text-xl font-black text-white mb-1">{item.v}</div>
                  <div className="text-xs text-gray-300">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-black text-[#0a1628] mb-2">Portal Modules</h2>
          <div className="w-10 h-0.5 bg-[#e02020] mb-10" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalModules.map((mod) => (
              <div key={mod.category} className="border border-gray-100 overflow-hidden">
                <div className={`bg-gradient-to-br ${mod.color} px-5 py-4`}>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider">{mod.category}</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {mod.items.map((item) => (
                    <Link key={item.label} href={item.href} className="group flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors">
                      <item.icon size={16} className="text-gray-300 group-hover:text-[#e02020] flex-shrink-0 mt-0.5 transition-colors" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#0a1628] group-hover:text-[#e02020] transition-colors">{item.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                      </div>
                      {item.href === '/login' && <Lock size={11} className="text-gray-200 flex-shrink-0 mt-1" />}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Integration */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="bg-[#0a1628] p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-3">API-EDI Integration</p>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Connect Your Systems</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Simplify the daily sharing of data by creating efficient connections between your ERP, TMS, or WMS systems and OceanLink Logistics. Our API-EDI integration supports standard and custom data formats.
                </p>
                <Link href="/contact" className="btn-primary text-sm font-bold px-7 py-3.5 inline-block">
                  Contact Integration Team
                </Link>
              </div>
              <div className="space-y-3">
                {['Real-time shipment status updates', 'Automated booking confirmation', 'Electronic document exchange', 'Custom data format support', 'Dedicated technical support'].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-5 h-5 bg-[#e02020] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
