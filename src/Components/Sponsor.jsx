import styled, { keyframes } from 'styled-components';

// Golden shimmer animation for golden jubilee effect
const goldenShimmer = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #f5f5f5 25%,
    #121212 75%,
    #000000 100%
  );
  background-size: 100% 200%;
  min-height: 100vh;
  position: relative;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #1e40af, #3b82f6, #60a5fa);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(
    45deg, 
    #B8860B, 
    #FFD700, 
    #FFA500, 
    #FF8C00, 
    #DAA520,
    #FFD700,
    #B8860B
  );
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${goldenShimmer} 4s ease-in-out infinite;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(218, 165, 32, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const SponsorTierSection = styled.div`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const TierTitle = styled.h2`
  color: #1e293b;
  margin-bottom: 2rem;
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  position: relative;
`;

const TierBadge = styled.span`
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 3rem;
  background: ${props => 
    props.tier === 'silver' ? '#94a3b8' : 
    props.tier === 'bronze' ? '#cd7f32' : 
    '#059669'};
  color: white;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.6rem 1.5rem;
    margin-bottom: 2rem;
  }
`;

const SponsorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const SponsorCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
  max-width: 300px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    max-width: 280px;
    padding: 1.25rem;
    border-radius: 10px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 480px) {
    max-width: 90%;
    width: 90%;
    padding: 1rem;
    border-radius: 8px;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const SponsorImageLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  height: 200px;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media (max-width: 768px) {
    height: 160px;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    height: 140px;
    margin-bottom: 1rem;
  }
`;

const SponsorImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: 180px;
  object-fit: contain;
  border-radius: 8px;
  background: #fafafa;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => 
      props.tier === 'silver' ? '#94a3b8' : 
      props.tier === 'bronze' ? '#cd7f32' : 
      '#059669'};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    max-width: 200px;
    height: 130px;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    max-width: 180px;
    height: 110px;
    padding: 0.75rem;
    border-radius: 6px;
  }
`;

const SponsorName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.3;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }
`;

const SponsorDescription = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  text-align: center;
  flex-grow: 1;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.5;
    text-align: center;
  }
`;

const VisitWebsiteButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white ;
  color: blue;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-top: auto;
  
  &::after {
    content: '→';
    font-size: 1rem;
  }
`;

const CardTierBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: white;
  z-index: 10;
  background: ${props => 
    props.tier === 'gold' ? '#FFD700' : 
    props.tier === 'silver' ? '#C0C0C0' : 
    props.tier === 'bronze' ? '#CD7F32' : 
    '#059669'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
    top: -3px;
    right: -3px;
  }
