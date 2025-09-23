import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Calendar, Clock, Info, FileText, CheckCircle, Award } from 'lucide-react';

// --- Styled Components ---
const goldColor = '#DAA520';
const darkBg = '#1a1a1a';
const cardBg = '#242424';

const TimelineContainer = styled.div`
  width: 100%;
  min-height: 100vh;  // full viewport height
  padding: 60px 20px;
  background: ${darkBg};
  font-family: 'Montserrat', sans-serif;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${goldColor};
  margin-bottom: 10px;
  letter-spacing: 1.5px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #a0a0a0;
`;

const goldBarAnimation = keyframes`
  0% { width: 0; }
  100% { width: 80px; }
`;

const GoldBar = styled.div`
  width: 80px;
  height: 4px;
  background: ${goldColor};
  margin: 20px auto 0;
  border-radius: 2px;
  animation: ${goldBarAnimation} 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1200px;  // optional, keeps cards nicely readable on large screens
  padding: 0 20px;
`;

const TimelineItem = styled.div`
  background: ${cardBg};
  border-radius: 12px;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  border-left: 5px solid ${goldColor};
  opacity: 0;
  transform: translateY(30px);
  animation: ${fadeInUp} 0.8s forwards;
  animation-delay: ${props => props.delay}s;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(218, 165, 32, 0.1);
    border-color: rgba(218, 165, 32, 0.2);
  }
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconWrapper = styled.div`
  background-color: rgba(218, 165, 32, 0.1);
  color: ${goldColor};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #f0f0f0;
  margin: 0 0 8px 0;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  width: fit-content;
  color: ${props => props.color || '#111'};
  background-color: ${props => props.bgColor || '#ccc'};
`;

const Deadline = styled.div`
  text-align: right;
`;

const DeadlineLabel = styled.span`
  font-size: 0.8rem;
  color: #a0a0a0;
  display: block;
  margin-bottom: 4px;
`;

const DeadlineDate = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #f0f0f0;
`;

// --- Data ---
const timelineData = [
  { icon: <Info size={22} />, title: "Call for abstracts", tag: { text: "Upcoming", color: "#111", bgColor: goldColor }, date: "01.06.2025" },
  { icon: <FileText size={22} />, title: "Receipt of abstracts", tag: { text: "Submission Open", color: "#fff", bgColor: "#4a90e2" }, date: "30.06.2025" },
  { icon: <Calendar size={22} />, title: "Review of abstracts and decision notification", tag: { text: "Review Period", color: "#fff", bgColor: "#9013fe" }, date: "15.07.2025" },
  { icon: <Clock size={22} />, title: "Receipt of full papers", tag: { text: "Submission Open", color: "#fff", bgColor: "#4a90e2" }, date: "15.08.2025" },
  { icon: <Award size={22} />, title: "Review of full papers and decision intimation", tag: { text: "Review Period", color: "#fff", bgColor: "#9013fe" }, date: "21.08.2025" },
  { icon: <CheckCircle size={22} />, title: "Intimation of acceptance of papers", tag: { text: "Final Decision", color: "#fff", bgColor: "#50e3c2" }, date: "31.08.2025" },
];

// --- Component ---
function ImportantDates() {
  return (
    <TimelineContainer>
      <Header>
        <IconWrapper style={{ margin: '0 auto 20px', width: '60px', height: '60px' }}>
          <Award size={30}/>
        </IconWrapper>
        <Title>Golden Jubilee Milestones</Title>
        <Subtitle>Key Deadlines and Events for 2025</Subtitle>
        <GoldBar />
      </Header>
      <TimelineList>
        {timelineData.map((item, index) => (
          <TimelineItem key={index} delay={0.15 * index}>
            <ItemContent>
              <IconWrapper>{item.icon}</IconWrapper>
              <ItemDetails>
                <ItemTitle>{item.title}</ItemTitle>
                <Tag color={item.tag.color} bgColor={item.tag.bgColor}>
                  {item.tag.text}
                </Tag>
              </ItemDetails>
            </ItemContent>
            <Deadline>
              <DeadlineLabel>Deadline</DeadlineLabel>
              <DeadlineDate>{item.date}</DeadlineDate>
            </Deadline>
          </TimelineItem>
        ))}
      </TimelineList>
    </TimelineContainer>
  );
}

export default ImportantDates;
