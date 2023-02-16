import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";
import Discover from "./Components/Discover/Discover";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Join from "./Components/Join/Join";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Main/>
        <Discover/>
        <Join />
        <Footer /> */}
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
