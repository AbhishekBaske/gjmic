// Home.jsx
import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

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

  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #f5f5f5 25%,
    #121212 75%,
    #000000 100%
  );
  background-size: 100% 200%;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(40px, 8vw, 120px);
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const LogoImage = styled.img`
  width: clamp(80px, 20vw, 160px);
  height: auto;
  opacity: 0;
`;

const EventDetails = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #2f0c0c;
`;

const EventTitle = styled.p`
  font-size: clamp(2.2rem, 6vw, 3rem);
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
  flex-wrap: wrap;
`;

const ButtonGold = styled(Link)`
  background: linear-gradient(90deg, #d4af37, #f9d976);
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: #2f0c0c;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  display: inline-block;

  &:hover {
    background: linear-gradient(90deg, #f9d976, #d4af37);
    transform: scale(1.05);
  }
`;

const ButtonOutline = styled(ButtonGold)``;

// ---------- Extra Info (Venue + Date) ----------
const ExtraDetails = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid rgba(212, 175, 55, 0.4);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #f5f5c0;
  font-size: 1.1rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 12px rgba(212, 175, 55, 0.7);
    transform: translateY(-3px);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #d4af37;
`;

// ---------- Main Component ----------
const Home = () => {
  const titlesRef = useRef([]);
  const leftLogoRef = useRef(null);
  const rightLogoRef = useRef(null);
  const buttonsRef = useRef([]);
  const detailsRef = useRef([]);
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
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    // Buttons fade-in
    gsap.fromTo(
      buttonsRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1.5,
      }
    );

    // Venue + Date fade-in after buttons
    gsap.fromTo(
      detailsRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.3,
        ease: "power2.out",
        delay: 2.5,
      }
    );

    // Animate background gradient like a wave
    gsap.to(wrapperRef.current, {
      backgroundPosition: "0% 100%",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <HomeWrapper ref={wrapperRef}>
      <Logos>
        <LogoImage src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/logos/bit.png" alt="Bits Indri Logo" ref={leftLogoRef} />
        <LogoImage src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/logos/logo2.png" alt="GJMIC Logo" ref={rightLogoRef} />
      </Logos>

      <EventDetails>
        <EventTitle ref={(el) => (titlesRef.current[0] = el)}>
          Golden Jubilee
        </EventTitle>
        <EventTitle ref={(el) => (titlesRef.current[1] = el)}>
          Mining Innovation
        </EventTitle>
        <EventTitle ref={(el) => (titlesRef.current[2] = el)}>
          Conclave
        </EventTitle>
      </EventDetails>

      <RegistrationDetails>
        <ButtonGold 
          to="/register"
          ref={(el) => (buttonsRef.current[0] = el)}
        >
          Register
        </ButtonGold>
        <ButtonOutline 
          as="a"
          href="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/pdf/BROCHURE_GJMIC.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (buttonsRef.current[1] = el)}
        >
          Brochure
        </ButtonOutline>
      </RegistrationDetails>

      {/* Extra Details Section */}
      <ExtraDetails>
        <DetailRow ref={(el) => (detailsRef.current[0] = el)}>
          <IconWrapper>
            <FaMapMarkerAlt />
          </IconWrapper>
          <span>Deshpande Auditorium, B.I.T. Sindri</span>
        </DetailRow>
        <DetailRow ref={(el) => (detailsRef.current[1] = el)}>
          <IconWrapper>
            <FaCalendarAlt />
          </IconWrapper>
          <span>15th – 16th November, 2025</span>
        </DetailRow>
      </ExtraDetails>
    </HomeWrapper>
  );
};

export default Home;