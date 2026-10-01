const ITEMS = [
  'STRATEGY','SOCIAL','CREATIVE','CONTENT','CAMPAIGNS',
  'INFLUENCER','E-COMMERCE','DIGITAL','REPEAT',
];

function Track({ reverse = false, className = '' }) {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className={`marquee-track ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} ${className}`}>
      {doubled.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="text-[0.75rem] font-sans font-bold tracking-widest2 uppercase text-brand-navy px-8 hover:text-white transition-colors cursor-none whitespace-nowrap">
            {item}
          </span>
          <span className="text-brand-navy/30 text-xs font-serif italic">•</span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="border-y border-brand-navy/10 overflow-hidden bg-brand-yellow relative z-10 shadow-md">
      <div className="marquee-wrap py-[18px] border-b border-brand-navy/10 hover:[&>div]:[animation-play-state:paused]">
        <Track />
      </div>
      <div className="marquee-wrap py-[18px] hover:[&>div]:[animation-play-state:paused]">
        <Track reverse />
      </div>
    </div>
  );
}
