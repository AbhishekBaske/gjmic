import React from 'react';
import styled from 'styled-components';
import { CreditCard, Users, GraduationCap, Building2, Calendar, FileText } from 'lucide-react';

// Golden Jubilee Theme Colors
const goldColor = '#b8860b';
const goldGradient = 'linear-gradient(90deg, #d4af37, #f9d976)';
const lightGold = '#fffaf0';
const ivory = '#fffdf7';

const Container = styled.div`
  min-height: 100vh;
  padding: 120px 20px 80px;
  background: linear-gradient(135deg, ${ivory} 0%, ${lightGold} 50%, #ffffff 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const MaxWidthWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: ${goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #444;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
`;

const FeesSection = styled.section`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
  border: 1px solid ${lightGold};
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out 0.2s both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${goldGradient};
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const SectionIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${goldGradient};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2c2c2c;
  margin: 0;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  min-width: 600px;
`;

const TableHeader = styled.thead`
  background: ${goldGradient};
  color: white;
`;

const HeaderCell = styled.th`
  padding: 18px 15px;
  text-align: left;
  font-weight: 600;
  font-size: 1.05rem;

  &:first-child {
    border-radius: 15px 0 0 0;
    padding-left: 25px;
  }

  &:last-child {
    border-radius: 0 15px 0 0;
    padding-right: 25px;
    text-align: center;
  }

  &:nth-child(2) {
    text-align: center;
  }
`;

const TableBody = styled.tbody`
  tr:nth-child(even) {
    background: ${lightGold};
  }

  tr:nth-child(odd) {
    background: #ffffff;
  }

  tr:hover {
    background: #fdf5e6;
    transform: translateY(-1px);
    transition: all 0.2s ease;
  }
`;

const BodyCell = styled.td`
  padding: 18px 15px;
  border: none;
  color: #333;
  font-weight: 500;

  &:first-child {
    font-weight: 600;
    color: #2c3e50;
    padding-left: 25px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &:nth-child(2), &:last-child {
    text-align: center;
    font-weight: 600;
    color: ${goldColor};
    font-size: 1.05rem;
  }
`;

const ParticipantIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  &.corporate {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  &.academic {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  
  &.student {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }
`;

const InfoPanel = styled.div`
  background: linear-gradient(135deg, ${lightGold} 0%, #ffffff 100%);
  border: 1px solid ${goldColor};
  border-radius: 15px;
  padding: 25px;
  margin-top: 30px;
  position: relative;
  animation: fadeInUp 0.8s ease-out 0.4s both;
`;

const InfoTitle = styled.h3`
  color: ${goldColor};
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoText = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 8px;
  font-size: 1.05rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ActionSection = styled.div`
  text-align: center;
  margin-top: 50px;
  animation: fadeInUp 0.6s ease-out 0.6s both;
`;

const RegistrationButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: ${goldGradient};
  color: white;
  padding: 18px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 15px 35px rgba(212, 175, 55, 0.4);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: linear-gradient(90deg, #f9d976, #d4af37);
    transform: translateY(-3px);
    box-shadow: 0 20px 45px rgba(212, 175, 55, 0.5);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Register = () => {
  const feesData = [
    {
      category: "Corporate And Industrial Bodies",
      icon: <Building2 size={18} />,
      iconClass: "corporate",
      earlyBird: "6000",
      regular: "8000"
    },
    {
      category: "Academicians And Researchers", 
      icon: <GraduationCap size={18} />,
      iconClass: "academic",
      earlyBird: "5000",
      regular: "7000"
    },
    {
      category: "Students / Research Scholars",
      icon: <Users size={18} />,
      iconClass: "student", 
      earlyBird: "2500",
      regular: "3500"
    }
  ];

  return (
    <Container>
      <MaxWidthWrapper>
        <Header>
          <Title>Registration & Participation</Title>
          <Subtitle>
            Join the Golden Jubilee Mining Innovation Conclave 2025 – Choose your category and secure your place today.
          </Subtitle>
        </Header>

        <FeesSection>
          <SectionHeader>
            <SectionIcon>
              <CreditCard size={28} />
            </SectionIcon>
            <SectionTitle>Delegation Fees</SectionTitle>
          </SectionHeader>

          <TableWrapper>
            <Table>
              <TableHeader>
                <tr>
                  <HeaderCell>Participation Category</HeaderCell>
                  <HeaderCell>
                    Early Bird Fee<br />
                    Up To 07.10.2025 (INR)
                  </HeaderCell>
                  <HeaderCell>
                    Regular Fee<br />
                    After 07.10.2025 (INR)
                  </HeaderCell>
                </tr>
              </TableHeader>
              <TableBody>
                {feesData.map((item, index) => (
                  <tr key={index}>
                    <BodyCell>
                      <ParticipantIcon className={item.iconClass}>
                        {item.icon}
                      </ParticipantIcon>
                      {item.category}
                    </BodyCell>
                    <BodyCell>₹{item.earlyBird}</BodyCell>
                    <BodyCell>₹{item.regular}</BodyCell>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>

          <InfoPanel>
            <InfoTitle>
              <FileText size={20} />
              Important Information
            </InfoTitle>
            <InfoText>
              <strong>Early Bird Deadline:</strong> October 7th, 2025
            </InfoText>
            <InfoText>
              <strong>Registration Form:</strong> Attached as a separate sheet for your convenience
            </InfoText>
          </InfoPanel>

          <InfoPanel>
            <InfoTitle>
              <Calendar size={20} />
              Registration Guidelines
            </InfoTitle>
            <InfoText>• Early bird registration closes on <strong>October 7th, 2025</strong></InfoText>
            <InfoText>• Payments must be made in Indian Rupees (INR)</InfoText>
            <InfoText>• Student registration requires valid institutional ID</InfoText>
            <InfoText>• Corporate registrations include networking sessions & materials</InfoText>
          </InfoPanel>
        </FeesSection>

        <ActionSection>
          <RegistrationButton 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeNO3Ioi6qHNL7MUISBuxszpJO_yrhislwGD4gU_N1_YoLTdg/viewform" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Users size={20} />
            Register Now
          </RegistrationButton>
        </ActionSection>
      </MaxWidthWrapper>
    </Container>
  );
};

export default Register;
