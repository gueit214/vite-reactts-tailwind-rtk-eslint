import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/begin";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/begin" element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
