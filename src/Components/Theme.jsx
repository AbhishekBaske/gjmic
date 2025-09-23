import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // Import motion for animations

// Import icons from react-icons
import { FaServer, FaRobot, FaBrain, FaGem, FaMountain, FaRecycle, FaLeaf, FaHardHat, FaWind, FaFire, FaHandshake, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { BsCpuFill, BsBarChartFill, BsShieldLockFill } from 'react-icons/bs';


// Define a consistent color palette for easier management
const colors = {
  backgroundDark: "#1a1a1a", // Deep charcoal
  cardBackgroundDark: "#2c2c2c", // Slightly lighter dark for cards
  goldAccent: "#daa520", // Goldenrod
  textLight: "#e0e0e0", // Light gray for general text
  textWhite: "#ffffff", // Pure white for titles
  borderDark: "#4a4a4a", // Darker border for separation
  focusBackground: "#3a3a3a", // Background for key focus areas
};


// ---------- Layout ----------
const AppContainer = styled.div`
  background-color: ${colors.backgroundDark};
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column; /* Changed to column for main title */
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 48px 24px;
  box-sizing: border-box;
`;

const PageTitleHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${colors.goldAccent}; /* Gold title */
  margin: 0;
  text-shadow: 0 0 15px rgba(218, 165, 32, 0.5); /* Subtle glow */

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px; /* Space between each theme card */
`;


// ---------- Theme Component Styles ----------
// Use motion.div for animation
const ThemeWrapper = styled(motion.div)`
  background-color: ${colors.cardBackgroundDark};
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); /* Deeper shadow for dark theme */
  border: 1px solid ${colors.borderDark};
  border-top: 4px solid ${colors.goldAccent}; /* Gold top border */
`;

const ThemeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const ThemeIcon = styled.div`
  background-color: rgba(218, 165, 32, 0.2); /* Semi-transparent gold */
  color: ${colors.goldAccent};
  padding: 12px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const ThemeTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThemePill = styled.div`
  background-color: rgba(218, 165, 32, 0.2); /* Semi-transparent gold */
  color: ${colors.goldAccent};
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  margin-bottom: 8px;
  width: fit-content;
`;

const ThemeTitle = styled.h2` /* Changed to h2 for semantic structure */
  font-size: 24px;
  font-weight: 700;
  color: ${colors.textWhite}; /* White for theme titles */
  margin: 0;
`;

const ThemeSubtitle = styled.p`
  font-size: 16px;
  color: ${colors.textLight}; /* Light gray for subtitles */
  margin-top: 4px;
`;


// ---------- Key Focus Area Styles ----------
const KeyFocusContainer = styled.div`
  background-color: ${colors.focusBackground};
  border: 1px solid ${colors.borderDark};
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
`;

const KeyFocusHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.goldAccent}; /* Gold for key focus header */
  margin-bottom: 16px;

  svg {
    color: ${colors.goldAccent};
  }
`;

const KeyFocusList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
`;

const KeyFocusItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: ${colors.textLight}; /* Light gray for key focus items */
  line-height: 1.5;

  svg {
    color: ${colors.goldAccent}; /* Gold for arrows */
    margin-top: 4px;
    flex-shrink: 0;
  }
`;

// ---------- Bottom Tags Styles ----------
const TagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
`;

const Tag = styled.div`
  background-color: ${colors.focusBackground};
  border: 1px solid ${colors.borderDark};
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 24px;
    color: ${colors.goldAccent}; /* Gold for tag icons */
  }
`;

const TagTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.textWhite}; /* White for tag titles */
  margin: 0;
`;

const TagSubtitle = styled.p`
  font-size: 13px;
  color: ${colors.textLight}; /* Light gray for tag subtitles */
  margin: 0;
  line-height: 1.4;
