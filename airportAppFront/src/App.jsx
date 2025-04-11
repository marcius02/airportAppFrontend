import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Airports from "./Airports";
import Planes from "./Planes";
import Flights from "./Flights";
import UpdateAirportForm from "./UpdateAirportForm";
import CreateAirportForm from "./CreateAirportForm";
import UpdatePlaneForm from "./UpdatePlaneForm";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;