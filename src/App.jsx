import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Costumer from "./pages/Costumer";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/product/:id" Component={Product} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/costumer" Component={Costumer} />
          <Route path="/login" Component={Login} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
