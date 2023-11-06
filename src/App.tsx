import React from "react";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import { Testimonials } from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Destinations />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
