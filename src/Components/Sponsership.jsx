import React from 'react';
import styled from 'styled-components';
import { Building2, Award, Users, CreditCard, MapPin, Phone, Mail, Calendar } from 'lucide-react';

// Theme colors with darker gold theme for better contrast
const goldColor = '#B8860B'; // Dark goldenrod
const darkGold = '#8B6914'; // Even darker gold
const goldGradient = 'linear-gradient(90deg, #B8860B, #DAA520)';
const lightGold = '#F5E6A3'; // Light gold for backgrounds
const darkBg = '#2C1810'; // Dark brown background

const Container = styled.div`
  min-height: 100vh;
  padding: 120px 20px 80px;
  background: linear-gradient(135deg, ${darkBg} 0%, #1a1a1a 50%, #2c2c2c 100%);
  color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const MaxWidthWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInUp 0.6s ease-out;

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
  background-clip: text;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  background: #1a1a1a;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  border: 2px solid ${goldColor};
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out 0.2s both;

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
  color: #f5f5f5;
  margin: 0;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 1px;
  font-size: 1rem;
  min-width: 600px;
  background: #000000;
`;

const TableHeader = styled.thead`
  background: ${goldGradient};
  color: white;
`;

const HeaderCell = styled.th`
  padding: 20px 15px;
  text-align: left;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;

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
    background: #000000;
  }

  tr:nth-child(odd) {
    background: #1a1a1a;
  }

  tr:hover {
    background: ${darkGold} !important;
    color: white !important;
    transform: translateY(-2px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(184, 134, 11, 0.4);
    
    td {
      color: white !important;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
  }
`;

const BodyCell = styled.td`
  padding: 20px 15px;
  border: none;
  color: #ffffff;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  &:first-child {
    font-weight: 700;
    color: #ffffff;
    padding-left: 25px;
    font-size: 1.05rem;
  }

  &:nth-child(2), &:last-child {
    text-align: center;
    font-weight: 700;
    color: ${goldColor};
    font-size: 1.2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }
`;

const InfoPanel = styled.div`
  background: linear-gradient(135deg, ${darkBg} 0%, #2c2c2c 100%);
  border: 2px solid ${goldColor};
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0;
  position: relative;
  animation: fadeInUp 0.6s ease-out 0.4s both;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${goldGradient};
    border-radius: 17px;
    z-index: -1;
  }
`;

const InfoTitle = styled.h3`
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoText = styled.p`
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 10px;
  font-size: 1.05rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

  &:last-child {
    margin-bottom: 0;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;

  li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    color: #ffffff;
    line-height: 1.6;
    font-weight: 500;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

    &::before {
      content: "•";
      color: ${goldColor};
      font-weight: bold;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }
  }
