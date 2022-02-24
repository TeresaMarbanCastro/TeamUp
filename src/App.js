import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import Week from "./components/Week";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <NavMenu />
      <Home />
      <Week />
      <Footer />
    </div>
  );
}

export default App;
