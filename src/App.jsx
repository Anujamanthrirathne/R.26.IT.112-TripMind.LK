import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
// import EmptyPage from "./pages/EmptyPage";
import Domain from "./pages/domain";
import Footer from "./components/Footer";
import Milestones from "./components/milestones";
import Documents from "./components/doucments";
import Presentations from "./pages/presentation";
import About from "./pages/about";
import ContactUs from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/domain" element={<Domain />} />        
<Route path="/milestones" element={<Milestones />} />
<Route path="/documents" element={<Documents />} />
<Route path="/presentations" element={<Presentations />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<ContactUs />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;