import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.js";
import ArtistInput from "./components/ArtistInput.js";
import Loading from "./components/Loading.js";
import data from "./csvjson.json";

function App() {
  const [artists, setArtists] = useState(["", "", ""]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/ArtistInput"
          element={<ArtistInput setArtists={setArtists} artists={artists} />}
        />
        <Route
          path="/Loading"
          element={<Loading data={data} artists={artists} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
