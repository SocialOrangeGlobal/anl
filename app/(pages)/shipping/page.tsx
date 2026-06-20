import Link from 'next/link';
import { ArrowUpRight, Leaf, Shield, Zap, LifeBuoy } from 'lucide-react';

const services = [
  {
    icon: ArrowUpRight,
    title: 'Lines & Services Schedules',
    description: 'Access our comprehensive network of shipping lines connecting Australia, New Zealand, Pacific Islands, Asia, Middle East, and North America.',
    href: '/schedule-search',
  },
  {
    icon: Leaf,
    title: 'Low-Carbon Shipping Solutions',
    description: 'Our ACT+ program offers biofuel blending, carbon offsetting, and sustainable shipping options to reduce the carbon footprint of your supply chain.',
    href: '#',
  },
  {
    icon: Zap,
    title: 'Supply Chain Agility',
    description: 'Dynamic routing, real-time visibility, and flexible booking options to keep your supply chain resilient in an unpredictable world.',
    href: '#',
  },
  {
    icon: Shield,
    title: 'Business Support',
    description: 'Dedicated account management, trade finance solutions, customs advisory, and regulatory compliance support for your business.',
    href: '#',
  },
  {
    icon: LifeBuoy,
    title: 'Cargo Care',
    description: 'Specialised equipment, monitoring, and handling procedures ensuring your cargo arrives at its destination in perfect condition.',
    href: '#',
  },
];

const routes = [
  { from: 'Australia', to: 'Asia', transit: '7–14 days', services: 'APS1, APS2, APS3' },
  { from: 'Australia', to: 'New Zealand', transit: '3–5 days', services: 'TAS1, TAS2' },
  { from: 'Australia', to: 'Pacific Islands', transit: '5–12 days', services: 'PIS1, PIS2' },
  { from: 'Asia', to: 'Oceania', transit: '10–18 days', services: 'AOX1, AOX2' },
  { from: 'Australia', to: 'North America', transit: '18–22 days', services: 'NAP1' },
  { from: 'Australia', to: 'Indian Subcontinent', transit: '14–20 days', services: 'ISC1' },
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#0a1628] py-20 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-4">Shipping</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Maritime Services</h1>
          <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
            OceanLink Logistics operates a comprehensive network of shipping services across the Asia-Pacific, Middle East, and North America trade lanes. Discover our full range of maritime services and solutions.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/schedule-search" className="btn-primary text-sm font-bold px-7 py-3.5">Search Schedules</Link>
            <Link href="/booking" className="text-white border border-white/30 hover:border-white px-7 py-3.5 text-sm font-medium transition-colors">Book Now</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-black text-[#0a1628] mb-2">Our Services</h2>
          <div className="w-10 h-0.5 bg-[#e02020] mb-10" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <Link key={svc.title} href={svc.href} className="group bg-white border border-gray-100 hover:border-[#e02020] hover:shadow-lg transition-all duration-300 p-6">
                <div className="w-11 h-11 bg-gray-50 group-hover:bg-[#e02020] flex items-center justify-center mb-4 transition-colors duration-300">
                  <svc.icon size={20} className="text-[#0a1628] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#0a1628] text-base mb-2 group-hover:text-[#e02020] transition-colors">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.description}</p>
                <div className="mt-4 flex items-center gap-1 text-[#e02020] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Lanes */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-2xl font-black text-[#0a1628] mb-2">Key Trade Lanes</h2>
          <div className="w-10 h-0.5 bg-[#e02020] mb-10" />
          <div className="overflow-x-auto">
            <table className="w-full data-table bg-white">
              <thead>
                <tr>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Estimated Transit</th>
                  <th>Services</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="font-semibold text-[#0a1628]">{r.from}</td>
                    <td className="text-gray-600">{r.to}</td>
                    <td className="text-gray-600">{r.transit}</td>
                    <td>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">{r.services}</span>
                    </td>
                    <td className="text-right">
                      <Link href="/schedule-search" className="text-[#e02020] text-xs font-semibold hover:underline">
                        View Schedule →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sustainability Banner */}
      <section className="bg-gradient-to-r from-[#0d6e6e] to-[#0a1628] py-16 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-green-300 text-xs font-bold uppercase tracking-[0.2em] mb-3">Sustainability</p>
              <h2 className="text-3xl font-black text-white mb-4">ACT+ Low-Carbon Shipping</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our ACT+ program helps businesses reduce their maritime carbon emissions through biofuel blending, carbon offsetting certificates, and optimised routing. Join hundreds of companies already shipping more sustainably with OceanLink.
              </p>
              <Link href="/contact" className="btn-primary text-sm font-bold px-7 py-3.5 inline-block">
                Learn About ACT+
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '30%', label: 'Carbon Reduction vs. 2020' },
                { value: '100%', label: 'Biofuel Option Available' },
                { value: '2050', label: 'Net-Zero Target Year' },
                { value: '500+', label: 'Customers Enrolled' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 p-5 text-center">
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
