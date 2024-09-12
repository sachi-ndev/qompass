import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/main/footer/Footer";
import Home from "./components/Home";
import Navbar from "./components/main/navbar/Navbar";
import { AppProvider } from "./components/main/context/Context";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
