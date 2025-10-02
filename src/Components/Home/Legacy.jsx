import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import BWE from "../../assets/bucketwheelexcavator.mp4";

/* ---------------- Global styles & variables ---------------- */
const GlobalStyle = createGlobalStyle`
  :root{
    --gold-1:#ffd700;
    --gold-2:#ffdf80;
    --bg-dark:#070707;
    --text-cream:#fefce8;
  }
  *{box-sizing:border-box}
  body{font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; margin:0;}
`;

/* ---------------- subtle shimmer for text ---------------- */
const shimmer = keyframes`
  0% { background-position: -150% 0; }
  100% { background-position: 150% 0; }
`;

/* ---------------- Layout ---------------- */
const Section = styled.section`
  background: radial-gradient(circle at 10% 10%, rgba(255,215,0,0.03), transparent 10%), linear-gradient(180deg,#0b0b0b 0%, #050505 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
`;

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

/* ---------------- Video frame with golden border ---------------- */
const Frame = styled.div`
  flex: 1 1 450px;
  border-radius: 1.5rem;
  padding: 8px;
  background: conic-gradient(from 120deg at 50% 50%, rgba(255,215,0,0.28), rgba(255,230,140,0.18), rgba(255,215,0,0.28));
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
  position: relative;
  will-change: transform;
`;

const VideoCard = styled(motion.div)`
  border-radius: 1rem;
  overflow: hidden;
  background: #000;
  height: 320px;
  @media (min-width: 900px){ height: 420px; }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

/* ---------------- Text column ---------------- */
const TextCard = styled.div`
  flex: 1 1 450px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: var(--text-cream);
`;

const Line = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.15;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.9rem;
  align-items: baseline;
  @media (min-width:900px){ font-size: 2.8rem; }
`;

const WordWrap = styled(motion.span)`
  display: inline-block;
  transform: translate3d(0,0,0); /* force GPU layer */
  will-change: transform, opacity;
  padding: 0.08rem 0.28rem;
  border-radius: 6px;
`;

const WordInner = styled(motion.span)`
  display:inline-block;
  font-weight:900;
  background: linear-gradient(90deg, var(--gold-1), var(--gold-2), var(--gold-1));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 12px rgba(0,0,0,0.6);
  position: relative;

  /* Shimmer applied only at line level */
  &::after{
    content: '';
    position: absolute;
    left: -30%; top: 0; bottom: 0;
    width: 60%;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent);
    transform: skewX(-15deg);
    mix-blend-mode: screen;
    background-size: 200% 100%;
    animation: ${shimmer} 4s linear infinite;
    opacity: 0.85;
  }
`;

const usePrefersReduced = () => useReducedMotion();

const wordEnter = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.22,0.9,0.3,1] }
  })
};

export default function SplitPunchlinesPro({ punchLines }) {
  const reduce = usePrefersReduced();

  const lines = punchLines ?? [
    "50 Years of Golden Excellence",
    "Celebrating Our Jubilee Legacy",
    "Innovation Forging a Brighter Future",
    "Mining the Next Half Century"
  ];

  return (
    <>
      <GlobalStyle />
      <Section aria-label="Golden Jubilee Hero">
        <Container>
          {/* LEFT: Video with golden frame */}
          <Frame>
            <VideoCard
              initial={{ opacity: 0, scale: 0.98, rotateY: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.9, ease: [0.22,0.9,0.3,1] }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={ reduce ? {} : { scale: 1.02, rotateY: 2 }}
              style={{ originY: 0.5 }}
            >
              <Video src={BWE} autoPlay loop muted playsInline preload="metadata" aria-hidden />
            </VideoCard>
          </Frame>

          {/* RIGHT: Text with per-word animation */}
          <TextCard>
            {lines.map((rawLine, lineIndex) => (
              <Line key={lineIndex} aria-hidden={reduce ? false : undefined}>
                {rawLine.split(" ").map((word, wIdx) => {
                  const globalIdx = lineIndex * 12 + wIdx;
                  return (
                    <WordWrap
                      key={`${lineIndex}-${wIdx}`}
                      variants={wordEnter}
                      initial="hidden"
                      whileInView="visible"
                      custom={globalIdx}
                      viewport={{ once: true, amount: 0.3 }}
                      aria-label={word}
                    >
                      <WordInner
                        animate={ reduce ? undefined : { y: [0, -4, 0], scale: [1,1.02,1] } }
                        transition={ reduce ? undefined : {
                          duration: 2.8,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "mirror",
                          delay: globalIdx * 0.12
                        }}
                      >
                        {word}
                      </WordInner>
                    </WordWrap>
                  );
                })}
              </Line>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{ color: "#d7cfa8", marginTop: "0.6rem", fontWeight: 600 }}
            >
              Join us as we honour five decades of technical leadership and sustainable innovation.
            </motion.p>
          </TextCard>
        </Container>
      </Section>
    </>
  );
}
