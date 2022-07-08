import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Blogs from "./pages/Blogs.js";
import FullBlog from "./pages/FullBlog.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="Blogs">
        <Route path="" element={<Blogs />} />
      </Route>
      <Route path="/FullBlogs/:title" exact element={<FullBlog />} />
    </Routes>
  </BrowserRouter>
);
