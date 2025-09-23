import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// ---------- Keyframes ----------
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const waveFadeIn = keyframes`
  0%   { opacity: 0; transform: translateY(30px); }
  50%  { opacity: 0.5; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const goldShine = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

// ---------- Styled Components ----------
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  padding: 2rem;
  text-align: center;

  /* Dark luxury background with subtle moving highlight */
  background: linear-gradient(-45deg, #0d0d0d, #1a1a1a, #0d0d0d, #1a1a1a);
  background-size: 400% 400%;
  animation: ${gradientShift} 20s ease infinite;
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 3rem);
  background: linear-gradient(90deg, #FFD700, #FFC107, #FFD700);
  background-size: 200% 200%;
  animation: ${goldShine} 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  animation-delay: 0.2s;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #e5e5e5;
  font-weight: 400;
  animation: ${waveFadeIn} 1.4s ease forwards;
  margin-bottom: 2.5rem;
`;

const CountdownContainer = styled.div`
  display: flex;
  gap: clamp(0.5rem, 2vw, 2rem);
  flex-wrap: wrap;
  justify-content: center;
  animation: ${waveFadeIn} 1.6s ease forwards;
`;

const TimeBox = styled.div`
  padding: clamp(1rem, 3vw, 2rem);
  border-radius: 1.2rem;
  width: clamp(90px, 15vw, 140px);
  background: linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FFD700 100%);
  background-size: 300% 300%;
  animation: ${goldShine} 6s linear infinite;
  color: #1a1a1a;
  font-weight: 700;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(255, 215, 0, 0.5);
  }
`;

const TimeValue = styled.span`
  font-size: clamp(2.2rem, 6vw, 3.2rem);
  font-weight: 800;
  line-height: 1;
`;

const TimeLabel = styled.span`
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
`;

const ProgressContainer = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 3rem 0 1.5rem 0;
  animation: ${waveFadeIn} 1.8s ease forwards;
`;

const ProgressLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #f5f5f5;
  margin-bottom: 0.5rem;
`;

const ProgressOuter = styled.div`
  width: 100%;
  height: 12px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 6px;
  overflow: hidden;
`;

const ProgressInner = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #FFD700, #FFC107, #FFD700);
  background-size: 200% 200%;
  animation: ${goldShine} 4s linear infinite;
  border-radius: 6px;
  width: ${(props) => props.progress}%;
  transition: width 0.5s ease;
`;

const StatusBox = styled.div`
  background-color: rgba(255, 215, 0, 0.1);
  color: #FFD700;
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 6px rgba(255,215,0,0.2);
  animation: ${waveFadeIn} 2s ease forwards;
`;

const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  background-color: #FFD700;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

// ---------- Countdown Component ----------
const Countdown = () => {
  const targetDate = +new Date("2025-11-15T00:00:00");
  const startDate = +new Date("2024-01-01T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {};
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());

      const now = +new Date();
      const totalDuration = targetDate - startDate;
      const elapsed = now - startDate;
      setProgress(Math.min((elapsed / totalDuration) * 100, 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (value) => (value < 10 ? `0${value}` : value);

  const units = [
    { label: "Days", value: timeLeft.days || 0 },
    { label: "Hours", value: timeLeft.hours || 0 },
    { label: "Minutes", value: timeLeft.minutes || 0 },
    { label: "Seconds", value: timeLeft.seconds || 0 },
  ];

  const started = Object.keys(timeLeft).length === 0;

  return (
    <Wrapper>
      <Title>Golden Jubilee Countdown</Title>
      <Subtitle>Saturday, November 15, 2025</Subtitle>

      <CountdownContainer>
        {units.map((unit, idx) => (
          <TimeBox key={idx}>
            <TimeValue>{format(unit.value)}</TimeValue>
            <TimeLabel>{unit.label}</TimeLabel>
          </TimeBox>
        ))}
      </CountdownContainer>

      <ProgressContainer>
        <ProgressLabels>
          <span>Today</span>
          <span>Celebration Day</span>
        </ProgressLabels>
        <ProgressOuter>
          <ProgressInner progress={progress} />
        </ProgressOuter>
      </ProgressContainer>

      <StatusBox>
        <StatusIndicator />
        {started ? "The Golden Jubilee has started!" : "The Golden Jubilee will start soon."}
      </StatusBox>
    </Wrapper>
  );
};

export default Countdown;
