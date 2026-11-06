import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {loadFont as loadCaveat} from '@remotion/google-fonts/Caveat';
import {loadFont as loadPatrick} from '@remotion/google-fonts/PatrickHand';

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;
export const DURATION_SEC = 111;
export const DURATION = DURATION_SEC * FPS;

export const hand = loadCaveat().fontFamily;
export const body = loadPatrick().fontFamily;

export const C = {
  paper: '#fbf5e4',
  line: '#bcd3e6',
  margin: '#e7a3a3',
  board: '#2f4f43',
  pencil: '#4a4a4f',
  yellow: '#f3d46b',
  pink: '#ee7fa6',
  blue: '#4f8fd6',
  ink: '#2b2b30',
  warm: '#f29a52',
};

export const T = (s: number) => Math.round(s * FPS);

/** Menampilkan children pada rentang detik tertentu dengan fade in/out. */
export const Scene: React.FC<{
  from: number;
  to: number;
  children: React.ReactNode;
}> = ({from, to, children}) => (
  <Sequence from={T(from)} durationInFrames={Math.max(1, T(to) - T(from))} layout="none">
    <FadeWrap>{children}</FadeWrap>
  </Sequence>
);

const FadeWrap: React.FC<{children: React.ReactNode}> = ({children}) => {
  const f = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const o = interpolate(f, [0, 8, durationInFrames - 8, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};

/** Efek pop dengan bounce kecil. delay dalam detik relatif terhadap scene. */
export const Pop: React.FC<{
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({delay = 0, children, style}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame: f - T(delay), fps, config: {damping: 9, stiffness: 140}});
  return <div style={{transform: `scale(${s})`, ...style}}>{children}</div>;
};

/** Teks yang "ditulis pensil" dari kiri ke kanan. */
export const Written: React.FC<{
  text: string;
  size?: number;
  color?: string;
  delay?: number;
  dur?: number;
  font?: string;
  style?: React.CSSProperties;
}> = ({text, size = 96, color = C.ink, delay = 0, dur = 0.9, font = hand, style}) => {
  const f = useCurrentFrame();
  const p = interpolate(f, [T(delay), T(delay + dur)], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div
      style={{
        fontFamily: font,
        fontSize: size,
        color,
        fontWeight: 700,
        textAlign: 'center',
        lineHeight: 1.1,
        clipPath: `inset(-10% ${100 - p}% -10% 0)`,
        ...style,
      }}
    >
      {text}
    </div>
  );
};

export const Center: React.FC<{
  top: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({top, children, style}) => (
  <div
    style={{
      position: 'absolute',
      top,
      left: 0,
      width: WIDTH,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);
