import { useState } from 'react'

const features = [
  {
    icon: '✦',
    badge: '4x Yuqori Limit',
    badgeColor: 'from-violet-500 to-purple-600',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    borderGlow: 'rgba(139, 92, 246, 0.2)',
    title: 'Gemini App',
    subtitle: 'Video Generatsiya',
    description:
      "Tepasiz tezlik va cheklovlarsiz muloqot. Yuqori aniqlikdagi video va matnlarni bir zumda yarating.",
  },
  {
    icon: '◈',
    badge: 'Creative Studio',
    badgeColor: 'from-fuchsia-500 to-pink-600',
    glowColor: 'rgba(217, 70, 239, 0.3)',
    borderGlow: 'rgba(217, 70, 239, 0.2)',
    title: 'Google Flow',
    subtitle: '1,000 AI Credits',
    description:
      "Kino darajasidagi lavhalar va vizual vizualizatsiyalar. Gemini Omni Flash va maxsus AI stsenariylar bilan ishlash uchun 1,000 credit.",
  },
  {
    icon: '⬡',
    badge: 'Gemini 3 Pro & Deep Search',
    badgeColor: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    borderGlow: 'rgba(59, 130, 246, 0.2)',
    title: 'Kengaytirilgan Search',
    subtitle: 'AI Agentlar',
    description:
      "Chuqurlashtirilgan qidiruv, murakkab tahlil va avtonom AI agentlarining eng so'nggi imkoniyatlari.",
  },
  {
    icon: '◎',
    badge: 'Agentic Dev Platform',
    badgeColor: 'from-indigo-500 to-violet-600',
    glowColor: 'rgba(99, 102, 241, 0.3)',
    borderGlow: 'rgba(99, 102, 241, 0.2)',
    title: 'Google Antigravity',
    subtitle: 'Dasturchi Platformasi',
    description:
      "Dasturchilar va avtomatlashtirish uchun agent modellariga kirish huquqi va yuqori limitlar.",
  },
  {
    icon: '❋',
    badge: '5x Audio Overviews',
    badgeColor: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.3)',
    borderGlow: 'rgba(16, 185, 129, 0.2)',
    title: 'Gemini Notebook',
    subtitle: 'Tadqiqot & Analitika',
    description:
      "O'quv va ilmiy manbalar bilan ishlash, audio-xulosalar tayyorlash va aqlli daftarlar yuritish uchun 5 barobar ko'p imkoniyat.",
  },
  {
    icon: '◉',
    badge: 'Gmail, Docs, Vids & 5 TB Drive',
    badgeColor: 'from-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.3)',
    borderGlow: 'rgba(245, 158, 11, 0.2)',
    title: 'Google Apps & 5 TB',
    subtitle: 'Bulutli Xotira',
    description:
      "Google xizmatlari ichida bevosita AI yordamchi hamda Photos, Drive va Gmail uchun ulkan 5 TB bulutli xotira.",
  },
]

const trustBadges = [
  { icon: '✓', label: '100% Kafolat' },
  { icon: '⚡', label: 'Tezkor Ulanish' },
  { icon: '💳', label: 'Uzcard' },
  { icon: '💳', label: 'Humo' },
  { icon: '📱', label: 'Click' },
  { icon: '📱', label: 'Payme' },
]

