import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import placeholderImg from "../assets/user.png"; // placeholder image

// Injecting CSS globally
const CommitteePageStyles = `
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #0e0e0e;
  }

  .committee-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 60px 20px;
    color: #f0f0f0;
    overflow-x: hidden;
  }

  .main-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    text-align: center;
    margin-bottom: 60px;
    font-weight: 700;
    background: linear-gradient(90deg, #b8860b, #FFD700, #b8860b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-title {
    text-align: center;
    font-size: clamp(2rem, 5vw, 2.8rem);
    color: #FFD700;
    margin: 60px 0 40px 0;
    border-bottom: 1px solid #FFD700;
    padding-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
  }

  .member-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    justify-content: center;
    justify-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .member-grid.single-row {
    grid-template-columns: 1fr;
    max-width: 400px;
  }

  .member-grid.double-row {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    max-width: 800px;
  }

  .member-grid.triple-row {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    max-width: 1200px;
  }

  .member-card {
    background-color: #1a1a1a;
    border: 1px solid #333;
    border-radius: 12px;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5);
    padding: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    /* animation prep */
    opacity: 0;
    transform: translateY(40px);
  }

  .member-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s ease-out;
  }

  .member-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(255, 215, 0, 0.25);
    border-color: #FFD700;
  }

  .member-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #FFD700;
  }

  .member-name {
    color: #FFD700;
    font-weight: 700;
    font-size: 1.25rem;
    margin: 10px 0 0 0;
  }

  .member-role {
    font-style: italic;
    color: #cccccc;
    margin: 0;
    font-size: 1rem;
  }

  .member-department {
    margin: 8px 0;
    line-height: 1.6;
    white-space: pre-line;
    color: #bbbbbb;
    font-size: 0.95rem;
    text-align: justify;
  }

  .member-contact {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 0.9rem;
  }

  .contact-link {
    color: #FFD700;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.3s;
  }

  .contact-link:hover {
    color: #fff176;
  }
`;

const CommitteePage = () => {
  // Inject styles once
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = CommitteePageStyles;
    document.head.appendChild(styleElement);

    // Intersection Observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".member-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      document.head.removeChild(styleElement);
      observer.disconnect();
    };
  }, []);

  const organisingCommittee = [
    { name: "Shri Rahul Kumar Purwar, IAS", role: "Chief Patron", dept: "Principal Secretary (Department of Higher and Technical Education)\nGovernment of Jharkhand" },
  ];

  const secondRow = [
    { name: "Prof. Pankaj Rai", role: "Patron", dept: "Director, BIT-Sindri, Dhanbad -828123" },
    { name: "Prof. P K Singh", role: "Chairman & Convener", dept: "Head of the department\nMining Engineering and Geology Department\nBIT-Sindri, Dhanbad -828123", phone: "+919123295611", email: "hod.mining@bitsindri.ac.in" },
  ];

  const thirdRow = [
    { name: "Prof. Tanmay Dasgupta", role: "Co-Convener", dept: "Department of Mining Engineering\nBIT-Sindri, Dhanbad -828123", phone: "+918840144886", email: "tanmaydas.min@bitsindri.ac.in" },
    { name: "Prof. Roshan Kumar", role: "Co-Convener", dept: "Department of Mining Engineering\nBIT-Sindri, Dhanbad -828123", phone: "+918877091602", email: "roshan.min@bitsindri.ac.in" },
    { name: "Aditya Kumar", role: "Secretary and Treasurer", dept: "Department of Mining Engineering\nBIT-Sindri, Dhanbad -828123", phone: "+919614919301", email: "adityapandey.min@bitsindri.ac.in" },
  ];

  const coreCommitteeMembers = [
    { name: "Prof. Suman Hessa", dept: "Department of Mining Engineering\nBIT-Sindri, Dhanbad -828123", phone: "+919546635375", email: "sumanhessa@gmail.com" },
    { name: "Prof. Manas Kumar Mallick", dept: "Department of Mining Engineering\nBIT-Sindri, Dhanbad -828123", phone: "+918555916172", email: "mallick.manas2@gmail.com" },
    { name: "Prof. Rizwan Hasim", dept: "Department of Mining Engineering\nBIT-Sindri, Dhanbad -828123", phone: "+918580370454", email: "riz.itbhu@gmail.com" },
    { name: "Prof. Neeraj Yadaw", dept: "Department of Mining Engineering\nBIT-Sindri, Dhanbad -828123", phone: "+919907996623", email: "neerajyadaw@gmail.com" },
  ];

  const studentRepresentatives = [
    { name: "Abhay Kumar", dept: "Department of Mining Engineering\nBIT-Sindri, Dhanbad -828123", phone: "+917667030596", email: "abhaykumarr2468@gmail.com" },
    { name: "Banti Kumar Saw", dept: "Department of Mining Engineering\nBIT-Sindri, Dhanbad -828123", phone: "+917488696254", email: "hellobanti1234@gmail.com" },
  ];

  const renderMemberCard = (member) => (
    <div className="member-card" key={member.name}>
      <img src={placeholderImg} alt="Member" className="member-image" />
      <p className="member-name">{member.name}</p>
      {member.role && <p className="member-role">{member.role}</p>}
      {member.dept && <p className="member-department">{member.dept}</p>}
      {(member.phone || member.email) && (
        <div className="member-contact">
          {member.phone && (
            <a href={`tel:${member.phone}`} className="contact-link">
              <FaPhoneAlt /> {member.phone}
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="contact-link">
              <FaEnvelope /> {member.email}
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="committee-container">
      <h1 className="main-title">Our Committee</h1>
      
      <section>
        <h2 className="section-title">Correspondence & Organising Committee</h2>
        <div className="member-grid single-row">{organisingCommittee.map(renderMemberCard)}</div>
        <div className="member-grid double-row" style={{ marginTop: "30px" }}>{secondRow.map(renderMemberCard)}</div>
        <div className="member-grid triple-row" style={{ marginTop: "30px" }}>{thirdRow.map(renderMemberCard)}</div>
      </section>

      <section>
        <h2 className="section-title">Core Committee</h2>
        <div className="member-grid">{coreCommitteeMembers.map(renderMemberCard)}</div>
      </section>

      <section>
        <h2 className="section-title">Student Representatives</h2>
        <div className="member-grid">{studentRepresentatives.map(renderMemberCard)}</div>
      </section>
    </div>
  );
};

export default CommitteePage;
