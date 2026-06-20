import Link from 'next/link';

export const metadata = {
  title: 'Schedules | ANL',
  description: 'Access all ANL line service schedules to plan your upcoming booking.',
};

export default function ScheduleSearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-[54px] md:pt-[64px] lg:pt-[108px]"> {/* Account for fixed header */}
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] bg-[#0a1628] flex items-end">
          <div className="absolute inset-0">
            <img
              src="/images/first-header/schedules.png"
              alt="Schedules Hero"
              className="w-full h-full object-cover opacity-80"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto pb-6 md:pb-12">
            <h1 className="text-white text-[32px] md:text-[52px] lg:text-[62px] font-medium font-oswald uppercase leading-none tracking-tight">
              Schedules
            </h1>
          </div>
        </section>

        {/* Discover Banner Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-white">
          <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
            <div className="relative shadow-sm overflow-hidden min-h-[280px] md:min-h-[300px] flex items-center bg-[#0a1628]">
              {/* Full Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/images/first-header/schedules-discover.png"
                  alt="ANL Service Schedules"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Dark overlay so text is readable on all screens */}
              <div className="absolute inset-0 bg-[#0a1628]/60 md:bg-[#0a1628]/30" />

              {/* Content Overlay — full width on mobile, right-half on md+ */}
              <div className="relative z-10 w-full md:w-1/2 md:ml-auto p-6 md:p-12 lg:p-16 flex flex-col justify-center items-start">
                {/* Pill Badge */}
                <div className="bg-white rounded-full px-4 py-1 mb-4 md:mb-6">
                  <span className="text-[#0a1628] text-[11px] font-bold tracking-[0.1em] uppercase">
                    SCHEDULES
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-white text-[24px] md:text-[34px] lg:text-[38px] font-medium font-oswald mb-4 md:mb-6 leading-[1.2]">
                  ANL Service Schedules
                </h2>

                {/* Description */}
                <p className="text-white/90 text-[14px] md:text-[16px] font-light leading-[1.6] mb-6 md:mb-8 max-w-xl">
                  Click here to access all ANL line service schedules to plan your upcoming booking.
                </p>

                {/* Button */}
                <Link
                  href="/service-schedules"
                  className="inline-block bg-[#e02020] text-white text-[13px] md:text-[15px] font-bold py-3 px-6 md:py-4 md:px-10 hover:bg-[#c81010] transition-colors uppercase tracking-wider"
                >
                  Discover
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
