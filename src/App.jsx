import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import Tours from "./pages/Tours";
import AllTours from "./pages/AllTours";
import SearchedItem from "./pages/SearchedItem";

function App() {
 
  return (
    <Router>
      <div>
        {/* Important Routes  */}
        <Routes>
          {/* home "/" route  */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/tours" element={<Tours />}></Route>
          <Route path="/all-tours" element={<AllTours />}></Route>
          <Route path="/searched" element={<SearchedItem />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
