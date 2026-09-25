'use client'

import { useState } from 'react'
import { Package, ShoppingBag, DollarSign, Plus, Search, Edit, Trash2, ArrowUpRight } from 'lucide-react'

export default function AdminEkrafPage() {
  const [activeTab, setActiveTab] = useState<'produk' | 'pesanan'>('produk')

  return (
    <div className="min-h-screen bg-[#f4f8fc] p-6 text-[#0a192f] lg:p-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Ekraf Dashboard</h1>
            <p className="text-sm text-slate-500">Kelola katalog produk dan pantau transaksi Ekraf Store.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#2563eb] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700">
            <Plus className="size-4" /> Tambah Produk
          </button>
        </header>

        {/* Statistik */}
        <div className="mb-8 grid gap-5 sm:grid-cols-3">
          {[
            { label: 'Total Produk Aktif', value: '24', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
            { label: 'Pesanan Masuk (Bulan Ini)', value: '156', icon: ShoppingBag, color: 'text-orange-600', bg: 'bg-orange-100' },
            { label: 'Pendapatan Kotor', value: 'Rp 4.500.000', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/80 bg-white/60 p-5 shadow-sm backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500">{stat.label}</p>
                  <p className="mt-1 text-2xl font-black">{stat.value}</p>
                </div>
                <div className={`grid size-12 place-items-center rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="size-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabel Data */}
        <div className="rounded-2xl border border-white/80 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-4">
              <button onClick={() => setActiveTab('produk')} className={`text-sm font-bold pb-2 ${activeTab === 'produk' ? 'border-b-2 border-[#2563eb] text-[#2563eb]' : 'text-slate-400'}`}>Katalog Produk</button>
              <button onClick={() => setActiveTab('pesanan')} className={`text-sm font-bold pb-2 ${activeTab === 'pesanan' ? 'border-b-2 border-[#2563eb] text-[#2563eb]' : 'text-slate-400'}`}>Daftar Pesanan</button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Cari..." className="rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-[#2563eb]" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="border-b border-slate-100 text-xs uppercase text-slate-400">
                <tr>
                  <th className="pb-3 font-bold">Nama Produk</th>
                  <th className="pb-3 font-bold">Kategori</th>
                  <th className="pb-3 font-bold">Stok</th>
                  <th className="pb-3 font-bold">Harga</th>
                  <th className="pb-3 font-bold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[1, 2, 3, 4].map((item) => (
                  <tr key={item} className="hover:bg-slate-50/50">
                    <td className="py-4 font-bold text-[#0a192f]">Lanyard HIMATIFA Eksklusif</td>
                    <td className="py-4">Merchandise</td>
                    <td className="py-4"><span className="rounded-md bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">50 Tersedia</span></td>
                    <td className="py-4 font-semibold">Rp 35.000</td>
                    <td className="py-4 text-right">
                      <button className="mr-2 text-slate-400 hover:text-[#2563eb]"><Edit className="size-4" /></button>
                      <button className="text-slate-400 hover:text-red-500"><Trash2 className="size-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}