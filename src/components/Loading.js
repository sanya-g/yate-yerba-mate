import React, { useEffect, useState, useMemo } from "react";
import pineappleSublime from "../gifs/pineapple-sublime.gif";
import moscowFuel from "../gifs/moscow-fuel.gif";
import goldenSpritz from "../gifs/golden-spritz.gif";
import loadingGif from "../gifs/loading.gif";

import gluten_free from "../images/gf.png";
import gmo from "../images/gmo.png";
import veg from "../images/v.png";
import leaf from "../images/leaf.png";

import "./Loading.css";
import { Container, Row, Col } from "react-bootstrap";
import { GiGlassShot } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { GiSodaCan } from "react-icons/gi";
import { GiCutLemon } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";

const genreToDrinkMap = {
  pop: "Pineapple Sublime",
  soul: "Moscow Fuel",
  other: "Moscow Fuel",
  "hip hop": "Golden Spritz",
  electro: "Pineapple Sublime",
  "r&b": "Golden Spritz",
  "k-pop": "Pineapple Sublime",
  indie: "Golden Spritz",
  rap: "Moscow Fuel",
  synthpop: "Pineapple Sublime",
  indietronica: "Golden Spritz",
  electropop: "Pineapple Sublime",
  pixie: "Pineapple Sublime",
  "brazilian funk": "Pineapple Sublime",
  anime: "Pineapple Sublime",
  trance: "Moscow Fuel",
  latin: "Golden Spritz",
  rock: "Golden Spritz",
  "indie pop": "Golden Spritz",
  "urban contemporary": "Moscow Fuel",
  francoton: "Moscow Fuel",
  sertanejo: "Moscow Fuel",
  "brega funk": "Pineapple Sublime",
  reggae: "Pineapple Sublime",
  "adult standards": "Golden Spritz",
  "j-idol": "Moscow Fuel",
  "indie rock": "Golden Spritz",
  reggaeton: "Pineapple Sublime",
  "indie soul": "Golden Spritz",
  pagode: "Moscow Fuel",
  "j-rock": "Golden Spritz",
  country: "Golden Spritz",
  gospel: "Golden Spritz",
  cartoon: "Pineapple Sublime",
  "j-pop": "Pineapple Sublime",
  grime: "Moscow Fuel",
  folk: "Golden Spritz",
  "j-rap": "Moscow Fuel",
  "roots rock": "Golden Spritz",
  "pop rap": "Pineapple Sublime",
  "indie jazz": "Pineapple Sublime",
  "j-dance": "Moscow Fuel",
  "j-pixie": "Moscow Fuel",
  trap: "Pineapple Sublime",
  europop: "Pineapple Sublime",
  "escape room": "Moscow Fuel",
  "pop punk": "Pineapple Sublime",
  "j-division": "Moscow Fuel",
  chanson: "Moscow Fuel",
  dance: "Pineapple Sublime",
  house: "Pineapple Sublime",
  "j-poprock": "Golden Spritz",
  afropop: "Pineapple Sublime",
  "tropical house": "Pineapple Sublime",
  "video game music": "Moscow Fuel",
  rai: "Moscow Fuel",
  "pop rock": "Golden Spritz",
  metal: "Moscow Fuel",
  children: "Moscow Fuel",
  "jazz funk": "Golden Spritz",
  "pop house": "Pineapple Sublime",
  "disco house": "Pineapple Sublime",
  "electro house": "Pineapple Sublime",
  "zouk riddim": "Moscow Fuel",
  "new wave": "Golden Spritz",
  "c-pop": "Moscow Fuel",
  "dream pop": "Pineapple Sublime",
  disco: "Moscow Fuel",
  mpb: "Moscow Fuel",
  punk: "Golden Spritz",
  indigenous: "Golden Spritz",
  "deep pop r&b": "Pineapple Sublime",
  "variete francaise": "Moscow Fuel",
  funk: "Pineapple Sublime",
  "native american": "Moscow Fuel",
  "indie pop rap": "Pineapple Sublime",
  forro: "Moscow Fuel",
  "rap rock": "Moscow Fuel",
  "k-hop": "Moscow Fuel",
  dancehall: "Moscow Fuel",
  jazz: "Moscow Fuel",
  tropical: "Pineapple Sublime",
  "folk rock": "Moscow Fuel",
  "indie r&b": "Moscow Fuel",
  cubaton: "Moscow Fuel",
  "j-metal": "Pineapple Sublime",
  "jazz rap": "Golden Spritz",
  drill: "Golden Spritz",
  "blues rock": "Moscow Fuel",
  cumbia: "Golden Spritz",
  "dance pop": "Pineapple Sublime",
  techno: "Golden Spritz",
  "j-punk": "Pineapple Sublime",
  blues: "Golden Spritz",
  tecnobrega: "Golden Spritz",
  psychedelic: "Golden Spritz",
  raggae: "Pineapple Sublime",
  "mellow gold": "Pineapple Sublime",
  karneval: "Golden Spritz",
  soca: "Golden Spritz",
  afrofuturism: "Pineapple Sublime",
  "pagode baiano": "Pineapple Sublime",
  classical: "Golden Spritz",
  industrial: "Pineapple Sublime",
  lounge: "Pineapple Sublime",
  "folk-pop": "Moscow Fuel",
  "trap pop": "Moscow Fuel",
  ninja: "Pineapple Sublime",
  "new age": "Moscow Fuel",
  "punk rock": "Golden Spritz",
  "country rap": "Moscow Fuel",
  "samba reggae": "Pineapple Sublime",
  vogue: "Moscow Fuel",
  schlager: "Moscow Fuel",
  "pop emo": "Moscow Fuel",
  emo: "Moscow Fuel",
  brega: "Pineapple Sublime",
  "county rock": "Golden Spritz",
  "classic rock": "Golden Spritz",
  dubstep: "Moscow Fuel",
  "country pop": "Pineapple Sublime",
  ska: "Moscow Fuel",
  chillwave: "Moscow Fuel",
  laiko: "Moscow Fuel",
  samba: "Moscow Fuel",
  swing: "Moscow Fuel",
  "visual kei": "Moscow Fuel",
  "psychedelic rock": "Golden Spritz",
  "easy listening": "Pineapple Sublime",
  "ryukyu ongaku": "Moscow Fuel",
  azonto: "Moscow Fuel",
  experimental: "Pineapple Sublime",
  "anti-folk": "Golden Spritz",
  "trip hop": "Pineapple Sublime",
  enka: "Golden Spritz",
  instrumental: "Moscow Fuel",
  "new rave": "Moscow Fuel",
  guaracha: "Moscow Fuel",
  americana: "Pineapple Sublime",
  axe: "Golden Spritz",
  zouglou: "Pineapple Sublime",
  "indie folk": "Moscow Fuel",
  world: "Moscow Fuel",
  "rap metal": "Moscow Fuel",
  salsa: "Pineapple Sublime",
  celtic: "Pineapple Sublime",
  bachata: "Pineapple Sublime",
  "alt-idol": "Moscow Fuel",
  rave: "Pineapple Sublime",
  rumba: "Moscow Fuel",
  grunge: "Moscow Fuel",
  "bossa nova": "Moscow Fuel",
  "hard rock": "Golden Spritz",
  afrobeat: "Pineapple Sublime",
  "country rock": "Moscow Fuel",
  breakbeat: "Moscow Fuel",
  moombahton: "Golden Spritz",
  soukous: "Golden Spritz",
  champeta: "Golden Spritz",
  dembow: "Golden Spritz",
  vallenato: "Golden Spritz",
  wassoulou: "Golden Spritz",
};

