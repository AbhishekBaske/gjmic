import React, { useRef } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Professional golden and dark theme
const colors = {
  backgroundDark: '#121212',
  cardBackground: '#1e1e1e',
  goldAccent: '#daa520',
  textWhite: '#ffffff',
  textLight: '#c0c0c0',
  borderDark: '#333333',
  buttonHover: '#c5941c',
};

// --- Styled Components ---

const SpeakerContainer = styled.div`
  background-color: ${colors.backgroundDark};
  color: ${colors.textLight};
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  padding: 60px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.textWhite};
  margin: 0;

  span {
    color: ${colors.goldAccent};
    text-shadow: 0 0 10px ${colors.goldAccent};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SpeakerCard = styled.div`
  background-color: ${colors.cardBackground};
  border: 1px solid ${colors.borderDark};
  border-radius: 12px;
  padding: 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardHeader = styled.div`
  background-color: rgba(218, 165, 32, 0.1);
  border-bottom: 1px solid ${colors.borderDark};
  padding: 16px 20px;
  text-align: center;
`;

const SeriesTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.textWhite};
  margin: 0;
  letter-spacing: 0.3px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 16px;
    padding: 16px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;

  @media (max-width: 768px) {
    min-width: auto;
    align-items: center;
  }
`;

const ImageSection = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpeakerImage = styled.img`
  width: 180px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${colors.goldAccent};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(218, 165, 32, 0.3);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 170px;
  }
`;

const SpeakerInfo = styled.div`
  color: ${colors.textLight};
  text-align: center;
`;

const SpeakerName = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${colors.textWhite};
  margin: 0 0 6px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Designation = styled.p`
  font-size: 0.8rem;
  color: ${colors.textLight};
  margin: 2px 0;
  line-height: 1.2;
  font-style: italic;
`;

const Institution = styled.p`
  font-size: 0.8rem;
  color: ${colors.goldAccent};
  margin: 2px 0 0 0;
  font-weight: 600;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FocusSection = styled.div`
  text-align: left;
  padding: 12px;
  background-color: rgba(218, 165, 32, 0.1);
  border-radius: 6px;
  border-left: 3px solid ${colors.goldAccent};
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateX(5px);
    background-color: rgba(218, 165, 32, 0.15);
  }
`;

const FocusLabel = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${colors.goldAccent};
  margin: 0 0 6px 0;
`;

const FocusText = styled.p`
  font-size: 0.75rem;
  color: ${colors.textLight};
  line-height: 1.4;
  margin: 0;
`;

const TopicSection = styled.div`
  text-align: left;
  padding: 12px;
  background-color: rgba(218, 165, 32, 0.1);
  border-radius: 6px;
  border-left: 3px solid ${colors.goldAccent};
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateX(5px);
    background-color: rgba(218, 165, 32, 0.15);
  }
`;

const SectionHeading = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${colors.goldAccent};
  margin: 0 0 6px 0;
`;

const TopicText = styled.p`
  color: ${colors.textLight};
  font-size: 0.75rem;
  margin: 0;
  line-height: 1.4;
  font-style: italic;
`;

