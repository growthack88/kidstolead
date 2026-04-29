/* global React, ReactDOM */
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "yellow",
  "tilts": true,
  "marqueeSpeed": 40,
  "heroVariant": "box"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent
  useEffect(() => {
    const root = document.documentElement;
    if (tweaks.accent === 'red') {
      root.style.setProperty('--primary', '#E8643A');
      root.style.setProperty('--primary-dark', '#BF4A24');
      root.style.setProperty('--primary-soft', '#FCD9C9');
    } else if (tweaks.accent === 'green') {
      root.style.setProperty('--primary', '#7DB668');
      root.style.setProperty('--primary-dark', '#5A8E48');
      root.style.setProperty('--primary-soft', '#D7E8CC');
    } else {
      root.style.setProperty('--primary', '#F09E1F');
      root.style.setProperty('--primary-dark', '#D88514');
      root.style.setProperty('--primary-soft', '#FFE4B0');
    }
  }, [tweaks.accent]);

  useEffect(() => {
    document.documentElement.style.setProperty('--marquee-dur', tweaks.marqueeSpeed + 's');
    document.querySelectorAll('.marquee-track').forEach(t => t.style.animationDuration = tweaks.marqueeSpeed + 's');
  }, [tweaks.marqueeSpeed]);

  useEffect(() => {
    if (!tweaks.tilts) {
      document.body.classList.add('no-tilts');
    } else {
      document.body.classList.remove('no-tilts');
    }
  }, [tweaks.tilts]);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <SocialProofBar />
        <SystemPillars />
        <BoxDetail />
        <BookGrid />
        <FounderQuestPreview />
        <HowItWorks />
        <Pricing />
        <Newsletter />
      </main>
      <HomeFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection title="الهوية البصرية">
          <TweakRadio
            label="اللون الأساسي"
            value={tweaks.accent}
            onChange={v => setTweak('accent', v)}
            options={[
              { value: 'yellow', label: 'أصفر' },
              { value: 'red', label: 'برتقالي' },
              { value: 'green', label: 'أخضر' },
            ]}
          />
          <TweakToggle label="إمالة الكروت (Hand-drawn)" value={tweaks.tilts} onChange={v => setTweak('tilts', v)} />
        </TweakSection>
        <TweakSection title="الحركة">
          <TweakSlider label="سرعة الـ Marquee (ثانية)" value={tweaks.marqueeSpeed} min={15} max={80} step={5} onChange={v => setTweak('marqueeSpeed', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
