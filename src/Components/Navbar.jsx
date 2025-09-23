import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

// --- Styled Components ---
const SiteHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 60;
  background: #ffffff;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`;

const NavInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 72px;
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
`;

const BrandLogo = styled.img`
  height: 72px; /* increased size */
  width: auto;

  @media (max-width: 768px) {
    height: 60px; /* responsive */
  }
`;

const MainNavigation = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 22px;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const MenuItem = styled.li`
  list-style: none;
`;

const MenuLink = styled(NavLink)`
  color: #111827;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  height: 56px;
  padding: 0 8px;
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  transition: color 160ms ease, transform 160ms ease;

  &:hover {
    color: #4f46e5;
    transform: translateY(-2px);
  }

  &.active {
    color: #4f46e5;
    font-weight: 700;
  }
`;

const Cta = styled.div`
  flex: 0 0 auto;

  @media (max-width: 900px) {
    display: none;
  }
`;

// --- Golden Button for CTA ---
const ButtonGold = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #d4af37, #f9d976);
  color: #2f0c0c;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, #f9d976, #d4af37);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 14px;
    font-size: 0.95rem;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 110;

  @media (max-width: 900px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background: #111827;
    border-radius: 3px;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;
  background: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 80px 20px 20px;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
`;

const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MobileCta = styled.div`
  margin-top: auto;
  padding-top: 20px;
`;

// --- Component ---
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/themes", label: "Themes" },
    { to: "/agenda", label: "Agenda" },
    { to: "/call-for-papers", label: "Call for Papers" },
    { to: "/important-dates", label: "Important Dates" },
    { to: "/committee", label: "Committee" },
    { to: "/speakers", label: "Speakers" },
    { to: "/gallery", label: "Gallery" },
    { to: "/sponsorship-tiers", label: "Sponsorship Tiers" },
    { to: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <SiteHeader>
      <NavInner>
        {/* Logo */}
        <Brand to="/">
          <BrandLogo src={logo} alt="GJMIC Logo" />
        </Brand>

        {/* Desktop Menu */}
        <MainNavigation>
          <Menu>
            {navItems.map((item, idx) => (
              <MenuItem key={idx}>
                <MenuLink to={item.to} end={item.end}>
                  {item.label}
                </MenuLink>
              </MenuItem>
            ))}
          </Menu>
        </MainNavigation>

        {/* CTA */}
        <Cta>
          <ButtonGold to="/register">Register Now</ButtonGold>
        </Cta>

        {/* Hamburger */}
        <Hamburger onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </NavInner>

      {/* Mobile Drawer */}
      <MobileMenu open={open}>
        <MobileMenuList>
          {navItems.map((item, idx) => (
            <li key={idx}>
              <MenuLink to={item.to} end={item.end} onClick={closeMenu}>
                {item.label}
              </MenuLink>
            </li>
          ))}
        </MobileMenuList>
        <MobileCta>
          <ButtonGold to="/register" onClick={closeMenu}>
            Register Now
          </ButtonGold>
        </MobileCta>
      </MobileMenu>
    </SiteHeader>
  );
};

export default Navbar;
