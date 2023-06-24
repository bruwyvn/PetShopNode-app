import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import Costumer from "./pages/Costumer";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/details/:id" Component={Details} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/costumer" Component={Costumer} />
          <Route path="/login" Component={Login} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
