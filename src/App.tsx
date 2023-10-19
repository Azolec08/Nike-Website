import { Routes, Route } from "react-router-dom";
import RootLayout from "./rootLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Review from "./pages/review";
import Services from "./pages/Services";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<About />} />
          <Route path="/review" element={<Review />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
