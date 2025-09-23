import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import bitsindri from "../assets/bit.png";
import logo2 from "../assets/logo2.png";

// ---------- Golden Sweep Animation ----------
const goldSweep = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ---------- Styled Components ----------
const HomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  /* Gradient wave: tall background so we can scroll it */
  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 25%, #121212 75%, #000000 100%);
  background-size: 100% 200%; /* double height for smooth vertical scroll */
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 160px;
  height: auto;
  opacity: 0;
`;

const EventDetails = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #2f0c0c;
`;

const EventTitle = styled.p`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 20px;
  opacity: 0;

  background: linear-gradient(
    -45deg,
    #d4af37 0%,
    #f9d976 25%,
    #fff8e1 50%,
    #f9d976 75%,
    #d4af37 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${goldSweep} 4s linear infinite;

  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
`;

const RegistrationDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

const ButtonGold = styled(Link)`
  background: linear-gradient(90deg, #d4af37, #f9d976);
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: #2f0c0c;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  opacity: 0;
  transform: scale(0.8);

  &:hover {
    background: linear-gradient(90deg, #f9d976, #d4af37);
    transform: scale(1.05);
  }
`;

const ButtonOutline = styled(ButtonGold)``;

// ---------- Main Component ----------
const Home = () => {
  const titlesRef = useRef([]);
  const leftLogoRef = useRef(null);
  const rightLogoRef = useRef(null);
  const buttonsRef = useRef([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Logos animation
    gsap.fromTo(
      leftLogoRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      rightLogoRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    // Titles fade-in
    gsap.fromTo(
      titlesRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: "power3.out", delay: 0.5 }
    );

    // Buttons fade-in
    gsap.fromTo(
      buttonsRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)", delay: 1.5 }
    );

    // ---------- Animate background gradient like a wave ----------
    gsap.to(wrapperRef.current, {
      backgroundPosition: "0% 100%", // move background from top to bottom
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <HomeWrapper ref={wrapperRef}>
      <Logos>
        <LogoImage src={bitsindri} alt="Bits Indri Logo" ref={leftLogoRef} />
        <LogoImage src={logo2} alt="GJMIC Logo" ref={rightLogoRef} />
      </Logos>

      <EventDetails>
        <EventTitle ref={(el) => (titlesRef.current[0] = el)}>Golden Jubilee</EventTitle>
        <EventTitle ref={(el) => (titlesRef.current[1] = el)}>Mining Innovation</EventTitle>
        <EventTitle ref={(el) => (titlesRef.current[2] = el)}>Conclave</EventTitle>
      </EventDetails>

      <RegistrationDetails>
        <ButtonGold to="/register" ref={(el) => (buttonsRef.current[0] = el)}>
          Register
        </ButtonGold>
        <ButtonOutline to="/brochure" ref={(el) => (buttonsRef.current[1] = el)}>
          Brochure
        </ButtonOutline>
      </RegistrationDetails>
    </HomeWrapper>
  );
};

export default Home;
