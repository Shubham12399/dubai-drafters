import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import Tours from "./pages/Tours";
import AllTours from "./pages/AllTours";
import SearchedItem from "./pages/SearchedItem";
import Search from "./components/common/Search";
import Category from "./pages/Category";
import TourDetails from "./components/common/TourDetails";
import CityTours from "./components/common/CityTours";
import BookingProcess from "./pages/BookTour/BookingProcess";
function App() {
  return (
    <Router>
      <div>
        {/* Important Routes  */}
        <Routes>
          {/* home "/" route  */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/tours" element={<Tours />}>
            <Route path="/tours" element={<Tours />}/>
          </Route>
          <Route path="/all-tours" element={<AllTours />}></Route>
          <Route path="/searched" element={<SearchedItem />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/tour/:id" element={<TourDetails />}></Route>
          <Route path="/category/:categoryName" element={<Category />}></Route>
          <Route path="/city/:cityId" element={<CityTours />}></Route>
          <Route path="/booking" element={<BookingProcess></BookingProcess>}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
