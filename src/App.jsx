import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Feed from "./pages/Feed";
import "./App.css";
import VideoDetail from "./pages/VideoDetail";
import SearchResult from "./pages/SearchResult";
import Header from "./components/Header";
import Undefined from "./pages/Undefined";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
