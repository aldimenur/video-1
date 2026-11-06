import React from 'react';
import {Composition} from 'remotion';
import {Senandika} from './Video';
import {DURATION, FPS, HEIGHT, WIDTH} from './kit';

export const Root: React.FC = () => (
  <Composition
    id="Senandika"
    component={Senandika}
    durationInFrames={DURATION}
    fps={FPS}
    width={WIDTH}
    height={HEIGHT}
  />
);
