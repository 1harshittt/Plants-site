import Header from "./Shared/Common/Header/Index";
import "./Styles/index.scss";
import "./App.scss";
import Home from "./Home";
import svgimg from "../public/plant.svg";
import { RouterProvider, useLocation } from "react-router-dom";
import router from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import AdCard from "./Styles/Ad Card";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        // Display loading animation
        <div className="lazyload">
          <div className="lazyload-layer">
            <div className="svgimg">
              <img src={svgimg} alt="svgimg" />
            </div>
          </div>
          <span>Loading....</span>
        </div>
      ) : (
        <div>
          <Toaster />
          <RouterProvider router={router} />
          <div>
            <AdCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
