'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-[#e02020]" />
            </div>
            <div>
              <div className="text-[#0a1628] font-black text-lg leading-none">OCEAN</div>
              <div className="text-[#e02020] font-black text-lg leading-none">LINK</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-sm p-8">
          {submitted ? (
            <div className="text-center">
              <div className="w-14 h-14 bg-green-50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={28} className="text-green-600" />
              </div>
              <h2 className="text-xl font-black text-[#0a1628] mb-2">Check Your Email</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-2">
                We&apos;ve sent a password reset link to:
              </p>
              <p className="text-sm font-bold text-[#0a1628] mb-5">{email}</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                The link will expire in 30 minutes. If you don&apos;t see the email, check your spam folder.
              </p>
              <Link href="/login" className="btn-primary text-sm font-bold px-8 py-3.5 inline-block">
                Return to Login
              </Link>
            </div>
          ) : (
            <>
              <Link href="/login" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0a1628] text-xs mb-5 transition-colors">
                <ArrowLeft size={13} /> Back to Login
              </Link>
              <h1 className="text-xl font-black text-[#0a1628] mb-2">Reset Your Password</h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Enter the email address associated with your OceanLink account and we&apos;ll send you a password reset link.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Email Address</label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@company.com"
                      className="w-full pl-10 pr-4 py-3.5 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary text-sm font-bold py-3.5 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    'Send Reset Link'
                  )}
                </button>
              </form>
            </>
          )}
        </div>

        <div className="mt-5 text-center">
          <p className="text-xs text-gray-400">
            Need help?{' '}
            <Link href="/contact" className="text-[#e02020] hover:underline">Contact support</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