export default function Speaker() {
    const container = useRef(null);

    useGSAP(() => {
        // Create a timeline for controlled animation sequence
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Set initial states
        gsap.set('.speaker-title', { y: -50, opacity: 0 });
        gsap.set('.speaker-card', { y: 100, opacity: 0, scale: 0.9 });
        gsap.set('.left-section', { x: 50, opacity: 0 });
        gsap.set('.right-section', { x: -50, opacity: 0 });
        gsap.set('.focus-section', { y: 30, opacity: 0 });
        gsap.set('.topic-section', { y: 30, opacity: 0 });

        // Animate title
        tl.to('.speaker-title', {
            y: 0,
            opacity: 1,
            duration: 1,
        });

        // Animate card entrance
        tl.to('.speaker-card', {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'back.out(1.7)',
        }, '-=0.5');

        // Animate right section (focus and topic content)
        tl.to('.right-section', {
            x: 0,
            opacity: 1,
            duration: 0.8,
        }, '-=0.8');

        // Animate left section (image and speaker info)
        tl.to('.left-section', {
            x: 0,
            opacity: 1,
            duration: 0.8,
        }, '-=0.6');

        // Animate content sections with stagger
        tl.to(['.topic-section', '.focus-section'], {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
        }, '-=0.4');

        // Add floating animation to the card
        gsap.to('.speaker-card', {
            y: -10,
            duration: 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: 2,
        });

        // Add subtle glow animation to golden elements
        gsap.to('.gold-glow', {
            textShadow: '0 0 20px #daa520, 0 0 30px #daa520',
            duration: 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: 3,
        });

    }, { scope: container });

    return (
        <SpeakerContainer ref={container}>
            <Header>
                <MainTitle className="speaker-title">
                    Keynote <span className="gold-glow">Speakers</span>
                </MainTitle>
            </Header>
            
            <SpeakerCard className="speaker-card">
                <CardHeader>
                    <SeriesTitle>
                        Damodar Valley Memorial Lecture Series
                    </SeriesTitle>
                </CardHeader>
                <CardContent>
                    <RightSection className="right-section">
                        <TopicSection className="topic-section">
                            <SectionHeading>Lecture Topic</SectionHeading>
                            <TopicText>
                                "Sustainability Path for Mining Industry: Challenges and Opportunities"
                            </TopicText>
                        </TopicSection>

                        <FocusSection className="focus-section">
                            <FocusLabel>Focus:</FocusLabel>
                            <FocusText>
                                Sustainable mining and technology adoption in India, specifically around advanced 
                                geotechnical modeling, mine waste management (including highly successful work on 
                                waste dump slope stability), and shaping future mining professionals through 
                                advanced education and research.
                            </FocusText>
                        </FocusSection>
                    </RightSection>
                    
                    <LeftSection className="left-section">
                        <ImageSection>
                            <SpeakerImage 
                                src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/mentor_0002_Layer-8.jpg" 
                                alt="Prof. Sanjay Kumar Sharma"
                            />
                        </ImageSection>
                        
                        <SpeakerInfo>
                            <SpeakerName>Dr. Sanjay Kumar Sharma</SpeakerName>
                            <Designation>Professor, Department of Mining Engineering</Designation>
                            <Institution>IIT (BHU), Varanasi</Institution>
                        </SpeakerInfo>
                    </LeftSection>
                </CardContent>
            </SpeakerCard>

            <SpeakerCard className="speaker-card" style={{ marginTop: '40px' }}>
                <CardHeader>
                    <SeriesTitle>
                        Damodar Valley Memorial Lecture Series
                    </SeriesTitle>
                </CardHeader>
                <CardContent>
                    <RightSection className="right-section">
                        <TopicSection className="topic-section">
                            <SectionHeading>Lecture Topic</SectionHeading>
                            <TopicText>
                                "Researches on Uranium Mining: Saviour of Defence of the Country"
                            </TopicText>
                        </TopicSection>

                        <FocusSection className="focus-section">
                            <FocusLabel>Focus:</FocusLabel>
                            <FocusText>
                                Established researcher and consultant with 38+ years in subsurface mine ventilation 
                                and air-conditioning. Former Director of IIT(ISM) Dhanbad, Principal Investigator 
                                of 14 major research projects, and executed 445+ industry-sponsored projects. 
                                Internationally recognized expert who chaired technical sessions at multiple 
                                International Mine Ventilation Congresses and was instrumental in hosting the 
                                9th IMVC in Asia for the first time.
                            </FocusText>
                        </FocusSection>
                    </RightSection>
                    
                    <LeftSection className="left-section">
                        <ImageSection>
                            <SpeakerImage 
                                src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/Photograph%20of%20DCP.png
" 
                                alt="Prof. D. C. Panigrahi"
                            />
                        </ImageSection>
                        
                        <SpeakerInfo>
                            <SpeakerName>Prof. D. C. Panigrahi, FNAE</SpeakerName>
                            <Designation>Managing Director, PMRC Private Limited</Designation>
                            <Institution>& Formerly Director, IIT (ISM) Dhanbad</Institution>
                        </SpeakerInfo>
                    </LeftSection>
                </CardContent>
            </SpeakerCard>

            <SpeakerCard className="speaker-card" style={{ marginTop: '40px' }}>
                <CardHeader>
                    <SeriesTitle>
                        Damodar Valley Memorial Lecture Series
                    </SeriesTitle>
                </CardHeader>
                <CardContent>
                    <RightSection className="right-section">
                        <TopicSection className="topic-section">
                            <SectionHeading>Lecture Topic</SectionHeading>
                            <TopicText>
                                "Utilization of Overburden sandstone as Sand - A Game Changer for the Coal Mining Industry"
                            </TopicText>
                        </TopicSection>

                        <FocusSection className="focus-section">
                            <FocusLabel>Focus:</FocusLabel>
                            <FocusText>
                                Experienced Academician, Researcher and a Consultant with a demonstrated history of 
                                working in the higher education in the area of Mining Engineering with specialization 
                                in Rock Mechanics and Ground Control.
                            </FocusText>
                        </FocusSection>
                    </RightSection>
                    
                    <LeftSection className="left-section">
                        <ImageSection>
                            <SpeakerImage 
                                src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/WhatsApp%20Image%202025-11-13%20at%2000.53.47%20(1).jpeg
" 
                                alt="Prof. Abhiram Kumar Verma"
                            />
                        </ImageSection>
                        
                        <SpeakerInfo>
                            <SpeakerName>Prof. Abhiram Kumar Verma</SpeakerName>
                            <Designation>Professor, Department of Mining Engineering</Designation>
                            <Institution>IIT Kharagpur</Institution>
                        </SpeakerInfo>
                    </LeftSection>
                </CardContent>
            </SpeakerCard>
        </SpeakerContainer>
    );
}

