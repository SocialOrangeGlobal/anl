'use client';

import { useState } from 'react';
import { MapPin, Package, ChevronDown, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const steps = ['Route Details', 'Cargo Details', 'Contact Details', 'Review & Submit'];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    etd: '',
    cargoType: 'Dry Cargo',
    containers: '1',
    containerType: '20GP',
    commodity: '',
    weight: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#0a1628] py-14 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-3">My Portal</p>
          <h1 className="text-3xl md:text-4xl font-black text-white">New Booking</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          {/* Stepper */}
          <div className="flex items-center mb-10 overflow-x-auto">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <button
                  onClick={() => i <= step && setStep(i)}
                  className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                    i === step ? 'text-[#e02020]' : i < step ? 'text-[#0a1628]' : 'text-gray-300'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                    i === step ? 'bg-[#e02020] text-white' : i < step ? 'bg-[#0a1628] text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {i < step ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span className="hidden sm:block whitespace-nowrap">{s}</span>
                </button>
                {i < steps.length - 1 && (
                  <div className={`mx-2 sm:mx-4 flex-shrink-0 w-8 sm:w-12 h-0.5 ${i < step ? 'bg-[#0a1628]' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Auth Notice */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 p-4 mb-6">
            <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">Login Required for Full Access</p>
              <p className="text-xs text-amber-700">
                You can browse this booking form as a guest, but you&apos;ll need to{' '}
                <Link href="/login" className="underline font-semibold">log in</Link> or{' '}
                <Link href="/register" className="underline font-semibold">register</Link> to submit your booking.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-100 p-6 md:p-8">
            {step === 0 && (
              <div className="space-y-6">
                <h2 className="text-lg font-black text-[#0a1628] mb-6">Route Details</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Port of Loading *</label>
                    <div className="relative">
                      <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input type="text" placeholder="Select port" value={formData.origin} onChange={(e) => update('origin', e.target.value)} className="w-full pl-9 pr-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Port of Discharge *</label>
                    <div className="relative">
                      <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input type="text" placeholder="Select port" value={formData.destination} onChange={(e) => update('destination', e.target.value)} className="w-full pl-9 pr-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Requested ETD *</label>
                    <input type="date" value={formData.etd} onChange={(e) => update('etd', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Service Type</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-gray-200 text-sm text-gray-600 focus:outline-none appearance-none bg-white pr-8">
                        <option>Port-to-Port</option>
                        <option>Door-to-Door</option>
                        <option>Port-to-Door</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-lg font-black text-[#0a1628] mb-6">Cargo Details</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Cargo Type *</label>
                    <div className="relative">
                      <select value={formData.cargoType} onChange={(e) => update('cargoType', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm text-gray-600 focus:outline-none appearance-none bg-white pr-8">
                        <option>Dry Cargo</option>
                        <option>Refrigerated Cargo</option>
                        <option>Dangerous Cargo</option>
                        <option>Oversized / Project Cargo</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Container Type *</label>
                    <div className="relative">
                      <select value={formData.containerType} onChange={(e) => update('containerType', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm text-gray-600 focus:outline-none appearance-none bg-white pr-8">
                        <option>20GP — 20ft General Purpose</option>
                        <option>40GP — 40ft General Purpose</option>
                        <option>40HC — 40ft High Cube</option>
                        <option>20RF — 20ft Reefer</option>
                        <option>40RF — 40ft Reefer</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Number of Containers *</label>
                    <div className="relative">
                      <Package size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input type="number" min="1" value={formData.containers} onChange={(e) => update('containers', e.target.value)} className="w-full pl-9 pr-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Gross Weight (kg) *</label>
                    <input type="number" placeholder="e.g. 18000" value={formData.weight} onChange={(e) => update('weight', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Commodity Description *</label>
                  <input type="text" placeholder="e.g. Electronic components — non-hazardous" value={formData.commodity} onChange={(e) => update('commodity', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-lg font-black text-[#0a1628] mb-6">Contact Details</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Company Name *</label>
                    <input type="text" placeholder="Your company name" value={formData.companyName} onChange={(e) => update('companyName', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Contact Name *</label>
                    <input type="text" placeholder="Your full name" value={formData.contactName} onChange={(e) => update('contactName', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Email Address *</label>
                    <input type="email" placeholder="your@company.com" value={formData.email} onChange={(e) => update('email', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Phone Number</label>
                    <input type="tel" placeholder="+61 2 0000 0000" value={formData.phone} onChange={(e) => update('phone', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Special Instructions</label>
                  <textarea rows={3} placeholder="Any special handling requirements or notes..." value={formData.notes} onChange={(e) => update('notes', e.target.value)} className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors resize-none" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-lg font-black text-[#0a1628] mb-6">Review & Submit</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Route', value: `${formData.origin || 'N/A'} → ${formData.destination || 'N/A'}` },
                    { label: 'ETD', value: formData.etd || 'N/A' },
                    { label: 'Container', value: `${formData.containers}x ${formData.containerType}` },
                    { label: 'Cargo Type', value: formData.cargoType },
                    { label: 'Commodity', value: formData.commodity || 'N/A' },
                    { label: 'Contact', value: formData.contactName || 'N/A' },
                    { label: 'Email', value: formData.email || 'N/A' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 py-3 border-b border-gray-50 last:border-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 w-28 flex-shrink-0">{item.label}</span>
                      <span className="text-sm text-[#0a1628] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-50 p-4 text-xs text-gray-500 leading-relaxed">
                  By submitting this booking request, you agree to OceanLink Logistics&apos; terms and conditions. This is a booking request and does not constitute a confirmed booking until approved by our team.
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="text-gray-400 text-sm font-semibold hover:text-[#0a1628] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>
              {step < steps.length - 1 ? (
                <button onClick={() => setStep(step + 1)} className="btn-primary text-sm font-bold px-8 py-3">
                  Next Step →
                </button>
              ) : (
                <Link href="/login" className="btn-primary text-sm font-bold px-8 py-3">
                  Log In to Submit
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
