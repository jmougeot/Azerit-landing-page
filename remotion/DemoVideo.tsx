import React from "react";
import { Sequence } from "remotion";
import { SceneBg, FadeScene } from "./common";
import {
  SceneHook,
  SceneScan,
  SceneQualify,
  SceneMessage,
  SceneResults,
  SceneOutro,
} from "./scenes";

// 30 fps
const SCENES: { comp: React.FC; duration: number }[] = [
  { comp: SceneHook, duration: 120 }, // 4 s
  { comp: SceneScan, duration: 220 }, // ~7 s
  { comp: SceneQualify, duration: 180 }, // 6 s
  { comp: SceneMessage, duration: 280 }, // ~9 s
  { comp: SceneResults, duration: 150 }, // 5 s
  { comp: SceneOutro, duration: 130 }, // ~4 s
];

export const DEMO_DURATION = SCENES.reduce((acc, s) => acc + s.duration, 0);
export const DEMO_FPS = 30;
export const DEMO_WIDTH = 1920;
export const DEMO_HEIGHT = 1080;

export const DemoVideo: React.FC = () => {
  let from = 0;
  return (
    <SceneBg>
      {SCENES.map(({ comp: Comp, duration }, i) => {
        const seq = (
          <Sequence key={i} from={from} durationInFrames={duration}>
            <FadeScene durationInFrames={duration}>
              <Comp />
            </FadeScene>
          </Sequence>
        );
        from += duration;
        return seq;
      })}
    </SceneBg>
  );
};
