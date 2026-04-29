/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   Inline SVG icons (small, hand-drawn style where possible)
   ============================================================ */
const Icon = {
  Check: ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
  ),
  Arrow: ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
  ),
  Play: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M8 5v14l11-7z"/></svg>
  ),
  Star: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2l2.6 6.6L22 9.6l-5.5 4.6L18 22l-6-3.6L6 22l1.5-7.8L2 9.6l7.4-1z"/></svg>
  ),
  Sparkle: ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7zM19 16l.8 2.5L22 19l-2.2.5L19 22l-.8-2.5L16 19l2.2-.5z"/></svg>
  ),
  Squiggle: () => (
    <svg viewBox="0 0 90 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M2 8 Q 12 2, 22 8 T 44 8 T 66 8 T 88 8" /></svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  ),
};

/* ============================================================
   1. Announcement Bar
   ============================================================ */
function AnnouncementBar() {
  return (
    <div style={{ background: 'var(--brown-dark)', color: 'white', fontSize: 14, padding: '10px 0', textAlign: 'center', position: 'relative', zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 16 }}>🚀</span>
        <span style={{ fontWeight: 600 }}>الإصدار الأول متاح الآن — احجز Founder Box واحصل على خصم المؤسسين</span>
        <a href="#pricing" style={{ background: 'var(--primary)', color: 'var(--brown-deep)', padding: '4px 12px', borderRadius: 8, fontWeight: 700, fontSize: 13 }}>احجز دلوقتي ←</a>
      </div>
    </div>
  );
}

/* ============================================================
   2. Header / Navigation
   ============================================================ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: scrolled ? 'rgba(255,250,243,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent',
      transition: 'all .2s ease'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="assets/logo.png" alt="Kids to Lead" style={{ width: 48, height: 48, objectFit: 'contain' }} />
          <div>
            <div className="font-display" style={{ fontWeight: 800, fontSize: 18, color: 'var(--brown-dark)', lineHeight: 1 }}>Kids to Lead</div>
            <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 2 }}>صنّاع المستقبل</div>
          </div>
        </a>
        <nav className="hide-mobile" style={{ display: 'flex', gap: 4 }}>
          <a className="nav-link" href="#pillars">الرحلة</a>
          <a className="nav-link" href="#box">الـ Box</a>
          <a className="nav-link" href="#books">المكتبة</a>
          <a className="nav-link" href="#app">التطبيق</a>
          <a className="nav-link" href="#pricing">الأسعار</a>
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a href="#" className="nav-link hide-mobile">دخول</a>
          <a href="#pricing" className="btn btn-primary btn-sm">اطلب الـ Box</a>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   3. Hero
   ============================================================ */
