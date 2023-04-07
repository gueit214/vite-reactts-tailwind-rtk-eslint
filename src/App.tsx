import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Begin from "./pages/begin";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Begin />} />
          <Route path="/begin" element={<Begin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
