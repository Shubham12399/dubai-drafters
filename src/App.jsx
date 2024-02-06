import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css"
function App() {
  return (
    <Router>
      <div>

        {/* Important Routes  */}

        <Routes>
          {/* home "/" route  */}
          <Route path="/" element={<HomePage />}></Route>
        </Routes>



      
      </div>
    </Router>
  );
}

export default App;
