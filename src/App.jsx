import React, { useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footbar from "./Components/Footbar";
import SweetHome from "./Components/SweetHome";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Theme from "./Components/Theme";
import CallForPapers from "./Components/CallForPapers.jsx";
import ImportantDates from "./Components/ImportantDates";
import Announce from "./Components/Announce.jsx";
import Committee from "./Components/Committee.jsx";
import ScrollToTop from "./ScrollToTop";
import styled from "styled-components";
import Register from "./Components/Register.jsx";

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
  const footerRef = useRef(null);
  const location = useLocation();

  return (
    <AppContainer>
      <ScrollToTop />
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<SweetHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/themes" element={<Theme />} />
          <Route path="/agenda" element={<Announce />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/speakers" element={<Announce />} />
          <Route path="/gallery" element={<div className="page"><h1>Gallery</h1></div>} />
          <Route path="/sponsorship-tiers" element={<Announce />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainContent>
      <FooterWrapper ref={footerRef}>
        <Footbar />
      </FooterWrapper>
    </AppContainer>
  );
}
