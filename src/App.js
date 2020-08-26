import React from "react";
import routes from "./routes/index";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import store from './store'
import "./style.scss";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
}

export default App;
