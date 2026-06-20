import Link from 'next/link';
import { Ship, Home, Search, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-lg">
        {/* 404 Graphic */}
        <div className="relative mb-10">
          <div className="text-[120px] md:text-[160px] font-black text-gray-100 leading-none select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#0a1628] flex items-center justify-center shadow-xl">
              <Ship size={36} className="text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-[#0a1628] mb-4">Page Not Found</h1>
        <p className="text-gray-500 text-base leading-relaxed mb-8">
          The page you&apos;re looking for seems to have gone off course. Let us help you navigate back.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Home', href: '/', icon: Home },
            { label: 'Track Shipment', href: '/shipment-tracking', icon: Search },
            { label: 'Schedules', href: '/schedule-search', icon: Ship },
            { label: 'Contact', href: '/contact', icon: Phone },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-100 hover:border-[#e02020] hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-9 h-9 bg-gray-50 group-hover:bg-[#e02020] flex items-center justify-center transition-colors duration-300">
                <item.icon size={16} className="text-[#0a1628] group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs font-semibold text-gray-600 group-hover:text-[#e02020] transition-colors">{item.label}</span>
            </Link>
          ))}
        </div>

        <Link href="/" className="btn-primary text-sm font-bold px-8 py-3.5 inline-block">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
