import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App, { App2 } from "./App.jsx";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./redux/rootReducer.js";
import {AnimatePresence, motion} from "framer-motion";

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        {/* <App /> */}
       <App2></App2>
    </Provider>
      </QueryClientProvider>
  </React.StrictMode>
);

