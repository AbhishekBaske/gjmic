// Home.jsx
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ---------- Animations ----------
const goldSweep = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// ---------- Carousel Styled Components ----------
const CarouselContainer = styled.div`
  display: none;
  width: 100%;
  max-width: 100%;
  margin: 2rem 0;
  position: relative;
  background: linear-gradient(135deg, #fafafa 0%, #f8f9fa 100%);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.15);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const CarouselTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #d4af37, #f9d976);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => -props.currentSlide * 100}%);
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  animation: ${slideIn} 0.5s ease-out;
`;

const CarouselLogoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => 
    props.tier === 'silver' ? '#c0c0c0' : 
    props.tier === 'bronze' ? '#cd7f32' : 
    '#4ade80'};
  transition: all 0.3s ease;
  max-width: 280px;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
  }
`;

const CarouselLogo = styled.img`
  width: 120px;
  height: 90px;
  object-fit: contain;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CarouselLogoName = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
  line-height: 1.3;
`;

const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(90deg, #d4af37, #f9d976);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f0c0c;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  
  &:hover {
    background: linear-gradient(90deg, #f9d976, #d4af37);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%) scale(0.9);
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
`;

const CarouselIndicator = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#d4af37' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f9d976;
    transform: scale(1.2);
  }
`;

// ---------- Styled Components ----------
const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #f5f5f5 25%,
    #121212 75%,
    #000000 100%
  );
  background-size: 100% 200%;
  
  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 1rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #f5f5f5 25%,
    #121212 75%,
    #000000 100%
  );
  background-size: 100% 200%;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 1rem;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(40px, 8vw, 120px);
  margin-bottom: 20px;
  flex-wrap: wrap;
  position: relative;
  z-index: 10;
  
  /* Create overflow effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -50px;
    transform: translateY(-50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: -1;
  }
`;

const LogoImage = styled.img`
  width: clamp(100px, 22vw, 180px);
  height: auto;
  opacity: 0;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 8px 16px rgba(212, 175, 55, 0.3));
  }
  
  /* Logo overflow effect */
  &:first-child {
    margin-left: -20px;
  }
  
  &:last-child {
    margin-right: -20px;
  }
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

// Sponsors data
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
    logo: 'https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/WCL_to_organize_two_day_seminar_on_Coal_Mine_Safety_in_India.jpg',
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

// Mobile Sponsor Carousel Component
const SponsorCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Auto-play carousel
  useEffect(() => {
    if (sponsors.length <= 1) return; // Don't auto-play if only one or no sponsors
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sponsors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Animate carousel entrance
  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sponsors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Don't render if no sponsors
  if (sponsors.length === 0) return null;

  return (
    <CarouselContainer ref={carouselRef}>
      <CarouselTitle>Our Sponsors</CarouselTitle>
      
      <CarouselWrapper>
        {sponsors.length > 1 && (
          <CarouselNavButton 
            direction="left" 
            onClick={prevSlide}
            aria-label="Previous sponsor"
          >
            <FaChevronLeft />
          </CarouselNavButton>
        )}
        
        <CarouselTrack currentSlide={currentSlide}>
          {sponsors.map((sponsor, index) => (
            <CarouselSlide key={`sponsor-${index}`}>
              <CarouselLogoCard tier={sponsor.tier}>
                <a 
                  href={sponsor.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <CarouselLogo 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <CarouselLogoName>{sponsor.name}</CarouselLogoName>
                </a>
              </CarouselLogoCard>
            </CarouselSlide>
          ))}
        </CarouselTrack>
        
        {sponsors.length > 1 && (
          <CarouselNavButton 
            direction="right" 
            onClick={nextSlide}
            aria-label="Next sponsor"
          >
            <FaChevronRight />
          </CarouselNavButton>
        )}
      </CarouselWrapper>
      
      {sponsors.length > 1 && (
        <CarouselIndicators>
          {sponsors.map((_, index) => (
            <CarouselIndicator
              key={`indicator-${index}`}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
              aria-label={`Go to sponsor ${index + 1}`}
            />
          ))}
        </CarouselIndicators>
      )}
    </CarouselContainer>
  );
};

// Sponsor Section Component
const SponsorSection = () => {
  const sponsorRowsRef = useRef([]);
  const sponsorCardsRef = useRef([]);
  const sponsorTitleRef = useRef(null);

  useEffect(() => {
    // Animate sponsor title with golden glow
    if (sponsorTitleRef.current) {
      gsap.fromTo(
        sponsorTitleRef.current,
        { 
          opacity: 0, 
          y: -30,
          textShadow: "0 0 0px #d4af37"
        },
        { 
          opacity: 1, 
          y: 0,
          textShadow: "0 0 20px #d4af37, 0 0 30px #f9d976",
          duration: 1.5,
          ease: "power3.out",
          delay: 3
        }
      );
    }

    // Animate sponsor rows with stagger
    if (sponsorRowsRef.current.length > 0) {
      gsap.fromTo(
        sponsorRowsRef.current.filter(Boolean),
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "back.out(1.2)",
          delay: 3.5
        }
      );
    }

    // Animate individual sponsor cards
    if (sponsorCardsRef.current.length > 0) {
      gsap.fromTo(
        sponsorCardsRef.current.filter(Boolean),
        { 
          opacity: 0, 
          rotationY: 90,
          transformOrigin: "center"
        },
        { 
          opacity: 1, 
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 4
        }
      );

      // Add floating animation to sponsor cards
      gsap.to(sponsorCardsRef.current.filter(Boolean), {
        y: "+=10",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
        delay: 5
      });
    }
  }, []);

  // Organize sponsors by tier
  const silverSponsors = sponsors.filter(sponsor => sponsor.tier === 'silver');
  const bronzeSponsors = sponsors.filter(sponsor => sponsor.tier === 'bronze');
  const otherSponsors = sponsors.filter(sponsor => sponsor.tier === 'other');

  return (
    <SponsorContainer>
      <SponsorTitle ref={sponsorTitleRef}>Our Sponsors</SponsorTitle>
      
      {/* Silver Row */}
      {silverSponsors.length > 0 && (
        <SponsorRow ref={(el) => (sponsorRowsRef.current[0] = el)}>
          {silverSponsors.map((sponsor, index) => (
            <SponsorCard 
              key={`silver-${index}`} 
              tier={sponsor.tier}
              ref={(el) => (sponsorCardsRef.current[index] = el)}
            >
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <SponsorLogo 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <SponsorName>{sponsor.name}</SponsorName>
                <TierBadge tier={sponsor.tier}>Silver</TierBadge>
              </a>
            </SponsorCard>
          ))}
        </SponsorRow>
      )}
      
      {/* Bronze Row */}
      {bronzeSponsors.length > 0 && (
        <SponsorRow className="bronze-row" ref={(el) => (sponsorRowsRef.current[1] = el)}>
          {bronzeSponsors.map((sponsor, index) => (
            <SponsorCard 
              key={`bronze-${index}`} 
              tier={sponsor.tier}
              ref={(el) => (sponsorCardsRef.current[silverSponsors.length + index] = el)}
            >
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <SponsorLogo 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <SponsorName>{sponsor.name}</SponsorName>
                <TierBadge tier={sponsor.tier}>Bronze</TierBadge>
              </a>
            </SponsorCard>
          ))}
        </SponsorRow>
      )}
      
      {/* Other Row */}
      {otherSponsors.length > 0 && (
        <SponsorRow ref={(el) => (sponsorRowsRef.current[2] = el)}>
          {otherSponsors.map((sponsor, index) => (
            <SponsorCard 
              key={`other-${index}`} 
              tier={sponsor.tier}
              ref={(el) => (sponsorCardsRef.current[silverSponsors.length + bronzeSponsors.length + index] = el)}
            >
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <SponsorLogo 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <SponsorName>{sponsor.name}</SponsorName>
                <TierBadge tier={sponsor.tier}>Other</TierBadge>
              </a>
            </SponsorCard>
          ))}
        </SponsorRow>
      )}
    </SponsorContainer>
  );
};

const SponsorContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background: linear-gradient(135deg, #fafafa 0%, #f8f9fa 25%, #f1f3f4 50%, #e8eaed 75%, #f0f2f5 100%);
  border-radius: 12px;
  box-shadow: 
    0 10px 30px rgba(212, 175, 55, 0.15),
    0 0 0 1px rgba(212, 175, 55, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(212, 175, 55, 0.05) 50%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const SponsorTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #f9d976);
    border-radius: 2px;
  }
`;

const SponsorRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  
  &.bronze-row {
    justify-content: center;
    grid-template-columns: repeat(2, 200px);
    justify-self: center;
    margin: 0 auto 1rem auto;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    
    &.bronze-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    
    &.bronze-row {
      grid-template-columns: 1fr;
    }
  }
`;

const SponsorCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%);
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid ${props => 
    props.tier === 'silver' ? '#c0c0c0' : 
    props.tier === 'bronze' ? '#cd7f32' : 
    props.tier === 'other' ? '#4ade80' :
    '#e2e8f0'};
  overflow: hidden;
    
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(212, 175, 55, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }
    
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 15px 35px rgba(212, 175, 55, 0.3),
      0 5px 15px rgba(0, 0, 0, 0.1);
    border-color: #d4af37;
    
    &::before {
      left: 100%;
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
    display: block;
    position: relative;
    z-index: 1;
  }
`;

const SponsorLogo = styled.img`
  width: 85px;
  height: 65px;
  object-fit: contain;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  filter: brightness(1) contrast(1.1);
  
  ${SponsorCard}:hover & {
    transform: scale(1.1);
    filter: brightness(1.1) contrast(1.2) drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
  }
`;

const SponsorName = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
  line-height: 1.3;
  transition: color 0.3s ease;
  
  ${SponsorCard}:hover & {
    color: #d4af37;
  }
`;

const TierBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${props => 
    props.tier === 'silver' ? '#c0c0c0' : 
    props.tier === 'bronze' ? '#cd7f32' : 
    props.tier === 'other' ? '#4ade80' :
    '#059669'};
  color: white;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  text-transform: uppercase;
`;

// ---------- Main Component ----------
const Home = () => {
  const titlesRef = useRef([]);
  const leftLogoRef = useRef(null);
  const rightLogoRef = useRef(null);
  const buttonsRef = useRef([]);
  const detailsRef = useRef([]);
  const wrapperRef = useRef(null);
  const leftSectionRef = useRef(null);

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
  }, []);

  return (
    <MainContainer>
      <LeftSection ref={leftSectionRef}>
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

          {/* Mobile Sponsor Carousel */}
          <SponsorCarousel />
        </HomeWrapper>
      </LeftSection>
      
      <RightSection>
        <SponsorSection />
      </RightSection>
    </MainContainer>
  );
};

export default Home;