import React from "react";
import Herobanner from "./Herobanner";
import Explore from "./Explore";
import BestPicks from "./Best Picks";
import HeartImg from "../Styles/Buttons/Heartimg";
import VideoSec from "./VideoSec";
import PopularCategories from "./Popular Categories";
import DealDay from "./DealDay";
import Responsive from "./DealDay/Slider";

const Home = () => {
  return (
    <div className="blur-content">
      <Herobanner />
      <Explore />
      <BestPicks />
      <VideoSec />
      <PopularCategories />
      <DealDay />
    </div>
  );
};

export default Home;
