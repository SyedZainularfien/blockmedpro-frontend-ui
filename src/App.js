import "./App.css";

// Files Import
import Router from "./router";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import React from 'react';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="max-w-[2560px] mx-auto overflow-x-hidden">
      <Header />
      <Router />
      <ScrollToTop />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
