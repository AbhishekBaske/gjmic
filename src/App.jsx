// App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import SweetHome from "./Components/SweetHome";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footbar from "./Components/Footbar";
import styled from "styled-components";

// Styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const FooterWrapper = styled.footer`
  background: #111;
  color: #fff;
`;

export default function App() {
  return (
    
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<SweetHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/themes" element={<div className="page"><h1>Themes</h1></div>} />
            <Route path="/agenda" element={<div className="page"><h1>Agenda</h1></div>} />
            <Route path="/call-for-papers" element={<div className="page"><h1>Call for Papers</h1></div>} />
            <Route path="/important-dates" element={<div className="page"><h1>Important Dates</h1></div>} />
            <Route path="/committee" element={<div className="page"><h1>Committee</h1></div>} />
            <Route path="/speakers" element={<div className="page"><h1>Speakers</h1></div>} />
            <Route path="/gallery" element={<div className="page"><h1>Gallery</h1></div>} />
            <Route path="/sponsorship-tiers" element={<div className="page"><h1>Sponsorship Tiers</h1></div>} />
            <Route path="/register" element={<div className="page"><h1>Register</h1></div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainContent>
        <FooterWrapper>
          <Footbar />
        </FooterWrapper>
      </AppContainer>

  );
}
