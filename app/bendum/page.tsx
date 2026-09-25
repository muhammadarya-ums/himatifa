'use client'

import { Wallet, ArrowUpRight, ArrowDownRight, History, Download, Plus } from 'lucide-react'

export default function BendumPage() {
  return (
    <div className="min-h-screen bg-[#f4f8fc] p-6 text-[#0a192f] lg:p-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Keuangan Himpunan</h1>
            <p className="text-sm text-slate-500">Pantau transparansi arus kas dan anggaran kegiatan.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50">
              <Download className="size-4" /> Export Laporan
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-[#2563eb] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700">
              <Plus className="size-4" /> Catat Transaksi
            </button>
          </div>
        </header>

        {/* Ringkasan Saldo Utama */}
        <div className="mb-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl bg-[#0a192f] p-6 text-white shadow-lg lg:col-span-1">
            <div className="mb-6 flex items-center gap-3 opacity-80">
              <Wallet className="size-5" />
              <span className="text-sm font-bold uppercase tracking-wider">Total Saldo Aktif</span>
            </div>
            <p className="text-4xl font-black tracking-tight">Rp 8.750.000</p>
            <div className="mt-6 flex justify-between text-xs font-medium text-blue-200">
              <span>Kas Organisasi: Rp 5.250.000</span>
              <span>Dana Usaha: Rp 3.500.000</span>
            </div>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            <div className="rounded-2xl border border-white/80 bg-white/60 p-6 shadow-sm backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500">Pemasukan (Bulan Ini)</p>
                  <p className="mt-1 text-2xl font-black text-green-600">+Rp 2.100.000</p>
                </div>
                <div className="grid size-10 place-items-center rounded-full bg-green-100 text-green-600">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/60 p-6 shadow-sm backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500">Pengeluaran (Bulan Ini)</p>
                  <p className="mt-1 text-2xl font-black text-red-600">-Rp 850.000</p>
                </div>
                <div className="grid size-10 place-items-center rounded-full bg-red-100 text-red-600">
                  <ArrowDownRight className="size-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Histori Transaksi */}
        <div className="rounded-2xl border border-white/80 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2 text-lg font-bold">
            <History className="size-5 text-[#2563eb]" /> Riwayat Transaksi
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="border-b border-slate-100 text-xs uppercase text-slate-400">
                <tr>
                  <th className="pb-3 font-bold">Tanggal</th>
                  <th className="pb-3 font-bold">Keterangan</th>
                  <th className="pb-3 font-bold">Tipe & Kategori</th>
                  <th className="pb-3 font-bold text-right">Nominal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4">24 Sep 2026</td>
                  <td className="py-4 font-bold text-[#0a192f]">Pembayaran DP Jaket Himpunan</td>
                  <td className="py-4"><span className="rounded-md bg-red-100 px-2 py-1 text-[10px] font-bold text-red-700">Pengeluaran (Proker)</span></td>
                  <td className="py-4 text-right font-black text-red-600">- Rp 500.000</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4">22 Sep 2026</td>
                  <td className="py-4 font-bold text-[#0a192f]">Iuran Kas Pengurus (Periode September)</td>
                  <td className="py-4"><span className="rounded-md bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">Pemasukan (Kas)</span></td>
                  <td className="py-4 text-right font-black text-green-600">+ Rp 150.000</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4">18 Sep 2026</td>
                  <td className="py-4 font-bold text-[#0a192f]">Penjualan Lanyard Ekraf Store (5 Pcs)</td>
                  <td className="py-4"><span className="rounded-md bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">Pemasukan (Danus)</span></td>
                  <td className="py-4 text-right font-black text-green-600">+ Rp 175.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}