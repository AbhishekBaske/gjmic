import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import departmentLogo from "../assets/bitadmin.jpeg";
import miningDept from "../assets/bitminig.jpg";

/* ---------------- Styled Components ---------------- */

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  background: #f5f7fa;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
`;

const Section = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  margin: 2.5rem 0;
  padding: 2rem;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  /* hidden initial state for GSAP */
  opacity: 0;
  transform: translateY(40px);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 320px; /* bigger image */
  margin: 0 2rem 1rem;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin: 0 0 1.5rem 0;
    flex: 0 0 auto;
    width: 100%;
    img {
      max-width: 320px;
    }
  }
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 250px;

  p:first-child {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
    color: #0055a5;
  }

  p:nth-child(2) {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
    color: #444;
  }

  p:nth-child(3) {
    line-height: 1.7;
    text-align: justify;
    color: #333;
  }
`;

/* ---------------- Component ---------------- */

export default function About() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.to(sectionsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
    });
  }, []);

  return (
    <PageContainer>
      {/* First card: image will be on the right because reverse = true */}
      <Section ref={(el) => (sectionsRef.current[0] = el)} reverse>
        <ImageContainer>
          <img src={departmentLogo} alt="Department Logo" />
        </ImageContainer>
        <TextContainer>
          <p>About BIT Sindri, Dhanbad</p>
          <p>The premier engineering college of Jharkhand</p>
          <p>
            Established in 1949, BIT Sindri is one of the oldest engineering colleges in India.
            It has a rich legacy of producing skilled engineers and technocrats who have
            contributed significantly to various industries. The institute offers undergraduate,
            postgraduate, and doctoral programs in various engineering disciplines.
          </p>
        </TextContainer>
      </Section>

      {/* Second card: also image on the right */}
      <Section ref={(el) => (sectionsRef.current[1] = el)} reverse>
        <ImageContainer>
          <img src={miningDept} alt="Mining Department" />
        </ImageContainer>
        <TextContainer>
          <p>About Mining Engineering Department</p>
          <p>50 years of excellence</p>
          <p>
            The Mining Engineering Department at BIT Sindri is renowned for its excellence in mining
            education and research. The department is equipped with state-of-the-art laboratories
            and facilities to provide hands-on training to students. It focuses on various aspects
            of mining engineering, including mineral exploration, mine planning, safety management,
            and environmental sustainability.
          </p>
        </TextContainer>
      </Section>
    </PageContainer>
  );
}
