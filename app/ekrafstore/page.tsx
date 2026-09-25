'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  CreditCard,
  Laptop,
  MessageCircle,
  MonitorSmartphone,
  Server,
  ShoppingCart,
  Smartphone,
  Wrench,
  X,
  Zap
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// --- Tipe Data ---
interface ProductVariant {
  name: string
  price: number
  priceLabel: string
}

interface DigitalProduct {
  category: string
  icon: string
  variants: ProductVariant[]
}

interface TechService {
  id: string
  title: string
  icon: React.ReactNode
  desc: string
  stack: string[]
}

// --- Data Layanan Digital (Sesuai Pricelist HIMATIFA) ---
const digitalProducts: DigitalProduct[] = [
  {
    category: 'ChatGPT',
    icon: '',
    variants: [
      { name: 'Private - Full (1 Bln Plan Go)', price: 52500, priceLabel: 'Rp 52.500' },
      { name: 'Private - Full (3 Bln Plan Go)', price: 60000, priceLabel: 'Rp 60.000' },
      { name: 'Private - 24 Jam (1 Bln Plan Plus)', price: 35500, priceLabel: 'Rp 35.500' },
      { name: 'Private - 24 Jam (3 Bln Plan Go)', price: 50000, priceLabel: 'Rp 50.000' },
    ]
  },
  {
    category: 'Netflix Premium',
    icon: '',
    variants: [
      { name: '1 Profile 1 User (1 Hari)', price: 8000, priceLabel: 'Rp 8.000' },
      { name: '1 Profile 1 User (7 Hari)', price: 15500, priceLabel: 'Rp 15.500' },
      { name: '1 Profile 1 User (1 Bulan)', price: 30000, priceLabel: 'Rp 30.000' },
      { name: 'Semi Private (1 Bulan)', price: 35000, priceLabel: 'Rp 35.000' },
      { name: '1 Profile 2 User (1 Bulan)', price: 20000, priceLabel: 'Rp 20.000' },
    ]
  },
  {
    category: 'Canva Pro',
    icon: '',
    variants: [
      { name: 'Private & Invite (1 Bulan)', price: 10000, priceLabel: 'Rp 10.000' },
      { name: 'Private & Invite (6 Bulan)', price: 15000, priceLabel: 'Rp 15.000' },
      { name: 'Private & Invite (9 Bulan)', price: 25000, priceLabel: 'Rp 25.000' },
      { name: 'Private & Invite (1 Tahun)', price: 30000, priceLabel: 'Rp 30.000' },
    ]
  },
  {
    category: 'CapCut Pro',
    icon: '',
    variants: [
      { name: 'Private (7 Hari)', price: 15500, priceLabel: 'Rp 15.500' },
      { name: 'Private (1 Bulan)', price: 35500, priceLabel: 'Rp 35.500' },
    ]
  },
  {
    category: 'Gemini Plus',
    icon: '',
    variants: [
      { name: 'Gemini Plus Bergaransi (1 Bulan)', price: 15000, priceLabel: 'Rp 15.000' },
      { name: 'Gemini Plus Bergaransi (6 Bulan)', price: 15000, priceLabel: 'Rp 15.000' }, // Harga mengikuti visual brosur
    ]
  },
  {
    category: 'Vidio Platinum',
    icon: '',
    variants: [
      { name: 'Private (1 Bulan Mobile)', price: 30500, priceLabel: 'Rp 30.500' },
      { name: 'Private (1 Bulan All Dev)', price: 40500, priceLabel: 'Rp 40.500' },
      { name: 'Private TV Only (1 Tahun)', price: 15000, priceLabel: 'Rp 15.000' },
    ]
  },
  {
    category: 'Lightroom',
    icon: '',
    variants: [
      { name: 'Sharing (1 Bulan)', price: 10000, priceLabel: 'Rp 10.000' },
      { name: 'Sharing (1 Tahun)', price: 15500, priceLabel: 'Rp 15.500' },
    ]
  },
  {
    category: 'Wattpad Premium+',
    icon: '',
    variants: [
      { name: 'Private (1 Bulan)', price: 15500, priceLabel: 'Rp 15.500' },
      { name: 'Sharing (1 Bulan)', price: 10500, priceLabel: 'Rp 10.500' },
      { name: 'Sharing (1 Tahun)', price: 15500, priceLabel: 'Rp 15.500' },
    ]
  }
]