`;

export default function Sponsor() {
    return(
        <Container>
            <ContentWrapper>
                <Header>
                    <MainTitle>GJMIC-2025 Sponsors</MainTitle>
                    <Subtitle>
                        We gratefully acknowledge the generous support of our sponsors who make this conclave possible
                    </Subtitle>
                </Header>
                {/* Gold Sponsors Row */}
                <SponsorTierSection>
                    <TierTitle>
                        <TierBadge tier="gold">Gold Sponsors</TierBadge>
                    </TierTitle>
                    <SponsorList>
                        <SponsorCard>
                            <CardTierBadge tier="gold">Gold sponsor</CardTierBadge>
                            <SponsorImageLink 
                                href="https://bcclweb.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SponsorImage 
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/Bharat%20Coking%20Coal.webp"
                                    alt="Bharat Coking Coal Limited Logo"
                                    tier="gold"
                                />
                            </SponsorImageLink>
                            <SponsorName>Bharat Coking Coal Limited</SponsorName>
                            <SponsorDescription>
                                Established in 1972, BCCL is a subsidiary of Coal India Limited operating coking coal mines in Jharia and Raniganj coalfields.      
                            </SponsorDescription>
                            <VisitWebsiteButton 
                                href="https://bcclweb.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                    </SponsorList>
                </SponsorTierSection>
                
                {/* Silver Sponsors Row */}
                <SponsorTierSection>
                    <TierTitle>
                        <TierBadge tier="silver">Silver Sponsors</TierBadge>
                    </TierTitle>
                    <SponsorList>
                        <SponsorCard>
                            <CardTierBadge tier="silver">Silver sponsor</CardTierBadge>
                            <SponsorImageLink 
                                href="https://www.nclcil.in" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SponsorImage 
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/NCL%20LOGO.jpg" 
                                    alt="NCL Logo" 
                                    tier="silver"
                                />
                            </SponsorImageLink>
                            <SponsorName>Northern Coalfields Limited</SponsorName>
                            <SponsorDescription>
                                Established in 1985, NCL is a wholly owned subsidiary of Coal India Limited, operating mechanized opencast coal mines in Singrauli coalfield.
                            </SponsorDescription>
                            <VisitWebsiteButton 
                                href="https://www.nclcil.in" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                        
                        <SponsorCard>
                            <CardTierBadge tier="silver">Silver sponsor</CardTierBadge>
                            <SponsorImageLink 
                                href="https://www.jindalpower.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SponsorImage 
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/jindalpower.jpg"
                                    alt="Jindal Power Limited Logo"
                                    tier="silver"
                                />
                            </SponsorImageLink>
                            <SponsorName>Jindal Power Limited</SponsorName>
                            <SponsorDescription>
                                Jindal Power Limited is a leading independent power producer in India, part of the OP Jindal Group operating thermal power plants.
                            </SponsorDescription>
                            <VisitWebsiteButton 
                                href="https://www.jindalpower.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                        
                        <SponsorCard>
                            <CardTierBadge tier="silver">Silver sponsor</CardTierBadge>
                            <SponsorImageLink 
                                href="https://www.centralcoalfields.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SponsorImage 
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/CCL%20Logo%202024.jpg"
                                    alt="CCL Logo"
                                    tier="silver"
                                />
                            </SponsorImageLink>
                            <SponsorName>Central Coalfields Limited</SponsorName>
                            <SponsorDescription>
                                Established in 1975, CCL is a subsidiary of Coal India Limited operating 43 mines across coalfields for thermal power generation.
                            </SponsorDescription>
                            <VisitWebsiteButton 
                                href="https://www.centralcoalfields.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                    </SponsorList>
                </SponsorTierSection>

                {/* Bronze Sponsors Row */}
                <SponsorTierSection>
                    <TierTitle>
                        <TierBadge tier="bronze">Bronze Sponsors</TierBadge>
                    </TierTitle>
                    <SponsorList>
                        <SponsorCard>
                            <CardTierBadge tier="bronze">Bronze sponsor</CardTierBadge>
                            <SponsorImageLink 
                                href="https://www.nlcindia.in" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SponsorImage 
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/NLCIL%20Logo%20CMYK_.png" 
                                    alt="NLC India Limited Logo" 
                                    tier="bronze"
                                />
                            </SponsorImageLink>
                            <SponsorName>NLC India Limited</SponsorName>
                            <SponsorDescription>
                                Incorporated in 1956, NLC India produces lignite from opencast mines and operates thermal power stations with renewable energy installations.
                            </SponsorDescription>
                            <VisitWebsiteButton 
                                href="https://www.nlcindia.in" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                        
                        <SponsorCard>
                            <CardTierBadge tier="bronze">Bronze sponsor</CardTierBadge>
                            <SponsorImageLink 
                                href="https://westerncoal.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SponsorImage
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/WCL_to_organize_two_day_seminar_on_Coal_Mine_Safety_in_India.jpg"
                                    alt="Western Coalfields Limited Logo"
                                    tier="bronze"
                                />
                            </SponsorImageLink>
                            <SponsorName>Western Coalfields Limited</SponsorName>
                            <SponsorDescription>
                                Established in 1975, WCL is a subsidiary of Coal India Limited operating coal mines across Maharashtra and Madhya Pradesh.
                            </SponsorDescription>
                            <VisitWebsiteButton 
                                href="https://westerncoal.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                        <SponsorCard>
                          <CardTierBadge tier="bronze">Bronze sponsor</CardTierBadge>
                          <SponsorImageLink 
                              href="https://dvc.gov.in/"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <SponsorImage 
                                  src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/image.webp" 
                                  alt="DVC Logo" 
                                  tier="bronze"
                              />
                          </SponsorImageLink>
                          <SponsorName>Damodar Valley Corporation</SponsorName>
                          <SponsorDescription>
                              Established in 1948, DVC is a premier multipurpose river valley project in India, operating thermal and hydro power plants in the Damodar River basin.
                          </SponsorDescription>
                          <VisitWebsiteButton 
                              href="https://dvc.gov.in/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                          >
                              Visit Website
                          </VisitWebsiteButton>
                        </SponsorCard>
                    </SponsorList>
                </SponsorTierSection>

                {/* Other Sponsors Row */}
                <SponsorTierSection>
                    <TierTitle>
                        <TierBadge tier="other">Other Sponsors</TierBadge>
                    </TierTitle>
                    <SponsorList>
                        <SponsorCard>
                            <CardTierBadge tier="other">Others</CardTierBadge>
                            <SponsorImageLink 
                                href="https://sharprojects.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SponsorImage 
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/Logo%20SHAR.jpg" 
                                    alt="SHAR Projects Logo" 
                                    tier="other"
                                />
                            </SponsorImageLink>
                            <SponsorName>SHAR Projects Private Limited</SponsorName>
                            <SponsorDescription>
                                Founded in 2023 and headquartered in Hyderabad, SHAR Projects specializes in mining, construction, road development, and railway infrastructure.
                            </SponsorDescription>
                            <VisitWebsiteButton 
                                href="https://sharprojects.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                        <SponsorCard>
                            <CardTierBadge tier="other">Others</CardTierBadge>
                            <SponsorImageLink
                                href="https://www.easterncoal.nic.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SponsorImage
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/ecllogo.jpg"
                                    alt="Eastern Coalfields Limited Logo"
                                    tier="other"
                                />
                            </SponsorImageLink>
                            <SponsorName>Eastern Coalfields Limited</SponsorName>
                            <SponsorDescription>
                                Established in 1975, ECL is a subsidiary of Coal India Limited operating coal mines across West Bengal.
                            </SponsorDescription>
                            <VisitWebsiteButton
                                href="https://www.easterncoal.nic.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                        <SponsorCard>
                            <CardTierBadge tier="other">Others</CardTierBadge>
                            <SponsorImageLink 
                                href="https://www.hindalco.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SponsorImage 
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/Hindalco_3D_logo_Aw%20(1).webp" 
                                    alt="Hindalco Industries Logo" 
                                    tier="other"
                                />
                            </SponsorImageLink>
                            <SponsorName>Hindalco Industries Limited</SponsorName>
                            <SponsorDescription>
                                Established in 1958, Hindalco is a subsidiary of the Aditya Birla Group and leading Indian aluminium and copper manufacturing company.
                            </SponsorDescription>
                            <VisitWebsiteButton 
                                href="https://www.hindalco.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                        
                        <SponsorCard>
                            <CardTierBadge tier="other">Others</CardTierBadge>
                            <SponsorImageLink 
                                href="https://www.mahanadicoal.in" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SponsorImage 
                                    src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/MCL_English.jpg" 
                                    alt="Mahanadi Coalfields Limited Logo" 
                                    tier="other"
                                />
                            </SponsorImageLink>
                            <SponsorName>Mahanadi Coalfields Limited</SponsorName>
                            <SponsorDescription>
                                Established in 1992, MCL is a subsidiary of Coal India Limited operating coal mines across Odisha with largest coal production.
                            </SponsorDescription>
                            <VisitWebsiteButton 
                                href="https://www.mahanadicoal.in" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Visit Website
                            </VisitWebsiteButton>
                        </SponsorCard>
                    </SponsorList>
                </SponsorTierSection>
            </ContentWrapper>
        </Container>
    )
}