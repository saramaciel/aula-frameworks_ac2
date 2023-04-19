import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Home";
import Pagina from "./Pagina";

const Routers = () => {
   return(
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pagina" element={<Pagina />} />
  </Routes>
   )
}

export default Routers;
