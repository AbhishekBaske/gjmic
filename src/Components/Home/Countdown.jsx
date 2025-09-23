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

  /* Animated gradient background */
  background: linear-gradient(-45deg, #4f46e5, #6366f1, #a855f7, #3b82f6);
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #ffffff;
  font-weight: 700;
  animation: ${waveFadeIn} 1.2s ease forwards;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #e2e8f0;
  margin: 0.5rem 0 3rem 0;
  font-weight: 400;
  animation: ${waveFadeIn} 1.4s ease forwards;
`;

const CountdownContainer = styled.div`
  display: flex;
  gap: clamp(0.5rem, 3vw, 2rem);
  flex-wrap: wrap;
  justify-content: center;
  animation: ${waveFadeIn} 1.6s ease forwards;
`;

const TimeBox = styled.div`
  color: white;
  padding: clamp(1rem, 4vw, 2rem);
  border-radius: 1rem;
  width: clamp(100px, 20vw, 160px);
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg || "#6366f1"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -10px rgba(0,0,0,0.15);
  }
`;

const TimeValue = styled.span`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  line-height: 1;
`;

const TimeLabel = styled.span`
  font-size: clamp(0.75rem, 2vw, 1rem);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.75rem;
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
  font-size: 0.875rem;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
`;

const ProgressOuter = styled.div`
  width: 100%;
  height: 12px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 6px;
  overflow: hidden;
`;

const ProgressInner = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ffffff, #e0e7ff);
  border-radius: 6px;
  width: ${(props) => props.progress}%;
  transition: width 0.5s ease;
`;

const StatusBox = styled.div`
  background-color: rgba(255,255,255,0.2);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  animation: ${waveFadeIn} 2s ease forwards;
`;

const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-right: 0.75rem;
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
    { label: "Days", value: timeLeft.days || 0, color: "#6366f1" },
    { label: "Hours", value: timeLeft.hours || 0, color: "#14b8a6" },
    { label: "Minutes", value: timeLeft.minutes || 0, color: "#f59e0b" },
    { label: "Seconds", value: timeLeft.seconds || 0, color: "#3b82f6" },
  ];

  const started = Object.keys(timeLeft).length === 0;

  return (
    <Wrapper>
      <Title>Countdown to GJMIC 2025</Title>
      <Subtitle>Saturday, November 15, 2025</Subtitle>

      <CountdownContainer>
        {units.map((unit, idx) => (
          <TimeBox key={idx} bg={unit.color}>
            <TimeValue>{format(unit.value)}</TimeValue>
            <TimeLabel>{unit.label}</TimeLabel>
          </TimeBox>
        ))}
      </CountdownContainer>

      <ProgressContainer>
        <ProgressLabels>
          <span>Today</span>
          <span>Conclave Day</span>
        </ProgressLabels>
        <ProgressOuter>
          <ProgressInner progress={progress} />
        </ProgressOuter>
      </ProgressContainer>

      <StatusBox>
        <StatusIndicator />
        {started ? "The GJMIC has started!" : "The GJMIC will start soon."}
      </StatusBox>
    </Wrapper>
  );
};

export default Countdown;
