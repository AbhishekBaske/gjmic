import React, { useEffect, useRef } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { gsap } from "gsap";

/* ---------------- Global Styles ---------------- */
const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; background-color: #070707; color: #fefce8; }
`;

/* ---------------- Animations ---------------- */
const goldSweep = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatUpDown = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

/* ---------------- Styled Components ---------------- */
const AnnounceWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, #0b0b0b 0%, #121212 50%, #000 100%);
`;

const AnnounceText = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  background: linear-gradient(90deg, #d4af37, #f9d976, #fff8e1, #f9d976, #d4af37);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${goldSweep} 3.5s linear infinite;
  opacity: 0;
`;

/* ---------------- Main Component ---------------- */
const Announce = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Fade in with a small bounce effect
    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", repeat: -1, yoyo: true, delay: 0.3 }
    );
  }, []);

  return (
    <>
      <GlobalStyle />
      <AnnounceWrapper>
        <AnnounceText ref={textRef}>To be Announced</AnnounceText>
      </AnnounceWrapper>
    </>
  );
};

export default Announce;
