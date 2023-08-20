import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage2 from "./components/mainPage/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contactus from "./components/Contactus";

// import Navbar from './components/menu/Navbar';
import "./styling.css";
import  Navbar  from "./components/menu/Navbar";

function App() {
  return (
    <div>
      {/* <h2>Welcome to Home page</h2> */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<HomePage2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
