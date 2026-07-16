import React from "react";
import { Composition, Still } from "remotion";
import { DemoVideo, DEMO_DURATION, DEMO_FPS, DEMO_WIDTH, DEMO_HEIGHT } from "./DemoVideo";
import { OgImage, OG_WIDTH, OG_HEIGHT } from "./OgImage";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="DemoVideo"
      component={DemoVideo}
      durationInFrames={DEMO_DURATION}
      fps={DEMO_FPS}
      width={DEMO_WIDTH}
      height={DEMO_HEIGHT}
    />
    <Still id="OgImage" component={OgImage} width={OG_WIDTH} height={OG_HEIGHT} />
  </>
);
