import React from "react";
import styled, { keyframes } from "styled-components";

// --- Asset Imports ---
import instituteImage from "../assets/bitadmin.jpeg"; // Image for the main institute
import departmentImage from "../assets/bitminig.jpg"; // Image for the Mining department

// --- Icon Imports from react-icons ---
import {
  FiCalendar,
  FiHardDrive,
  FiUsers,
  FiAward,
  FiMapPin,
} from "react-icons/fi";

/*
================================================================================
|                               Data Section                                   |
================================================================================
*/

// --- Data for BIT Sindri Institute ---
const instituteCardData = [
  {
    icon: <FiCalendar />,
    title: "Established in 1949",
    text: "Founded as the College of Mechanical & Electrical Engineering, it stands as one of India's oldest and most esteemed technical institutes.",
  },
  {
    icon: <FiMapPin />,
    title: "Sprawling 450-Acre Campus",
    text: "A fully residential campus that fosters a rich, immersive academic and personal growth environment for its students.",
  },
  {
    icon: <FiUsers />,
    title: "A Legacy of Leaders",
    text: "BIT Sindri has produced a vast network of alumni who are leaders and innovators in technology, business, and public service worldwide.",
  },
  {
    icon: <FiAward />,
    title: "Academic Excellence",
    text: "As a premier autonomous institute, it is renowned for its rigorous curriculum, high academic standards, and contribution to research.",
  },
];

// --- Data for Mining Engineering Department ---
const miningDeptCardData = [
  {
    icon: <FiCalendar />,
    title: "Dept. Established in 1975",
    text: "The department was founded by the Government of Bihar to address the growing demand for skilled mining engineers in the nation.",
  },
  {
    icon: <FiHardDrive />,
    title: "Strategic Foundation",
    text: "Its creation was a direct response to the nationalization of the mineral industry, aiming to bolster India's self-reliance in the sector.",
  },
  {
    icon: <FiMapPin />,
    title: "Located in India's Mineral Hub",
    text: "Situated in the heart of India's prime mineral belt, offering unparalleled industry exposure with leading mining corporations.",
  },
  {
    icon: <FiAward />,
    title: "Producing Industry Pioneers",
    text: "Known for its state-of-the-art labs and expert faculty, the department is a leader in producing top-tier mining professionals.",
  },
];

/*
================================================================================
|                        Keyframes & Styled Components                         |
================================================================================
*/

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  background-color: #1a1a1a;
  min-height: 100vh;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
    gap: 2rem;
  }
`;

const AboutSection = styled.section`
  display: flex;
  background: radial-gradient(circle at top, #3a3a3a, #1a1a1a);
  font-family: 'Georgia', 'Times New Roman', serif;
  padding: 5rem 3rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
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
    padding: 3rem 2rem;
    gap: 2.5rem;
    width: 90%;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    gap: 2rem;
    width: 95%;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 1.5rem;
    width: 98%;
    border-radius: 10px;
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
  color: #ffd700;
  border: 1px solid rgba(255, 215, 0, 0.4);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
    letter-spacing: 0.5px;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  span {
    color: #ffd700;
    text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.3;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 215, 0, 0.7);
    box-shadow: 0 12px 25px rgba(255, 215, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 0.8rem;
    
    &:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 0.6rem;
    border-radius: 10px;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #ffd700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffd700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: #dcdcdc;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const Description = styled.p`
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.8;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
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
  color: #ffd700;
  text-align: right;
  font-weight: 500;
  font-size: 1rem;
  border: 1px solid rgba(255, 215, 0, 0.2);
  line-height: 1.4;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }

  @media (max-width: 576px) {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 1rem;
    text-align: center;
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
  }
`;


/*
================================================================================
|                          Main Exported Component                             |
================================================================================
*/

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* --- Section 1: About BIT Sindri (The Institute) --- */}
      <AboutSection>
        <LeftColumn>
          <HighlightTag>The Institute</HighlightTag>
          <Title>
            A Legacy of Excellence: <span>BIT Sindri</span>
          </Title>
          <CardsGrid>
            {instituteCardData.map((card, index) => (
              <InfoCard key={index}>
                <IconWrapper>{card.icon}</IconWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </InfoCard>
            ))}
          </CardsGrid>
          <Description>
            For over seven decades, BIT Sindri has been a beacon of technical education in India, fostering innovation and nurturing talent to build the nation and serve society.
          </Description>
        </LeftColumn>
        <RightColumn>
          <Image src={instituteImage} alt="BIT Sindri Administrative Building" />
          <ImageCaption>
            <b>BIT Sindri</b>
            <br />
            Pioneering Technical Education Since 1949
          </ImageCaption>
        </RightColumn>
      </AboutSection>

      {/* --- Section 2: About the Mining Engineering Department --- */}
      <AboutSection>
        <LeftColumn>
          <HighlightTag>Departmental Spotlight</HighlightTag>
          <Title>
            Department of <span>Mining Engineering</span>
          </Title>
          <CardsGrid>
            {miningDeptCardData.map((card, index) => (
              <InfoCard key={index}>
                <IconWrapper>{card.icon}</IconWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </InfoCard>
            ))}
          </CardsGrid>
          <Description>
            Instrumental in shaping India's mining industry, the department provides students with a state-of-the-art curriculum designed for the evolving demands of the global mineral landscape.
          </Description>
        </LeftColumn>
        <RightColumn>
          <Image src={departmentImage} alt="BIT Sindri Mining Department Building" />
          <ImageCaption>
            <b>Mining Engineering</b>
            <br />
            Powering the Nation's Mineral Sector
          </ImageCaption>
        </RightColumn>
      </AboutSection>
    </PageWrapper>
  );
}