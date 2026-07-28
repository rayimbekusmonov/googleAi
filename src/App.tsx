import { useState, useEffect } from 'react'

// --- Data Types & Definitions ---
interface FeatureItem {
  id: string
  icon: string
  badge: string
  badgeBg: string
  title: string
  subtitle: string
  description: string
  fullDetails: string[]
  metrics: string
}

interface FAQItem {
  question: string
  answer: string
  category: string
}

interface Testimonial {
  name: string
  role: string
  comment: string
  rating: number
}

const featuresList: FeatureItem[] = [
  {
    id: 'gemini-pro',
    icon: 'sparkles',
    badge: '4x Yuqori Limit',
    badgeBg: 'bg-violet-100 text-violet-700 border-violet-300',
    title: 'Gemini 3 Pro',
    subtitle: 'Video & Matn Generatsiyasi',
    description:
      "Tepasiz tezlik va cheklovlarsiz muloqot. Yuqori aniqlikdagi video, tasvir va murakkab matnlarni bir zumda yarating.",
    fullDetails: [
      "2 Million+ Token kontekst oynasi (uzun kitoblar va kodlarni tahlil qilish)",
      "Multimodal imkoniyat: Matn, Video, Audio va Tasvirlar bilan ishlash",
      "Kengaytirilgan mantiqiy fikrlash va muammolarni yechish darajasi",
      "O'zbek va 100+ tillarda mukammal tabiiy muloqot"
    ],
    metrics: "4x Ko'proq So'rovlar"
  },
  {
    id: 'google-flow',
    icon: 'video',
    badge: 'Creative Studio',
    badgeBg: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-300',
    title: 'Google Flow',
    subtitle: '1,000 AI Credits',
    description:
      "Kino darajasidagi lavhalar va vizual vizualizatsiyalar. Gemini Omni Flash va maxsus AI stsenariylar bilan ishlash uchun 1,000 credit.",
    fullDetails: [
      "Kinematografik AI video va render yaratish instrumenti",
      "1,000 Oylik AI Credit balans to'plami",
      "Yuqori 4K rezolyutsiyadagi rasmlar va stsenariylar",
      "Professional dizaynerlar va montajchilar uchun moslashtirilgan"
    ],
    metrics: "1,000 AI Credits"
  },
  {
    id: 'deep-search',
    icon: 'search',
    badge: 'Gemini 3 Pro & Deep Search',
    badgeBg: 'bg-sky-100 text-sky-700 border-sky-300',
    title: 'Kengaytirilgan Search',
    subtitle: 'AI Agentlar',
    description:
      "Chuqurlashtirilgan qidiruv, murakkab tahlil va avtonom AI agentlarining eng so'nggi imkoniyatlari.",
    fullDetails: [
      "Internetdan real vaqtdagi chuqurlashtirilgan axborot qidirish va fakt-cheking",
      "Manbalar va havola ko'rsatmalariga asoslangan ilmiy xulosalar",
      "Avtonom tadqiqot agentlari va ma'lumotlar strukturasi",
      "Moliyaviy va akademik hisobotlarni tayyorlash"
    ],
    metrics: "Real-time Web Search"
  },
  {
    id: 'antigravity',
    icon: 'code',
    badge: 'Agentic Dev Platform',
    badgeBg: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    title: 'Google Antigravity',
    subtitle: 'Dasturchi Platformasi',
    description:
      "Dasturchilar va avtomatlashtirish uchun agent modellariga kirish huquqi va yuqori limitlar.",
    fullDetails: [
      "Avtonom kod yozish va refaktoring AI yordamchilari",
      "IDE integratsiyalari va API kalitlari uchun kengaytirilgan limitlar",
      "Terminal va git buyruqlarini avtomatlashtirish imkoniyati",
      "Katta loyihalardagi buglarni avtomatik aniqlash"
    ],
    metrics: "Pro Dev Tools"
  },
  {
    id: 'notebook',
    icon: 'book',
    badge: '5x Audio Overviews',
    badgeBg: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    title: 'Gemini Notebook',
    subtitle: 'Tadqiqot & Analitika',
    description:
      "O'quv va ilmiy manbalar bilan ishlash, audio-xulosalar tayyorlash va aqlli daftarlar yuritish uchun 5 barobar ko'p imkoniyat.",
    fullDetails: [
      "PDF, Hujjatlar va maqolalardan 5x Audio podcast xulosalari",
      "Interaktiv konspektlar va talabalar uchun darslik tahlili",
      "Aqlli tezkor savol-javob daftari",
      "Jamoaviy ulashish va tadqiqot loyihalari"
    ],
    metrics: "5x Audio Podkastlar"
  },
  {
    id: 'storage',
    icon: 'database',
    badge: 'Gmail, Docs, Vids & 5 TB Drive',
    badgeBg: 'bg-amber-100 text-amber-700 border-amber-300',
    title: 'Google Apps & 5 TB',
    subtitle: 'Bulutli Xotira',
    description:
      "Google xizmatlari ichida bevosita AI yordamchi hamda Photos, Drive va Gmail uchun ulkan 5 TB bulutli xotira.",
    fullDetails: [
      "5,000 GB (5 TB) ulkan bulutli saqlash hajmi",
      "Gmail, Google Docs, Sheets va Vids ilovalarida bevosita AI integratsiyasi",
      "Original sifatdagi Photos va Video arxiv saqlash",
      "Yuqori xavfsizlik va zaxira nusxa yaratish"
    ],
    metrics: "5,000 GB Storage"
  },
]

