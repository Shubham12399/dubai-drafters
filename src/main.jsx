import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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


const App2 = () => {
  const [show, setShow] = useState(false);
  return(
    <div>
    <button onClick={() => setShow(prev=>!prev)}>
    {show?"show":"hide"}
    </button>

<AnimatePresence>
{ show &&  <motion.div initial={{
      bottom:"-650px"
    }} animate={{
      bottom:0
    }}
    exit={{
      bottom:"-650px"
    }} className="fixed h-[600px] bg-white shadow-xl rounded-2xl">

    </motion.div>}
    </AnimatePresence>
  </div>
  )
}