`;

const BankDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BankDetailItem = styled.div`
  padding: 20px 25px;
  display: flex;
  align-items: center;
  
  &:nth-child(odd) {
    background: ${goldGradient};
    color: white;
    font-weight: 700;
    justify-content: center;
    font-size: 1.1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }
  
  &:nth-child(even) {
    background: ${darkBg};
    color: #ffffff;
    font-weight: 600;
    justify-content: center;
    font-size: 1.05rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }

  &:first-child {
    background: ${goldGradient};
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

const Sponsorship = () => {
  // Sponsorship tiers data
  const sponsorshipTiers = [
    { category: "Diamond Sponsor", charges: "INR 10,00,000", delegates: "12" },
    { category: "Gold Sponsor", charges: "INR 7,00,000", delegates: "8" },
    { category: "Silver Sponsor", charges: "INR 5,00,000", delegates: "5" },
    { category: "Bronze Sponsor", charges: "INR 3,00,000", delegates: "3" },
    { category: "Full conclave kit sponsors", charges: "INR 8,00,000", delegates: "10" }
  ];

  // Souvenir advertisement rates
  const souvenirRates = [
    { category: "Back cover", charges: "40,000/-" },
    { category: "Front inside", charges: "25,000/-" },
    { category: "Back inside", charges: "25,000/-" },
    { category: "Full page", charges: "15,000/-" },
    { category: "Half page", charges: "10,000/-" }
  ];

  return (
    <Container>
      <MaxWidthWrapper>
        <Header>
          <Title>Sponsorship Opportunities</Title>
          <Subtitle>
            Partner with the Golden Jubilee Mining Innovation Conclave 2025 and showcase your brand to industry leaders
          </Subtitle>
        </Header>

        {/* Sponsorship Tiers */}
        <Section>
          <SectionHeader>
            <SectionIcon>
              <Award size={28} />
            </SectionIcon>
            <SectionTitle>Sponsorship & Promotional Opportunities</SectionTitle>
          </SectionHeader>

          <InfoText style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
            The corporate entities, industrial bodies may sponsor and support the event by paying the applicable charges listed below
          </InfoText>

          <TableWrapper>
            <Table>
              <TableHeader>
                <tr>
                  <HeaderCell>Category</HeaderCell>
                  <HeaderCell>Charges (excluding GST)</HeaderCell>
                  <HeaderCell>No. of free delegates</HeaderCell>
                </tr>
              </TableHeader>
              <TableBody>
                {sponsorshipTiers.map((tier, index) => (
                  <tr key={index}>
                    <BodyCell>{tier.category}</BodyCell>
                    <BodyCell>{tier.charges}</BodyCell>
                    <BodyCell>{tier.delegates}</BodyCell>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>

          <InfoPanel>
            <InfoText style={{ fontWeight: '600', color: '#333' }}>
              Sponsors will be duly acknowledged throughout the event and will be given the opportunity to showcase and distribute their promotional materials.
            </InfoText>
          </InfoPanel>
        </Section>

        {/* Exhibition */}
        <Section>
          <SectionHeader>
            <SectionIcon>
              <Building2 size={28} />
            </SectionIcon>
            <SectionTitle>Exhibition</SectionTitle>
          </SectionHeader>

          <InfoText>
            The Golden Jubilee Mining Innovation Conclave (GJMIC 2025) is not just a celebration – it is a unique platform that offers unmatched exposure and collaboration opportunities. With a vibrant campus community of over 4,000 students and more than 100 faculty members across engineering disciplines, the event promises a significant turnout and a highly engaged audience. The interactive nature of the event, with opportunities for product demonstrations, brand visibility, and business networking, ensures that every participant can actively engage and contribute to the event's success.
          </InfoText>

          <InfoText>
            The conclave will be attended by industry leaders, alumni, researchers, policymakers, and technology providers, creating a dynamic environment for product demonstrations, brand visibility, and business networking. The exhibition segment offers an exceptional opportunity for companies to:
          </InfoText>

          <BulletList>
            <li>Showcase mining machinery, safety equipment, digital tools, and innovative services directly to potential clients and collaborators.</li>
            <li>Engage with academia for joint research, consultancy, and sponsored projects.</li>
            <li>Interact with students and faculty, identifying talent for internships, placements, and training programs.</li>
            <li>Build brand recognition among the next generation of engineers and future decision-makers.</li>
          </BulletList>

          <InfoPanel>
            <InfoTitle>
              <CreditCard size={20} />
              Participation Charges
            </InfoTitle>
            <InfoText><strong>INR 40,000/-</strong> per stall (excluding GST)</InfoText>
            <InfoText>Standard stall size: 10 ft × 12 ft with basic amenities (partition, table, chairs, power supply, cleaning, etc.)</InfoText>
            <InfoText>Open space for large pieces of equipment is available upon request at an additional cost.</InfoText>
            <InfoText>Early birds will have the opportunity to present their products and services in a separate session before industry and academic professionals.</InfoText>
          </InfoPanel>
        </Section>

        {/* Souvenir Advertisement */}
        <Section>
          <SectionHeader>
            <SectionIcon>
              <Mail size={28} />
            </SectionIcon>
            <SectionTitle>Souvenir Advertisement Fees</SectionTitle>
          </SectionHeader>

          <InfoText style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
            A souvenir will be brought out and circulated widely during the conclave. Advertisements for the souvenir are invited at the following rates
          </InfoText>

          <TableWrapper>
            <Table>
              <TableHeader>
                <tr>
                  <HeaderCell>Category</HeaderCell>
                  <HeaderCell>Charges (excluding GST)</HeaderCell>
                </tr>
              </TableHeader>
              <TableBody>
                {souvenirRates.map((rate, index) => (
                  <tr key={index}>
                    <BodyCell>{rate.category}</BodyCell>
                    <BodyCell>{rate.charges}</BodyCell>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </Section>

        {/* Bank Details */}
        <Section>
          <SectionHeader>
            <SectionIcon>
              <CreditCard size={28} />
            </SectionIcon>
            <SectionTitle>Bank Detail for Payment</SectionTitle>
          </SectionHeader>

          <BankDetailsGrid>
            <BankDetailItem>NAME</BankDetailItem>
            <BankDetailItem>Golden Jubilee Mining Innovation Conclave - 2025</BankDetailItem>
            
            <BankDetailItem>BANK NAME</BankDetailItem>
            <BankDetailItem>STATE BANK OF INDIA</BankDetailItem>
            
            <BankDetailItem>ACCOUNT NUMBER</BankDetailItem>
            <BankDetailItem>44450714991</BankDetailItem>
            
            <BankDetailItem>IFSC</BankDetailItem>
            <BankDetailItem>SBIN0011812</BankDetailItem>
          </BankDetailsGrid>

          <InfoPanel style={{ marginTop: '30px' }}>
            <InfoTitle>
              <Phone size={20} />
              Contact Information
            </InfoTitle>
            <InfoText>For sponsorship inquiries and exhibition bookings, please contact the organizing committee.</InfoText>
            <InfoText>All payments should include GST as applicable. Payment confirmation should be sent to the organizing committee.</InfoText>
          </InfoPanel>
        </Section>
      </MaxWidthWrapper>
    </Container>
  );
};

export default Sponsorship;
