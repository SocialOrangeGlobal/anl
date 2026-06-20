import Link from 'next/link';
import { ArrowUpRight, Globe, Truck, Warehouse, FileText } from 'lucide-react';

const regions = [
  {
    name: 'Asia',
    countries: ['China', 'Japan', 'South Korea', 'Vietnam', 'Thailand', 'Indonesia', 'Malaysia', 'Philippines'],
    description: 'Comprehensive inland transport, customs clearance, and last-mile delivery across key Asian markets.',
    gradient: 'from-red-800 to-red-600',
  },
  {
    name: 'Indian Subcontinent',
    countries: ['India', 'Sri Lanka', 'Bangladesh', 'Pakistan'],
    description: 'Integrated door-to-door solutions connecting the Indian Subcontinent to global markets.',
    gradient: 'from-orange-800 to-orange-600',
  },
  {
    name: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'],
    description: 'End-to-end logistics covering free zone operations, customs, and distribution across the GCC.',
    gradient: 'from-amber-800 to-amber-600',
  },
  {
    name: 'North America',
    countries: ['United States', 'Canada', 'Mexico'],
    description: 'Cross-border logistics, rail connections, and distribution network across North America.',
    gradient: 'from-blue-900 to-blue-700',
  },
  {
    name: 'Oceania',
    countries: ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea', 'Pacific Islands'],
    description: 'Local expertise and extensive port coverage across Australia, New Zealand, and Pacific Island nations.',
    gradient: 'from-teal-800 to-teal-600',
  },
];

const logisticsSolutions = [
  { icon: Truck, title: 'Integrated Logistics', description: 'Seamless door-to-door solutions combining sea freight with inland transport for complete supply chain coverage.' },
  { icon: Warehouse, title: 'Warehousing & Distribution', description: 'Strategic warehouse locations near major ports with inventory management and value-added services.' },
  { icon: FileText, title: 'Customs Brokerage', description: 'Expert customs clearance across all trade lanes with local regulatory knowledge and compliance expertise.' },
  { icon: Globe, title: 'Trade Compliance', description: 'Comprehensive trade compliance advisory to navigate complex regulations and documentation requirements.' },
];

export default function EndToEndSolutionsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#0a1628] py-20 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-4">End-to-End Solutions</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Complete Supply Chain Coverage</h1>
          <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
            From origin to destination, OceanLink delivers truly integrated supply chain solutions. Our global network of inland partners and logistics specialists ensures your cargo moves seamlessly beyond the port gate.
          </p>
        </div>
      </section>

      {/* Inland Solutions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-black text-[#0a1628] mb-2">Inland Solutions by Region</h2>
          <div className="w-10 h-0.5 bg-[#e02020] mb-10" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((region) => (
              <div key={region.name} className="group border border-gray-100 hover:border-[#e02020] hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                <div className={`h-32 bg-gradient-to-br ${region.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <Globe size={80} className="text-white" />
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-white font-black text-xl">{region.name}</h3>
                  </div>
                  <div className="absolute bottom-3 right-3 w-7 h-7 bg-white/20 group-hover:bg-[#e02020] flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight size={13} className="text-white" />
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{region.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {region.countries.slice(0, 4).map((c) => (
                      <span key={c} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5">{c}</span>
                    ))}
                    {region.countries.length > 4 && (
                      <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5">+{region.countries.length - 4} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-2xl font-black text-[#0a1628] mb-2">Logistics Solutions</h2>
          <div className="w-10 h-0.5 bg-[#e02020] mb-10" />
          <div className="grid md:grid-cols-2 gap-5">
            {logisticsSolutions.map((sol) => (
              <div key={sol.title} className="group bg-white border border-gray-100 hover:border-[#e02020] hover:shadow-md transition-all duration-300 p-6 flex gap-5">
                <div className="w-12 h-12 bg-gray-50 group-hover:bg-[#e02020] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <sol.icon size={22} className="text-[#0a1628] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1628] text-base mb-2 group-hover:text-[#e02020] transition-colors">{sol.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{sol.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-16 px-4 md:px-8 lg:px-12">
        <div className="container-max text-center">
          <h2 className="text-3xl font-black text-white mb-4">Build Your End-to-End Solution</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Talk to our logistics experts to design a tailored supply chain solution for your business.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-3.5 text-sm font-bold">Get a Quote</Link>
            <Link href="/local-offices" className="text-white border border-white/30 hover:border-white px-8 py-3.5 text-sm font-medium transition-colors">Find Local Office</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
