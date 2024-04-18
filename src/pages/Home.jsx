import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Click on the below link for design {" "}
        <a href="https://www.figma.com/file/lWSlZ9RhGY3byIOWIUd5c3/Chatbot?type=design&node-id=0-1&mode=design&t=fCNJMxmm5pTyAcUn-0" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Figma
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/aivachatbotui" style={{ color: "#87CEFA", textDecoration: "none" }}>
            AIVACHatbotUI
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/aivachatbotuiblank" style={{ color: "#87CEFA", textDecoration: "none" }}>
            AIVACHatbotUIBlank
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
