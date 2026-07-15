import React from "react";
import { Sequence } from "remotion";
import { SceneBg, FadeScene } from "./common";
import {
  SceneDescribe,
  SceneRank,
  SceneWhy,
  SceneMessage,
  SceneResults,
  SceneOutro,
} from "./scenes";

// 30 fps
const SCENES: { comp: React.FC; duration: number }[] = [
  { comp: SceneDescribe, duration: 210 }, // 7 s — type what you sell
  { comp: SceneRank, duration: 200 }, // ~7 s — ranked leads, click #1
  { comp: SceneWhy, duration: 200 }, // ~7 s — why she's hot
  { comp: SceneMessage, duration: 280 }, // ~9 s — personalized email
  { comp: SceneResults, duration: 160 }, // ~5 s — inbox
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
