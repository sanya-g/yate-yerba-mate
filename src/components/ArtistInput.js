import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../images/bg.png";
import "./ArtistInput.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function ArtistInput({ setArtists }) {
  const [artists, setArtistsState] = useState(["", "", ""]);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleInputChange = (index, event) => {
    const newArtists = [...artists];
    newArtists[index] = event.target.value;
    setArtistsState(newArtists);
  };

  const handleNext = () => {
    if (currentQuestion === 3) {
      setArtists(artists);
      // Navigate to the loading page or any other destination here
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleBack = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      window.scrollTo(0, 0); // Scroll to the top when the keyboard is dismissed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="QuizPage">
      <img src={bg} alt="Background" className="bg-image" />

      <div className="overlay">
        <div className="content">
          <div
            className={`quiz-question ${currentQuestion === 1 ? "active" : ""}`}
          >
            <label htmlFor="artist1" className="artist-label">
              1st Favorite Artist
            </label>
            <input
              type="text"
              id="artist1"
              placeholder="ex: Drake"
              className="artist-input"
              value={artists[0]}
              onChange={(event) => handleInputChange(0, event)}
            />
          </div>
          <div
            className={`quiz-question ${currentQuestion === 2 ? "active" : ""}`}
          >
            <label htmlFor="artist2" className="artist-label">
              2nd Favorite Artist
            </label>
            <input
              type="text"
              id="artist2"
              placeholder="ex: Kendrick Lamar"
              className="artist-input"
              value={artists[1]}
              onChange={(event) => handleInputChange(1, event)}
            />
          </div>
          <div
            className={`quiz-question ${currentQuestion === 3 ? "active" : ""}`}
          >
            <label htmlFor="artist3" className="artist-label">
              3rd Favorite Artist
            </label>
            <input
              type="text"
              id="artist3"
              placeholder="ex: Metro Boomin"
              className="artist-input"
              value={artists[2]}
              onChange={(event) => handleInputChange(2, event)}
            />
          </div>
          <div className="navigation-buttons">
            {currentQuestion !== 1 && (
              <button onClick={handleBack} className="btn-back">
                <FaArrowLeftLong />
              </button>
            )}
            {currentQuestion !== 3 ? (
              <button onClick={handleNext} className="btn-next">
                <FaArrowRightLong />
              </button>
            ) : (
              <button onClick={handleNext} className="btn-next">
                <Link
                  to="/Loading"
                  style={{
                    padding: "0px 1px",
                    background: "#93C90F",
                    border: "none",
                    borderRadius: "5.38px",
                    color: "black",
                    fontFamily: "Pitch Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    textDecoration: "none",
                    alignItems: "center",
                    cursor: "pointer",
                    transition:
                      "background-color 0.3s ease" /* Add transition for background-color */,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#FF8F1C";
                  }} /* Change background color on hover */
                  onMouseLeave={(e) => {
                    e.target.style.background = "#93C90F";
                  }} /* Restore original background color on mouse leave */
                >
                  <FaArrowRightLong />
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistInput;