function Loading({ data, artists }) {
  const [mostFrequentGenre, setMostFrequentGenre] = useState("");
  const [recommendedDrink, setRecommendedDrink] = useState("");
  const [description, setDescription] = useState({});

  const [loadingComplete, setLoadingComplete] = useState(false);
  

  const gifs = useMemo(
    () => ({
      "Pineapple Sublime": pineappleSublime,
      "Moscow Fuel": moscowFuel,
      "Golden Spritz": goldenSpritz,
    }),
    []
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true); // wait 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const normalizedArtists = artists.map((artist) => artist.toLowerCase());
    const filteredData = data.filter((artist) =>
      normalizedArtists.includes(artist.name.toLowerCase())
    );

    // Count the occurrences of each genre
    const counts = {};
    filteredData.forEach((artist) => {
      const genresArray = JSON.parse(artist.genres.replace(/'/g, '"'));
      genresArray.forEach((genre) => {
        counts[genre] = (counts[genre] || 0) + 1;
      });
    });

    // Find the most frequent genre
    let maxCount = 0;
    let frequentGenre = "";
    Object.entries(counts).forEach(([genre, count]) => {
      if (count > maxCount) {
        maxCount = count;
        frequentGenre = genre;
      }
    });

    if (frequentGenre === "") {
      frequentGenre = "rock";
    }
    setMostFrequentGenre(frequentGenre);

    setRecommendedDrink(genreToDrinkMap[frequentGenre]);
  }, [data, artists]);

  useEffect(() => {
    if (genreToDrinkMap[mostFrequentGenre] === "Moscow Fuel") {
      setDescription({
        ingredients: ["Sublime Ginger Yate", "Vodka", "Lime"],
        icons: [
          <GiSodaCan className="sublimeIcon" />,
          <GiGlassShot className="alcoholIcon" />,
          <GiCutLemon className="limeIcon" />,
        ],
        persona: "Urban Explorer",
        personaDescription:
          "Crafted for the Urban Explorer who craves the thrill of city life and the vibrant energy of bustling streets. Immerse yourself in the pulse of urban nightlife with every sip, as you embark on an exhilarating journey through the electrifying streets of the metropolis.",
      });
    } else if (genreToDrinkMap[mostFrequentGenre] === "Pineapple Sublime") {
      setDescription({
        ingredients: [
          "Sublime Ginger Yate",
          "Tequila",
          "Pineapple",
          "Splash of Lime",
        ],
        icons: [
          <GiSodaCan className="sublimeIcon" />,
          <GiGlassShot className="alcoholIcon" />,
          <GiFruitBowl className="pineappleIcon" />,
          <GiCutLemon className="limeIcon" />,
        ],
        persona: "Summer Enthusiast",
        personaDescription:
          "Crafted for the Summer Enthusiast who craves the thrill of sunny adventures and the cool breeze of tropical escapes. Embrace the essence of summer in every sip, and let the rhythm of the waves carry you to paradise.",
      });
    } else {
      setDescription({
        ingredients: [
          "Original Golden Yate",
          "Vodka",
          "Splash of Cranberry",
          "Lime Juice",
        ],
        icons: [
          <GiSodaCan className="goldenIcon" />,
          <GiGlassShot className="alcoholIcon" />,
          <GiFruitTree className="cranberryIcon" />,
          <GiCutLemon className="limeIcon" />,
        ],
        persona: "Sophisticated Socialite",
        personaDescription:
          "Crafted for the Sophisticated Socialite who commands attention and revels in the allure of glamorous soirées. Sip with finesse and grace, and let each golden drop tell a tale of refined taste and effortless charm",
      });
    }
  }, [mostFrequentGenre, recommendedDrink]);

  let numCols;
  if (description.ingredients && description.ingredients.length === 3) {
    numCols = 3;
  } else {
    numCols = 2; // Assuming for any other case, display 2 ingredients per row
  }

  const healthIcons = [gluten_free, gmo, veg, leaf];

  // Determine which GIF to display based on the recommended drink

  if (!loadingComplete) {
    return (
      <Container className="App">
        <Row className="justify-content-center align-items-center full-height">
          <Col className="text-center">
            <div className="loading-wrapper">
              <img className="loadingGif" src={loadingGif} alt="Loading..." />
              <p className="loading-text">Finding your mix</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  let borderColor = "#93C90F";

  if (recommendedDrink === "Golden Spritz") {
    borderColor = "#ff8f1c";
  }

  return (
    <Container className="App">
      <Row
        style={{
          marginRight: "40px",
          marginLeft: "40px",
          border: `3px solid ${borderColor}`,
          marginTop: "30px",
          padding: "10px",
          marginBottom: "20px",
        }}
        className="home-container"
      >
        <Col className="home-drink-section slide-in-left">
          <p
            style={{
              textAlign: "center",
              fontSize: 30.29,
              fontWeight: "900",
              letterSpacing: 2.06,
              wordWrap: "break-word",
              paddingBottom: "5px",
            }}
            className="drink-title face-in-title"
          >
            {recommendedDrink}
          </p>
          <p className="persona-title">{description.persona}</p>
          {recommendedDrink &&(
              <img
                src={gifs[recommendedDrink]}
                alt="Recommended Drink"
                className="drinkIMG"
              />
            )}
        </Col>
        <Col className="home-description-section slide-in-right">
          <p className="drink-description">{description.personaDescription}</p>
        </Col>
      </Row>

      <Row
        style={{
          marginRight: "40px",
          marginLeft: "40px",
          border: `3px solid ${borderColor}`,
          marginTop: "30px",
          padding: "10px",
        }}
      >
        <Row className="health-icons">
          {healthIcons.map((icon, index) => (
            <Col key={index} className="health-icon">
              <img src={icon} alt={`Health Icon ${index + 1}`} />
            </Col>
          ))}
        </Row>
        <Col className="slide-in-bottom">
          <Row className="ingredients-list">
            <Row className="ingredients-list">
              {description.ingredients &&
                description.ingredients.map((ingredient, index) => (
                  <Col
                    key={index}
                    lg={12 / numCols}
                    className="slide-in-bottom"
                  >
                    <div className="ingredient-card">
                      <span className="ingredientSpan">{ingredient}</span>
                      {description.icons && description.icons[index]}
                    </div>
                  </Col>
                ))}
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Loading;
