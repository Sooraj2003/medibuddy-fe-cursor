import Banner from "./components/Banner"
import Detail from "./components/Detail"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Service from "./components/Service"

function App() {


  return (
    <div className="m-9 overflow-hidden">
      <Navbar/>
      <SearchBar/>
      <Service/>
      <Banner/>
      <Detail/>
    </div>
  )
}

export default App
