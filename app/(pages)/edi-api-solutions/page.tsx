import React from 'react';
import Link from 'next/link';

export default function EdiApiSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-[56px] md:pt-[100px] lg:pt-[108px]">

      {/* ── 1. Hero Banner ── */}
      <section
        className="relative w-full flex items-end min-h-[300px] md:min-h-[400px] pb-12"
        style={{
          backgroundImage: "url('/images/my-anl/discover/C-API_EDI Banner-Produit-80.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center md:text-left">
          <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold tracking-wide drop-shadow-md" style={{ fontFamily: "'Antonio', sans-serif" }}>
            EDI/API Solutions
          </h1>
        </div>
      </section>

      {/* ── 2. Main Content & Sidebar ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full py-12 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-24">

        {/* Main Content (Left) */}
        <div className="w-full lg:w-3/4 flex flex-col">

          <p className="text-[#0a2071] text-[20px] lg:text-[24px] font-bold leading-relaxed mb-16 max-w-4xl">
            Our EDI & API solutions simplify the daily sharing of data by creating efficient connections between your system and CMA CGM Group's.
          </p>

          {/* API Section */}
          <div className="mb-20">
            <h2 className="text-[#0a2071] text-[36px] lg:text-[42px] font-bold mb-8 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
              API: Application Program Interface
            </h2>

            <h3 className="text-[#0a2071] text-[28px] lg:text-[32px] mb-6" style={{ fontFamily: "'Antonio', sans-serif" }}>
              What is it?
            </h3>
            <p className="text-[#0a2071] text-[14px] leading-relaxed mb-4">
              APIs work as a plug and play service allowing information systems, yours and CMA CGM Group's, to communicate easily. Systems talk to each other and data is exchanged in real-time. You can easily specify the data you need and adjust the scope on your own.
            </p>
            <p className="text-[#0a2071] text-[14px] leading-relaxed mb-4">
              At the heart of the digital age, it increases the efficiency of the exchanges but also opens new pathways for innovation. Combine our API building blocks with your own services to create new products through innovative web and mobile apps.
            </p>
            <p className="text-[#0a2071] text-[14px] leading-relaxed mb-12">
              We deliver REST API widely used by web developers in many industries.
            </p>

            <h3 className="text-[#0a2071] text-[28px] lg:text-[32px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>
              API features
            </h3>

            {/* Overlapping Feature Boxes */}
            <div className="relative flex flex-col md:flex-row items-center mb-16 max-w-4xl pt-4 pb-4">
              {/* Left Dark Blue Box (Overlapping) */}
              <div className="relative z-10 w-full md:w-[45%] bg-[#0a2071] text-white p-8 sm:p-10 lg:p-14 shadow-2xl rounded-sm">
                <div className="flex flex-col gap-6 lg:gap-8">
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Real-time</h4>
                    <p className="text-[#8b9bc0] text-[13px] italic">Most up to date data on a 24/7 basis</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Flexible</h4>
                    <p className="text-[#8b9bc0] text-[13px] italic">Retrieve the data you need at anytime.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Fast</h4>
                    <p className="text-[#8b9bc0] text-[13px] italic">Quick and lower cost</p>
                  </div>
                </div>
              </div>
              {/* Right Light Gray Box */}
              <div className="relative z-0 w-full md:w-[65%] -mt-4 md:mt-0 md:-ml-12 bg-[#f0f4fa] text-[#0a2071] p-8 sm:p-10 lg:p-14 pt-12 md:pt-14 md:pl-20 rounded-sm">
                <div className="flex flex-col gap-6 lg:gap-8">
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Self-implementation</h4>
                    <p className="text-[#254674] text-[13px] italic">Use our portal to set up on your own</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Fixed format</h4>
                    <p className="text-[#254674] text-[13px] italic">You must adapt to our format (aligned<br className="hidden sm:block" />with DCSA standards)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>API skills required</h4>
                    <p className="text-[#254674] text-[13px] italic">Developers particularly drive such projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-[#0a2071] text-[26px] font-bold" style={{ fontFamily: "'Antonio', sans-serif" }}>Want to know more about our API solutions?</h4>
            </div>

            <p className="text-[#0a2071] text-[14px] leading-relaxed mb-6">
              You will find all information relative to our product catalog or commercial offers. Subscribe, access your API configuration and monitor your API live consumption.
            </p>
            <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[13px] font-bold px-6 py-2.5 transition-colors">
              Discover our API web portal
            </button>
          </div>


          {/* EDI Section */}
          <div className="mb-20 mt-12">
            <h2 className="text-[#0a2071] text-[36px] lg:text-[42px] font-bold mb-8 tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
              EDI: Electronic Data Interchange
            </h2>

            <h3 className="text-[#0a2071] text-[28px] lg:text-[32px] mb-6" style={{ fontFamily: "'Antonio', sans-serif" }}>
              What is it?
            </h3>
            <p className="text-[#0a2071] text-[14px] leading-relaxed mb-4">
              EDI allows you to exchange documents with CMA CGM Group via electronic batches and relies on specific standards.
            </p>
            <p className="text-[#0a2071] text-[14px] leading-relaxed mb-4">
              The setup doesn't require any change in your process. It will simply switch from paper documents to electronic ones by separating each stream if needed. The solution streamlines the sending and receipt of your data such as Booking Requests and confirmations, Original BL, Container tracking, Schedules...
            </p>
            <p className="text-[#0a2071] text-[14px] leading-relaxed mb-12">
              With EDI, you will increase efficiency for all transactional processes, thus get compelling advantages!
            </p>

            <h3 className="text-[#0a2071] text-[28px] lg:text-[32px] mb-8" style={{ fontFamily: "'Antonio', sans-serif" }}>
              EDI features
            </h3>

            {/* Overlapping Feature Boxes */}
            <div className="relative flex flex-col md:flex-row items-center mb-16 max-w-4xl pt-4 pb-4">
              {/* Left Dark Blue Box (Overlapping) */}
              <div className="relative z-10 w-full md:w-[45%] bg-[#0a2071] text-white p-8 sm:p-10 lg:p-14 shadow-2xl rounded-sm">
                <div className="flex flex-col gap-6 lg:gap-8">
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Well-known</h4>
                    <p className="text-[#8b9bc0] text-[13px] italic">Frequent use in the industry</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Batches</h4>
                    <p className="text-[#8b9bc0] text-[13px] italic">Send large volumes of documents at<br className="hidden sm:block" />once</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Standard</h4>
                    <p className="text-[#8b9bc0] text-[13px] italic">EDI format defined with norms</p>
                  </div>
                </div>
              </div>
              {/* Right Light Gray Box */}
              <div className="relative z-0 w-full md:w-[65%] -mt-4 md:mt-0 md:-ml-12 bg-[#f0f4fa] text-[#0a2071] p-8 sm:p-10 lg:p-14 pt-12 md:pt-14 md:pl-20 rounded-sm">
                <div className="flex flex-col gap-6 lg:gap-8">
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Asynchronous</h4>
                    <p className="text-[#254674] text-[13px] italic">Timer-based processing data</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Costly</h4>
                    <p className="text-[#254674] text-[13px] italic">Need dedicated IT resources to maintain</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[20px] lg:text-[22px] mb-1" style={{ fontFamily: "'Antonio', sans-serif" }}>Long implementation</h4>
                    <p className="text-[#254674] text-[13px] italic">Significant workload to complete</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-[#0a2071] text-[26px] font-bold" style={{ fontFamily: "'Antonio', sans-serif" }}>Want to know more about our EDI solutions?</h4>
            </div>
            <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[13px] font-bold px-6 py-2.5 transition-colors mt-2">
              Discover our EDI catalog
            </button>
          </div>

          {/* CTA Box */}
          <div className="bg-[#f0f4fa] p-8 sm:p-10 lg:p-16 rounded-sm max-w-4xl mt-12">
            <div className="mb-12 lg:mb-16">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                <div className="w-12 h-1.5 bg-[#e02020] mt-2 sm:mt-4 flex-shrink-0"></div>
                <h2 className="text-[#0a2071] text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  For more information, please contact<br className="hidden sm:block" />your local representative
                </h2>
              </div>
              <div className="sm:ml-16">
                <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[13px] font-bold px-8 py-2.5 transition-colors">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-12 h-1.5 bg-[#e02020] flex-shrink-0"></div>
                <h2 className="text-[#0a2071] text-[26px] sm:text-[32px] lg:text-[40px] font-bold" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  Start your EDI connection request now!
                </h2>
              </div>
              <div className="sm:ml-16">
                <button className="bg-[#e02020] hover:bg-[#c81010] text-white text-[13px] font-bold px-8 py-2.5 transition-colors">
                  Get started
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar (Right) */}
        <div className="w-full lg:w-1/4">
          <div className="top-[140px]">
            <div className="mb-8">
              <div className="w-8 h-0.5 bg-[#e02020] mb-3"></div>
              <h3 className="text-[#0a2071] font-bold text-[24px] tracking-wide" style={{ fontFamily: "'Antonio', sans-serif" }}>
                EDI/API Solutions
              </h3>
            </div>

            <ul className="flex flex-col gap-6">
              <li>
                <Link href="#" className="text-[#0a2071] text-[14px] font-medium underline hover:text-[#e02020] transition-colors underline-offset-4">
                  API Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#0a2071] text-[14px] font-medium underline hover:text-[#e02020] transition-colors underline-offset-4">
                  EDI Catalog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#0a2071] text-[14px] font-medium underline hover:text-[#e02020] transition-colors underline-offset-4">
                  EDI Starting Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
