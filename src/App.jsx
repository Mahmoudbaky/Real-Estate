import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, OrderNow, OurOffers } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route
          path="/OrderNow"
          element={
            <div>
              <OrderNow />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
