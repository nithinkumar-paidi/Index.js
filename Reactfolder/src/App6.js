import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
export default function App6() {
  return (
    <div>
        <BrowserRouter>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>
        <Routes>
            <Route path="/" index element={<Feeds/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
        </Routes>
      </Router>
      </BrowserRouter>
    </div>
  );
}