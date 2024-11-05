import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App (){
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<HomePage />} />
        <Route path = '/videos/:videoId' element={<HomePage />} />
        <Route path = '/upload' element={<UploadPage />} />

      </Routes>
    </Router>
  )
}

export default App;