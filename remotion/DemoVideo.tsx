import React from "react";
import { Sequence } from "remotion";
import { SceneBg, FadeScene } from "./common";
import {
  SceneNewPosition,
  SceneCandidates,
  SceneWhy,
  SceneMessage,
  SceneReplies,
  SceneOutro,
} from "./scenes";

// 30 fps
const SCENES: { comp: React.FC; duration: number }[] = [
  { comp: SceneNewPosition, duration: 180 }, // 6 s — paste the job offer, run
  { comp: SceneCandidates, duration: 230 }, // ~8 s — candidates land, open #1
  { comp: SceneWhy, duration: 230 }, // ~8 s — why she fits, proof from her code
  { comp: SceneMessage, duration: 290 }, // ~10 s — the email, copied
  { comp: SceneReplies, duration: 180 }, // 6 s — replies on the position
  { comp: SceneOutro, duration: 130 }, // ~4 s
];

export const DEMO_DURATION = SCENES.reduce((acc, s) => acc + s.duration, 0);
export const DEMO_FPS = 30;
// ~1.94:1, linear.app window proportions — wider than 16:9 without being
// taller. The app inside is laid out at 1280×660 and scaled ×1.5 (see
// remotion/app.tsx), so it shows at its real size on the landing page.
export const DEMO_WIDTH = 1920;
export const DEMO_HEIGHT = 990;

export const DemoVideo: React.FC = () => {
  let from = 0;
  return (
    <SceneBg>
      {SCENES.map(({ comp: Comp, duration }, i) => {
        const seq = (
          <Sequence key={i} from={from} durationInFrames={duration}>
            <FadeScene durationInFrames={duration} fadeIn={i !== 0}>
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