// --- Data Layanan Hardware & Software ---
const techServices: TechService[] = [
  {
    id: 'web-dev',
    title: 'Web & App Development',
    icon: <MonitorSmartphone className="size-6 text-blue-500" />,
    desc: 'Pengembangan platform modern yang cepat, responsif, dan scalable untuk kebutuhan bisnis, akademik, maupun startup.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'TypeScript']
  },
  {
    id: 'iot-dev',
    title: 'IoT & Embedded Systems',
    icon: <Cpu className="size-6 text-blue-500" />,
    desc: 'Rancang bangun purwarupa hardware pintar, integrasi sensor cerdas, dan sistem telemetri berbasis dashboard real-time.',
    stack: ['ESP32', 'Arduino', 'C++', 'BLE', 'Sensor Integration']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: <Server className="size-6 text-blue-500" />,
    desc: 'Implementasi model prediktif, analisis data tingkat lanjut, dan integrasi generative AI untuk otomasi sistem cerdas.',
    stack: ['Python', 'Gemini API', 'PyTorch', 'Vector Database']
  },
  {
    id: 'repair',
    title: 'Servis Laptop & HP',
    icon: <Wrench className="size-6 text-blue-500" />,
    desc: 'Perawatan perangkat keras, instalasi OS, pembersihan komponen, ganti pasta termal, hingga optimalisasi performa perangkat.',
    stack: ['Hardware Cleaning', 'OS Install', 'Thermal Paste', 'Troubleshooting']
  }
]

