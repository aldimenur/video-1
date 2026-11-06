import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, HEIGHT, T, WIDTH, body, hand} from './kit';
import {captions, Speaker} from './captions';

/** Kertas buku tulis bergaris + garis margin merah. */
export const Paper: React.FC = () => {
  const lines: number[] = [];
  for (let y = 140; y < HEIGHT; y += 72) lines.push(y);
  return (
    <AbsoluteFill style={{backgroundColor: C.paper}}>
      <svg width={WIDTH} height={HEIGHT} style={{position: 'absolute', inset: 0}}>
        {lines.map((y) => (
          <line key={y} x1={0} x2={WIDTH} y1={y} y2={y} stroke={C.line} strokeWidth={3} />
        ))}
        <line x1={110} x2={110} y1={0} y2={HEIGHT} stroke={C.margin} strokeWidth={4} />
        {[260, 700, 1140, 1580].map((y) => (
          <circle key={y} cx={46} cy={y} r={20} fill="#e6dcc3" stroke="#cbbf9f" strokeWidth={3} />
        ))}
      </svg>
    </AbsoluteFill>
  );
};

const speakerColor: Record<Speaker, string> = {
  narator: C.ink,
  kirana: C.pink,
  fajar: C.blue,
};

const speakerLabel: Record<Speaker, string | null> = {
  narator: null,
  kirana: 'Kirana',
  fajar: 'Fajar',
};

/** Caption dengan efek kata muncul bergantian, warna sesuai pembicara. */
export const CaptionLayer: React.FC = () => {
  const f = useCurrentFrame();
  const t = f / 30;
  const cap = captions.find((c) => t >= c.start && t < c.end + 0.05);
  if (!cap) return null;

  const words = cap.text.split(' ');
  const local = f - T(cap.start);
  const span = Math.max(6, T(cap.end - cap.start) * 0.6);
  const color = speakerColor[cap.speaker];
  const label = speakerLabel[cap.speaker];

  return (
    <div
      style={{
        position: 'absolute',
        left: 150,
        right: 80,
        top: 1420,
        height: 340,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {label ? (
        <div
          style={{
            fontFamily: hand,
            fontWeight: 700,
            fontSize: 54,
            color,
            marginBottom: 6,
          }}
        >
          {label}:
        </div>
      ) : null}
      <div
        style={{
          fontFamily: body,
          fontSize: 66,
          lineHeight: 1.22,
          color,
          textShadow: `0 0 10px ${C.paper}, 0 0 10px ${C.paper}, 0 0 4px ${C.paper}`,
        }}
      >
        {words.map((w, i) => {
          const start = (i / words.length) * span;
          const o = interpolate(local, [start, start + 5], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          const y = interpolate(local, [start, start + 5], [14, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          return (
            <span
              key={i}
              style={{
                display: 'inline-block',
                marginRight: 16,
                opacity: o,
                transform: `translateY(${y}px)`,
              }}
            >
              {w}
            </span>
          );
        })}
      </div>
    </div>
  );
};
