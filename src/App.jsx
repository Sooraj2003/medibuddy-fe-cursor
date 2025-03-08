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
import Booking from "./components/Booking";
import PopularLabTest from "./components/PopularLabTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div className="pt-[72px] md:pt-[80px] px-4 md:px-10">
                <SearchBar />
                <Service />
                <Banner />
                <Detail />
                <Booking />
                <PopularLabTest />
                <Labs />
                <About />
                <ReviewCarousel />
                <LifeStyleComponent />
                <Safety />
                <QaComponent />
              </div>
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
