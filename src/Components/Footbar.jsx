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
  gap: 8px;
  background: #e0e6ff;
  color: #000;
  font-weight: bold;
  padding: 0.6rem 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #bfcfff;
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
          <Title className="animate-content">GJMIC-2026</Title>
          <LogoContainer>
            {/* Add a specific class for animating only these logos */}
            <LogoImg src={bitsinfo} alt="BIT Logo" className="animate-logo" />
            <LogoImg src={logo} alt="Conference Logo" className="animate-logo" />
          </LogoContainer>
          <InfoText className="animate-content">Golden Jubilee Mining Innovation Conclave</InfoText>
          <InfoText className="animate-content">15-16 November 2026</InfoText>
          <InfoText className="animate-content">Venue: Deshpande Auditorium, BIT Sindri, Dhanbad</InfoText>
          <DownloadButton href="/brochure.pdf" target="_blank" className="animate-content">
            <img src={download} alt="Download" width="16" height="16" />
            Download Brochure
          </DownloadButton>
        </Column>

        {/* Column 2: Contact Us */}
        <Column>
          <Title className="animate-content">Contact Us</Title>
          <ContactItem className="animate-content">
            <Icon src={mail} alt="Email" />
            <span>gjmic2026@bitsindri.ac.in</span>
          </ContactItem>
          <ContactItem className="animate-content">
            <Icon src={phone} alt="Phone" />
            <span>Prof. Anindya Sinha: +91-7766908001</span>
          </ContactItem>
          <ContactItem className="animate-content">
            <Icon src={phone} alt="Phone" />
            <span>Prof. Siddhartha Agarwal: +91-9335536412</span>
          </ContactItem>
        </Column>

        {/* Column 3: Stay Guide */}
        <Column>
          <Title className="animate-content">Stay Guide</Title>
          <InfoText className="animate-content">
            <strong>EDC, IIT (ISM) Dhanbad</strong>
          </InfoText>
          <ContactItem className="animate-content">
            <Icon src={mail} alt="Email" />
            <span>edcsah@iitism.ac.in</span>
          </ContactItem>
          <ContactItem className="animate-content">
            <Icon src={phone} alt="Phone" />
            <span>+91-326-223-5001</span>
          </ContactItem>
          <ContactItem className="animate-content">
            <Icon src={globe} alt="Website" />
            <span>Website</span>
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
        © 2026 GJMIC Conference. All rights reserved. <br />
        Organized by Department of Mining Engineering, BIT Sindri
      </BottomNote>
    </FooterWrapper>
  );
}