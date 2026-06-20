'use client';

import { useState } from 'react';
import { Search, Download, Filter, DollarSign, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { invoices } from '@/app/data/news';
import { formatDateLong } from '@/app/lib/utils';
import Link from 'next/link';

const statusColors: Record<string, string> = {
  'Pending': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Paid': 'bg-green-50 text-green-700 border border-green-200',
  'Overdue': 'bg-red-50 text-red-700 border border-red-200',
};

const statusIcons: Record<string, React.ElementType> = {
  'Pending': Clock,
  'Paid': CheckCircle2,
  'Overdue': AlertCircle,
};

export default function InvoiceDashboardPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = invoices.filter((inv) => {
    const matchSearch = !search || inv.id.toLowerCase().includes(search.toLowerCase()) || inv.blNumber.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || inv.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const total = invoices.reduce((acc, inv) => acc + inv.amount, 0);
  const pending = invoices.filter((i) => i.status === 'Pending').reduce((acc, inv) => acc + inv.amount, 0);
  const overdue = invoices.filter((i) => i.status === 'Overdue').reduce((acc, inv) => acc + inv.amount, 0);
  const paid = invoices.filter((i) => i.status === 'Paid').reduce((acc, inv) => acc + inv.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#0a1628] py-14 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-3">My Portal</p>
          <h1 className="text-3xl md:text-4xl font-black text-white">Invoice Dashboard</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Invoices', value: `AUD ${total.toLocaleString()}`, icon: DollarSign, color: 'border-l-[#0a1628]' },
              { label: 'Pending', value: `AUD ${pending.toLocaleString()}`, icon: Clock, color: 'border-l-yellow-500' },
              { label: 'Overdue', value: `AUD ${overdue.toLocaleString()}`, icon: AlertCircle, color: 'border-l-red-500' },
              { label: 'Paid', value: `AUD ${paid.toLocaleString()}`, icon: CheckCircle2, color: 'border-l-green-500' },
            ].map((card) => (
              <div key={card.label} className={`bg-white border-l-4 ${card.color} p-5 shadow-sm`}>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{card.label}</p>
                  <card.icon size={15} className="text-gray-300" />
                </div>
                <p className="text-base font-black text-[#0a1628]">{card.value}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white border border-gray-100 p-5 mb-5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex-1 min-w-[200px]">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  placeholder="Search invoice or BL number..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter size={13} className="text-gray-400" />
                {['All', 'Pending', 'Paid', 'Overdue'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`px-3 py-1.5 text-xs font-semibold border transition-colors ${
                      statusFilter === s
                        ? 'bg-[#0a1628] text-white border-[#0a1628]'
                        : 'border-gray-200 text-gray-600 hover:border-[#0a1628]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 ml-auto">
                <button className="flex items-center gap-2 btn-outline-red text-xs py-2 px-4">
                  <Download size={12} /> Export CSV
                </button>
                <button className="flex items-center gap-2 btn-primary text-xs py-2 px-4">
                  <Download size={12} /> Export PDF
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-gray-100 overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr>
                  <th>Invoice #</th>
                  <th>B/L Number</th>
                  <th>Type</th>
                  <th>Invoice Date</th>
                  <th>Due Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-12 text-gray-400">
                      <DollarSign size={32} className="mx-auto mb-3 opacity-30" />
                      No invoices found
                    </td>
                  </tr>
                ) : (
                  filtered.map((inv) => {
                    const StatusIcon = statusIcons[inv.status] || Clock;
                    return (
                      <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                        <td className="font-semibold text-[#0a1628]">{inv.id}</td>
                        <td className="text-gray-600">{inv.blNumber}</td>
                        <td><span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">{inv.type}</span></td>
                        <td className="text-gray-600">{formatDateLong(inv.date)}</td>
                        <td className={inv.status === 'Overdue' ? 'text-red-600 font-semibold' : 'text-gray-600'}>
                          {formatDateLong(inv.dueDate)}
                        </td>
                        <td className="font-semibold text-[#0a1628]">
                          {inv.currency} {inv.amount.toLocaleString('en-AU', { minimumFractionDigits: 2 })}
                        </td>
                        <td>
                          <span className={`status-badge flex items-center gap-1 w-fit ${statusColors[inv.status]}`}>
                            <StatusIcon size={10} />
                            {inv.status}
                          </span>
                        </td>
                        <td className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            {inv.status !== 'Paid' && (
                              <button className="text-[#e02020] text-xs font-semibold hover:underline">Pay</button>
                            )}
                            <button className="text-gray-400 text-xs hover:text-[#0a1628] transition-colors">Download</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-xs text-gray-400">Showing {filtered.length} of {invoices.length} invoices</p>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 border border-gray-200 text-xs text-gray-500">&lt;</button>
              <button className="w-8 h-8 bg-[#0a1628] text-white text-xs">1</button>
              <button className="w-8 h-8 border border-gray-200 text-xs text-gray-500">&gt;</button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-xs text-[#e02020] hover:underline">
              Log in to view all invoices and make payments →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
