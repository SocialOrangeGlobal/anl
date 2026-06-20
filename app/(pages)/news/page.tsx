import Link from 'next/link';
import { ArrowUpRight, Tag } from 'lucide-react';
import { newsItems } from '@/app/data/news';
import { formatDateLong } from '@/app/lib/utils';

const categories = ['All', 'Service Update', 'Rate Notice', 'Service Launch', 'Sustainability', 'System Notice'];

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#0a1628] py-20 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-4">Latest Updates</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">News &amp; Notices</h1>
          <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
            Stay up to date with the latest service updates, rate notices, and news from OceanLink Logistics.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 text-xs font-semibold border transition-colors ${
                  cat === 'All'
                    ? 'bg-[#e02020] text-white border-[#e02020]'
                    : 'border-gray-200 text-gray-600 hover:border-[#e02020] hover:text-[#e02020]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Link key={item.id} href={`/news/${item.slug}`} className="group block border border-gray-100 hover:border-[#e02020] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-[#0a1628] to-[#1a3a6b] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 bg-[#e02020] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                      <Tag size={9} />
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[11px] text-gray-400 mb-2">{formatDateLong(item.date)}</p>
                  <h3 className="font-bold text-[#0a1628] text-sm leading-snug mb-3 group-hover:text-[#e02020] transition-colors line-clamp-3">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{item.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#e02020] text-xs font-bold">
                    Read more <ArrowUpRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
