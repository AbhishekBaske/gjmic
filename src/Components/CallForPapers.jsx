import React, { useRef } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Import icons from react-icons
import { FaDownload, FaCalendarAlt, FaPaperclip, FaBookOpen, FaEnvelope, FaCalendarCheck, FaFileWord, FaInfoCircle, FaFont, FaRegListAlt } from 'react-icons/fa';

// --- Color Palette ---
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

const CallForPapersContainer = styled.div`
  background-color: ${colors.backgroundDark};
  color: ${colors.textLight};
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; /* Hide elements before animation */
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 48px;
  max-width: 800px;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: ${colors.textWhite};
  margin: 0 0 16px 0;

  span {
    color: ${colors.goldAccent};
    text-shadow: 0 0 10px ${colors.goldAccent};
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.textLight};
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.2rem;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${colors.goldAccent};
  color: ${colors.backgroundDark};

  &:hover {
    background-color: ${colors.buttonHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(218, 165, 32, 0.4);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${colors.goldAccent};
  border: 2px solid ${colors.goldAccent};

  &:hover {
    background-color: rgba(218, 165, 32, 0.1);
    transform: translateY(-2px);
  }
`;

const GuidelinesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background-color: ${colors.cardBackground};
  border: 1px solid ${colors.borderDark};
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.textWhite};

  svg {
    color: ${colors.goldAccent};
    font-size: 1.8rem;
  }
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ContentSection = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${colors.goldAccent};
    margin-bottom: 16px;
    border-bottom: 1px solid ${colors.borderDark};
    padding-bottom: 8px;
  }
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;

  svg {
    color: ${colors.goldAccent};
    flex-shrink: 0;
  }
`;

const TypographyTable = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 16px;
  font-size: 0.95rem;

  strong {
    color: ${colors.textWhite};
  }
`;

const FooterNote = styled.p`
    font-style: italic;
    font-size: 0.9rem;
    color: ${colors.textLight};
    margin-top: 24px;
    border-top: 1px solid ${colors.borderDark};
    padding-top: 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        color: ${colors.goldAccent};
    }
`;

// --- React Component ---

export default function CallForPapers() {
  const container = useRef(null);

  useGSAP(() => {
    // Create a timeline for a controlled animation sequence
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Set initial states
    gsap.set('.reveal', { y: 75, opacity: 0 });
    gsap.set(['.card-1', '.card-2'], { y: 100, opacity: 0 });

    // Animate header elements
    tl.to('.reveal', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2
    });

    // Animate info cards with a slight stagger
    tl.to(['.card-1', '.card-2'], {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.3
    }, "-=0.8"); // Overlap with previous animation

  }, { scope: container });

  return (
    <CallForPapersContainer ref={container}>
      <Header>
        <MainTitle className="reveal">Call for <span>Papers</span></MainTitle>
        <Subtitle className="reveal">
          Share your innovative research and contribute to the Golden Jubilee Mining Innovation Conclave 2025. Join mining professionals, researchers, and industry experts in celebrating 50 years of excellence while shaping the future of mining technology and sustainable practices.
        </Subtitle>
        <ButtonContainer className="reveal">
          <PrimaryButton><FaDownload /> Download template for Abstract</PrimaryButton>
          <SecondaryButton><FaCalendarAlt /> View Deadlines</SecondaryButton>
        </ButtonContainer>
      </Header>

      <GuidelinesGrid>
        <InfoCard className="card-1">
          <CardHeader><FaPaperclip /> Paper Submission Guidelines</CardHeader>
          <CardContent>
            <ContentSection>
              <h3><FaEnvelope /> Submission Details</h3>
              <DetailsList>
                <ListItem><FaEnvelope /> Email to: gjmic@bitsindri.ac.in</ListItem>
                <ListItem><FaCalendarCheck /> Deadline: 31 October 2025</ListItem>
                <ListItem><FaFileWord /> Format: MS Word document/Pdf</ListItem>
              </DetailsList>
            </ContentSection>
            <ContentSection>
              <h3><FaInfoCircle /> Important Notes</h3>
              <DetailsList>
                <ListItem>Original, unpublished work only.</ListItem>
                <ListItem>Strict formatting compliance required.</ListItem>
              </DetailsList>
            </ContentSection>
          </CardContent>
        </InfoCard>

        <InfoCard className="card-2">
          <CardHeader><FaBookOpen /> Format Specifications</CardHeader>
          <CardContent>
            <ContentSection>
              <h3><FaFont /> Typography</h3>
              <TypographyTable>
                <strong>Title:</strong><span>TNR 12 bold</span>
                <strong>Author:</strong><span>TNR 10.5</span>
                <strong>Affiliation:</strong><span>TNR 10 italic</span>
                <strong>Headings:</strong><span>TNR 10 bold</span>
                <strong>Sub-headings:</strong><span>TNR 12 bold</span>
                <strong>Body text:</strong><span>TNR 10</span>
              </TypographyTable>
            </ContentSection>
            <ContentSection>
              <h3><FaRegListAlt /> Other Requirements</h3>
              <DetailsList>
                <ListItem><strong>Figures/Tables:</strong> Label as Figure 1, Table 2, etc.</ListItem>
                <ListItem><strong>References:</strong> Chicago style, alphabetical order.</ListItem>
              </DetailsList>
            </ContentSection>
          </CardContent>
          <FooterNote>
            <FaInfoCircle />For any query related to paper submission contact Prof. Manas Kumar Mallick email: manaskmallick@bitsindri.ac.in Ph: 8555916172
          </FooterNote>
        </InfoCard>
      </GuidelinesGrid>
    </CallForPapersContainer>
  );
}