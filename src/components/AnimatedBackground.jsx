/**
 * AnimatedBackground — Ultra-high performance background.
 *
 * Uses static multi-stop hardware-accelerated radial gradients on a single
 * composite layer to preserve the beautiful pastel ambient glow without
 * burning GPU/CPU on continuous infinite animation loops.
 */
export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 85% 15%, rgba(147, 197, 253, 0.42) 0%, rgba(196, 181, 253, 0.20) 35%, transparent 70%),
          radial-gradient(circle at 15% 85%, rgba(254, 215, 170, 0.42) 0%, rgba(253, 186, 116, 0.18) 35%, transparent 70%),
          radial-gradient(circle at 10% 35%, rgba(249, 168, 212, 0.32) 0%, rgba(216, 180, 254, 0.16) 30%, transparent 60%),
          radial-gradient(circle at 80% 75%, rgba(165, 180, 252, 0.28) 0%, rgba(196, 181, 253, 0.12) 30%, transparent 60%),
          #EAE9E6
        `,
        contain: 'strict'
      }}
    >
      {/* Light subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
