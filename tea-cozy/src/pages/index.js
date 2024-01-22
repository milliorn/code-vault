import React from "react";
import { Footer } from "../components/footer/Footer";
import { Head } from "../components/Head";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/nav/Navbar";
import "../styles/global.css";

export default function index() {
  return (
    <div className="bg-neutral-900">
      <div className="m-auto overflow-x-hidden font-sans text-xl text-center text-gray-400 capitalize opacity-90 2xl:container">
        <Head />
        <Navbar />
        <Layout />
        <Footer />
      </div>
    </div>);
}
