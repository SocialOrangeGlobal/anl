'use client';

import { useState } from 'react';
import { Search, Download, Filter, FileText, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { documents } from '@/app/data/news';
import { formatDateLong } from '@/app/lib/utils';
import Link from 'next/link';

const statusColors: Record<string, string> = {
  'Available': 'bg-green-50 text-green-700 border border-green-200',
  'Draft': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Pending': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Original Released': 'bg-purple-50 text-purple-700 border border-purple-200',
};

export default function DocumentDashboardPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');

  const types = ['All', ...Array.from(new Set(documents.map((d) => d.type)))];

  const filtered = documents.filter((doc) => {
    const matchSearch = !search || doc.blNumber.toLowerCase().includes(search.toLowerCase()) || doc.type.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === 'All' || doc.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#0a1628] py-14 px-4 md:px-8 lg:px-12">
        <div className="container-max">
          <p className="text-[#e02020] text-xs font-bold uppercase tracking-[0.2em] mb-3">My Portal</p>
          <h1 className="text-3xl md:text-4xl font-black text-white">Document Dashboard</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          {/* Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Documents', value: documents.length, icon: FileText, color: 'border-l-[#0a1628]' },
              { label: 'Available', value: documents.filter((d) => d.status === 'Available').length, icon: CheckCircle2, color: 'border-l-green-500' },
              { label: 'Draft', value: documents.filter((d) => d.status === 'Draft').length, icon: AlertCircle, color: 'border-l-yellow-500' },
              { label: 'Pending', value: documents.filter((d) => d.status === 'Pending').length, icon: Clock, color: 'border-l-blue-500' },
            ].map((card) => (
              <div key={card.label} className={`bg-white border-l-4 ${card.color} p-5 shadow-sm`}>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{card.label}</p>
                  <card.icon size={15} className="text-gray-300" />
                </div>
                <p className="text-2xl font-black text-[#0a1628]">{card.value}</p>
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
                  placeholder="Search by BL number or document type..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 text-sm focus:outline-none focus:border-[#0a1628] transition-colors"
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Filter size={13} className="text-gray-400" />
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`px-3 py-1.5 text-xs font-semibold border transition-colors ${
                      typeFilter === t ? 'bg-[#0a1628] text-white border-[#0a1628]' : 'border-gray-200 text-gray-600 hover:border-[#0a1628]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 btn-outline-red text-xs py-2 px-4 ml-auto">
                <Download size={12} /> Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-gray-100 overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr>
                  <th>Document ID</th>
                  <th>B/L Number</th>
                  <th>Container</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-gray-400">
                      <FileText size={32} className="mx-auto mb-3 opacity-30" />
                      No documents found
                    </td>
                  </tr>
                ) : (
                  filtered.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                      <td className="font-semibold text-[#0a1628]">{doc.id}</td>
                      <td className="text-gray-600">{doc.blNumber}</td>
                      <td className="text-gray-500 text-xs">{doc.container}</td>
                      <td>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">{doc.type}</span>
                      </td>
                      <td className="text-gray-600">{formatDateLong(doc.date)}</td>
                      <td>
                        <span className={`status-badge w-fit ${statusColors[doc.status] || 'bg-gray-100 text-gray-600'}`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button className="text-[#e02020] text-xs font-semibold hover:underline flex items-center gap-1">
                            <Download size={11} /> Download
                          </button>
                          <button className="text-gray-400 text-xs hover:text-[#0a1628] transition-colors">View</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-xs text-gray-400">Showing {filtered.length} of {documents.length} documents</p>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 border border-gray-200 text-xs text-gray-500">&lt;</button>
              <button className="w-8 h-8 bg-[#0a1628] text-white text-xs">1</button>
              <button className="w-8 h-8 border border-gray-200 text-xs text-gray-500">&gt;</button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-xs text-[#e02020] hover:underline">Log in to access all documents →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
