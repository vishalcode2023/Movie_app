import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./Context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import HeaderWallpaper from "./Context/HeaderWallpaper.jsx";
import CardContext from "./Context/CardContext.jsx";
import Trendingpage from "./Context/TrendingContext.jsx"; 
import DetailsContext from "./Context/DetailsContext.jsx";
import Popularcontext from "./Context/Popularcontext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Context>
        <HeaderWallpaper>
          <CardContext>
            <Trendingpage> 
              <DetailsContext>
                <Popularcontext>
                <App />
                </Popularcontext>
              </DetailsContext>
            </Trendingpage>
          </CardContext>
        </HeaderWallpaper>
      </Context>
    </BrowserRouter>
);
