import React, { useState } from "react";
import Webpage from "./webpage";
import RegisterationPage from "./registerationPage";
import HomePage from "./homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Webpage />} />
          <Route
            path="/registeration"
            element={<RegisterationPage onSubmit={handleFormSubmit} />}
          />
          <Route path="/homepage" element={<HomePage data={formData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
