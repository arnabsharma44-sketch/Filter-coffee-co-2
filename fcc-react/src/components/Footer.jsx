export default function Footer() {
  const links = [
    { href: '#work', label: 'The Good Stuff' },
    { href: '#services', label: "What's Brewing?" },
    { href: '#about', label: 'Our Blend' },
    { href: '#clients', label: 'Our Clients' },
    { href: '#contact', label: 'Grab a Coffee' },
  ];
  const smoothTo = (href) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/90 backdrop-blur-lg border-t border-black/10 relative z-10">
      {/* Big CTA strip with glassmorphism */}
      <div className="border-b border-black/10 overflow-hidden py-16 px-8 md:px-12
        flex items-center justify-between gap-8 flex-wrap glass-panel">
        <p className="text-[clamp(1.6rem,3vw,2.8rem)] font-black tracking-tight text-black">
          Still on the fence?<br />
          <span className="italic font-extralight text-smoke">Let's change that.</span>
        </p>
        <a href="#contact" onClick={e => { e.preventDefault(); smoothTo('#contact'); }}
          className="mag-btn border border-black bg-black text-white text-[0.72rem] font-black
            tracking-widest uppercase px-10 py-4 cursor-none shrink-0 rounded-full shadow-lg hover:bg-black/90">
          <span>GRAB A COFFEE</span>
          <span className="ml-2">→</span>
        </a>
      </div>

      <div className="max-w-[1360px] mx-auto px-8 md:px-12 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div>
            <span className="text-3xl font-black tracking-widest block mb-3 text-black">FCC</span>
            <p className="text-smoke text-sm italic font-medium">We make brands addictive.</p>
          </div>
          <nav className="flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={e => { e.preventDefault(); smoothTo(l.href); }}
                className="text-[0.78rem] text-smoke font-medium hover:text-black transition-colors cursor-none w-fit">
                {l.label}
              </a>
            ))}
          </nav>
          <div>
            <p className="text-[0.62rem] font-bold tracking-widest uppercase text-smoke mb-4">Find us on</p>
            <div className="flex gap-3">
              {['IG', 'LI', 'X'].map(s => (
                <a key={s} href="#" aria-label={s}
                  className="w-10 h-10 border border-black/15 glass-pill rounded-xl flex items-center justify-center
                    text-[0.68rem] font-bold text-black hover:bg-black hover:text-white
                    hover:border-black transition-all cursor-none shadow-sm">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-[0.7rem] text-black/50 font-medium tracking-wide">
              © 2026 Filter Coffee Co. All rights reserved.
            </p>
            <p className="text-[0.7rem] text-black/50 font-medium tracking-wide text-left md:text-right">
              Crafted with creativity. Brewed to perfection. ☕
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 pt-4 border-t border-black/5">
            <p className="text-[0.65rem] text-black/40 font-medium tracking-wide">
              Made by JINENDRA BANTHIA and ARNAB SHARMA
            </p>
            <p className="text-[0.65rem] text-black/40 font-medium tracking-wide text-left md:text-right">
              Contact: +91 9124483008 | <a href="mailto:jinendra.banthia.iter@gmail.com" className="hover:text-black transition-colors underline">jinendra.banthia.iter@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