const trustBadges = [
  { type: 'check', label: "100% Kafolat" },
  { type: 'bolt', label: "Tezkor Ulanish" },
  { type: 'card', label: "Uzcard" },
  { type: 'card', label: "Humo" },
  { type: 'phone', label: "Click" },
  { type: 'phone', label: "Payme" },
]

const faqs: FAQItem[] = [
  {
    category: "Umumiy",
    question: "18 Oylik Google AI Pro obunasi qanday ishlaydi?",
    answer: "Obuna faollashtirilgach, siz 18 oy davomida Google AI Pro va 5 TB Drive xotirasining barcha premium funksiyalaridan rasmiy va to'liq foydalanasiz. Hech qanday oylik qo'shimcha to'lovlarsiz bir martalik narx hisoblanadi."
  },
  {
    category: "Ulanish",
    question: "Mening shaxsiy Google akkountimga ulansa bo'ladimi?",
    answer: "Ha! Sizning shaxsiy Google elektron pochtangizga taklifnoma yoki rasmiy faollashtirish kodi yuboriladi. Barcha shaxsiy fayllaringiz va ma'lumotlaringiz mutlaqo maxfiy va xavfsiz qoladi."
  },
  {
    category: "To'lov",
    question: "To'lovni qanday amalga oshirish mumkin?",
    answer: "To'lov O'zbekistondagi barcha mashhur tizimlar orqali qabul qilinadi: Uzcard, Humo, Click, Payme yoki USDT. To'lov amalga oshirilishi bilan 5-15 daqiqa ichida obuna faollashtiriladi."
  },
  {
    category: "Kafolat",
    question: "Xizmat kafolati bormi va uzilishlar bo'lmaydimi?",
    answer: "Albatta, biz 100% rasmiy kafolat beramiz. Obuna muddati davomida har qanday texnik masalada 24/7 qo'llab-quvvatlash xizmatimiz yordam beradi."
  },
  {
    category: "Imkoniyatlar",
    question: "5 TB Drive xotirasi va Gemini 3 Pro yetarlimi?",
    answer: "5 TB (5,000 GB) bu ultra-katta hajm bo'lib, barcha videolaringiz, rasmlaringiz va fayllaringiz uchun 18 oy va undan ko'proq vaqtga yetadi. Gemini 3 Pro esa eng oxirgi avlod AI modelidir."
  }
]

const testimonials: Testimonial[] = [
  {
    name: "Sardor Rahimov",
    role: "Senior Full Stack Dasturchi",
    comment: "Antigravity va Gemini 3 Pro dasturchilar uchun ajoyib yordamchi! Ish unumdorligim 3 baravarga oshdi. 18 oylik obuna narxi juda hamyonbop.",
    rating: 5
  },
  {
    name: "Malika Akramova",
    role: "Digital Marketing Manager",
    comment: "Google Flow yordamida har kuni vizual kontentlar yarataman. 5 TB xotira va AI vositalar bir joyda yig'ilganidan juda mamnunman.",
    rating: 5
  },
  {
    name: "Javohir Toshpulatov",
    role: "Data Analyst & Student",
    comment: "Gemini Notebook audio overviews funksiyasi ilmiy maqola va kitoblarni tezda hazm qilishga yordam beradi. Ulanish bor-yo'g'i 10 daqiqa vaqt oldi!",
    rating: 5
  }
]

// --- Helper Icon Components ---
function IconSparkles({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
    </svg>
  )
}

