import React from "react";
import {
  AbsoluteFill,
  Sequence,
  Audio,
  staticFile,
} from "remotion";

const titleColor = "#0f2d4d";
const textColor = "#223344";

function SceneOne() {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: 70, color: titleColor }}>
        Ridge Regression
      </h1>

      <h2 style={{ color: textColor }}>
        Regularization for Stable Prediction
      </h2>
    </AbsoluteFill>
  );
}

function SceneTwo() {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ color: titleColor }}>Objective Function</h2>

      <pre
        style={{
          fontSize: 26,
          color: "black",
          textAlign: "center",
          whiteSpace: "pre-wrap",
        }}
      >
{`β̂ = argminβ { (1/2n)||y − Xβ||² + λ||β||² }`}
      </pre>
    </AbsoluteFill>
  );
}

function SceneThree() {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ color: titleColor }}>Summary</h2>

      <ul
        style={{
          fontSize: 32,
          color: textColor,
        }}
      >
        <li>Reduces variance</li>
        <li>Handles multicollinearity</li>
        <li>Improves prediction</li>
      </ul>
    </AbsoluteFill>
  );
}

export const MyComposition = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={150}>
        <SceneOne />
      </Sequence>

      <Sequence from={150} durationInFrames={450}>
        <SceneTwo />
      </Sequence>

      <Sequence from={600} durationInFrames={300}>
        <SceneThree />
      </Sequence>

      <Audio src={staticFile("narration.mp3")} />
    </>
  );
};