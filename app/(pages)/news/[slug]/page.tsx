import Link from 'next/link';
import { ArrowLeft, Tag, Calendar, ArrowUpRight } from 'lucide-react';
import { newsItems } from '@/app/data/news';
import { formatDateLong } from '@/app/lib/utils';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = newsItems.find((n) => n.slug === slug);
  if (!article) notFound();

  const related = newsItems.filter((n) => n.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Article Hero */}
      <section className="bg-[#0a1628] py-20 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <Link href="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to News
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-[#e02020] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider">
              <Tag size={9} /> {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs">
              <Calendar size={12} /> {formatDateLong(article.date)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white max-w-3xl leading-tight">{article.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6 border-l-4 border-[#e02020] pl-5">
                  {article.excerpt}
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-6">{article.content}</p>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  For further information, please contact your OceanLink Logistics account manager or reach out to our Customer Service team. We are committed to keeping our customers informed of any changes that may affect their supply chains.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  OceanLink Logistics continues to monitor market conditions and will provide updates as new information becomes available. Please check our website regularly for the latest news and service advisories.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <Link href="/contact" className="btn-primary text-sm font-bold px-7 py-3.5 inline-block mr-4">
                  Contact Us
                </Link>
                <Link href="/news" className="btn-outline-red text-sm font-bold px-7 py-3.5 inline-block">
                  All News
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Related News</h3>
              <div className="space-y-0">
                {related.map((item) => (
                  <Link key={item.id} href={`/news/${item.slug}`} className="group block py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-3 px-3 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-gray-400 mb-1">{formatDateLong(item.date)}</p>
                        <h4 className="text-sm font-semibold text-[#0a1628] leading-snug group-hover:text-[#e02020] transition-colors line-clamp-2">{item.title}</h4>
                      </div>
                      <ArrowUpRight size={13} className="text-gray-200 group-hover:text-[#e02020] flex-shrink-0 mt-1 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 bg-gray-50 p-5">
                <h3 className="font-bold text-[#0a1628] text-sm mb-2">Subscribe to Updates</h3>
                <p className="text-xs text-gray-500 mb-4">Receive the latest OceanLink news directly to your inbox.</p>
                <input type="email" placeholder="Your email address" className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0a1628] mb-3" />
                <button className="w-full btn-primary text-xs py-2.5">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}
