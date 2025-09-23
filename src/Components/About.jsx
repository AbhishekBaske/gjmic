import React from "react";
import styled, { keyframes } from "styled-components";
import departmentImage from "../assets/bitminig.jpg"; // Using your existing image path

// Importing icons from react-icons
import { FiCalendar, FiHardDrive, FiUsers, FiAward } from "react-icons/fi";

/* ---------------- Data for BIT Sindri ---------------- */

const cardData = [
  {
    icon: <FiCalendar />,
    title: "Established in 1949",
    text: "Initially founded as the College of Mechanical and Electrical Engineering, it was relocated to Sindri in 1950.",
  },
  {
    icon: <FiHardDrive />,
    title: "Mining Dept. Since 1975",
    text: "Established by the Govt. of Bihar to meet the urgent need for qualified mining engineers post-nationalization of the mineral industry.",
  },
  {
    icon: <FiUsers />,
    title: "Pioneering Legacy",
    text: "One of the oldest and most prestigious engineering institutes in India, with a sprawling 450-acre residential campus.",
  },
  {
    icon: <FiAward />,
    title: "Strategic Excellence",
    text: "Located in India's prime mineral belt, fostering deep industry-institute linkages with top mining companies and research bodies.",
  },
];

/* ---------------- Keyframes for animations ---------------- */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ---------------- Styled Components ---------------- */

const PageWrapper = styled.div`
  background-color: #1a1a1a; /* Entire page background color */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0; /* Add some padding around the main section */
`;

const AboutSection = styled.section`
  display: flex;
  background: radial-gradient(circle at top, #3a3a3a, #1a1a1a); /* Rich dark radial gradient */
  font-family: 'Georgia', 'Times New Roman', serif; /* A classic, elegant font */
  padding: 5rem 3rem;
  max-width: 1200px;
  width: 90%; /* Make it responsive */
  margin: 0 auto; /* Center the section */
  border-radius: 18px;
  gap: 3rem;
  align-items: flex-start;
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
  color: #e0e0e0;
  animation: ${fadeIn} 1.2s ease-out forwards;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 50%;
  animation: ${fadeIn} 1s ease-out 0.5s forwards;
  opacity: 0;
`;

const HighlightTag = styled.span`
  display: inline-block;
  background-color: rgba(255, 215, 0, 0.1);
  color: #ffd700; /* Gold color */
  border: 1px solid rgba(255, 215, 0, 0.4);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  span {
    color: #ffd700; /* Gold color */
    text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background-color: #2c2c2c;
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 1.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #cccccc;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 215, 0, 0.7);
    box-shadow: 0 12px 25px rgba(255, 215, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #ffd700; /* Gold color */
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffd700; /* Gold color */
  margin: 0;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: #dcdcdc;
  /* Switched to sans-serif for body text for better readability */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Description = styled.p`
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.8;
  font-style: italic;
`;

const RightColumn = styled.div`
  flex: 1;
  max-width: 50%;
  position: relative;
  animation: ${fadeIn} 1s ease-out 0.8s forwards;
  opacity: 0;

  @media (max-width: 992px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
  border: 2px solid rgba(255, 215, 0, 0.5);
  box-shadow: 0 0 25px rgba(255, 215, 0, 0.2);
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(8px);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  color: #ffd700; /* Gold color */
  text-align: right;
  font-weight: 500;
  font-size: 1rem;
  border: 1px solid rgba(255, 215, 0, 0.2);
  line-height: 1.4;
`;

/* ---------------- Component ---------------- */

export default function AboutBitSindriJubilee() {
  return (
    <PageWrapper>
      <AboutSection>
        <LeftColumn>
          <HighlightTag>Institute Highlights</HighlightTag>
          <Title>
            BIT Sindri's <span>Department of Mining Engineering</span>
          </Title>
          <CardsGrid>
            {cardData.map((card, index) => (
              <InfoCard key={index}>
                <IconWrapper>{card.icon}</IconWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </InfoCard>
            ))}
          </CardsGrid>
          <Description>
            With decades of history, the department has been instrumental in shaping India's mining industry. It provides students with state-of-the-art facilities and a curriculum designed for the evolving demands of the global mining landscape.
          </Description>
        </LeftColumn>
        <RightColumn>
          <Image src={departmentImage} alt="BIT Sindri Campus" />
          <ImageCaption>
            <b>BIT Sindri</b>
            <br />
            A Legacy of Engineering Excellence
          </ImageCaption>
        </RightColumn>
      </AboutSection>
    </PageWrapper>
  );
}