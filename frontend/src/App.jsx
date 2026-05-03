import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import BasicFacts from "./page/BasicFacts";
import History from "./page/History";
import Geography from "./page/Geography";
import DestinationsInfo from "./page/DestinationsInfo";
import Activities from "./page/Activities";
import Food from "./page/Food";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basic-facts" element={<BasicFacts />} />
        <Route path="/history" element={<History />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/destinations-info" element={<DestinationsInfo />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;