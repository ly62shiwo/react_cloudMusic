import React from "react";
import routes from "./routes/index";
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from "react-router-dom";
import './style.scss'
function App() {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
}

export default App;
