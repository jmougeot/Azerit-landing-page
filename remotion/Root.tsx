import React from "react";
import { Composition } from "remotion";
import { DemoVideo, DEMO_DURATION, DEMO_FPS, DEMO_WIDTH, DEMO_HEIGHT } from "./DemoVideo";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="DemoVideo"
    component={DemoVideo}
    durationInFrames={DEMO_DURATION}
    fps={DEMO_FPS}
    width={DEMO_WIDTH}
    height={DEMO_HEIGHT}
  />
);
