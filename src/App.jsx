import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Blog,
  OrderNow,
  OurOffers,
  DevWork,
  ManageServices,
  AccountantServices,
  TechServices,
  Auctions,
} from "./pages";

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
        <Route
          path="/DevWork"
          element={
            <div>
              <DevWork />
            </div>
          }
        />
        <Route
          path="/ManageServices"
          element={
            <div>
              <ManageServices />
            </div>
          }
        />
        <Route
          path="/AccountantServices"
          element={
            <div>
              <AccountantServices />
            </div>
          }
        />

        <Route
          path="/TechServices"
          element={
            <div>
              <TechServices />
            </div>
          }
        />

        <Route
          path="/Auctions"
          element={
            <div>
              <Auctions />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
