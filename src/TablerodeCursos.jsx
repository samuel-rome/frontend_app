import "./App.css";
import Banner from "./components/Banner";
import Info from "./components/Info"
import Navbar from "./components/Navbar";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Info />
      <Contact />
    </div>
  );
}

export default App;