// --- Komponen Utama ---
export default function EkrafStorePage() {
  const [selectedItem, setSelectedItem] = useState<{ category: string; variant: ProductVariant } | null>(null)
  const [buyerName, setBuyerName] = useState('')
  const [buyerNote, setBuyerNote] = useState('')

  const handleCheckout = () => {
    if (!selectedItem) return
    const adminPhone = '6287762728979'
    const message = `Halo Admin Ekraf HIMATIFA! 👋\n\nSaya ingin memesan:\n*Kategori:* ${selectedItem.category}\n*Produk:* ${selectedItem.variant.name}\n*Harga:* ${selectedItem.variant.priceLabel}\n\n*Nama:* ${buyerName || '-'}\n*Catatan:* ${buyerNote || '-'}\n\nMohon informasi selanjutnya untuk proses pembayaran. Terima kasih!`
    window.open(`https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`, '_blank')
    setSelectedItem(null)
  }

  return (
    <main className="min-h-screen bg-[#f4f8fc] text-[#0a192f] selection:bg-blue-200">
      {/* Background Meshes */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-125 w-125 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-[-5%] top-[20%] h-150 w-150 rounded-full bg-cyan-300/20 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/60 px-5 py-3 shadow-lg shadow-blue-900/5 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 font-black tracking-tight text-[#0a192f] transition hover:text-[#2563eb]">
            <ArrowLeft className="size-4" /> Kembali
          </Link>
          <div className="flex items-center gap-2 font-bold tracking-tight text-[#2563eb]">
            <ShoppingCart className="size-5" /> EKRAF STORE
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#2563eb]">Layanan Digital & Teknologi</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">Satu Pintu untuk<br /><span className="text-[#2563eb]">Kebutuhan Digitalmu.</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-slate-500">Dari lisensi aplikasi premium dengan harga mahasiswa hingga layanan perbaikan dan pengembangan sistem cerdas.</p>
        </div>

        {/* Section 1: Premium Digital Services */}
        <section className="mb-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Premium <span className="text-[#2563eb]">Services.</span></h2>
            <p className="text-xs font-bold text-slate-500 text-right max-w-[150px] sm:max-w-full">
              Termasuk Spotify, Zoom, YouTube, dll.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {digitalProducts.map((product) => (
              <div key={product.category} className="flex flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-1 shadow-lg shadow-blue-900/5 backdrop-blur-xl">
                <div className="rounded-[1.7rem] bg-[#0a192f] p-5 text-white">
                  <div className="mb-4 text-3xl">{product.icon}</div>
                  <h3 className="text-lg font-black">{product.category}</h3>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedItem({ category: product.category, variant })}
                      className="group flex items-center justify-between rounded-xl border border-slate-100 bg-white/50 p-3 text-left transition hover:border-blue-200 hover:bg-blue-50"
                    >
                      <div className="pr-2">
                        <p className="text-xs font-bold text-slate-700 group-hover:text-[#2563eb]">{variant.name}</p>
                        <p className="mt-0.5 text-[11px] font-semibold text-slate-500">{variant.priceLabel}</p>
                      </div>
                      <ShoppingCart className="size-4 shrink-0 text-slate-300 transition group-hover:text-[#2563eb]" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Tech & Hardware Clinic */}
        <section>
          <div className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#2563eb]">HIMATIFA Tech Clinic</p>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Hardware & <span className="text-[#2563eb]">Software Solutions.</span></h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {techServices.map((svc) => (
              <div key={svc.id} className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-7 shadow-lg shadow-blue-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                <div className="absolute right-0 top-0 -mr-8 -mt-8 size-32 rounded-full bg-blue-100/50 blur-2xl transition group-hover:bg-blue-200/50" />
                <div className="relative z-10 flex items-start gap-5">
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-blue-100/80 shadow-inner">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0a192f]">{svc.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{svc.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {svc.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-[10px] font-bold text-blue-600 shadow-sm backdrop-blur">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/6287762728979?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Tech%20Clinic%20HIMATIFA."
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2563eb] transition hover:gap-3"
                    >
                      Konsultasi Sekarang <MessageCircle className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Payment Gateway / Checkout Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-[#0a192f]/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 shadow-2xl backdrop-blur-2xl"
            >
              {/* Modal Header */}
              <div className="bg-[#0a192f] px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black flex items-center gap-2">
                    <ShoppingCart className="size-5 text-blue-300" /> Detail Pesanan
                  </h3>
                  <button onClick={() => setSelectedItem(null)} className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <div className="mb-6 rounded-2xl bg-blue-50 p-4 border border-blue-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-500">{selectedItem.category}</p>
                  <p className="mt-1 text-lg font-black text-[#0a192f]">{selectedItem.variant.name}</p>
                  <div className="mt-3 flex items-center justify-between border-t border-blue-200/50 pt-3">
                    <span className="text-sm font-semibold text-slate-500">Total Pembayaran</span>
                    <span className="text-xl font-black text-[#2563eb]">{selectedItem.variant.priceLabel}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">Nama Lengkap</label>
                    <input 
                      type="text" 
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="Masukkan nama Anda"
                      className="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">Catatan Tambahan (Opsional)</label>
                    <input 
                      type="text" 
                      value={buyerNote}
                      onChange={(e) => setBuyerNote(e.target.value)}
                      placeholder="Misal: Email untuk akun, dll."
                      className="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                {/* Supported Payment Gateways */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="mb-3 text-xs font-bold text-slate-500 flex items-center gap-1">
                    <CreditCard className="size-3.5" /> Metode Pembayaran Tersedia
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3">
                      <div className="flex items-center gap-3">
                        <div className="grid size-8 place-items-center rounded-lg bg-white">
                            <Image 
                                src="/seabank.png" 
                                alt="Logo SeaBank" 
                                width={28} 
                                height={28} 
                                className="object-contain" 
                            />
                            </div>
                        <div>
                          <p className="text-xs font-bold text-[#0a192f]">SeaBank</p>
                          <p className="text-[10px] font-semibold text-slate-500">0877 6272 8979</p>
                        </div>
                      </div>
                      <CheckCircle2 className="size-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3">
                      <div className="flex items-center gap-3">
                        <div className="grid size-8 place-items-center rounded-lg bg-white">
                        <Image 
                            src="/dana.png" 
                            alt="Logo DANA" 
                            width={28} 
                            height={28} 
                            className="object-contain" 
                        />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0a192f]">DANA</p>
                          <p className="text-[10px] font-semibold text-slate-500">0877 6272 8979</p>
                        </div>
                      </div>
                      <CheckCircle2 className="size-4 text-green-500" />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-4 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Lanjut ke WhatsApp <ArrowLeft className="size-4 rotate-135" />
                </button>
                <p className="mt-4 text-center text-[10px] text-slate-400">
                  Transaksi akan diproses oleh Admin Ekraf HIMATIFA secara manual.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}