export default function App() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg, #08010f 0%, #0d0118 40%, #090112 100%)' }}
    >
      {/* Ambient background orbs */}
      <div
        className="orb pointer-events-none fixed"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 70%)',
          top: -200,
          left: -200,
          zIndex: 0,
        }}
      />
      <div
        className="orb pointer-events-none fixed"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)',
          top: '20%',
          right: -150,
          zIndex: 0,
          animationDelay: '2s',
        }}
      />
      <div
        className="orb pointer-events-none fixed"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)',
          bottom: '10%',
          left: '30%',
          zIndex: 0,
          animationDelay: '1s',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* ── HEADER ── */}
        <div className="text-center mb-16 sm:mb-24">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div
              className="glass rounded-full px-5 py-2 flex items-center gap-2"
              style={{ border: '1px solid rgba(168,85,247,0.3)' }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{
                  background: '#a855f7',
                  boxShadow: '0 0 8px #a855f7',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }}
              />
              <span
                className="text-xs sm:text-sm font-semibold tracking-widest uppercase"
                style={{ color: '#c084fc', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                18 Oylik Eksklyuziv Taklif — Google AI Pro
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 px-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            <span className="glow-text">Ish va Ijodkorlik Uchun</span>
            <br />
            <span style={{ color: '#f0e6ff' }}>Cheksiz Sun'iy Intellekt</span>
            <br />
            <span className="glow-text-magenta">Imkoniyatlari</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-xl max-w-2xl mx-auto leading-relaxed px-2"
            style={{ color: 'rgba(196,181,253,0.75)', fontFamily: "'Inter', sans-serif" }}
          >
            Gemini 3 Pro, Google Flow va{' '}
            <span style={{ color: '#c084fc', fontWeight: 600 }}>5 TB xotirani</span> rasmiy
            narxdan bir necha baravar arzonroq qo'lga kiriting.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <div
              className="h-px flex-1 max-w-24"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4))' }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: '#a855f7', boxShadow: '0 0 12px #a855f7' }}
            />
            <div
              className="h-px flex-1 max-w-24"
              style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.4), transparent)' }}
            />
          </div>
        </div>

        {/* ── FEATURES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass card-hover rounded-2xl p-6 relative overflow-hidden cursor-default"
              style={{
                border: `1px solid ${hovered === i ? f.borderGlow.replace('0.2', '0.45') : 'rgba(255,255,255,0.07)'}`,
                boxShadow: hovered === i ? `0 20px 60px ${f.glowColor}, inset 0 1px 0 rgba(255,255,255,0.08)` : 'none',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card inner glow spot */}
              <div
                className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${f.glowColor} 0%, transparent 70%)`,
                  opacity: hovered === i ? 1 : 0.4,
                  transition: 'opacity 0.35s ease',
                }}
              />

              {/* Badge */}
              <div className="mb-4">
                <span
                  className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${f.badgeColor}`}
                  style={{ color: '#fff', letterSpacing: '0.03em' }}
                >
                  {f.badge}
                </span>
              </div>

              {/* Icon + Title */}
              <div className="flex items-start gap-3 mb-3">
                <span
                  className="text-2xl mt-0.5 flex-shrink-0"
                  style={{ color: f.glowColor.replace('0.3', '1').replace('rgba', 'rgb').replace(', 0.3)', ')') }}
                >
                  {f.icon}
                </span>
                <div>
                  <h3
                    className="text-lg font-bold leading-tight"
                    style={{
                      color: '#f0e6ff',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-xs font-semibold mt-0.5"
                    style={{ color: 'rgba(196,181,253,0.6)' }}
                  >
                    {f.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(196,181,253,0.65)', fontFamily: "'Inter', sans-serif" }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── PRICING COMPARISON ── */}
        <div
          className="glass-strong rounded-3xl p-1 mb-14"
          style={{
            background: 'linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(14,165,233,0.08) 100%)',
            border: '1px solid rgba(168,85,247,0.2)',
            boxShadow: '0 32px 80px rgba(109,40,217,0.2)',
          }}
        >
          <div className="rounded-[22px] overflow-hidden" style={{ background: 'rgba(8,1,15,0.7)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Official price */}
              <div
                className="p-8 sm:p-10 relative"
                style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(196,181,253,0.5)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  Rasmiy Narx
                </div>

                <div className="mb-4">
                  <span
                    className="text-5xl font-extrabold"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: 'rgba(196,181,253,0.35)',
                      textDecoration: 'line-through',
                      textDecorationColor: 'rgba(239,68,68,0.5)',
                    }}
                  >
                    $19.99
                  </span>
                  <span className="text-sm ml-2" style={{ color: 'rgba(196,181,253,0.35)' }}>
                    / oy
                  </span>
                </div>

                <div
                  className="text-2xl font-bold mb-2"
                  style={{ color: 'rgba(196,181,253,0.4)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  $360+ jami
                </div>
                <p className="text-sm" style={{ color: 'rgba(196,181,253,0.3)' }}>
                  18 oylik to'liq to'lov
                </p>

                <div
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.2)',
                    color: '#f87171',
                  }}
                >
                  ✕ Qimmat va uzoq majburiyat
                </div>
              </div>

              {/* Our deal */}
              <div className="p-8 sm:p-10 relative">
                <div
                  className="pointer-events-none absolute inset-0 rounded-r-[22px]"
                  style={{
                    background: 'radial-gradient(ellipse at top right, rgba(109,40,217,0.12) 0%, transparent 60%)',
                  }}
                />

                <div
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(109,40,217,0.4), rgba(14,165,233,0.3))',
                    border: '1px solid rgba(168,85,247,0.4)',
                    color: '#c084fc',
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#a855f7',
                      boxShadow: '0 0 6px #a855f7',
                      display: 'inline-block',
                    }}
                  />
                  Eng Hamyonbop Narx
                </div>

                <div className="mb-3 flex items-end gap-3">
                  <span
                    className="text-5xl sm:text-6xl font-extrabold shimmer-text"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    80%
                  </span>
                  <span
                    className="text-xl font-bold mb-2"
                    style={{ color: '#c084fc' }}
                  >
                    tejash
                  </span>
                </div>

                <div className="mb-1">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: '#f0e6ff', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    18 Oylik To'liq Kirish
                  </span>
                </div>
                <p className="text-sm mb-6" style={{ color: 'rgba(196,181,253,0.55)' }}>
                  Barcha premium funksiyalar — bir martalik qulay narx
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Gemini 3 Pro', 'Google Flow', '5 TB Drive', '+6 imkoniyat'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(168,85,247,0.12)',
                        border: '1px solid rgba(168,85,247,0.25)',
                        color: '#c084fc',
                      }}
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center mb-14">
          <button
            className="btn-glow inline-flex items-center gap-3 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-2xl cursor-pointer border-0 outline-none"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '0.01em',
            }}
          >
            <span
              className="text-xl"
              style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' }}
            >
              ⚡
            </span>
            18 Oylik Obunani Ulash
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <p
            className="mt-4 text-sm"
            style={{ color: 'rgba(196,181,253,0.45)' }}
          >
            Hech qanday yashirin to'lovlar yo'q · Bir marta to'lash · Darhol faollashtirish
          </p>
        </div>

        {/* ── TRUST BADGES ── */}
        <div
          className="glass rounded-2xl px-6 py-5"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {trustBadges.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(109,40,217,0.5), rgba(14,165,233,0.4))',
                    color: '#c084fc',
                    border: '1px solid rgba(168,85,247,0.3)',
                  }}
                >
                  {b.icon}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'rgba(196,181,253,0.7)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FOOTER NOTE ── */}
        <p
          className="text-center text-xs mt-8"
          style={{ color: 'rgba(196,181,253,0.25)', fontFamily: "'Inter', sans-serif" }}
        >
          Google AI Pro rasmiy litsenziyasi · O'zbekiston bo'yicha mahalliy yetkazib berish · 24/7 qo'llab-quvvatlash
        </p>
      </div>
    </div>
  )
}
