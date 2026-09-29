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
          <span className="text-[0.68rem] font-bold tracking-widest2 uppercase text-chalk px-7 hover:text-smoke transition-colors cursor-none whitespace-nowrap">
            {item}
          </span>
          <span className="text-smoke/40 text-xs">•</span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="border-y border-white/10 overflow-hidden bg-ink">
      <div className="marquee-wrap py-[14px] border-b border-white/5 pause-animation group hover:pause-animation">
        <Track />
      </div>
      <div className="marquee-wrap py-[14px]">
        <Track reverse />
      </div>
    </div>
  );
}
