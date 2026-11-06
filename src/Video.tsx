import React from 'react';
import {AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {C, Center, Pop, Scene, T, Written, body, hand} from './kit';
import {CaptionLayer, Paper} from './Paper';
import {
  Absen,
  Bubbles,
  BrokenPencil,
  Counter,
  Envelope,
  Flashlight,
  Frog,
  Ghost,
  Glow,
  Heart,
  Shavings,
  SighCloud,
  WindowDesk,
} from './Stickers';

// Taruh narasi di public/narasi.mp3 lalu ubah ke true.
const HAS_AUDIO = true;
const AUDIO_FILE = 'ElevenLabs_2026-11-06T03_42_40_Senandika - Young, Confident and Clear_pvc_s50_sim75_v4.mp3';

const Grain: React.FC<{opacity?: number}> = ({opacity = 0.35}) => {
  const f = useCurrentFrame();
  return (
    <svg width="100%" height="100%" style={{position: 'absolute', inset: 0, opacity, mixBlendMode: 'multiply'}}>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={2} seed={f % 8} />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
};

const Tint: React.FC<{color: string; opacity?: number}> = ({color, opacity = 0.3}) => (
  <AbsoluteFill style={{backgroundColor: color, opacity, mixBlendMode: 'multiply'}} />
);

const Label: React.FC<{children: React.ReactNode; color?: string; size?: number}> = ({
  children,
  color = C.ink,
  size = 80,
}) => (
  <div style={{fontFamily: hand, fontWeight: 700, fontSize: size, color, textAlign: 'center', lineHeight: 1.1}}>
    {children}
  </div>
);

const Lock: React.FC = () => (
  <svg width={200} height={240} viewBox="0 0 100 120">
    <path d="M26 54 V36 a24 24 0 0 1 48 0 V54" fill="none" stroke={C.pencil} strokeWidth={8} />
    <rect x={14} y={52} width={72} height={58} rx={10} fill={C.yellow} stroke={C.pencil} strokeWidth={6} />
    <circle cx={50} cy={78} r={8} fill={C.pencil} />
  </svg>
);

const Arrow: React.FC = () => {
  const f = useCurrentFrame();
  const d = interpolate(f, [0, T(0.8)], [1, 0], {extrapolateRight: 'clamp'});
  return (
    <svg width={160} height={200} viewBox="0 0 160 200">
      <path
        d="M80 10 V170 M40 130 L80 175 L120 130"
        fill="none"
        stroke={C.pink}
        strokeWidth={12}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={d}
      />
    </svg>
  );
};

const EmptyDesk: React.FC = () => {
  const f = useCurrentFrame();
  const warm = interpolate(f, [T(1.5), T(3.5)], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <svg width={560} height={420} viewBox="0 0 560 420">
      <rect x={60} y={120} width={440} height={30} rx={10} fill={C.yellow} fillOpacity={warm} stroke={C.pencil} strokeWidth={8} />
      <path d="M100 150 V380 M460 150 V380" stroke={C.pencil} strokeWidth={8} strokeLinecap="round" />
      <path d="M150 120 V40 H410 V120" fill="none" stroke={C.pencil} strokeWidth={8} strokeLinecap="round" />
      <circle cx={280} cy={230} r={90 * warm} fill={C.warm} fillOpacity={0.25 * warm} />
    </svg>
  );
};

export const Senandika: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />

      {/* 00:00 - 00:04 Judul + jendela dan bangku */}
      <Scene from={0} to={4.3}>
        <Center top={260}>
          <Written text="SENANDIKA" size={150} color={C.board} dur={1.2} />
        </Center>
        <Center top={560}>
          <WindowDesk />
        </Center>
      </Scene>

      {/* 00:04 - 00:08 Tidur tanpa ketahuan */}
      <Scene from={4.3} to={8.2}>
        <Center top={460}>
          <Pop><Label size={150}>Zzz...</Label></Pop>
          <div style={{height: 20}} />
          <Label size={64} color={C.pencil}>(bangku belakang, aman)</Label>
        </Center>
      </Scene>

      {/* 00:08 - 00:13 Daftar absen */}
      <Scene from={8.2} to={13.6}>
        <Center top={380}>
          <Pop><Absen /></Pop>
        </Center>
      </Scene>

      {/* 00:13 - 00:15 Kelas kosong */}
      <Scene from={13.6} to={15.9}>
        <Center top={520}>
          <Written text="Jam istirahat" size={120} dur={0.8} />
          <Written text="kelas kosong..." size={96} color={C.pencil} delay={0.7} dur={0.8} />
        </Center>
      </Scene>

      {/* 00:15 - 00:20 Hantu berkepang dua */}
      <Scene from={15.9} to={20}>
        <Center top={300}>
          <Ghost />
        </Center>
      </Scene>

      {/* 00:20 - 00:25 30 TAHUN, lalu x2 */}
      <Scene from={20} to={23}>
        <Center top={440}>
          <div style={{fontFamily: hand, fontWeight: 700, fontSize: 300, color: C.pink, lineHeight: 1}}>
            <Counter to={30} />
          </div>
          <Label size={120}>TAHUN</Label>
        </Center>
      </Scene>
      <Scene from={23} to={26}>
        <Center top={460}>
          <Pop><Label size={90} color={C.pencil}>BRUKK!</Label></Pop>
          <Pop delay={0.4}>
            <div style={{fontFamily: hand, fontWeight: 700, fontSize: 340, color: C.blue, lineHeight: 1}}>x2</div>
          </Pop>
        </Center>
      </Scene>

      {/* 00:26 - 00:35 Tiga stiker */}
      <Scene from={25.9} to={31.4}>
        <Center top={520}>
          <Pop><Frog size={420} /></Pop>
          <Pop delay={1.4}><Label size={80}>takut kodok</Label></Pop>
        </Center>
      </Scene>
      <Scene from={31.4} to={35.2}>
        <Center top={520}>
          <Pop><BrokenPencil size={420} /></Pop>
          <Pop delay={1}><Label size={80}>pensil patah = gelisah</Label></Pop>
        </Center>
      </Scene>
      <Scene from={35.2} to={39.9}>
        <Center top={480}>
          <Pop><Heart size={380} /></Pop>
          <Pop delay={1}><Label size={96} color={C.pink}>naksir Rafli</Label></Pop>
        </Center>
      </Scene>

      {/* 00:39 - 00:46 Menghela nafas */}
      <Scene from={39.9} to={44}>
        <Center top={400}>
          <SighCloud />
          <div style={{height: 40}} />
          <Label size={72} color={C.pencil}>(tiap Rafli hapus papan tulis)</Label>
        </Center>
      </Scene>
      <Scene from={44} to={46.5}>
        <Center top={480}>
          <Written text="tidak takut lagi" size={110} color={C.board} />
        </Center>
      </Scene>

      {/* 00:46 - 00:52 Komentar poni Rafli */}
      <Scene from={46.5} to={52.1}>
        <Center top={340}>
          <Bubbles />
        </Center>
      </Scene>

      {/* 00:52 - 01:02 Flashback sepia */}
      <Scene from={52.1} to={62.1}>
        <Tint color="#b98a4e" opacity={0.45} />
        <Grain />
        <Center top={320}>
          <Label size={100} color="#6b4a1f">FLASHBACK</Label>
        </Center>
      </Scene>
      <Scene from={55} to={62.1}>
        <Center top={640}>
          <Pop><Envelope label="..." /></Pop>
          <div style={{height: 20}} />
          <Label size={84} color="#6b4a1f">tidak pernah sampai</Label>
        </Center>
      </Scene>
      <Scene from={58.9} to={62.1}>
        <Center top={1120}>
          <Pop><Lock /></Pop>
        </Center>
      </Scene>

      {/* 01:03 - 01:11 Senter dan amplop */}
      <Scene from={62.1} to={69.4}>
        <Flashlight />
      </Scene>
      <Scene from={66.3} to={71.7}>
        <Center top={440}>
          <Pop><Envelope label="Hendra" /></Pop>
        </Center>
      </Scene>

      {/* 01:11 - 01:14 Hendra = kakek Rafli */}
      <Scene from={71.6} to={74.6}>
        <Center top={360}>
          <Written text="HENDRA" size={140} color={C.pencil} dur={0.6} />
          <Arrow />
          <Pop delay={0.5}><Label size={110} color={C.pink}>= Kakek Rafli</Label></Pop>
        </Center>
      </Scene>

      {/* 01:18 - 01:27 Sore hangat, tawa dan tangis */}
      <Scene from={74.5} to={85.3}>
        <Tint color="#f6b46b" opacity={0.35} />
        <Center top={520}>
          <Pop><Label size={90} color="#b4571d">Sore itu, di teras</Label></Pop>
          <div style={{height: 30}} />
          <Pop delay={4}><Label size={140}>ha-ha</Label></Pop>
          <Pop delay={4.5}><Label size={140} color={C.blue}>hiks...</Label></Pop>
        </Center>
      </Scene>

      {/* 01:25 - 01:31 Cahaya Kirana */}
      <Scene from={85.3} to={91.5}>
        <Tint color="#2f3b6b" opacity={0.35} />
        <Center top={300}>
          <div style={{position: 'relative', width: 520, height: 760}}>
            <Glow />
            <Ghost />
          </div>
        </Center>
      </Scene>

      {/* 01:34 - 01:40 Piket */}
      <Scene from={94.1} to={98.7}>
        <Center top={500}>
          <Pop><Label size={90} color={C.blue}>Rafli belum piket!</Label></Pop>
          <Pop delay={1}><Label size={70} color={C.pink}>kakeknya tetap lebih ganteng</Label></Pop>
        </Center>
      </Scene>

      {/* 01:40 - 01:45 Bangku kosong yang tidak lagi kosong */}
      <Scene from={98.7} to={105.3}>
        <Center top={340}>
          <EmptyDesk />
          <div style={{height: 30}} />
          <Written text="bangku itu tidak lagi kosong" size={84} color={C.warm} delay={3} dur={1.6} />
        </Center>
      </Scene>

      {/* 01:45 - 01:51 Pensil patah dan end card */}
      <Scene from={105.3} to={111}>
        <Center top={380}>
          <BrokenPencil size={380} />
          <div style={{position: 'absolute', top: 360, left: 380}}>
            <Shavings />
          </div>
        </Center>
        <Center top={930}>
          <Written text="SENANDIKA" size={140} color={C.board} delay={2.5} dur={1.2} />
        </Center>
      </Scene>

      <CaptionLayer />

      {HAS_AUDIO ? <Audio src={staticFile(AUDIO_FILE)} /> : null}
    </AbsoluteFill>
  );
};

// Dipakai agar font body tidak dianggap unused saat tree-shaking.
export const _fonts = {body, hand};
