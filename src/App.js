import React, { useRef, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import { useSelector } from "react-redux";

function App() {
  const info = useSelector((state) => state.weather.info);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  function scrollToPage1() {
    window.scrollTo(0, 350);
  }
  function scrollToPage2() {
    window.scrollTo(0, 1320);
  }
  function scrollToPage3() {
    window.scrollTo(0, 2320);
  }

  useEffect(() => {
    !info && scrollToTop();
    !info && setTimeout(scrollToPage1, 3000);
    info && scrollToPage2();
    info && setTimeout(scrollToPage3, 20000);
  });

  return (
    <div className="App">
      <Header />
      <Page1 />
      {info && <Page2 />}
      {info && <Page3 />}
      <Footer />
    </div>
  );
}

export default App;
