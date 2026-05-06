import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DesignSystemsAllstate from "./case-studies/DesignSystemsAllstate";
import DesignSystemsHarvest from "./case-studies/DesignSystemsHarvest";
import DesignSystemsPanduit from "./case-studies/DesignSystemsPanduit";
import DesignAllstate from "./case-studies/DesignAllstate";
import DesignHarvest from "./case-studies/DesignHarvest";
import DesignPanduit from "./case-studies/DesignPanduit";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/design-systems/allstate"
            element={<DesignSystemsAllstate />}
          />
          <Route
            path="/design-systems/harvest"
            element={<DesignSystemsHarvest />}
          />
          <Route
            path="/design-systems/panduit"
            element={<DesignSystemsPanduit />}
          />
          <Route path="/design/allstate" element={<DesignAllstate />} />
          <Route path="/design/harvest" element={<DesignHarvest />} />
          <Route path="/design/panduit" element={<DesignPanduit />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
};

export default App;
