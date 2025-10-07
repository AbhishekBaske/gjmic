import React, { useEffect, useState ,useRef} from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";


// --- Styled Components ---
const SiteHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavInner = styled.div`
  max-width:100vw;
  margin: 0 auto;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap: 12px;
  min-height: 72px;
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
`;

const BrandLogo = styled.img`
  height: 80px; /* increased size */
  width: auto;

  @media (max-width: 768px) {
    height: 60px; /* responsive */
  }
`;

const MainNavigation = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Menu = styled.ul`
  display:flex;
  justify-content:space-evenly;
  margin: 0;
  padding: 0;
  gap:18px;
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
  position: relative;
  width: 34px;
  height: 28px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 120;

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* three bars */
  span {
    position: absolute;
    left: 6px;
    right: 6px;
    height: 3px;
    background: #111827;
    border-radius: 3px;
    display: block;
    transition: transform 220ms cubic-bezier(.2,.9,.2,1), opacity 180ms ease, top 220ms cubic-bezier(.2,.9,.2,1);
    will-change: transform, opacity;
  }

  span:nth-child(1) {
    top: 6px;
  }
  span:nth-child(2) {
    top: 12px;
  }
  span:nth-child(3) {
    top: 18px;
  }

  /* open state - morph to X */
  &[data-open="true"] span:nth-child(1) {
    top: 12px;
    transform: rotate(45deg);
  }
  &[data-open="true"] span:nth-child(2) {
    opacity: 0;
    transform: translateX(10px);
  }
  &[data-open="true"] span:nth-child(3) {
    top: 12px;
    transform: rotate(-45deg);
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
  overflow-y: auto;
  overflow-x: hidden;
`;

const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0;
  margin: 0;
  list-style: none;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`;

const MobileCta = styled.div`
  margin-top: 20px;
  padding: 20px 0 0;
  flex-shrink: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

// --- Component ---
const Navbar = () => {
  const [open, setOpen] = useState(false);
 const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

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

const toggleMenu = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setOpen((prev) => !prev);
  };
  const closeMenu = () => setOpen(false);

  // Add a global click listener that closes the mobile menu when it's open.
  // This will set open = false when the user clicks anywhere.
  useEffect(() => {
    function handleWindowClick(e) {
      // only act on small viewports (mobile)
      if (!open) return;
      if (window.innerWidth > 900) return;

      // If you want to ignore clicks inside the menu or hamburger, uncomment checks below:
      // if (menuRef.current && menuRef.current.contains(e.target)) return;
      // if (hamburgerRef.current && hamburgerRef.current.contains(e.target)) return;

      setOpen(false);
    }

    window.addEventListener("click", handleWindowClick, { passive: true });
    return () => window.removeEventListener("click", handleWindowClick);
  }, [open]);


  // const toggleMenu = () => setOpen(!open);
  // const closeMenu = () => setOpen(false);

  return (
    <SiteHeader>
      <NavInner>
        {/* Logo */}
        <Brand to="/">
          <BrandLogo src="https://cdn.jsdelivr.net/gh/AbhishekBaske/gjmiccdn@main/logos/logo%20final%20wth%20bg%20ill-01-minyf.png" alt="GJMIC Logo" />
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
       <Hamburger onClick={toggleMenu} aria-label={open ? "Close menu" : "Open menu"} data-open={open}>
  <span />
  <span />
  <span />
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
