import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";
import Background from "../components/Background";

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };
  return (
    <>
      <div id="container">
        <Background style={{ zIndex: "-100", position: "fixed" }} />
        <div
          className="txt"
          style={{
            zIndex: "100",
            position: "absolute",
            bottom: "450px",
            left: "600px",
          }}
        >
          <h1>
            Honey, you've stumbled onto a page that does not exist. But don't
            buzz off just yet! Come back to the hive, and join the colony.{" "}
          </h1>
        </div>
        <div>
          <button
            style={{
              zIndex: "100",
              position: "absolute",
              bottom: "335px",
              right: "510px",
              height: "70px",
              width: "300px",
              background: "none",
              fontFamily: "monospace",
              color: "#ffffff",
              fontSize: "20px",
              borderRadius: "45px",
              border: "3px solid #992509",
              boxShadow: " 6px 6px 24px #992509",
            }}
            onClick={handleReturnHome}
          >
            Return to the Hive
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