function HeroSection() {
  return (
    <section style={{ paddingTop: 56, paddingBottom: 96, position: 'relative', overflow: 'hidden' }}>
      {/* decorative dots */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} className="dot-grid"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)', gap: 56, alignItems: 'center' }} className="hero-grid">
          {/* LEFT */}
          <div>
            <span className="badge" style={{ marginBottom: 24 }}>
              <span className="badge-dot"></span>
              جديد · للأطفال من 10 لـ 13
            </span>
            <h1 style={{ fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(40px, 5.6vw, 72px)', fontWeight: 800, lineHeight: 1.18, color: 'var(--ink)', marginBottom: 24, letterSpacing: '-0.01em' }}>
              أول رحلة بيزنس<br/>لـ <span className="hl-underline">صنّاع المستقبل</span> من سن 10
            </h1>
            <p style={{ fontSize: 19, color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: 540, marginBottom: 36 }}>
              نظام متكامل بيخلّي ابنك يفكّر زي رائد أعمال حقيقي — Founder Box في إيده،
              مكتبة كتب بتغذّي خياله، وتطبيق Founder Quest بيحوّل القرارات لمغامرة.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#pricing" className="btn btn-primary btn-lg">
                اطلب الـ Box
                <Icon.Arrow />
              </a>
              <a href="#how" className="btn btn-secondary btn-lg">
                <Icon.Play />
                شوف إزاي يشتغل
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, paddingTop: 32, borderTop: '2px dashed var(--hairline-strong)' }} className="stats-grid">
              {[
                { n: '+50', l: 'كارت إرشاد' },
                { n: '8', l: 'كتب مختارة' },
                { n: '7', l: 'شخصيات Founder' },
                { n: '∞', l: 'قرارات حقيقية' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display" style={{ fontSize: 36, fontWeight: 800, color: 'var(--brown-dark)', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 6, fontWeight: 600 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Founder Box visual */}
          <div style={{ position: 'relative', height: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hide-mobile">
            <HeroBox />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 18px !important; }
        }
      `}</style>
    </section>
  );
}

function HeroBox() {
  return (
    <div style={{ position: 'relative', width: 420, height: 460 }}>
      {/* Main box */}
      <div style={{
        position: 'absolute', inset: '20px 20px 20px 20px',
        background: 'linear-gradient(155deg, #FFB73D 0%, #F09E1F 45%, #BF5327 100%)',
        borderRadius: 32,
        transform: 'rotate(-8deg)',
        boxShadow: '14px 14px 0 0 var(--brown-deep), 0 30px 60px -20px rgba(191,83,39,0.5)',
        border: '3px solid var(--brown-deep)',
        padding: 32,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        {/* tape strips */}
        <div style={{ position: 'absolute', top: -14, left: '30%', width: 80, height: 28, background: 'rgba(255,255,255,0.4)', transform: 'rotate(-12deg)', border: '1px dashed rgba(255,255,255,0.6)' }}></div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(255,255,255,0.92)', padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 800, color: 'var(--brown-dark)', letterSpacing: '0.08em' }}>FOUNDER · 01</div>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>📦</div>
          </div>
        </div>

        <div style={{ color: 'white' }}>
          <div className="font-display" style={{ fontSize: 14, fontWeight: 700, opacity: 0.85, marginBottom: 6, letterSpacing: '0.06em' }}>KIDS TO LEAD</div>
          <div style={{ fontFamily: 'Cairo, sans-serif', fontSize: 38, fontWeight: 800, lineHeight: 1.05, marginBottom: 6 }}>Founder Box</div>
          <div style={{ fontSize: 14, opacity: 0.95, fontWeight: 600 }}>كل اللي محتاجه يبدأ رحلته</div>
        </div>

        {/* tiny pattern */}
        <div style={{ position: 'absolute', bottom: 22, left: 22, display: 'flex', gap: 4 }}>
          {[0,1,2,3,4].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.7)' }}></div>)}
        </div>
      </div>

      {/* Mascot peeking */}
      <img src="assets/chick-cheer.png" alt="" style={{ position: 'absolute', top: -30, right: -50, width: 150, height: 150, objectFit: 'contain', zIndex: 3, transform: 'rotate(8deg)' }} className="float-c" loading="lazy"/>

      {/* Floating chip 1 — Duck Bank */}
      <div className="float-a" style={{ position: 'absolute', top: 30, left: -30, background: 'white', borderRadius: 16, padding: '12px 14px', boxShadow: '0 12px 24px -8px rgba(31,26,20,0.2)', border: '2px solid var(--ink)', display: 'flex', gap: 10, alignItems: 'center', zIndex: 4 }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🦆</div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)', fontWeight: 600 }}>Duck Bank</div>
          <div className="font-display" style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)' }}>1,250 <span style={{ fontSize: 11, color: 'var(--brown-dark)' }}>DC</span></div>
        </div>
      </div>

      {/* Floating chip 2 — +50 cards */}
      <div className="float-b" style={{ position: 'absolute', bottom: 70, left: -10, background: 'var(--brown-dark)', color: 'white', borderRadius: 14, padding: '12px 16px', boxShadow: '0 12px 24px -8px rgba(31,26,20,0.3)', display: 'flex', gap: 10, alignItems: 'center', zIndex: 4, transform: 'rotate(3deg)' }}>
        <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brown-deep)', fontWeight: 800, fontSize: 14 }}>50+</div>
        <div>
          <div className="font-display" style={{ fontSize: 14, fontWeight: 700 }}>كارت إرشاد</div>
          <div style={{ fontSize: 11, opacity: 0.7 }}>Mentor Cards</div>
        </div>
      </div>

      {/* Floating chip 3 — Founder Quest */}
      <div className="float-c" style={{ position: 'absolute', bottom: -10, right: 20, background: 'white', borderRadius: 14, padding: '12px 16px', boxShadow: '0 12px 24px -8px rgba(31,26,20,0.2)', border: '2px solid var(--primary)', display: 'flex', gap: 10, alignItems: 'center', zIndex: 4, transform: 'rotate(-4deg)' }}>
        <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--brown-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: 16 }}>📱</div>
        <div>
          <div className="font-display" style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>Founder Quest</div>
          <div style={{ fontSize: 11, color: 'var(--ink-muted)' }}>اللعبة الحقيقية</div>
        </div>
      </div>

      {/* Decorative star */}
      <div style={{ position: 'absolute', top: -10, right: 90, color: 'var(--primary)', transform: 'rotate(15deg)' }}>
        <Icon.Sparkle size={32} />
      </div>
      <div style={{ position: 'absolute', bottom: 50, right: -10, color: 'var(--brown)', transform: 'rotate(-10deg)' }}>
        <Icon.Sparkle size={20} />
      </div>
    </div>
  );
}

/* ============================================================
   4. Social Proof Bar (marquee)
   ============================================================ */
function SocialProofBar() {
  const items = [
    { icon: '👨‍👩‍👧', text: 'بنو على أيدي أهل خبرة في ريادة الأعمال' },
    { icon: '🇪🇬', text: 'محتوى عربي أصلي · باللهجة المصرية' },
    { icon: '🛡️', text: 'موافق عليه من خبراء تربية الأطفال' },
    { icon: '⭐', text: '4.9/5 من تقييم أول 200 عيلة جربوا الـ Box' },
  ];
  const all = [...items, ...items, ...items];
  return (
    <div style={{ background: 'var(--brown-deep)', color: 'white', padding: '22px 0', overflow: 'hidden' }}>
      <div className="marquee">
        <div className="marquee-track">
          {all.map((it, i) => (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0, fontSize: 16, fontWeight: 600 }}>
                <span style={{ fontSize: 20 }}>{it.icon}</span>
                <span>{it.text}</span>
              </div>
              <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Icon.Star size={14} /></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   5. System Pillars (3 pillars)
   ============================================================ */
function SystemPillars() {
  const pillars = [
    {
      n: '01', icon: '📦', tilt: -1.6,
      title: 'Founder Box',
      sub: 'صندوق فعلي بيوصل لباب البيت',
      features: ['+50 كارت إرشاد (Mentor Cards)', 'دفتر الـ Founder الشخصي', 'كارت هوية مؤسس وعملات DuckCoins', 'أكتيفيتيز عملية مع الأهل'],
    },
    {
      n: '02', icon: '📚', tilt: 1.2,
      title: 'Books Library',
      sub: 'مكتبة قصص بتغذّي خيال صانع المستقبل',
      features: ['8 كتب مختارة بعناية', 'قصص أبطال ريادة أعمال صغار', 'مناسبة لسن من 10 لـ 13', 'تحديث جديد كل شهرين'],
    },
    {
      n: '03', icon: '📱', tilt: -1,
      title: 'Founder Quest App',
      sub: 'لعبة حقيقية بنفس قواعد البيزنس',
      features: ['Duck Bank لإدارة الفلوس', 'مساعد ذكي اسمه Bella', 'تحديات يومية وقرارات', 'شخصيات Founder سبعة'],
    },
  ];

  return (
    <section id="pillars" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow">النظام الكامل</span>
          <h2 className="h2" style={{ marginBottom: 18 }}>
            3 أركان لرحلة <span style={{ color: 'var(--brown-dark)' }}>الـ Founder</span> الصغير
          </h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            مش بس تطبيق ولا بس بوكس — نظام هجين بيدمج اللعب الفعلي مع التكنولوجيا
            عشان الطفل يعيش التجربة من كل اتجاه.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={i} className="card card-hover" style={{ transform: `rotate(${p.tilt}deg)`, position: 'relative', overflow: 'hidden' }}>
              {/* faded huge number */}
              <div className="font-display" style={{
                position: 'absolute', top: -16, insetInlineEnd: -8,
                fontSize: 160, fontWeight: 800, color: 'var(--primary-soft)',
                opacity: 0.7, lineHeight: 1, pointerEvents: 'none', userSelect: 'none'
              }}>{p.n}</div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--bg-cream)', border: '2px solid var(--hairline-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 20 }}>{p.icon}</div>
                <h3 className="font-display" style={{ fontSize: 26, fontWeight: 800, color: 'var(--ink)', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', marginBottom: 22, lineHeight: 1.6 }}>{p.sub}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--ink)', fontWeight: 500 }}>
                      <span style={{ color: 'var(--brown-dark)', flexShrink: 0, marginTop: 2 }}><Icon.Check size={16} /></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   6. Box Detail
   ============================================================ */
function BoxDetail() {
  const items = [
    { icon: '🃏', title: 'Mentor Cards', sub: '+50 كارت إرشاد', tilt: -2, bg: '#FFF5DC' },
    { icon: '📓', title: 'Founder Journal', sub: 'دفتر بيتكتب فيه الرحلة', tilt: 1.5, bg: '#FFE6D0' },
    { icon: '🎫', title: 'Founder ID', sub: 'كارت هوية شخصي', tilt: -1, bg: '#F7E8DD' },
    { icon: '💰', title: 'DuckCoins', sub: '50 عملة لبدء الرحلة', tilt: 2, bg: '#FFEBC2' },
  ];
  return (
    <section id="box" className="section" style={{ background: 'var(--bg-cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="box-grid">
          {/* LEFT — 2x2 box items grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, position: 'relative' }}>
            {items.map((it, i) => (
              <div key={i} className="sticker" style={{ background: it.bg, transform: `rotate(${it.tilt}deg)`, borderColor: 'var(--hairline-strong)' }}>
                <div style={{ fontSize: 38, marginBottom: 14 }}>{it.icon}</div>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink)', marginBottom: 4 }}>{it.title}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{it.sub}</div>
                <div style={{ position: 'absolute', top: 12, insetInlineEnd: 12, fontSize: 11, color: 'var(--brown)', fontWeight: 700 }}>0{i+1}</div>
              </div>
            ))}
            {/* tiny dashed connector */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', opacity: 0.3 }}>
                <path d="M25,25 Q50,50 75,25 M25,75 Q50,50 75,75" stroke="var(--brown)" strokeWidth="0.4" fill="none" strokeDasharray="2,2"/>
              </svg>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="eyebrow">داخل الـ Box</span>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              Founder Box —<br/>أول خطوة في <span className="hl-underline">الرحلة</span>
            </h2>
            <p className="lede" style={{ marginBottom: 36 }}>
              صندوق محسوس يخلّي ابنك يحس إن الرحلة بدأت فعلاً. مش لعبة، مش كتاب —
              ده الـ Toolkit الكامل لـ Founder صغير.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 36 }}>
              {[
                { n: '1', t: 'افتح الصندوق', d: 'هيلاقي كارت ترحيب شخصي وكوبون لتفعيل التطبيق.' },
                { n: '2', t: 'ابدأ بأول كارت', d: 'كل كارت بيقدّم تحدّي حقيقي يقدر يطبّقه دلوقتي.' },
                { n: '3', t: 'حوّل الإنجاز لـ DuckCoins', d: 'كل تحدي مكتمل = عملات في Duck Bank بتاعه.' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div className="step-num">{s.n}</div>
                  <div style={{ paddingTop: 4 }}>
                    <div className="font-display" style={{ fontSize: 19, fontWeight: 800, color: 'var(--ink)', marginBottom: 4 }}>{s.t}</div>
                    <div style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#pricing" className="btn btn-primary btn-lg">
              احجز الـ Box · 1,499 ج.م
              <Icon.Arrow />
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .box-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   7. Book Grid
   ============================================================ */
function BookGrid() {
  const books = [
    { title: 'الفكرة اللي اتغيرت العالم', age: '10-11', price: '180', grad: 'linear-gradient(160deg, #BF5327, #8E3A18)', mascot: 'chick-read.png', tilt: -1.5 },
    { title: 'مغامرة Bella في السوق', age: '10-12', price: '180', grad: 'linear-gradient(160deg, #F09E1F, #BF5327)', mascot: 'chick-shout.png', tilt: 1 },
    { title: 'كيف تبيع لمّيت غريب', age: '11-13', price: '180', grad: 'linear-gradient(160deg, #6BA368, #3F6B3D)', mascot: 'chick-point.png', tilt: -0.5 },
    { title: 'Duck Bank · أسرار الفلوس', age: '12-13', price: '180', grad: 'linear-gradient(160deg, #4A8B95, #2C5D65)', mascot: 'chick-read2.png', tilt: 1.5 },
  ];
  return (
    <section id="books" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="eyebrow">المكتبة</span>
            <h2 className="h2" style={{ marginBottom: 14 }}>
              كتب بتغذّي <span className="hl-underline dashed">خيال</span> الـ Founder
            </h2>
            <p className="lede">قصص أبطالها أطفال زيهم — بيواجهوا قرارات حقيقية في عالم البيزنس.</p>
          </div>
          <a href="#" className="btn btn-ghost">شوف المكتبة كاملة <Icon.Arrow size={16}/></a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }} className="books-grid">
          {books.map((b, i) => (
            <div key={i}>
              <div className="book" style={{ background: b.grad, transform: `rotate(${b.tilt}deg)` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ background: 'rgba(255,255,255,0.92)', color: 'var(--brown-dark)', fontSize: 11, fontWeight: 800, padding: '4px 9px', borderRadius: 6, letterSpacing: '0.04em' }}>سن {b.age}</span>
                  <div className="font-display" style={{ fontSize: 11, fontWeight: 800, opacity: 0.7, letterSpacing: '0.1em' }}>K2L · 0{i+1}</div>
                </div>
                <img src={`assets/${b.mascot}`} alt="" style={{ position: 'absolute', bottom: 56, insetInlineStart: '50%', transform: 'translateX(-50%)', width: 120, height: 120, objectFit: 'contain', opacity: 0.95 }} loading="lazy"/>
                <div>
                  <div className="font-display" style={{ fontSize: 11, fontWeight: 700, opacity: 0.8, letterSpacing: '0.06em', marginBottom: 6 }}>KIDS TO LEAD</div>
                  <div style={{ fontFamily: 'Cairo, sans-serif', fontSize: 18, fontWeight: 800, lineHeight: 1.25 }}>{b.title}</div>
                </div>
              </div>
              <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{b.price} <span style={{ fontSize: 12, color: 'var(--ink-muted)', fontWeight: 500 }}>ج.م</span></div>
                <button className="btn btn-sm btn-secondary">أضف للسلة</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .books-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   8. Founder Quest App Preview
   ============================================================ */
function FounderQuestPreview() {
  return (
    <section id="app" className="section" style={{ background: 'var(--brown-deep)', color: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* bg dots */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="app-grid">
          {/* LEFT — phone */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PhoneMockup />
          </div>

          {/* RIGHT */}
          <div>
            <span className="eyebrow" style={{ color: 'var(--primary)' }}>التطبيق</span>
            <h2 className="h2" style={{ marginBottom: 18, color: 'white' }}>
              Founder Quest —<br/>اللعبة <span className="hl-underline" style={{ color: 'var(--brown-deep)' }}>الحقيقية</span>
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', marginBottom: 40, maxWidth: 480, lineHeight: 1.7 }}>
              التطبيق هو امتداد رقمي للـ Box. كل قرار في اللعبة بيأثر على فلوس Founder الصغير،
              وعلى الشخصية اللي بيختارها يكون.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { icon: '🦆', title: 'Duck Bank', desc: 'إدارة فلوس بطريقة لعبة — DuckCoins بتزيد لما يخلّص تحديات.' },
                { icon: '🃏', title: 'Mentor Cards', desc: 'كل أسبوع كارت جديد بيظهر — قرار، تحدي، مكافأة.' },
                { icon: '🤖', title: 'Bella · المساعد الذكي', desc: 'بطّة ذكية بترد على أسئلته وتساعده في القرارات الصعبة.' },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: 20, background: 'rgba(255,255,255,0.06)', borderRadius: 18, border: '1.5px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--primary)', color: 'var(--brown-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <div className="font-display" style={{ fontSize: 19, fontWeight: 800, marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .app-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="phone-frame" style={{ transform: 'rotate(-6deg)' }}>
        <div className="phone-notch"></div>
        <div className="phone-screen">
          {/* status bar */}
          <div style={{ padding: '52px 22px 0', display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: 'var(--ink)' }}>
            <span>9:41</span>
            <span>● ● ●</span>
          </div>

          {/* greeting */}
          <div style={{ padding: '20px 22px 14px' }}>
            <div style={{ fontSize: 12, color: 'var(--ink-muted)', fontWeight: 600 }}>أهلاً يا Founder،</div>
            <div className="font-display" style={{ fontSize: 22, fontWeight: 800, color: 'var(--ink)' }}>عمر 👋</div>
          </div>

          {/* Duck Bank balance card */}
          <div style={{ margin: '8px 22px 20px', background: 'linear-gradient(135deg, var(--primary), var(--brown-dark))', borderRadius: 22, padding: 18, color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -8, insetInlineEnd: -8, fontSize: 60, opacity: 0.18 }}>🦆</div>
            <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.9, letterSpacing: '0.06em', marginBottom: 4 }}>DUCK BANK</div>
            <div className="font-display" style={{ fontSize: 32, fontWeight: 800, lineHeight: 1, marginBottom: 4 }}>1,250 <span style={{ fontSize: 14 }}>DC</span></div>
            <div style={{ fontSize: 11, opacity: 0.85 }}>+120 الأسبوع ده ↑</div>
          </div>

          {/* Quest cards */}
          <div style={{ padding: '0 22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div className="font-display" style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>تحديات اليوم</div>
              <span style={{ fontSize: 11, color: 'var(--brown-dark)', fontWeight: 700 }}>3 جديد</span>
            </div>
            {[
              { ic: '🃏', t: 'بيع 3 منتجات لأهل البيت', xp: '+50', bg: '#FFE4B0' },
              { ic: '💡', t: 'فكرة المشروع الأسبوعي', xp: '+80', bg: '#FFD9C4' },
              { ic: '📊', t: 'سجّل مصاريف اليوم', xp: '+30', bg: '#E0EBD9' },
            ].map((q, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 12, background: 'white', border: '1.5px solid var(--hairline)', borderRadius: 14, marginBottom: 10 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: q.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{q.ic}</div>
                <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{q.t}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--brown-dark)', background: 'var(--primary-soft)', padding: '4px 8px', borderRadius: 8 }}>{q.xp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mascot peeking from behind phone */}
      <img src="assets/chick-wave.png" alt="" style={{ position: 'absolute', bottom: -20, insetInlineEnd: -90, width: 160, height: 160, objectFit: 'contain', zIndex: -1 }} className="float-c" loading="lazy"/>
    </div>
  );
}

/* ============================================================
   9. How It Works
   ============================================================ */
function HowItWorks() {
  const steps = [
    { n: '01', icon: '📦', t: 'اطلب الـ Box', d: 'بيوصل لباب البيت في 3 أيام داخل القاهرة، 5 أيام للمحافظات.' },
    { n: '02', icon: '📱', t: 'فعّل التطبيق', d: 'كوبون داخل الصندوق بيفتح حساب Founder Quest كامل.' },
    { n: '03', icon: '🚀', t: 'ابدأ الرحلة', d: 'كل أسبوع كارت جديد، تحدي جديد، فلوس DuckCoins جديدة.' },
  ];
  return (
    <section id="how" className="section" style={{ background: 'var(--bg-cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow">إزاي بيشتغل</span>
          <h2 className="h2">3 خطوات وابنك يبقى <span className="hl-underline">Founder</span></h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, position: 'relative' }} className="how-row">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div style={{ flex: 1, textAlign: 'center', padding: '0 16px' }}>
                <div style={{ width: 100, height: 100, borderRadius: 24, background: 'white', border: '3px solid var(--brown-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, margin: '0 auto 22px', boxShadow: '0 8px 0 0 var(--brown-dark)', position: 'relative' }}>
                  {s.icon}
                  <div style={{ position: 'absolute', top: -10, insetInlineEnd: -10, background: 'var(--primary)', color: 'var(--brown-deep)', borderRadius: 999, padding: '4px 10px', fontFamily: 'Quicksand, sans-serif', fontSize: 12, fontWeight: 800, border: '2px solid var(--brown-deep)' }}>{s.n}</div>
                </div>
                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 800, color: 'var(--ink)', marginBottom: 10 }}>{s.t}</h3>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: 280, margin: '0 auto' }}>{s.d}</p>
              </div>
              {i < steps.length - 1 && <div className="dashed-line hide-mobile" style={{ marginTop: 50 }}></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .how-row { flex-direction: column !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   10. Pricing
   ============================================================ */
function Pricing() {
  const plans = [
    {
      name: 'Free Starter',
      sub: 'تجربة مجانية للأهل',
      price: '0',
      period: 'مجاناً',
      features: ['3 كروت Mentor تجريبية', 'كتاب رقمي مختصر', 'مش بيشمل Box', 'مش بيشمل Duck Bank'],
      cta: 'ابدأ التجربة',
      featured: false,
    },
    {
      name: 'Founder Box',
      sub: 'الباقة الأساسية · مرة واحدة',
      price: '1,499',
      period: 'ج.م مرة واحدة',
      features: ['Founder Box كامل (+50 كارت)', 'تطبيق Founder Quest 6 شهور', 'كتاب من المكتبة هدية', 'كارت Founder ID شخصي', 'دعم WhatsApp للأهل'],
      cta: 'اطلب الـ Box',
      featured: true,
      tag: 'الأكثر طلباً',
    },
    {
      name: 'Premium Monthly',
      sub: 'بعد ما تخلّصوا الـ Box',
      price: '99',
      period: 'ج.م/شهر',
      features: ['تطبيق Founder Quest كامل', 'كارت جديد كل أسبوع', 'الوصول لكل المكتبة', 'تحديات شهرية مع جوايز'],
      cta: 'اشترك',
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow">الأسعار</span>
          <h2 className="h2" style={{ marginBottom: 14 }}>اختار اللي يناسب <span className="hl-underline">عيلتك</span></h2>
          <p className="lede" style={{ margin: '0 auto' }}>كل خطة بتفتح لك مدخل مختلف للنظام. الـ Box هو الأساس — والباقي بيكمّله.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'center' }} className="pricing-grid">
          {plans.map((p, i) => (
            <div key={i} className={`card ${p.featured ? 'pricing-featured' : ''}`} style={{ padding: 32, position: 'relative', background: p.featured ? 'white' : 'var(--bg-card)' }}>
              {p.tag && (
                <div style={{ position: 'absolute', top: -14, insetInlineStart: '50%', transform: 'translateX(-50%)', background: 'var(--brown-deep)', color: 'var(--primary)', fontSize: 12, fontWeight: 800, padding: '6px 14px', borderRadius: 999, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>★ {p.tag}</div>
              )}
              <div className="font-display" style={{ fontSize: 22, fontWeight: 800, color: 'var(--ink)', marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginBottom: 22 }}>{p.sub}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 24 }}>
                <span className="font-display" style={{ fontSize: 48, fontWeight: 800, color: 'var(--brown-dark)', lineHeight: 1 }}>{p.price}</span>
                <span style={{ fontSize: 14, color: 'var(--ink-muted)', fontWeight: 600 }}>{p.period}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--ink)' }}>
                    <span style={{ color: 'var(--brown-dark)', flexShrink: 0, marginTop: 2 }}><Icon.Check size={16}/></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>{p.cta} <Icon.Arrow size={16}/></button>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-featured { transform: scale(1) !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   11. Newsletter
   ============================================================ */
function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const submit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setState('error'); return; }
    setState('success');
    setTimeout(() => { setState('idle'); setEmail(''); }, 3500);
  };
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ background: 'var(--primary-soft)', borderRadius: 32, padding: '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden', border: '2px dashed var(--brown)' }}>
          <img src="assets/chick-read2.png" alt="" style={{ position: 'absolute', bottom: -10, insetInlineStart: 40, width: 140, height: 140, objectFit: 'contain', transform: 'rotate(-8deg)' }} className="hide-mobile float-c" loading="lazy"/>
          <img src="assets/chick-point.png" alt="" style={{ position: 'absolute', bottom: -10, insetInlineEnd: 40, width: 130, height: 130, objectFit: 'contain', transform: 'rotate(8deg) scaleX(-1)' }} className="hide-mobile float-a" loading="lazy"/>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 540, margin: '0 auto' }}>
            <span className="eyebrow">النشرة الأسبوعية</span>
            <h2 className="h2" style={{ marginBottom: 14 }}>اشترك في النشرة</h2>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', marginBottom: 28 }}>
              تنصايح تربية رواد أعمال صغار، كل أسبوع · مجاناً · من غير spam.
            </p>
            <form onSubmit={submit} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle'); }}
                className="input"
                style={{ flex: '1 1 280px', maxWidth: 360, borderColor: state === 'error' ? '#D85C5C' : undefined }}
              />
              <button type="submit" className="btn btn-primary" style={{ flexShrink: 0 }}>
                {state === 'success' ? '✓ تم!' : 'اشترك'}
              </button>
            </form>
            {state === 'error' && <div style={{ color: '#A03030', fontSize: 13, marginTop: 10, fontWeight: 600 }}>اكتب بريد إلكتروني صحيح</div>}
            {state === 'success' && <div style={{ color: 'var(--green)', fontSize: 13, marginTop: 10, fontWeight: 700 }}>اتسجلت! شوف بريدك بعد شوية ✨</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   12. Footer
   ============================================================ */
function HomeFooter() {
  const cols = [
    { title: 'المنتج', links: ['Founder Box', 'Founder Quest', 'المكتبة', 'الكروت', 'الأسعار'] },
    { title: 'الشركة', links: ['عن Kids to Lead', 'القصة', 'المدوّنة', 'وظائف', 'تواصل'] },
    { title: 'القانوني', links: ['الشروط', 'الخصوصية', 'سياسة الإرجاع', 'الأمان', 'حقوق الطفل'] },
  ];
  return (
    <footer style={{ background: 'var(--brown-deep)', color: 'rgba(255,255,255,0.85)', paddingTop: 72, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }} className="footer-grid">
          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18 }}>
              <img src="assets/logo.png" alt="" style={{ width: 56, height: 56, objectFit: 'contain', filter: 'brightness(1.1)' }}/>
              <div>
                <div className="font-display" style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>Kids to Lead</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>صنّاع المستقبل</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: 22, maxWidth: 320 }}>
              نظام عربي متكامل بيغرس مهارات ريادة الأعمال في أطفال من سن 10 لـ 13،
              عن طريق مزيج من التجربة الفعلية والتطبيق والمكتبة.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['IG', 'TT', 'YT', 'X'].map((s, i) => (
                <a key={i} href="#" style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'white', letterSpacing: '0.04em' }}>{s}</a>
              ))}
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div className="font-display" style={{ fontSize: 14, fontWeight: 800, color: 'var(--primary)', marginBottom: 18, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{c.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.links.map((l, j) => <li key={j}><a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', transition: 'color .15s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
          <div>© 2026 Kids to Lead. كل الحقوق محفوظة. صُنع في 🇪🇬</div>
          <div style={{ display: 'flex', gap: 18 }}>
            <a href="#">الشروط</a>
            <a href="#">الخصوصية</a>
            <a href="#">الكوكيز</a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}

/* Expose to window for main app */
Object.assign(window, {
  AnnouncementBar, Header, HeroSection, SocialProofBar, SystemPillars,
  BoxDetail, BookGrid, FounderQuestPreview, HowItWorks, Pricing, Newsletter, HomeFooter,
});
