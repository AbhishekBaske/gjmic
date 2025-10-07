import React from "react";
import styled, { keyframes } from "styled-components";
import { FiMail, FiPhone, FiGlobe, FiMapPin } from "react-icons/fi";

// ===== Keyframe Animations =====
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

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ===== Styled Components =====
const Section = styled.section`
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: #d1d5db;
  padding: 4rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
  animation: ${fadeInDown} 0.8s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  animation: ${fadeInDown} 0.8s ease-out 0.2s both;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: linear-gradient(145deg, #18181b 0%, #27272a 100%);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out both;

  &:nth-child(1) {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:nth-child(3) {
    animation-delay: 0.8s;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #fbbf24, #f59e0b);
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0,0,0,0.6);
    border-color: rgba(251, 191, 36, 0.4);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(251, 191, 36, 0.3);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 50px;
    height: 2px;
    background: #fbbf24;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const List = styled.ul`
  margin-top: 1rem;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  animation: ${slideInLeft} 0.5s ease-out both;

  &:nth-child(1) { animation-delay: 1s; }
  &:nth-child(2) { animation-delay: 1.1s; }
  &:nth-child(3) { animation-delay: 1.2s; }
  &:nth-child(4) { animation-delay: 1.3s; }
  &:nth-child(5) { animation-delay: 1.4s; }

  &:hover {
    color: #f3f4f6;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.75rem;
  }
`;

const IconWrapper = styled.span`
  color: #fbbf24;
  font-size: 1.3rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  ${ListItem}:hover & {
    transform: scale(1.1);
  }
`;

// ===== React Component =====
const Contact = () => {
  return (
    <Section>
      <Header>
        <MainTitle>Contact Us</MainTitle>
        <Subtitle>
          Get in touch with us for any queries regarding the Golden Jubilee Mining Innovation Conclave 2025
        </Subtitle>
      </Header>

      <Container>
        {/* Contact Us */}
        <Card>
          <CardTitle>Get In Touch</CardTitle>
          <List>
            <ListItem>
              <IconWrapper><FiMail /></IconWrapper>
              <span>
                <strong>Email:</strong><br />
                gjmic@bitsindri.ac.in
              </span>
            </ListItem>
            <ListItem>
              <IconWrapper><FiPhone /></IconWrapper>
              <span>
                <strong>Prof. Tanmay Dasgupta:</strong><br />
                +91-8840144886
              </span>
            </ListItem>
            <ListItem>
              <IconWrapper><FiPhone /></IconWrapper>
              <span>
                <strong>Prof. Roshan Kumar:</strong><br />
                +91-8877091602
              </span>
            </ListItem>
            <ListItem>
              <IconWrapper><FiPhone /></IconWrapper>
              <span>
                <strong>Abhay Kumar (Student Coordinator):</strong><br />
                +91-7667030596 
              </span>
            </ListItem>
            <ListItem>
              <IconWrapper><FiPhone /></IconWrapper>
              <span>
                <strong>Banti Kumar Saw (Student Coordinator)</strong><br />
                +91-7488962544 
              </span>
            </ListItem>
          </List>
        </Card>

        {/* Stay Guide */}
        <Card>
          <CardTitle>Stay Guide</CardTitle>
          <List>
            <ListItem>
              <IconWrapper><FiMapPin /></IconWrapper>
              <span style={{ fontWeight: 600, color: "#fbbf24", fontSize: "1.05rem" }}>
                BIT Sindri, Dhanbad
              </span>
            </ListItem>
            <ListItem>
              <IconWrapper><FiMail /></IconWrapper>
              <span>
                <strong>Contact:</strong><br />
                adityapandey.min@bitsindri.ac.in
              </span>
            </ListItem>
            <ListItem>
              <IconWrapper><FiPhone /></IconWrapper>
              <span>
                <strong>Phone:</strong><br />
                +91-9614919301
              </span>
            </ListItem>
            <ListItem>
              <IconWrapper><FiGlobe /></IconWrapper>
              <span>
                <strong>Website:</strong><br />
                www.bitsindri.ac.in
              </span>
            </ListItem>
          </List>
        </Card>

        {/* Address */}
        <Card>
          <CardTitle>Venue Address</CardTitle>
          <List>
            <ListItem>
              <IconWrapper><FiMapPin /></IconWrapper>
              <span>
                <strong>Department of Mining Engineering</strong><br />
                BIT Sindri, Dhanbad<br />
                Jharkhand, India - 828123<br />
                <br />
                <em style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                  Deshpande Auditorium
                </em>
              </span>
            </ListItem>
          </List>
        </Card>
      </Container>
    </Section>
  );
};

export default Contact;
