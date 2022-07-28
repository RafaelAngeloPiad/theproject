import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Headlines from "./pages/Headlines.js";
import Everything from "./pages/Everything.js";
import About from "./pages/About.js";
//import FullBlog from "./pages/FullBlog.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" exact element={<Headlines />} />
      <Route path="/Headlines" exact element={<Headlines />} />
      <Route path="/Everything" exact element={<Everything />} />
      <Route path="/About" exact element={<About />} />
      {/* <Route path="/FullBlogs/:title" exact element={<FullBlog />} /> */}
    </Routes>
  </BrowserRouter>
);
