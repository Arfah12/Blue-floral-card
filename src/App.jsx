
import { useState } from "react";

import Opening from "./components/Opening/Opening";
import Hero from "./components/Hero/Hero";
import Invitation2 from "./components/Invitation2/Invitation2";
import TheDay from "./components/TheDay/TheDay";
import DressCode from "./components/DressCode/DressCode";
import Countdown from "./components/Countdown/Countdown";
import Gallery from "./components/Gallery/Gallery";
import Wishes from "./components/Wishes/Wishes";
import DisplayWishes from "./components/DisplayWishes/DisplayWishes";
import Contact from "./components/Contact/Contact";
import RSVP from "./components/RSVP/RSVP";
import Music from "./components/Music/Music";
import Footer from "./components/Footer/Footer";

import "./themes/vintage/variables.css";
import "./themes/vintage/theme.css";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const handleOpenInvitation = () => {
    setPlayMusic(true);
    setIsOpened(true);
  };

  return (
    <main className="digital-card">

      {!isOpened ? (
        <Opening onOpen={handleOpenInvitation} />
      ) : (
        <>
          <Hero />

          <Invitation2 />

          <TheDay />

          <DressCode />

          <Countdown />

          <Gallery /> 

          <Wishes />

          <DisplayWishes />

          <Contact />

          <RSVP />

          <Music playMusic={playMusic} />

          <Footer />
        </>
      )}

    </main>
  );
}

export default App;
