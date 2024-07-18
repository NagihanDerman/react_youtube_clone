import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import Undefined from "./pages/Undefined";
import VideoDetail from "./pages/videoDetail/index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