`;


// Animation variants for slide-in effect
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


// ---------- Structured Data (UPDATED & COMPLETED) ----------
const themesData = [
  {
    id: 1,
    title: "Mining 4.0 and Digital Transformation",
    subtitle: "IoT, cloud, AI, machine learning, and big data for real-time mine optimisation, safety, and decision-making.",
    icon: <FaServer />,
    keyFocuses: [ "Real-time data for mine optimisation.", "Enhancing safety with predictive analytics.", "AI-driven decision-making processes.", "Integrating big data across operations." ],
    tags: [
      { icon: <BsCpuFill />, title: "Advanced Tech", subtitle: "Cutting-edge solutions" },
      { icon: <FaBrain />, title: "AI Integration", subtitle: "Intelligent automation" },
      { icon: <BsBarChartFill />, title: "Data-Driven", subtitle: "Analytics & insights" },
    ]
  },
  {
    id: 2,
    title: "Automation & Robotics",
    subtitle: "Autonomous drilling, blasting, haulage, and swarm robotics for challenging mining environments.",
    icon: <FaRobot />,
    keyFocuses: [ "Deploying autonomous haulage fleets.", "Coordinating machinery with swarm robotics.", "Automating drilling and blasting cycles.", "Operating in challenging environments safely." ],
    tags: [
      { icon: <BsShieldLockFill />, title: "Safety Focus", subtitle: "Risk mitigation" },
      { icon: <FaRobot />, title: "Autonomous Ops", subtitle: "Reduced human error" },
      { icon: <BsBarChartFill />, title: "Efficiency Gains", subtitle: "Process optimization" },
    ]
  },
  {
    id: 3,
    title: "AI and Machine Learning Applications",
    subtitle: "Predictive analytics for mineral targeting, grade control, slope stability assessment, and mine fire prediction.",
    icon: <FaBrain />,
    keyFocuses: [ "Predictive models for mineral exploration.", "AI-driven analytics for grade control.", "Assessing slope stability with machine learning.", "Forecasting and preventing mine fires." ],
    tags: [
      { icon: <FaBrain />, title: "Predictive Power", subtitle: "Intelligent forecasting" },
      { icon: <BsBarChartFill />, title: "Data Analytics", subtitle: "Actionable insights" },
      { icon: <FaGem />, title: "Resource Discovery", subtitle: "Targeted exploration" },
    ]
  },
  {
    id: 4,
    title: "Critical Minerals for Future Energy & Technology",
    subtitle: "Exploration, beneficiation, and supply chain management of rare earth elements, lithium, cobalt, and other strategic minerals.",
    icon: <FaGem />,
    keyFocuses: [ "Sustainable exploration of rare earth elements.", "Optimizing beneficiation of lithium and cobalt.", "Building resilient supply chains.", "Securing materials for renewable energy." ],
    tags: [
      { icon: <FaLeaf />, title: "Green Energy", subtitle: "Powering the future" },
      { icon: <FaHandshake />, title: "Supply Chain", subtitle: "Global logistics" },
      { icon: <FaGem />, title: "Strategic Minerals", subtitle: "High-value resources" },
    ]
  },
  {
    id: 5,
    title: "Geotechnical & Ground Stability",
    subtitle: "Innovations in support systems, monitoring technologies, and slope stability management for opencast and underground mines.",
    icon: <FaMountain />,
    keyFocuses: [ "Advanced ground support systems.", "Real-time monitoring of slope stability.", "Geotechnical risk assessment.", "Innovations in underground mine design." ],
    tags: [
      { icon: <BsShieldLockFill />, title: "Risk Management", subtitle: "Ensuring stability" },
      { icon: <FaMountain />, title: "Ground Control", subtitle: "Geotechnical safety" },
      { icon: <BsCpuFill />, title: "Monitoring Tech", subtitle: "Real-time sensing" },
    ]
  },
  {
    id: 6,
    title: "Mine Planning, Closure & Reclamation",
    subtitle: "Modern approaches to mine life-cycle management, including sustainable mine closure strategies, land reclamation, and ecological restoration.",
    icon: <FaRecycle />,
    keyFocuses: [ "Implementing life-cycle management plans.", "Developing sustainable closure strategies.", "Executing land reclamation projects.", "Focusing on ecological restoration." ],
    tags: [
      { icon: <FaLeaf />, title: "Ecology Focus", subtitle: "Restoring nature" },
      { icon: <FaRecycle />, title: "Sustainability", subtitle: "Circular economy" },
      { icon: <FaHandshake />, title: "Lifecycle Planning", subtitle: "From start to finish" },
    ]
  },
  {
    id: 7,
    title: "Sustainability & Net-Zero Pathways",
    subtitle: "Carbon footprint reduction, methane management, water treatment, and energy efficiency initiatives for a greener mining future.",
    icon: <FaLeaf />,
    keyFocuses: [ "Strategies for carbon footprint reduction.", "Advanced methane capture and management.", "Implementing efficient water treatment.", "Driving energy efficiency in operations." ],
    tags: [
      { icon: <FaLeaf />, title: "Net-Zero Goal", subtitle: "Carbon reduction" },
      { icon: <FaWind />, title: "Green Energy", subtitle: "Renewable power" },
      { icon: <FaRecycle />, title: "Eco-Friendly", subtitle: "Sustainable practices" },
    ]
  },
  {
    id: 8,
    title: "Health, Safety & Disaster Resilience",
    subtitle: "Risk assessment, occupational health, safety management systems, and digital resilience strategies.",
    icon: <FaHardHat />,
    keyFocuses: [ "Comprehensive operational risk assessment.", "Enhancing occupational health standards.", "Implementing robust safety management.", "Building digital disaster resilience." ],
    tags: [
      { icon: <BsShieldLockFill />, title: "Worker Safety", subtitle: "Zero harm" },
      { icon: <FaHardHat />, title: "Occupational Health", subtitle: "Wellbeing focus" },
      { icon: <FaBrain />, title: "Resilience", subtitle: "Disaster preparedness" },
    ]
  },
  {
    id: 9,
    title: "Ventilation & Mine Cooling Systems",
    subtitle: "Adaptive designs for airflow optimization, energy-efficient mine cooling, and environmental monitoring.",
    icon: <FaWind />,
    keyFocuses: [ "Designing adaptive ventilation on demand.", "Optimizing airflow for safety and efficiency.", "Implementing energy-efficient cooling.", "Continuous environmental monitoring." ],
    tags: [
      { icon: <FaWind />, title: "Airflow Control", subtitle: "Optimized ventilation" },
      { icon: <FaLeaf />, title: "Energy Efficiency", subtitle: "Reduced consumption" },
      { icon: <BsShieldLockFill />, title: "Safety Systems", subtitle: "Atmosphere control" },
    ]
  },
  {
    id: 10,
    title: "Coal Quality Assessment & Utilisation",
    subtitle: "Comprehensive focus on coal testing, beneficiation, and efficient utilisation from mines to market.",
    icon: <FaFire />,
    keyFocuses: [ "Advanced coal quality testing and analysis.", "Optimizing coal beneficiation processes.", "Ensuring efficient utilisation in power.", "Managing mine-to-market supply chain." ],
    tags: [
      { icon: <BsBarChartFill />, title: "Quality Control", subtitle: "Grade assessment" },
      { icon: <FaFire />, title: "Energy Source", subtitle: "Efficient utilisation" },
      { icon: <FaHandshake />, title: "Market Integration", subtitle: "Supply chain" },
    ]
  },
  {
    id: 11,
    title: "Policy, Regulation & Industry Collaboration",
    subtitle: "Evolving regulatory frameworks, industry-academia partnerships, and strategies for sustainable resource management.",
    icon: <FaHandshake />,
    keyFocuses: [ "Navigating evolving regulatory landscapes.", "Fostering industry-academia partnerships.", "Strategies for sustainable management.", "Promoting cross-sector collaboration." ],
    tags: [
      { icon: <FaHandshake />, title: "Collaboration", subtitle: "Industry partnerships" },
      { icon: <FaRecycle />, title: "Sustainability", subtitle: "Resource management" },
      { icon: <BsShieldLockFill />, title: "Regulation", subtitle: "Compliance focus" },
    ]
  },
];


// ---------- Main App Component ----------
export default function App() {
  return (
    <AppContainer>
      <PageTitleHeader>
        <PageTitle>GJMIC Themes</PageTitle>
      </PageTitleHeader>
      <ContentWrapper>
        {themesData.map((theme, index) => (
          <ThemeWrapper
            key={theme.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.15 }} // Staggered delay for each card
          >
            <ThemeHeader>
              <ThemeIcon>{theme.icon}</ThemeIcon>
              <ThemeTitleGroup>
                <ThemePill>Theme {theme.id}</ThemePill>
                <ThemeTitle>{theme.title}</ThemeTitle>
                <ThemeSubtitle>{theme.subtitle}</ThemeSubtitle>
              </ThemeTitleGroup>
            </ThemeHeader>

            <KeyFocusContainer>
              <KeyFocusHeader>
                <FaCheckCircle /> Key Focus Areas
              </KeyFocusHeader>
              <KeyFocusList>
                {theme.keyFocuses.map((focus, focusIndex) => (
                  <KeyFocusItem key={focusIndex}>
                    <FaArrowRight /> {focus}
                  </KeyFocusItem>
                ))}
              </KeyFocusList>
            </KeyFocusContainer>

            <TagsContainer>
              {theme.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>
                  {tag.icon}
                  <TagTitle>{tag.title}</TagTitle>
                  <TagSubtitle>{tag.subtitle}</TagSubtitle>
                </Tag>
              ))}
            </TagsContainer>
          </ThemeWrapper>
        ))}
      </ContentWrapper>
    </AppContainer>
  );
}