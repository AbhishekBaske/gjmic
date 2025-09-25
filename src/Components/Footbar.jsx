import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Asset imports remain the same
import bitsinfo from "../assets/bit.png";
import logo from "../assets/logo2.png";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";
import download from "../assets/icons/download.svg";
import globe from "../assets/icons/globe.svg";

gsap.registerPlugin(ScrollTrigger);

// --- Styled Components (No changes here) ---
const FooterWrapper = styled.footer`
  background: #121a2b;
  color: #eaeaea;
  padding: 3rem 2rem 1rem;
  font-family: "Arial", sans-serif;
  overflow: hidden;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
  border-bottom: 1px solid #444;
  padding-bottom: 0.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const LogoImg = styled.img`
  width: auto;
  height: 100px;
`;

const InfoText = styled.p`
  margin: 0.3rem 0;
  font-size: 0.9rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0.4rem 0;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  margin-top: 2px;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(90deg, #ffd966 0%, #d4af37 100%);
  color: #111827;
  font-weight: 700;
  padding: 0.55rem 1rem;
  margin: 0.5rem 0 1.5rem 0;
  border-radius: 10px;
  text-decoration: none !important;
  transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(212, 175, 55, 0.12), inset 0 -2px 0 rgba(0,0,0,0.06);
  white-space: nowrap;
  box-sizing: border-box;
  line-height: 1.2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(212, 175, 55, 0.18), inset 0 -2px 0 rgba(0,0,0,0.06);
    filter: brightness(1.05);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(212, 175, 55, 0.12);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 0.65rem 1rem;
  }
`;

const BottomNote = styled.div`
  border-top: 1px solid #333;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.85rem;
  color: #aaa;
`;

// --- Component ---
export default function Footbar() {
  const footerRef = useRef(null);

  // --- REFACTORED ANIMATION LOGIC ---
  useEffect(() => {
    // gsap.context() is the modern way to handle animations and cleanup in React.
    const ctx = gsap.context(() => {
      // A single timeline is cleaner, using one ScrollTrigger for all animations.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%", // when top of footer hits 80% viewport height
        },
      });

      // Animate the main content blocks (text, buttons, etc.)
      tl.from(".animate-content", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });

      // Animate logos with a slide-in effect.
      // The "<" position parameter makes it start at the same time as the previous animation.
      tl.from(".animate-logo", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power3.out",
      }, "<");

    }, footerRef); // Scope selectors to the footerRef element.

    // Cleanup function provided by GSAP context.
    return () => ctx.revert();
  }, []);

  return (
    <FooterWrapper ref={footerRef}>
      <FooterGrid>
        {/* Column 1: Conference Info */}
        <Column>
          <Title className="animate-content">GJMIC-2025</Title>
          <LogoContainer>
            {/* Add a specific class for animating only these logos */}
            <LogoImg src={bitsinfo} alt="BIT Logo" className="animate-logo" />
            <LogoImg src={logo} alt="Conference Logo" className="animate-logo" />
          </LogoContainer>
          <InfoText className="animate-content">Golden Jubilee Mining Innovation Conclave</InfoText>
          <InfoText className="animate-content">15-16 November 2025</InfoText>
          <InfoText className="animate-content">Venue: Deshpande Auditorium, BIT Sindri, Dhanbad</InfoText>
          <DownloadButton 
            href="https://github.com/AbhishekBaske/pdf-files/raw/f21ffad93ecc84fd38efcb61ac89a551a50a400f/GJMIC-2025%20Brochure.pdf"
            target="_blank" 
            className="animate-content"
          >
            <img src={download} alt="Download" width="16" height="16" />
            Download Brochure 
          </DownloadButton>
        </Column>

        {/* Column 2: Contact Us */}
        <Column>
          <Title className="animate-content">Contact Us</Title>
          <ContactItem className="animate-content">
            <Icon src={mail} alt="Email" />
            <span>gjmic@bitsindri.ac.in</span>
          </ContactItem>
          <ContactItem className="animate-content">
            <Icon src={phone} alt="Phone" />
            <span>Prof. Tanmay Dasgupta: +91-8840144886</span>
          </ContactItem>
          <ContactItem className="animate-content">
            <Icon src={phone} alt="Phone" />
            <span>Prof. Roshan Kumar: +91-8877091602</span>
          </ContactItem>
        </Column>

        {/* Column 3: Stay Guide */}
        <Column>
          <Title className="animate-content">Stay Guide</Title>
          <InfoText className="animate-content">
            <strong>BIT Sindri, Dhanbad</strong>
          </InfoText>
          <ContactItem className="animate-content">
            <Icon src={mail} alt="Email" />
            <span>adityapandey.min@bitsindri.ac.in</span>
          </ContactItem>
          <ContactItem className="animate-content">
            <Icon src={phone} alt="Phone" />
            <span>+91-9614919301</span>
          </ContactItem>
          <ContactItem className="animate-content">
            <Icon src={globe} alt="Website" />
            <a href="https://www.bitsindri.ac.in" target="_blank" rel="noopener noreferrer" style={{color: '#eaeaea', textDecoration: 'none'}}>
              Website - www.bitsindri.ac.in
            </a>
          </ContactItem>
        </Column>

        {/* Column 4: Address */}
        <Column>
          <Title className="animate-content">Address</Title>
          <ContactItem className="animate-content">
            <Icon src={location} alt="Location" />
            <span>
              Department of Mining Engineering <br />
              BIT Sindri, Dhanbad <br />
              Jharkhand, India - 828123
            </span>
          </ContactItem>
        </Column>
      </FooterGrid>

      <BottomNote className="animate-content">
        © 2025 GJMIC. All rights reserved. <br />
        Organized by Department of Mining Engineering, BIT Sindri
      </BottomNote>
    </FooterWrapper>
  );
}