import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/Home";
import Airports from "./airports/Airports";
import Planes from "./planes/Planes";
import Flights from "./flights/Flights";
import UpdateAirportForm from "./airports/UpdateAirportForm";
import CreateAirportForm from "./airports/CreateAirportForm";
import UpdatePlaneForm from "./planes/UpdatePlaneForm";
import CreatePlaneForm from "./planes/CreatePlaneForm";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/airports" element={<Airports />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/airports/update/:id" element={<UpdateAirportForm />} />
            <Route path="/airports/create" element={<CreateAirportForm />} />
            <Route path="/planes/update/:id" element={<UpdatePlaneForm />}/>
            <Route path="/planes/create" element={<CreatePlaneForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;