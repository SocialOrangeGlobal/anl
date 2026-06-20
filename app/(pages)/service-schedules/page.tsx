import Link from 'next/link';

export const metadata = {
  title: 'ANL Service Schedules | ANL',
  description: 'View ANL Service Schedules, routes, and links.',
};

type ScheduleLink = {
  label: string;
  href: string;
};

type ScheduleData = {
  serviceName: string;
  route: string;
  links: ScheduleLink[];
};

type ScheduleGroup = {
  groupName: string;
  services: ScheduleData[];
};

const schedulesData: ScheduleGroup[] = [
  {
    groupName: "North Asia <> Australia",
    services: [
      { serviceName: "A3 Northern Express (A3N)", route: "Japan, Korea, China, Taiwan China <> Australia", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "A3 Central Express (A3C)", route: "Central China <> Australia", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "A3 Southern Express (A3S)", route: "Taiwan China, South China & Hong Kong <> Australia", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Extra Loader Service (XTR)", route: "China <> Australia", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Asia PNG Express (APR)", route: "North Asia, PNG to Townsville and Gladstone", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Asia PNG Express 2 (APR2)", route: "North Asia <> Brisbane, PNG, Townsville, Gladstone", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
    ]
  },
  {
    groupName: "South East Asia <> Australia",
    services: [
      { serviceName: "Australia Asia Express (AAX)", route: "South East Asia, Indian Subcontinent, Middle East Gulf - Australia Melbourne/Sydney/Adelaide/Fremantle", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Australia Asia Express (AAXE)", route: "South East Asia, Indian Subcontinent, Middle East Gulf - Australia Brisbane/Sydney/Brisbane", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Australia Asia Express (AAXW)", route: "South East Asia, Indian Subcontinent, Middle East Gulf - Australia Fremantle", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Kiwi International Express (KIX)", route: "South East Asia <> Brisbane", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "North Europe Med. Oceania (NEMO)", route: "South East Asia - Australia", links: [{ label: "Westbound", href: "#" }, { label: "Eastbound", href: "#" }] },
      { serviceName: "Asia PNG Express (APR)", route: "South East Asia, Indian Sub Continent to Townsville and Gladstone", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Extra Loader Service (XTR)", route: "Australia to South East Asia", links: [{ label: "Northbound", href: "#" }] },
    ]
  },
  {
    groupName: "PAX Loop 1 - Dili / Darwin Service",
    services: [
      { serviceName: "ANL Xpress (PAX)", route: "Singapore to Dili / Darwin", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "ANL Xpress (PAX)", route: "North Asia to Dili & Darwin", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "ANL Xpress (PAX)", route: "New Zealand to Dili / Darwin", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "ANL Xpress (PAX)", route: "South East Asia to Dili & Darwin", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "ANL Xpress (PAX)", route: "Europe / Dili / Darwin", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
    ]
  },
  {
    groupName: "PAX Loop 2 - Pilbara Service",
    services: [
      { serviceName: "ANL Xpress (PAX2)", route: "Singapore to Dampier / Port Hedland", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "ANL Xpress (PAX2)", route: "North Asia to Dampier / Port Hedland", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "ANL Xpress (PAX2)", route: "South East Asia to Dampier / Port Hedland", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "ANL Xpress (PAX2)", route: "Europe / Dampier / Port Hedland", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
    ]
  },
  {
    groupName: "New Zealand <> Australia",
    services: [
      { serviceName: "TranzTas (TTZ Dedicated Service)", route: "Australia <> New Zealand", links: [{ label: "Eastbound", href: "#" }, { label: "Westbound", href: "#" }] },
      { serviceName: "TTZ Loop 3 (PCX)", route: "Australia <> New Zealand", links: [{ label: "Eastbound", href: "#" }, { label: "Westbound", href: "#" }] },
      { serviceName: "ANZ Shuttle (ANZ)", route: "Australia + Noumea > New Zealand", links: [{ label: "Eastbound", href: "#" }, { label: "Westbound", href: "#" }] },
      { serviceName: "Kiwi International Express (AAXW/KIX)", route: "Fremantle <> New Zealand", links: [{ label: "Eastbound", href: "#" }] },
    ]
  },
  {
    groupName: "New Zealand <> Asia",
    services: [
      { serviceName: "Asia New Zealand Express (ANZEX)", route: "Korea, China, Hong Kong - New Zealand", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Kiwi International Express (KIX)", route: "South East Asia, Indian Subcontinent, Australia <> New Zealand", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
    ]
  },
  {
    groupName: "Papua New Guinea & Pacific Islands",
    services: [
      { serviceName: "Asia PNG Express (APR)", route: "South East Asia, Indian Sub Continent - PNG", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Asia PNG Express (APR)", route: "North Asia - PNG", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Asia PNG Express 2 (APR2)", route: "North Asia, Brisbane <> PNG", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "New Zealand to PNG Outports (KIX/APR)", route: "New Zealand - Rabaul, Madang (via Asia)", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "APR (NEA) <> WPAC", route: "North Asia SB (APR) <> Honiara, Santo, Port Vila (WPAC)", links: [{ label: "Southbound", href: "#" }] },
      { serviceName: "APR (SEA) <> WPAC", route: "South Asia SB (APR) <> Honiara, Santo, Port Vila (WPAC)", links: [{ label: "Southbound", href: "#" }] },
      { serviceName: "KIX <> WPAC", route: "South Asia SB (KIX) <> Noumea (WPAC)", links: [{ label: "Southbound", href: "#" }] },
      { serviceName: "KIX <> ANZPAC", route: "South Asia SB (KIX) <> Fiji, Samoa, American Samoa, Tonga (ANZPAC)", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "KIX <> Fiji", route: "South Asia SB (KIX) to Fiji (ANZPAC)", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "NZPF <> KIX", route: "Papeete NB (NZPF) <> South East Asia (KIX)", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "ANZEX <> WPAC", route: "North Asia SB (ANZEX) <> Noumea (WPAC)", links: [{ label: "Southbound", href: "#" }] },
      { serviceName: "ANZEX <> ANZPAC", route: "North Asia SB (ANZEX) <> Fiji, Samoa, American Samoa, Tonga (ANZPAC)", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "ANZEX <> Fiji", route: "North Asia SB (ANZEX) <> Fiji (ANZPAC)", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "NZPF <> ANZEX", route: "Papeete NB (NZPF) <> North East Asia (ANZEX)", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "Honiara <> A3N", route: "Honiara to Japan, Korea, China, Taiwan China (A3N)", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "Noumea <> A3N", route: "Noumea to Japan, Korea, China, Taiwan China (A3N)", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "Honiara <> A3C", route: "Honiara to Central China (A3C)", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "Noumea <> A3C", route: "Noumea to Central China (A3C)", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "Honiara <> A3S", route: "Honiara to Taiwan China, South China & Hong Kong (A3S)", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "Noumea <> A3S", route: "Noumea to Taiwan China, South China & Hong Kong (A3S)", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "Honiara, Santo, Port Vila <> North Asia (APR2)", route: "Honiara, Santo, Port Vila To North Asia", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Noumea <> North Asia (APR2)", route: "Noumea To North Asia", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "WPAC-AU", route: "Australia - PNG - Solomon Is. - Vanuatu", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "WPAC-NZ", route: "New Zealand - New Caledonia - Australia - PNG - Solomon Is. - Vanuatu", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "ANZPAC", route: "Australia - New Zealand - Fiji - Samoa - American Samoa - Tonga - New Zealand - Australia", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "NZPF-RT", route: "New Zealand - French Polynesia - New Zealand", links: [{ label: "Round Trip", href: "#" }] },
      { serviceName: "ANZPAC <> FJWF", route: "Australia - New Zealand - Wallis & Futuna", links: [{ label: "Northbound", href: "#" }] },
    ]
  },
  {
    groupName: "Australian Coastal",
    services: [
      { serviceName: "ANL Coastal (AAX-S)", route: "Melbourne/Sydney/Adelaide - Fremantle", links: [{ label: "Westbound", href: "#" }] },
      { serviceName: "ANL Coastal (PANAMA / AAXS NB)", route: "Brisbane - Fremantle (via Sydney)", links: [{ label: "Westbound", href: "#" }] },
      { serviceName: "ANL Coastal (MEL-BNE) - A3", route: "Melbourne - Sydney - Brisbane", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "TOLL ANL Bass Straits Shipping (TASS5)", route: "Tasmania", links: [{ label: "Tasmanian Service", href: "#" }] },
    ]
  },
  {
    groupName: "Australia <> NZ, PNG",
    services: [
      { serviceName: "Papua New Guinea", route: "New Zealand to Rabaul and Madang via Asia", links: [{ label: "Northbound", href: "#" }] },
      { serviceName: "TranzTas (TTZ Dedicated Service)", route: "Australia <> New Zealand", links: [{ label: "Eastbound", href: "#" }, { label: "Westbound", href: "#" }] },
      { serviceName: "TTZ Loop 3 (PCX)", route: "Australia <> New Zealand", links: [{ label: "Eastbound", href: "#" }, { label: "Westbound", href: "#" }] },
      { serviceName: "ANZ Shuttle (ANZ)", route: "Australia + Noumea > New Zealand", links: [{ label: "Eastbound", href: "#" }, { label: "Westbound", href: "#" }] },
    ]
  },
  {
    groupName: "Europe <> Australia/NZ",
    services: [
      { serviceName: "North Europe Med. Oceania (NEMO)", route: "Australia, New Zealand - South East Asia, Indian Subcontinent, Europe", links: [{ label: "Westbound", href: "#" }, { label: "Eastbound", href: "#" }] },
    ]
  },
  {
    groupName: "Nth America <> Australia / NZ / Pacific Islands",
    services: [
      { serviceName: "Australia/NZ <> US West Coast (PCX)", route: "USA West Coast - Canada - New Zealand - Australia - Pacific Islands", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "Panama Service (PANAMA)", route: "Australia - New Zealand - USA East Coast - Europe", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
      { serviceName: "KEA Service (KEA)", route: "Australia - New Zealand - USA East Coast", links: [{ label: "Northbound", href: "#" }, { label: "Southbound", href: "#" }] },
    ]
  }
];

export default function ServiceSchedulesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-[54px] md:pt-[64px] lg:pt-[108px]">
        <section className="bg-[#121c3b] w-full min-h-screen py-10 md:py-14 lg:py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto">

            {/* Title */}
            <h1 className="text-white text-center text-[18px] md:text-[24px] lg:text-[32px] font-bold tracking-[0.15em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase mb-8 md:mb-12 font-sans">
              ANL Service Schedules
            </h1>

            {/* Table Container */}
            <div className="bg-white rounded-sm shadow-xl p-3 md:p-6 lg:p-8">
              {/* Horizontal scroll on small screens */}
              <div className="w-full overflow-x-auto">
                <div className="w-full border border-gray-300 min-w-[640px]">
                  {/* Header Row */}
                  <div className="flex bg-[#0a1628] text-white text-[11px] md:text-[13px] lg:text-[14px] font-bold">
                    <div className="w-1/3 p-2 md:p-3 border-r border-gray-400">Service Name</div>
                    <div className="w-1/3 p-2 md:p-3 border-r border-gray-400 text-center">Schedule Route</div>
                    <div className="w-1/3 p-2 md:p-3 text-center">ANL Schedule Links</div>
                  </div>

                  {/* Groups */}
                  {schedulesData.map((group, groupIndex) => (
                    <div key={groupIndex} className="flex flex-col">
                      {/* Group Header */}
                      <div className="bg-[#f0f4fa] text-[#254674] text-center font-bold text-[12px] md:text-[14px] lg:text-[16px] py-2 md:py-3 border-t border-b border-gray-300">
                        {group.groupName}
                      </div>

                      {/* Group Rows */}
                      {group.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex text-[10px] md:text-[12px] lg:text-[13px] text-gray-800 border-b border-gray-300 last:border-b-0">
                          {/* Service Name */}
                          <div className="w-1/3 p-2 border-r border-gray-300 bg-white align-top">
                            {service.serviceName}
                          </div>

                          {/* Route */}
                          <div className="w-1/3 p-2 border-r border-gray-300 bg-white">
                            <span>{service.route}</span>
                          </div>

                          {/* Links */}
                          <div className="w-1/3 bg-white">
                            <div className={`flex h-full ${service.links.length === 1 ? 'justify-center items-center' : ''}`}>
                              {service.links.map((link, linkIndex) => (
                                <div
                                  key={linkIndex}
                                  className={`flex-1 p-2 flex items-center justify-center hover:bg-gray-50 ${linkIndex < service.links.length - 1 ? 'border-r border-gray-300' : ''}`}
                                >
                                  <Link href={link.href} className="text-[#e02020] hover:underline font-medium">
                                    {link.label}
                                  </Link>
                                </div>
                              ))}
                              {service.links.length === 1 && group.services.some(s => s.links.length > 1) && (
                                <div className="flex-1 p-2" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div> {/* end overflow-x-auto */}

              {/* Footer Note */}
              <div className="mt-8 text-center">
                <p className="text-[#254674] text-[13px] font-bold">
                  Please click to view all <Link href="#" className="underline hover:text-[#e02020] transition-colors">service profiles, maps and flyers</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
