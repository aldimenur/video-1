import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, T} from './kit';

/** Gambar bangku + jendela yang "menggambar dirinya sendiri". */
export const WindowDesk: React.FC = () => {
  const f = useCurrentFrame();
  const draw = interpolate(f, [0, T(1.8)], [1, 0], {extrapolateRight: 'clamp'});
  const common = {
    fill: 'none',
    stroke: C.pencil,
    strokeWidth: 8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    pathLength: 1,
    strokeDasharray: 1,
    strokeDashoffset: draw,
  };
  return (
    <svg width={760} height={520} viewBox="0 0 760 520">
      <rect x={400} y={20} width={300} height={260} rx={8} {...common} />
      <path d="M550 20 V280 M400 150 H700" {...common} />
      <path d="M60 330 H340 L360 420 H40 Z" {...common} />
      <path d="M80 420 V500 M320 420 V500" {...common} />
      <path d="M90 330 V220 H310 V330" {...common} />
    </svg>
  );
};

/** Daftar absen dengan satu baris kosong berkedip. */
export const Absen: React.FC = () => {
  const f = useCurrentFrame();
  const blink = Math.sin(f / 5) > 0 ? 1 : 0.25;
  const names = ['1. Andi', '2. Bela', '3. Citra', '4. Dimas'];
  return (
    <div
      style={{
        width: 720,
        padding: '36px 48px',
        background: '#fffdf4',
        border: `5px solid ${C.pencil}`,
        borderRadius: 14,
        transform: 'rotate(-2deg)',
        boxShadow: '8px 10px 0 rgba(0,0,0,0.12)',
      }}
    >
      <div style={{fontFamily: 'sans-serif', fontWeight: 800, fontSize: 44, marginBottom: 14}}>DAFTAR ABSEN</div>
      {names.map((n) => (
        <div key={n} style={{fontFamily: 'cursive', fontSize: 52, color: C.ink, lineHeight: 1.5}}>
          {n}
        </div>
      ))}
      <div style={{fontSize: 52, lineHeight: 1.5, color: C.pink, opacity: blink, fontWeight: 700}}>
        5. ? ? ? ? ?
      </div>
    </div>
  );
};

/** Sketsa hantu cewek berkepang dua, transparan dan melayang. */
export const Ghost: React.FC = () => {
  const f = useCurrentFrame();
  const float = Math.sin(f / 14) * 16;
  return (
    <svg width={520} height={760} viewBox="0 0 520 760" style={{transform: `translateY(${float}px)`, opacity: 0.8}}>
      <g fill="#fffdf4" stroke={C.pencil} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M130 420 Q260 360 390 420 L430 700 Q345 740 260 700 Q175 740 90 700 Z" />
        <circle cx={260} cy={250} r={120} />
        <path d="M140 230 Q260 100 380 230 Q330 170 260 170 Q190 170 140 230 Z" fill="#5b4a3e" />
        <path d="M150 250 Q100 360 130 470 Q165 360 170 270 Z" fill="#5b4a3e" />
        <path d="M370 250 Q420 360 390 470 Q355 360 350 270 Z" fill="#5b4a3e" />
        <circle cx={132} cy={480} r={14} fill={C.pink} />
        <circle cx={388} cy={480} r={14} fill={C.pink} />
        <path d="M200 400 L260 440 L320 400" fill="#d9e4f0" />
      </g>
      <circle cx={222} cy={262} r={9} fill={C.ink} />
      <circle cx={298} cy={262} r={9} fill={C.ink} />
      <path d="M232 305 Q260 328 288 305" fill="none" stroke={C.ink} strokeWidth={6} strokeLinecap="round" />
      <circle cx={190} cy={296} r={16} fill={C.pink} opacity={0.35} />
      <circle cx={330} cy={296} r={16} fill={C.pink} opacity={0.35} />
    </svg>
  );
};

