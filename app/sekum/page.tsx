'use client'

import { useState } from 'react'
import { FileText, Archive, Hash, Calendar, FileDown, PlusCircle } from 'lucide-react'

export default function SekumPage() {
  const [selectedCategory, setSelectedCategory] = useState('A')

  // Simulasi data tracker nomor surat
  const letterCodes = [
    { code: 'A', desc: 'Surat Internal / BPH', lastNumber: 45 },
    { code: 'B', desc: 'Surat Eksternal / Undangan', lastNumber: 112 },
    { code: 'SK', desc: 'Surat Keputusan', lastNumber: 12 },
    { code: 'OSC', desc: 'Kepanitiaan OSCAR', lastNumber: 24 },
  ]

  const activeTracker = letterCodes.find(c => c.code === selectedCategory)
  
  // Format generator: [Nomor]/[Kode]/HIMATIFA/FT-UMSurabaya/[BulanRomawi]/[Tahun]
  const currentMonth = 'IX'
  const currentYear = '2026'
  const nextLetterNumber = `${String((activeTracker?.lastNumber || 0) + 1).padStart(3, '0')}/${activeTracker?.code}/HIMATIFA/FT-UMSurabaya/${currentMonth}/${currentYear}`

  return (
    <div className="min-h-screen bg-[#f4f8fc] p-6 text-[#0a192f] lg:p-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-black tracking-tight">Sekretariat HIMATIFA</h1>
          <p className="text-sm text-slate-500">Pusat arsip dokumen dan generator penomoran surat resmi.</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_.5fr]">
          {/* Kolom Kiri: Generator Nomor Surat */}
          <div className="rounded-2xl border border-white/80 bg-white p-6 shadow-sm">
            <h2 className="mb-5 flex items-center gap-2 text-lg font-bold"><Hash className="size-5 text-[#2563eb]" /> Generator Nomor Surat</h2>
            
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold text-slate-500">Kategori / Kode Surat</label>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#2563eb]"
                >
                  {letterCodes.map(c => (
                    <option key={c.code} value={c.code}>[{c.code}] - {c.desc}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold text-slate-500">Perihal (Opsional)</label>
                <input type="text" placeholder="Cth: Peminjaman Gedung" className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#2563eb]" />
              </div>
            </div>

            <div className="rounded-xl border border-dashed border-blue-200 bg-blue-50/50 p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Pratinjau Nomor Berikutnya</p>
              <p className="mt-2 text-2xl font-black tracking-tight text-[#0a192f]">{nextLetterNumber}</p>
            </div>

            <button className="mt-6 w-full rounded-xl bg-[#0a192f] py-3 text-sm font-bold text-white transition hover:bg-slate-800">
              Kunci Nomor Surat Ini
            </button>
          </div>

          {/* Kolom Kanan: Metrik Arsip */}
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/80 bg-white/60 p-5 shadow-sm backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-xl bg-orange-100 text-orange-600"><FileText className="size-6" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-500">Total Surat Keluar (2026)</p>
                  <p className="text-2xl font-black">193</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/60 p-5 shadow-sm backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-xl bg-cyan-100 text-cyan-600"><Archive className="size-6" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-500">Arsip Proposal & LPJ</p>
                  <p className="text-2xl font-black">42</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabel Log Arsip */}
        <div className="mt-8 rounded-2xl border border-white/80 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold">Log Surat & Arsip Terbaru</h2>
            <button className="flex items-center gap-1 text-sm font-bold text-[#2563eb]"><PlusCircle className="size-4" /> Unggah Arsip</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="border-b border-slate-100 text-xs uppercase text-slate-400">
                <tr>
                  <th className="pb-3 font-bold">Nomor Surat</th>
                  <th className="pb-3 font-bold">Perihal / Tujuan</th>
                  <th className="pb-3 font-bold">Tanggal</th>
                  <th className="pb-3 font-bold">Status Arsip</th>
                  <th className="pb-3 font-bold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="hover:bg-slate-50/50">
                    <td className="py-4 font-bold text-[#0a192f]">112/B/HIMATIFA/...</td>
                    <td className="py-4 font-medium">Permohonan Pemateri - BEM FT</td>
                    <td className="py-4 flex items-center gap-1"><Calendar className="size-3" /> 24 Sep 2026</td>
                    <td className="py-4"><span className="rounded-md bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">Tersimpan (PDF)</span></td>
                    <td className="py-4 text-right">
                      <button className="text-slate-400 hover:text-[#2563eb]"><FileDown className="size-4" /></button>
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