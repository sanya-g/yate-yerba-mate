// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../images/bg.png";
import green_wristband from "../images/green_wristband.png";
import orange_wristband from "../images/orange_wristband.png";
import "./Home.css";

function HomePage() {
  return (
    <div className="Home">
      <img src={bg} alt="Background" className="bg-image" />
      <Container fluid className="overlay">
        <Row className="justify-content-center align-items-center full-height">
          <Col xs={12} className="text-center">
            <div className="content">
              <div className="wristband-container">
                <img
                  src={green_wristband}
                  alt="Green Wristband"
                  className="wristband green"
                />
                <img
                  src={orange_wristband}
                  alt="Orange Wristband"
                  className="wristband orange"
                />
              </div>
              <div className="title">
                <h1 className="text-uppercase">
                  All <span className="highlight-text-orange">Natural</span>
                </h1>
                <h1 className="text-uppercase">
                  All <span className="highlight-text-green">Night</span>
                </h1>
              </div>

              <Link to="/ArtistInput" className="btn-find-your-mix">
                Find Your Mix
              </Link>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