export const Frog: React.FC<{size?: number}> = ({size = 260}) => (
  <svg width={size} height={size} viewBox="0 0 200 200">
    <ellipse cx={100} cy={120} rx={80} ry={58} fill="#7cc576" stroke={C.pencil} strokeWidth={7} />
    <circle cx={62} cy={66} r={28} fill="#7cc576" stroke={C.pencil} strokeWidth={7} />
    <circle cx={138} cy={66} r={28} fill="#7cc576" stroke={C.pencil} strokeWidth={7} />
    <circle cx={62} cy={66} r={10} fill={C.ink} />
    <circle cx={138} cy={66} r={10} fill={C.ink} />
    <path d="M60 128 Q100 160 140 128" fill="none" stroke={C.pencil} strokeWidth={7} strokeLinecap="round" />
  </svg>
);

export const BrokenPencil: React.FC<{size?: number}> = ({size = 260}) => (
  <svg width={size} height={size} viewBox="0 0 200 200">
    <g stroke={C.pencil} strokeWidth={6} strokeLinejoin="round">
      <polygon points="20,150 40,125 118,95 128,118 52,160" fill={C.yellow} />
      <polygon points="20,150 8,172 36,166" fill="#f1d3a8" />
      <polygon points="150,70 178,50 192,78 165,92" fill={C.yellow} />
      <polygon points="150,70 135,60 142,88" fill="#f1d3a8" />
      <path d="M118 95 L132 75 M128 118 L146 100" fill="none" />
    </g>
  </svg>
);

export const Heart: React.FC<{size?: number; color?: string}> = ({size = 220, color = C.pink}) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <path
      d="M50 88 C10 58 6 32 24 20 C38 12 48 22 50 30 C52 22 62 12 76 20 C94 32 90 58 50 88 Z"
      fill={color}
      stroke={C.pencil}
      strokeWidth={4}
      strokeLinejoin="round"
    />
  </svg>
);

/** Angka naik dari 1 sampai target. */
export const Counter: React.FC<{to: number; dur?: number}> = ({to, dur = 1.6}) => {
  const f = useCurrentFrame();
  const v = Math.round(interpolate(f, [0, T(dur)], [1, to], {extrapolateRight: 'clamp'}));
  return <>{v}</>;
};

/** Awan helaan nafas dengan hati kecil naik. */
export const SighCloud: React.FC = () => {
  const f = useCurrentFrame();
  const s = 1 + Math.sin(f / 9) * 0.06;
  const hearts = [0, 1, 2].map((i) => {
    const p = ((f + i * 25) % 75) / 75;
    return (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: 120 + i * 120,
          top: -20 - p * 190,
          opacity: 1 - p,
          transform: `scale(${0.5 + i * 0.1})`,
        }}
      >
        <Heart size={90} />
      </div>
    );
  });
  return (
    <div style={{position: 'relative', width: 520, height: 260}}>
      {hearts}
      <svg width={520} height={260} viewBox="0 0 520 260" style={{transform: `scale(${s})`}}>
        <g fill="#fff" stroke={C.pencil} strokeWidth={7}>
          <circle cx={150} cy={150} r={70} />
          <circle cx={250} cy={110} r={90} />
          <circle cx={370} cy={150} r={72} />
          <rect x={120} y={150} width={280} height={72} rx={36} />
        </g>
        <text x={260} y={190} textAnchor="middle" fontSize={84} fontFamily="cursive" fill={C.pencil}>
          hhh...
        </text>
      </svg>
    </div>
  );
};