function IconPhone({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconTelegram({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function IconZap({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function IconCheck({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconInfo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  )
}

function IconVideo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="12" x="2" y="6" rx="2" />
      <path d="m22 8-6 4 6 4V8z" />
    </svg>
  )
}

function IconSearch({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function IconCode({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function IconBook({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10M6 10h10" />
    </svg>
  )
}

function IconDatabase({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  )
}

function IconCreditCard({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function renderFeatureIcon(type: string, className = "w-6 h-6") {
  switch (type) {
    case 'sparkles': return <IconSparkles className={className} />
    case 'video': return <IconVideo className={className} />
    case 'search': return <IconSearch className={className} />
    case 'code': return <IconCode className={className} />
    case 'book': return <IconBook className={className} />
    case 'database': return <IconDatabase className={className} />
    default: return <IconSparkles className={className} />
  }
}

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<'home' | 'details'>('home')
  
  // UI states
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Modals & Notifications
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<'click' | 'payme' | 'uzcard' | 'humo' | 'usdt'>('click')
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  
  // Toast Alert State
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentView])

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customerName || !customerPhone) {
      showToast("Iltimos, ismingiz va telefon/telegram ma'lumotlaringizni kiriting.")
      return
    }
    setOrderSubmitted(true)
    showToast("Buyurtmangiz qabul qilindi! Operatorimiz tez orada bog'lanadi.")
  }

  return (
    <div className="min-h-screen w-full relative neon-light-bg text-slate-900 font-sans transition-colors duration-300">
      {/* ── Ambient Background Neon Glows (Light Mode) ── */}
      <div
        className="orb-light pointer-events-none fixed"
        style={{
          width: 550,
          height: 550,
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, transparent 70%)',
          top: -150,
          left: -150,
          zIndex: 0,
        }}
      />
      <div
        className="orb-light pointer-events-none fixed"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
          top: '30%',
          right: -150,
          zIndex: 0,
        }}
      />
      <div
        className="orb-light pointer-events-none fixed"
        style={{
          width: 450,
          height: 450,
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)',
          bottom: '10%',
          left: '25%',
          zIndex: 0,
        }}
      />

      {/* ── TOAST NOTIFICATION ── */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 animate-bounce">
          <div className="neon-glass-strong px-5 py-3 rounded-2xl shadow-xl border border-purple-400/50 text-slate-900 font-medium text-sm flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* ── NAVIGATION BAR ── */}
      <header className="sticky top-0 z-40 neon-glass border-b border-purple-200/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setCurrentView('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-purple-600 to-sky-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-sans">
                  Google <span className="glow-text-light">AI Pro</span>
                </span>
                <span className="text-[10px] uppercase font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full border border-purple-300">
                  UZB
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">18 Oylik Eksklyuziv Obuna</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setCurrentView('home')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                currentView === 'home'
                  ? 'bg-purple-100/80 text-purple-800 border border-purple-300/60 shadow-sm'
                  : 'text-slate-600 hover:text-purple-700 hover:bg-white/60'
              }`}
            >
              Bosh sahifa
            </button>
            <button
              onClick={() => setCurrentView('details')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                currentView === 'details'
                  ? 'bg-purple-100/80 text-purple-800 border border-purple-300/60 shadow-sm'
                  : 'text-slate-600 hover:text-purple-700 hover:bg-white/60'
              }`}
            >
              <span>Batafsil Ma'lumot</span>
              <span className="text-xs font-bold text-sky-600 bg-sky-100 px-1.5 py-0.5 rounded-md">Yangi</span>
            </button>
            <button
              onClick={() => {
                if (currentView !== 'home') setCurrentView('home')
                setTimeout(() => {
                  document.getElementById('features-grid')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-purple-700 hover:bg-white/60 transition-all"
            >
              Imkoniyatlar
            </button>
            <button
              onClick={() => {
                if (currentView !== 'home') setCurrentView('home')
                setTimeout(() => {
                  document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-purple-700 hover:bg-white/60 transition-all"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* FLASHING CONTACTS BUTTON */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="neon-flashing-btn px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <IconPhone className="w-4 h-4 animate-bounce" />
              <span>Bog'lanish</span>
            </button>
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="neon-glow-btn px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              <IconZap className="w-4 h-4" />
              <span>Obunani Ulash</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/80 border border-purple-200 text-slate-700"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 border-t border-purple-200/50 bg-white/95 backdrop-blur-xl shadow-xl flex flex-col gap-3">
            <button
              onClick={() => {
                setCurrentView('home')
                setMobileMenuOpen(false)
              }}
              className="text-left px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-purple-50"
            >
              Bosh sahifa
            </button>
            <button
              onClick={() => {
                setCurrentView('details')
                setMobileMenuOpen(false)
              }}
              className="text-left px-4 py-2.5 rounded-xl text-purple-700 font-bold bg-purple-50 flex items-center justify-between"
            >
              <span>Batafsil Ma'lumot</span>
              <span className="text-xs bg-purple-200 px-2 py-0.5 rounded-full">Barchasi</span>
            </button>
            <button
              onClick={() => {
                setIsContactModalOpen(true)
                setMobileMenuOpen(false)
              }}
              className="neon-flashing-btn text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <IconPhone className="w-4 h-4" />
              <span>Bog'lanish</span>
            </button>
            <button
              onClick={() => {
                setIsOrderModalOpen(true)
                setMobileMenuOpen(false)
              }}
              className="neon-glow-btn text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <IconZap className="w-4 h-4" />
              <span>18 Oylik Obunani Ulash</span>
            </button>
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {currentView === 'home' ? (
          /* ========================================================= */
          /*                       HOME VIEW                           */
          /* ========================================================= */
          <div className="space-y-16 sm:space-y-24">
            
            {/* ── HERO SECTION & HERO CARD ── */}
            <section className="text-center pt-4 sm:pt-8">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="neon-glass px-5 py-2 rounded-full flex items-center gap-2.5 border border-purple-300/80 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_10px_#9333ea] animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-purple-900">
                    18 Oylik Eksklyuziv Taklif — Google AI Pro
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                <span className="glow-text-light">Ish va Ijodkorlik Uchun</span>
                <br />
                <span className="text-slate-900">Cheksiz Sun'iy Intellekt</span>
                <br />
                <span className="glow-text-magenta-light">Imkoniyatlari</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-xl max-w-3xl mx-auto text-slate-600 font-medium leading-relaxed mb-8 px-2">
                Gemini 3 Pro, Google Flow va{" "}
                <span className="text-purple-700 font-bold underline decoration-purple-400">
                  5 TB xotirani
                </span>{" "}
                rasmiy narxdan bir necha baravar arzonroq qo'lga kiriting.
              </p>

              {/* Quick Hero Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => setIsOrderModalOpen(true)}
                  className="neon-glow-btn px-8 py-4 rounded-2xl font-extrabold text-base sm:text-lg flex items-center gap-3 cursor-pointer shadow-lg"
                >
                  <IconZap className="w-5 h-5 text-amber-300" />
                  <span>18 Oylik Obunani Ulash</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentView('details')}
                  className="neon-glow-btn-outline px-7 py-4 rounded-2xl font-bold text-base flex items-center gap-2 cursor-pointer"
                >
                  <IconInfo className="w-5 h-5 text-sky-600" />
                  <span>Batafsil Ma'lumot</span>
                </button>
                {/* FLASHING CONTACTS HERO BUTTON */}
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="neon-flashing-btn px-7 py-4 rounded-2xl font-extrabold text-base flex items-center gap-2 cursor-pointer shadow-xl"
                >
                  <IconPhone className="w-5 h-5 animate-bounce" />
                  <span>Bog'lanish</span>
                </button>
              </div>

              {/* ───────────────────────────────────────────────────────────── */}
              {/*  HERO PRICING CARD (EXACT SECTION FROM THE USER'S IMAGE)    */}
              {/* ───────────────────────────────────────────────────────────── */}
              <div className="max-w-5xl mx-auto text-left">
                <div className="neon-glass-strong rounded-3xl p-2 sm:p-3 shadow-2xl border-2 border-purple-300/80">
                  <div className="bg-white/95 rounded-[22px] overflow-hidden border border-purple-100">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      
                      {/* Left: Official Price Box */}
                      <div className="p-6 sm:p-10 relative bg-slate-50/70 border-b md:border-b-0 md:border-r border-purple-100 flex flex-col justify-between">
                        <div>
                          <div className="inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6 bg-slate-200 text-slate-600 border border-slate-300">
                            Rasmiy Narx
                          </div>

                          <div className="mb-4">
                            <span className="text-4xl sm:text-5xl font-black text-slate-400 line-through decoration-red-500 decoration-4">
                              $19.99
                            </span>
                            <span className="text-sm font-semibold text-slate-400 ml-2">
                              / oy
                            </span>
                          </div>

                          <div className="text-2xl font-extrabold text-slate-500 mb-2">
                            $360+ jami
                          </div>
                          <p className="text-sm text-slate-500 font-medium">
                            18 oylik to'liq to'lov
                          </p>
                        </div>

                        <div className="mt-8">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-red-50 border border-red-200 text-red-600">
                            <span>✕</span>
                            <span>Qimmat va uzoq majburiyat</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Our Special Deal Box */}
                      <div className="p-6 sm:p-10 relative bg-gradient-to-br from-purple-50/80 via-white to-sky-50/80 flex flex-col justify-between">
                        <div>
                          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6 bg-purple-600 text-white shadow-md shadow-purple-500/20">
                            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                            <span>Eng Hamyonbop Narx</span>
                          </div>

                          <div className="mb-3 flex items-baseline gap-3">
                            <span className="text-5xl sm:text-6xl font-black shimmer-text-light tracking-tight">
                              80%
                            </span>
                            <span className="text-xl font-extrabold text-purple-700">
                              tejash
                            </span>
                          </div>

                          <div className="mb-2">
                            <h3 className="text-2xl font-black text-slate-900">
                              18 Oylik To'liq Kirish
                            </h3>
                          </div>
                          <p className="text-sm font-medium text-slate-600 mb-6">
                            Barcha premium funksiyalar — bir martalik qulay narx
                          </p>

                          {/* Feature Badges */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {[
                              { label: 'Gemini 3 Pro', icon: <IconCheck className="w-3.5 h-3.5 text-purple-600 font-black" /> },
                              { label: 'Google Flow', icon: <IconCheck className="w-3.5 h-3.5 text-purple-600 font-black" /> },
                              { label: '5 TB Drive', icon: <IconCheck className="w-3.5 h-3.5 text-purple-600 font-black" /> },
                              { label: '+6 imkoniyat', icon: <IconCheck className="w-3.5 h-3.5 text-purple-600 font-black" /> }
                            ].map((tag) => (
                              <span
                                key={tag.label}
                                className="text-xs font-bold px-3 py-1.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200 flex items-center gap-1 shadow-sm"
                              >
                                {tag.icon}
                                <span>{tag.label}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA button inside Hero pricing card */}
                        <div>
                          <button
                            onClick={() => setIsOrderModalOpen(true)}
                            className="w-full neon-glow-btn py-4 rounded-xl font-black text-base sm:text-lg flex items-center justify-center gap-3 cursor-pointer shadow-xl"
                          >
                            <IconZap className="w-5 h-5 text-amber-300" />
                            <span>18 Oylik Obunani Ulash</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Subtext under hero pricing block */}
                <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 mt-4">
                  Hech qanday yashirin to'lovlar yo'q · Bir marta to'lash · Darhol faollashtirish
                </p>
              </div>

              {/* Trust Badges Row (with Modern SVGs) */}
              <div className="mt-8 max-w-5xl mx-auto">
                <div className="neon-glass rounded-2xl px-6 py-4 border border-purple-200 shadow-md">
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                    {trustBadges.map((b, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 border border-purple-300 flex items-center justify-center">
                          {b.type === 'check' && <IconCheck className="w-3.5 h-3.5" />}
                          {b.type === 'bolt' && <IconZap className="w-3.5 h-3.5" />}
                          {b.type === 'card' && <IconCreditCard className="w-3.5 h-3.5" />}
                          {b.type === 'phone' && <IconPhone className="w-3.5 h-3.5" />}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-700">
                          {b.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── FEATURES GRID SECTION ── */}
            <section id="features-grid" className="pt-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                  Google AI Pro — Barcha Kengaytirilgan Asboblar
                </h2>
                <p className="text-slate-600 font-medium max-w-2xl mx-auto text-sm sm:text-base">
                  Barcha sun'iy intellekt modellariga 18 oy davomida to'liq rasmiy ruxsat va limitlar
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuresList.map((f) => (
                  <div
                    key={f.id}
                    className="neon-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between cursor-pointer"
                    onClick={() => setCurrentView('details')}
                  >
                    <div>
                      {/* Badge */}
                      <div className="mb-4 flex items-center justify-between">
                        <span className={`inline-flex items-center text-xs font-extrabold px-3 py-1 rounded-full border ${f.badgeBg}`}>
                          {f.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-400">{f.metrics}</span>
                      </div>

                      {/* Icon + Title */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black flex-shrink-0">
                          {renderFeatureIcon(f.icon, "w-5 h-5")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 leading-tight">
                            {f.title}
                          </h3>
                          <p className="text-xs font-semibold text-purple-700 mt-0.5">
                            {f.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {f.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-700 flex items-center gap-1 group-hover:underline">
                        <span>Batafsil ko'rish</span>
                        <span>➔</span>
                      </span>
                      <span className="text-xs text-slate-400 font-medium">18 Oylik</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* View details button */}
              <div className="text-center mt-10">
                <button
                  onClick={() => setCurrentView('details')}
                  className="neon-glow-btn-outline px-8 py-3.5 rounded-2xl font-extrabold text-sm sm:text-base inline-flex items-center gap-2 cursor-pointer"
                >
                  <IconInfo className="w-5 h-5 text-sky-600" />
                  <span>Barcha Imkoniyatlar Haqida Batafsil Sahifaga O'tish</span>
                </button>
              </div>
            </section>

            {/* ── TESTIMONIALS SECTION ── */}
            <section className="neon-glass-strong rounded-3xl p-8 sm:p-12 border border-purple-200">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  Foydalanuvchilarimiz Fikrlari
                </h2>
                <p className="text-slate-600 font-medium text-sm">
                  O'zbekistondagi dasturchilar va kontent meykashlar nima deyishadi?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="bg-white/90 p-6 rounded-2xl border border-purple-100 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                          <p className="text-xs text-purple-700 font-medium">{t.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed italic mb-4">
                        "{t.comment}"
                      </p>
                    </div>
                    <div className="flex items-center text-amber-400 text-sm">
                      {"★".repeat(t.rating)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ SECTION ── */}
            <section id="faq-section" className="pt-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                  Tez-Tez Beriladigan Savollar (FAQ)
                </h2>
                <p className="text-slate-600 font-medium text-sm sm:text-base">
                  Google AI Pro obunasi bo'yicha barcha savollaringizga aniq javoblar
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="neon-card rounded-2xl overflow-hidden border border-purple-200/80 transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-purple-50/50"
                    >
                      <span className="text-base sm:text-lg">{faq.question}</span>
                      <span className={`w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm transition-transform ${openFaqIndex === index ? 'rotate-180 bg-purple-600 text-white' : ''}`}>
                        ↓
                      </span>
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-purple-100 pt-4 bg-white/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ── FOOTER CTA ── */}
            <section className="text-center py-8">
              <div className="neon-glass-strong rounded-3xl p-8 sm:p-12 border-2 border-purple-300 max-w-4xl mx-auto shadow-2xl">
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4">
                  18 Oylik Google AI Pro Obunasini Hoziroq Ulash
                </h2>
                <p className="text-slate-600 font-medium text-base mb-8 max-w-xl mx-auto">
                  Rasmiy narxdan 80% arzonroq va 5 TB bulutli xotiraga ega bo'ling. 5 daqiqada faollashtirish.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="neon-glow-btn px-8 py-4 rounded-2xl font-black text-base sm:text-lg cursor-pointer flex items-center gap-2"
                  >
                    <IconZap className="w-5 h-5 text-amber-300" />
                    <span>18 Oylik Obunani Ulash</span>
                  </button>
                  {/* FLASHING CONTACT BUTTON */}
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="neon-flashing-btn px-8 py-4 rounded-2xl font-extrabold text-base cursor-pointer flex items-center gap-2"
                  >
                    <IconPhone className="w-5 h-5 animate-bounce" />
                    <span>Qo'llab-quvvatlash bilan bog'lanish</span>
                  </button>
                </div>
              </div>
            </section>

          </div>
        ) : (
          /* ========================================================= */
          /*                     DETAILS PAGE VIEW                     */
          /* ========================================================= */
          <div className="space-y-12">
            
            {/* Back Button & Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-200 pb-6">
              <div>
                <button
                  onClick={() => setCurrentView('home')}
                  className="neon-glow-btn-secondary px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-2 mb-3 cursor-pointer"
                >
                  <span>←</span>
                  <span>Bosh Sahifaga Qaytish</span>
                </button>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900">
                  Google AI Pro — To'liq Imkoniyatlar va Qo'llanma
                </h1>
                <p className="text-slate-600 font-medium text-sm sm:text-base mt-1">
                  18 Oylik obunaga kiritilgan barcha modellar, limitlar va taqqoslash jadvali
                </p>
              </div>
              <div>
                <button
                  onClick={() => setIsOrderModalOpen(true)}
                  className="neon-glow-btn px-6 py-3 rounded-xl font-bold text-sm cursor-pointer whitespace-nowrap flex items-center gap-2"
                >
                  <IconZap className="w-4 h-4" />
                  <span>Obunani Ulash</span>
                </button>
              </div>
            </div>

            {/* Detailed Feature Breakdown Cards */}
            <section className="space-y-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-l-4 border-purple-600 pl-4">
                1. Sun'iy Intellekt Vositalarining Batafsil Tahlili
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuresList.map((feature) => (
                  <div key={feature.id} className="neon-glass rounded-2xl p-6 border border-purple-200/90 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black">
                        {renderFeatureIcon(feature.icon, "w-5 h-5")}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${feature.badgeBg}`}>
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-xs font-semibold text-purple-700 mb-3">{feature.subtitle}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature.description}</p>

                    <div className="space-y-2 bg-purple-50/70 p-4 rounded-xl border border-purple-100">
                      <h4 className="text-xs font-bold text-purple-900 uppercase tracking-wider">Asosiy hususiyatlari:</h4>
                      <ul className="space-y-1.5">
                        {feature.fullDetails.map((detail, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                            <IconCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Side-by-Side Comparison Matrix */}
            <section className="neon-glass-strong rounded-3xl p-6 sm:p-10 border border-purple-200/90">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 border-l-4 border-purple-600 pl-4">
                2. Taqqoslash Jadvali: Bepul vs Rasmiy vs Bizning Taklif
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-purple-200 text-xs sm:text-sm text-slate-700 uppercase font-extrabold">
                      <th className="py-4 px-4">Xususiyat / Tarif</th>
                      <th className="py-4 px-4 text-slate-400">Bepul Gemini</th>
                      <th className="py-4 px-4 text-red-500">Rasmiy Obuna ($19.99/oy)</th>
                      <th className="py-4 px-4 text-purple-700 bg-purple-100/80 rounded-t-xl">Bizning 18 Oylik Taklif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100 text-xs sm:text-sm font-medium">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Gemini 3 Pro Modeli</td>
                      <td className="py-3.5 px-4 text-slate-400">Cheklangan / Flash</td>
                      <td className="py-3.5 px-4 text-slate-700">✓ To'liq kirish</td>
                      <td className="py-3.5 px-4 font-bold text-purple-800 bg-purple-50/60">✓ 18 Oy To'liq Kirish</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Bulutli Xotira (Google Drive)</td>
                      <td className="py-3.5 px-4 text-slate-400">15 GB</td>
                      <td className="py-3.5 px-4 text-slate-700">2 TB xotira</td>
                      <td className="py-3.5 px-4 font-bold text-purple-800 bg-purple-50/60">✓ 5 TB (5,000 GB) Ulkan Xotira</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Google Flow & Video Credits</td>
                      <td className="py-3.5 px-4 text-slate-400">Mavjud emas</td>
                      <td className="py-3.5 px-4 text-slate-700">Cheklangan</td>
                      <td className="py-3.5 px-4 font-bold text-purple-800 bg-purple-50/60">✓ 1,000 AI Credits</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Gemini Notebook Audio Overviews</td>
                      <td className="py-3.5 px-4 text-slate-400">1x Standart</td>
                      <td className="py-3.5 px-4 text-slate-700">5x Kengaytirilgan</td>
                      <td className="py-3.5 px-4 font-bold text-purple-800 bg-purple-50/60">✓ 5x Maxsus Podkastlar</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Jami 18 Oylik Xarajat</td>
                      <td className="py-3.5 px-4 text-slate-400">$0</td>
                      <td className="py-3.5 px-4 text-red-600 font-bold">$360+ ($19.99 × 18)</td>
                      <td className="py-3.5 px-4 font-black text-purple-900 bg-purple-100/90 rounded-b-xl text-base">
                        80% Tejash — Qulay narx!
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Connect Step-by-Step */}
            <section className="neon-glass rounded-3xl p-6 sm:p-10 border border-purple-200">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 border-l-4 border-purple-600 pl-4">
                3. Obunani Ulash Bosqichlari (Qanday ulanadi?)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: "01", title: "Formani To'ldiring", desc: "Tugmani bosib, ismingiz va Telegram/telefon raqamingizni kiriting." },
                  { step: "02", title: "To'lov Usulini Tanlang", desc: "Click, Payme, Uzcard yoki Humo orqali to'lovni tasdiqlang." },
                  { step: "03", title: "Faollashtirish Kodi", desc: "Operatorimiz sizning Google pochtangizga rasmiy taklifnoma yuboradi." },
                  { step: "04", title: "Tayyor!", desc: "18 oy davomida 5 TB xotira va barcha AI funksiyalardan rohatlaning." },
                ].map((st, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm relative">
                    <span className="text-3xl font-black text-purple-300 block mb-2">{st.step}</span>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{st.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom Actions */}
            <div className="text-center py-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="neon-glow-btn px-8 py-4 rounded-2xl font-black text-base cursor-pointer flex items-center gap-2"
              >
                <IconZap className="w-5 h-5 text-amber-300" />
                <span>Hoziroq Obuna Bo'lish</span>
              </button>
              <button
                onClick={() => setCurrentView('home')}
                className="neon-glow-btn-secondary px-8 py-4 rounded-2xl font-bold text-base cursor-pointer"
              >
                ← Bosh sahifaga qaytish
              </button>
            </div>

          </div>
        )}
      </main>

      {/* ── SUBSCRIBE / ORDER MODAL ── */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="neon-glass-strong bg-white rounded-3xl max-w-2xl w-full border-2 border-purple-300 shadow-2xl relative flex flex-col" style={{ maxHeight: '92vh' }}>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 pt-5 pb-4 border-b border-purple-100 flex-shrink-0">
              <div className="flex items-center gap-2.5 pr-8">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-sky-500 flex items-center justify-center flex-shrink-0">
                  <IconZap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                    18 Oylik Obunaga Ariza Topshiring
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Bir martalik to'lov · 80% Tejash · 5 TB Drive
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold hover:bg-slate-200 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Google Form Embed */}
            <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdHdBjvr-NGo_z43Hl-dP2rUOvNvrlIxCaX1ZhzQmY3Js-hsg/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Google AI Pro Obuna Formasi"
                style={{ display: 'block', minHeight: '520px' }}
              >
                Yuklanmoqda...
              </iframe>
            </div>

            {/* Footer link */}
            <div className="px-5 sm:px-6 py-3 border-t border-purple-100 flex items-center justify-between flex-shrink-0 bg-purple-50/60 rounded-b-3xl">
              <p className="text-[11px] text-slate-500 font-medium">Forma yuklanmasa →</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdHdBjvr-NGo_z43Hl-dP2rUOvNvrlIxCaX1ZhzQmY3Js-hsg/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
              >
                <span>Yangi oynada ochish</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ── CONTACT MODAL ── */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="neon-glass-strong bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border-2 border-purple-300 shadow-2xl relative">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold hover:bg-slate-200"
            >
              ✕
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <IconPhone className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Qo'llab-quvvatlash Xizmati
                </h3>
                <p className="text-xs text-slate-500 font-medium">24/7 Operatorlarimiz tayyor</p>
              </div>
            </div>

            <div className="space-y-3.5 my-6">
              {/* Telegram Handle Box */}
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                    <IconTelegram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-purple-900">Telegram Admin (Tezkor)</p>
                    <a href="https://t.me/Tim1y" target="_blank" rel="noreferrer" className="text-sm font-extrabold text-purple-700 hover:underline">
                      @Tim1y
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText('@Tim1y')
                    showToast("Telegram username (@Tim1y) nusxalandi!")
                  }}
                  className="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold text-xs shadow-sm hover:bg-purple-700 cursor-pointer"
                >
                  Nusxalash
                </button>
              </div>

              {/* Phone Number Box */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center">
                    <IconPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-sky-900">Telefon Raqam</p>
                    <a href="tel:+998900979787" className="text-sm font-extrabold text-sky-700 hover:underline">
                      +998 90 097 97 87
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText('+998900979787')
                    showToast("Raqam (+998900979787) nusxalandi!")
                  }}
                  className="px-3 py-1.5 rounded-lg bg-sky-600 text-white font-bold text-xs shadow-sm hover:bg-sky-700 cursor-pointer"
                >
                  Nusxalash
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://t.me/Tim1y"
                target="_blank"
                rel="noreferrer"
                className="neon-flashing-btn py-3.5 rounded-xl font-extrabold text-sm text-center flex items-center justify-center gap-2"
              >
                <IconTelegram className="w-4 h-4" />
                <span>Telegram orqali yozish (@Tim1y)</span>
              </a>
              <a
                href="tel:+998900979787"
                className="neon-glow-btn-outline py-3.5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2"
              >
                <IconPhone className="w-4 h-4" />
                <span>Qo'ng'iroq qilish (+998 90 097 97 87)</span>
              </a>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="neon-glow-btn-secondary py-2.5 rounded-xl font-bold text-sm mt-1"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer className="border-t border-purple-200/80 bg-white/70 backdrop-blur-md py-8 mt-16 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-slate-900">Google AI Pro Uzbekistan</span> — Telegram: <a href="https://t.me/Tim1y" className="text-purple-700 font-bold hover:underline">@Tim1y</a> | Tel: <a href="tel:+998900979787" className="text-purple-700 font-bold hover:underline">+998 90 097 97 87</a>
          </div>
          <div className="flex items-center gap-4 font-semibold text-purple-700">
            <button onClick={() => setCurrentView('home')} className="hover:underline">Bosh sahifa</button>
            <button onClick={() => setCurrentView('details')} className="hover:underline">Batafsil Ma'lumot</button>
            <button onClick={() => setIsContactModalOpen(true)} className="hover:underline">Bog'lanish</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
