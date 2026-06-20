'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '', type: 'General Enquiry' });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-[#0a1628] py-20 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Contact Us</h1>
          <p className="text-gray-300 text-base max-w-xl leading-relaxed">
            Have a question about our services? Need a quote? Want to speak with a specialist? Our team is ready to help.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-black text-[#0a1628] mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Phone</p>
                    <a href="tel:+61290001234" className="text-sm font-semibold text-[#0a1628] hover:text-[#e02020] transition-colors block">+61 2 9000 1234</a>
                    <p className="text-xs text-gray-400">Mon–Fri 8:30am–5:30pm AEST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Email</p>
                    <a href="mailto:info@oceanlink.com" className="text-sm font-semibold text-[#0a1628] hover:text-[#e02020] transition-colors block">info@oceanlink.com</a>
                    <p className="text-xs text-gray-400">We respond within 1 business day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Head Office</p>
                    <p className="text-sm text-[#0a1628] leading-relaxed">1 Pacific Way, Darling Harbour<br />Sydney NSW 2000, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Business Hours</p>
                    <p className="text-sm text-[#0a1628]">Mon–Fri: 8:30am – 5:30pm</p>
                    <p className="text-sm text-[#0a1628]">Sat–Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-gray-50 border border-gray-100">
                <p className="text-sm font-bold text-[#0a1628] mb-2">Emergency Contact</p>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">For urgent cargo or operational issues outside business hours:</p>
                <a href="tel:+61290001299" className="text-[#e02020] font-bold text-sm hover:underline">+61 2 9000 1299</a>
              </div>

              <div className="mt-5">
                <Link href="/local-offices" className="text-sm text-[#e02020] font-semibold hover:underline">View all local offices →</Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-50 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h2 className="text-xl font-black text-[#0a1628] mb-2">Message Sent!</h2>
                  <p className="text-gray-500 text-sm mb-6 max-w-sm">Thank you for contacting us. One of our team members will get back to you within 1 business day.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary text-sm px-6 py-3">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-lg font-black text-[#0a1628] mb-6">Send a Message</h2>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Enquiry Type</label>
                    <div className="flex flex-wrap gap-2">
                      {['General Enquiry', 'Get a Quote', 'Shipment Issue', 'Partnership', 'Careers'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => update('type', t)}
                          className={`px-4 py-2 text-xs font-semibold border transition-colors ${form.type === t ? 'bg-[#0a1628] text-white border-[#0a1628]' : 'border-gray-200 text-gray-600 hover:border-[#0a1628]'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Full Name *</label>
                      <input required type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Email Address *</label>
                      <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="your@company.com" className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Company Name</label>
                      <input type="text" value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Your company" className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Subject *</label>
                      <input required type="text" value={form.subject} onChange={(e) => update('subject', e.target.value)} placeholder="How can we help?" className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Please provide as much detail as possible about your enquiry..." className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors resize-none" />
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <input type="checkbox" required id="privacy" className="accent-[#e02020]" />
                    <label htmlFor="privacy">I agree to the <Link href="#" className="text-[#e02020] hover:underline">Privacy Policy</Link> and consent to OceanLink Logistics processing my data.</label>
                  </div>

                  <button type="submit" className="btn-primary text-sm font-bold px-8 py-3.5 flex items-center gap-2">
                    <Send size={14} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