/** Balon komentar bergantian soal poni Rafli. */
export const Bubbles: React.FC = () => {
  const f = useCurrentFrame();
  const items = [
    {t: 'Ponimu...', x: 90, y: 40, c: C.blue, d: 0},
    {t: 'Poninya Rafli!', x: 330, y: 190, c: C.pink, d: 0.7},
    {t: 'Lucu banget', x: 120, y: 340, c: C.blue, d: 1.4},
    {t: 'Iya kan!', x: 380, y: 480, c: C.pink, d: 2.1},
  ];
  return (
    <div style={{position: 'relative', width: 1000, height: 640}}>
      {items.map((it) => {
        const p = interpolate(f, [T(it.d), T(it.d) + 8], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        return (
          <div
            key={it.t}
            style={{
              position: 'absolute',
              left: it.x,
              top: it.y,
              transform: `scale(${p})`,
              background: '#fff',
              border: `6px solid ${it.c}`,
              borderRadius: 40,
              padding: '16px 34px',
              fontFamily: 'cursive',
              fontSize: 56,
              color: it.c,
              boxShadow: '6px 8px 0 rgba(0,0,0,0.1)',
            }}
          >
            {it.t}
          </div>
        );
      })}
    </div>
  );
};

/** Surat amplop kuning dengan nama di depannya. */
export const Envelope: React.FC<{label?: string}> = ({label = 'Hendra'}) => {
  const f = useCurrentFrame();
  const wobble = Math.sin(f / 10) * 2;
  return (
    <div style={{transform: `rotate(${-4 + wobble}deg)`}}>
      <svg width={700} height={460} viewBox="0 0 700 460">
        <rect x={20} y={40} width={660} height={380} rx={18} fill="#f3dc8a" stroke={C.pencil} strokeWidth={8} />
        <path d="M20 60 L350 270 L680 60" fill="none" stroke={C.pencil} strokeWidth={8} strokeLinejoin="round" />
        <rect x={470} y={300} width={170} height={70} rx={20} fill="#ee9bc0" stroke={C.pencil} strokeWidth={5} />
      </svg>
      <div style={{position: 'absolute', left: 0, width: 700, top: 255, textAlign: 'center'}}>
        <span style={{fontFamily: 'cursive', fontSize: 92, color: C.ink, fontWeight: 700}}>{label}</span>
      </div>
    </div>
  );
};

/** Spotlight senter yang bergerak pelan. */
export const Flashlight: React.FC = () => {
  const f = useCurrentFrame();
  const x = 540 + Math.sin(f / 22) * 260;
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle 380px at ${x}px 640px, rgba(255,240,170,0) 0%, rgba(20,16,30,0.78) 100%)`,
      }}
    />
  );
};

/** Partikel cahaya naik di sekitar Kirana. */
export const Glow: React.FC = () => {
  const f = useCurrentFrame();
  const pulse = 0.7 + Math.sin(f / 9) * 0.3;
  const dots = Array.from({length: 18}, (_, i) => {
    const seed = (i * 97) % 100;
    const p = ((f * (0.6 + (seed % 5) * 0.12) + seed * 7) % 260) / 260;
    return (
      <circle
        key={i}
        cx={90 + ((seed * 13) % 340)}
        cy={720 - p * 700}
        r={5 + (seed % 4) * 2}
        fill="#fff6b8"
        opacity={(1 - p) * 0.9}
      />
    );
  });
  return (
    <svg width={520} height={760} viewBox="0 0 520 760" style={{position: 'absolute'}}>
      <defs>
        <radialGradient id="g">
          <stop offset="0%" stopColor="#fff6b8" stopOpacity={0.95 * pulse} />
          <stop offset="100%" stopColor="#fff6b8" stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx={260} cy={380} r={330} fill="url(#g)" />
      {dots}
    </svg>
  );
};

/** Pensil patah, serutan jatuh. */
export const Shavings: React.FC = () => {
  const f = useCurrentFrame();
  const bits = Array.from({length: 14}, (_, i) => {
    const seed = (i * 53) % 97;
    const p = Math.min(1, Math.max(0, (f - i * 4) / 80));
    return (
      <rect
        key={i}
        x={70 + ((seed * 7) % 160) + Math.sin(f / 8 + i) * 12}
        y={40 + p * 300}
        width={26}
        height={10}
        rx={5}
        fill="#f1c97a"
        opacity={1 - p * 0.7}
        transform={`rotate(${p * 200 + i * 20} ${90 + seed} ${50 + p * 300})`}
      />
    );
  });
  return (
    <svg width={300} height={380} viewBox="0 0 300 380" style={{position: 'absolute'}}>
      {bits}
    </svg>
  );
};
