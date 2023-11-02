import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Video from "../components/Videos";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <Video />
      <Footer />
    </div>
  );
}

export default Home;
