import React from 'react';
import styled, { keyframes } from 'styled-components';
import { X } from 'lucide-react';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Components
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out;
  padding: 20px;
`;

const PopupContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2.5rem;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: ${slideIn} 0.4s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #64748b;
  
  &:hover {
    background: #f1f5f9;
    color: #334155;
    border-color: #cbd5e1;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.025em;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  margin: 0;
  font-weight: 400;
  line-height: 1.6;
`;

const SponsorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SponsorCard = styled.div`
  background: white;
  border-radius: 6px;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  transition: all 0.2s ease;
  border: 1px solid #e2e8f0;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-color: ${props => 
      props.tier === 'silver' ? '#94a3b8' : 
      props.tier === 'bronze' ? '#cd7f32' : 
      '#059669'};
  }
`;

const TierBadge = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background: ${props => 
    props.tier === 'silver' ? '#94a3b8' : 
    props.tier === 'bronze' ? '#cd7f32' : 
    '#059669'};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const SponsorLogo = styled.img`
  width: 100%;
  max-width: 140px;
  height: 90px;
  object-fit: contain;
  border-radius: 4px;
  background: #fafafa;
  padding: 0.75rem;
  border: 1px solid #f1f1f1;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => 
      props.tier === 'silver' ? '#94a3b8' : 
      props.tier === 'bronze' ? '#cd7f32' : 
      '#059669'};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const SponsorPopup = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const sponsors = [
    // Silver Sponsors
    {
      tier: 'silver',
      name: 'Northern Coalfields Limited',
      logo: 'https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/NCL%20LOGO.jpg',
      url: 'https://www.nclcil.in'
    },
    {
      tier: 'silver',
      name: 'Jindal Power Limited',
      logo: 'https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/jindalpower.jpg',
      url: 'https://www.jindalpower.com'
    },
    {
      tier: 'silver',
      name: 'Central Coalfields Limited',
      logo: 'https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/CCL%20Logo%202024.jpg',
      url: 'https://www.centralcoalfields.in/'
    },
    
    // Bronze Sponsors
    {
      tier: 'bronze',
      name: 'NLC India Limited',
      logo: 'https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/NLCIL%20Logo%20CMYK_.png',
      url: 'https://www.nlcindia.in'
    },
    {
      tier: 'bronze',
      name: 'Western Coalfields Limited',
      logo: 'https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@latest/WCL_to_organize_two_day_seminar_on_Coal_Mine_Safety_in_India.jpg',
      url: 'https://westerncoal.in/'
    },
    
    // Other Sponsors
    {
      tier: 'other',
      name: 'SHAR Projects Private Limited',
      logo: 'https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/Logo%20SHAR.jpg',
      url: 'https://sharprojects.in/'
    },
    {
      tier: 'other',
      name: 'Hindalco Industries Limited',
      logo: 'https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/Hindalco_3D_logo_Aw%20(1).webp',
      url: 'https://www.hindalco.com'
    },
    {
      tier: 'other',
      name: 'Mahanadi Coalfields Limited',
      logo: 'https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/MCL_English.jpg',
      url: 'https://www.mahanadicoal.in'
    }
  ];

  return (
    <PopupOverlay onClick={handleClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>
          <X size={20} />
        </CloseButton>
        
        <Header>
          <Title>Our Sponsors</Title>
          <Subtitle>We gratefully acknowledge our valuable sponsors</Subtitle>
        </Header>
        
        <SponsorGrid>
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} tier={sponsor.tier}>
              <TierBadge tier={sponsor.tier}>
                {sponsor.tier === 'silver' ? 'Silver' :
                 sponsor.tier === 'bronze' ? 'Bronze' : 
                 'Other'}
              </TierBadge>
              <a 
                href={sponsor.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <SponsorLogo 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  tier={sponsor.tier}
                />
              </a>
            </SponsorCard>
          ))}
        </SponsorGrid>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default SponsorPopup;