import { Route, Routes, useLocation } from "react-router-dom";
import { Contact } from "./Contact";
import { About } from "./About";
import { Home } from "./Home";

export function RoutesWithAnimation() {
  const location = useLocation();
  // console.log(location);
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
