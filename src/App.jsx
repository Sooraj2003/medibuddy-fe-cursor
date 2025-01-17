import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Detail from "./components/Detail";
import Labs from "./components/Labs";
import LifeStyleComponent from "./components/LifeStyleComponent";
import Navbar from "./components/Navbar";
import QaComponent from "./components/QaComponent";
import ReviewCarousel from "./components/ReviewCarousel";
import Safety from "./components/Safety";
import SearchBar from "./components/SearchBar";
import Service from "./components/Service";
import ViewAll from "./components/ViewAll";
import ViewMore from "./components/ViewMore";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="m-9 overflow-hidden">
              <Navbar />
              <SearchBar />
              <Service />
              <Banner />
              <Detail />
              <Labs />
              <About />
              <ReviewCarousel />
              <LifeStyleComponent />
              <Safety />
              <QaComponent />
            </div>
          }
        />
        <Route
          path="/viewall"
          element={
            <div className="m-9 overflow-hidden">
              <ViewAll/>
            </div>
          }
        />
        <Route
          path="/viewmore"
          element={
            <div className="m-9 overflow-hidden">
              <ViewMore/>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
