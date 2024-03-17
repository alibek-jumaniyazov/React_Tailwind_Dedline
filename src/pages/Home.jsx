import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import FooterAnimation from "../components/footer/FooterAnimation";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="p-6">
        <Main />
      </div>
      <FooterAnimation/>
      <Footer />
    </div>
  );
}
