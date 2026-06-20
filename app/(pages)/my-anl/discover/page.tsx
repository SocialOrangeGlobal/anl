import React from 'react';
import Link from 'next/link';

export default function DiscoverMyANLPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-[56px] md:pt-[100px] lg:pt-[108px]">

      {/* ── 1. Hero Section ── */}
      <section
        className="relative w-full overflow-hidden flex items-center min-h-[400px] lg:min-h-[500px]"
        style={{
          backgroundImage: "url('/images/home-bottoms/discover_hero_extended.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#b4bbcc" // Fallback color that blends with the left edge of the image
        }}
      >
        {/* Text Overlay */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="w-full md:max-w-[60%] lg:max-w-2xl py-12 md:py-20 rounded-xl md:rounded-none">
            <div className="flex items-center gap-2 mb-2 lg:mb-4">
              <span className="text-[#e02020] font-bold text-[18px] sm:text-[24px] lg:text-[28px]">MY</span>
              <span className="text-[#0a2071] font-bold text-[18px] sm:text-[24px] lg:text-[28px]">ANL</span>
            </div>
            <h1 className="text-white text-[32px] sm:text-[48px] lg:text-[56px] font-bold mb-4 lg:mb-6 leading-[1.1] tracking-wide drop-shadow-md" style={{ fontFamily: "'Antonio', sans-serif" }}>
              At every step of your<br className="hidden sm:block" />journey
            </h1>
            <p className="text-white text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-relaxed drop-shadow">
              With My ANL, you can organize, follow and manage your shipments from anywhere in the world. Improve your productivity with a wide range of products that will make your shipping experience a whole lot easier!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full">
        {/* ── 2. Organize your shipment ── */}
        <section className="py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-[28px] lg:text-[36px] font-bold" style={{ fontFamily: "'Antonio', sans-serif" }}>
              <span className="text-[#e02020]">— Organize</span> <span className="text-[#0a2071]">your shipment</span>
            </h2>
          </div>
          <p className="text-[#0a2071] text-[14px] lg:text-[16px] font-medium mb-12 max-w-3xl leading-relaxed">
            Plan your transport with our user-friendly online tools: check out offer, check routes and prices, calculate VGM and more.
          </p>

          {/* Banner: Obtain Your Prices */}
          <div className="relative rounded-xl overflow-hidden flex items-center mb-16 min-h-[300px] md:min-h-[350px]">
            <img src="/images/my-anl/discover/Page-Hub_Get-your-price.png" alt="Obtain Your Prices Background" className="absolute inset-0 w-full h-full object-cover object-left" />
            <div className="w-full md:w-1/2 ml-auto p-6 sm:p-8 lg:p-12 relative z-10 bg-white/90 md:bg-transparent m-4 md:m-0 rounded-lg md:rounded-none">
              <span className="text-[#0a2071] text-[10px] font-bold uppercase tracking-wider mb-2 block">PRICE</span>
              <h3 className="text-[#0a2071] text-[26px] lg:text-[30px] font-bold mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>
                Obtain Your Prices
              </h3>
              <p className="text-[#254674] text-[14px] mb-8 leading-relaxed max-w-lg">
                With SpotOn, you can instantly generate a quote online with the best spot rate of the day guaranteed for 24 to 72 hours. If you need to consult all your existing quotations, you can go to My Quotations.
              </p>
              <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[14px] font-medium px-10 py-2.5 transition-colors">
                Discover
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
            <div className="flex flex-col items-center">
              <span className="bg-[#eef1f6] text-[#0a2071] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">FIND YOUR ROUTE</span>
              <h4 className="text-[#0a2071] text-[22px] font-bold mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Routing Finder</h4>
              <img src="/images/my-anl/discover/Card-Thumbnail_Routing-Finder.png" alt="Routing Finder" className="w-full max-w-[280px] mb-6 object-contain" style={{ maxHeight: '140px' }} />
              <p className="text-[#254674] text-[14px] leading-relaxed max-w-xs">
                Start preparing your shipment by checking port-to-port schedules either based on a departure or on an arrival date.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-[#eef1f6] text-[#0a2071] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">ORGANISE YOUR SHIPMENT</span>
              <h4 className="text-[#0a2071] text-[22px] font-bold mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Booking</h4>
              <img src="/images/my-anl/discover/Card-Thumbnail_Booking.png" alt="Booking" className="w-full max-w-[280px] mb-6 object-contain" style={{ maxHeight: '140px' }} />
              <p className="text-[#254674] text-[14px] leading-relaxed max-w-xs">
                Place your booking instantly! Our newly redesigned page allows you to navigate smoothly and to reuse previous bookings to save time.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-[#eef1f6] text-[#0a2071] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">ROUTES</span>
              <h4 className="text-[#0a2071] text-[22px] font-bold mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Eco Calculator</h4>
              <img src="/images/my-anl/discover/Card-Thumbnail_Shipment-Tracking.png" alt="Eco Calculator" className="w-full max-w-[280px] mb-6 object-contain" style={{ maxHeight: '140px' }} />
              <p className="text-[#254674] text-[14px] leading-relaxed max-w-xs">
                Estimate the emissions for each one of your shipments made with ANL.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── 3. Discover the ANL Mobile App ── */}
      <section className="relative w-full overflow-hidden flex items-center justify-center min-h-[450px]">
        {/* Background Image determining height */}
        <img
          src="/images/my-anl/discover/Page-Hub_Mobile-Application.png"
          alt="Discover the ANL Mobile App Hero"
          className="w-full h-auto"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
          <div className="max-w-2xl">
            <h3 className="text-[#0a2071] text-[32px] lg:text-[42px] font-bold mb-6" style={{ fontFamily: "'Antonio', sans-serif" }}>
              Discover the ANL Mobile App
            </h3>
            <p className="text-[#0a2071] text-[15px] mb-8 leading-relaxed font-medium px-4">
              Track and trace your containers, plan your transport with fast and easy schedule information, and keep up-to-date with the latest news from your mobile device in a clear and user-friendly new interface.
            </p>
            <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[14px] font-medium px-10 py-2.5 transition-colors shadow-sm">
              Discover
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full">
        {/* ── 4. Manage your shipment ── */}
        <section className="py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-[28px] lg:text-[36px] font-bold" style={{ fontFamily: "'Antonio', sans-serif" }}>
              <span className="text-[#e02020]">— Manage</span> <span className="text-[#0a2071]">your shipment</span>
            </h2>
          </div>
          <p className="text-[#0a2071] text-[16px] lg:text-[18px] font-medium mb-12">
            View all the pieces of information related to your shipment on one platform!
          </p>

          {/* Banner: Manage Your Invoices */}
          <div className="relative rounded-xl overflow-hidden flex items-center mb-16 min-h-[300px] md:min-h-[350px]">
            <img src="/images/my-anl/discover/Page-Hub_Manage-your-invoice.png" alt="Manage Your Invoices Background" className="absolute inset-0 w-full h-full object-cover object-left" />
            <div className="w-full md:w-1/2 ml-auto p-6 sm:p-8 lg:p-12 relative z-10 bg-white/90 md:bg-transparent m-4 md:m-0 rounded-lg md:rounded-none">
              <span className="text-[#0a2071] text-[10px] font-bold uppercase tracking-wider mb-2 block">INVOICE</span>
              <h3 className="text-[#0a2071] text-[26px] lg:text-[30px] font-bold mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>
                Manage Your Invoices
              </h3>
              <p className="text-[#254674] text-[14px] mb-8 leading-relaxed max-w-lg">
                Check your invoices' status and pay them online! You can choose between internet banking or bank transfer.
              </p>
              <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[14px] font-medium px-10 py-2.5 transition-colors">
                Discover
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
            <div className="flex flex-col items-center">
              <span className="bg-[#eef1f6] text-[#0a2071] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">MONITOR YOUR SHIPMENT</span>
              <h4 className="text-[#0a2071] text-[22px] font-bold mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Shipment Tracking</h4>
              <img src="/images/my-anl/discover/Card-Thumbnail_Shipment-Tracking.png" alt="Shipment Tracking" className="w-full max-w-[280px] mb-6 object-contain" style={{ maxHeight: '140px' }} />
              <p className="text-[#254674] text-[14px] leading-relaxed max-w-xs">
                Follow your shipment in real-time through the vessel's position at sea: all you need to do is to enter the shipment reference number to track the shipment live on a map! View ETA and the remaining days to POD directly.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-[#eef1f6] text-[#0a2071] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">MONITOR YOUR SHIPMENT</span>
              <h4 className="text-[#0a2071] text-[22px] font-bold mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Shipment Dashboard</h4>
              <img src="/images/my-anl/discover/Card-Thumbnail_Shipment-Dashboard.png" alt="Shipment Dashboard" className="w-full max-w-[280px] mb-6 object-contain" style={{ maxHeight: '140px' }} />
              <p className="text-[#0a2071] text-[14px] leading-relaxed max-w-xs underline font-medium cursor-pointer">
                Get a centralized view of your shipments, providing direct access to all relevant information and ability to take relevant actions based on your shipment lifecycle.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-[#eef1f6] text-[#0a2071] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">DOCUMENTS</span>
              <h4 className="text-[#0a2071] text-[22px] font-bold mb-4" style={{ fontFamily: "'Antonio', sans-serif" }}>Invoice Dashboard</h4>
              <img src="/images/my-anl/discover/Card-Thumbnail_Document-Dashboard.png" alt="Invoice Dashboard" className="w-full max-w-[280px] mb-6 object-contain" style={{ maxHeight: '140px' }} />
              <p className="text-[#254674] text-[14px] leading-relaxed max-w-xs">
                Access your invoices online, check the payment status and proceed to an extract in Excel or PDF format.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── 5. Discover our EDI/API offer ── */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center min-h-[450px] py-16">
        <img src="/images/my-anl/discover/C-API_EDI Banner-Discover-80.png" alt="EDI/API Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h3 className="text-[#0a2071] text-[32px] lg:text-[42px] font-bold mb-6" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Discover our EDI/API offer
          </h3>
          <p className="text-[#0a2071] text-[15px] mb-8 leading-relaxed font-medium px-4">
            The CMA CGM Group has set the goal to use technology to transform and ease your customer journey by making it 100% digital, thanks to a wide offer of products, within a multi-channel context, that cover all aspects of the transport cycle.
          </p>
          <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[14px] font-medium px-10 py-2.5 transition-colors shadow-sm">
            Discover
          </button>
        </div>
      </section>

      {/* ── 6. Cyber Security ── */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center min-h-[300px] py-16 bg-[#0a1628]">
        <img src="/images/my-anl/discover/Bannière - CYBERSECURITY.png" alt="Cyber Security Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center px-4">
          <span className="bg-white text-[#0a2071] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">CYBER SECURITY</span>
          <h3 className="text-white text-[32px] lg:text-[42px] font-bold mb-6 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
            Cyber Security
          </h3>
          <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[14px] font-medium px-10 py-2.5 transition-colors shadow-sm">
            Discover
          </button>
        </div>
      </section>

      {/* ── 7. Begin with your online shipping journey ── */}
      <section className="relative w-full overflow-hidden flex items-center min-h-[450px] bg-[#f8fafd]">
        <img src="/images/my-anl/discover/CTA-contact-my-cmacgm2.png" alt="Contact Us Background" className="absolute inset-0 w-full h-full object-cover md:object-right" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full relative z-10">
          <div className="w-full md:max-w-[60%] lg:max-w-xl py-12 md:py-20 bg-white/80 md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none mt-12 md:mt-0">
            <div className="flex items-center gap-2 mb-2 lg:mb-4">
              <span className="text-[#e02020] font-bold text-[18px] sm:text-[24px] lg:text-[28px]">MY</span>
              <span className="text-[#0a2071] font-bold text-[18px] sm:text-[24px] lg:text-[28px]">ANL</span>
            </div>
            <h2 className="text-[#0a2071] text-[32px] sm:text-[40px] lg:text-[50px] font-bold mb-6 leading-[1.05] tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
              Begin with your online<br className="hidden sm:block" />shipping journey with our<br className="hidden sm:block" />unique features!
            </h2>
            <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[14px] font-medium px-10 py-2.5 transition-colors shadow-sm">
              Contact us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
