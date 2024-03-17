import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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
import Cart from "./pages/Cart";
import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
function App() {
  let location = useLocation();
  return (
      <div className="pb-4"> 
        <AnimatePresence>
        {/* Important Routes  */}
        <Routes location={location} key={location.key}>
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
          <Route path="/cart" element={<Cart></Cart>}></Route>
          
        </Routes>
        </AnimatePresence>
      </div>
  );
}



const App2 = () => {
  const [show, setShow] = useState(false);
  return(
    <div>
    <button onClick={() => setShow(prev=>!prev)}>
    {!show?"show":"hide"}
    </button>

<AnimatePresence>
{ show && <motion.div initial={{
      bottom:"-650px"
    }} animate={{
      bottom:"-200px"
    }}
    exit={{
      bottom:"-650px"
    }} className="fixed w-full mt-64 h-[600px] bg-red-500 shadow-xl rounded-2xl">

    </motion.div>}
    </AnimatePresence>
  </div>
  )
}

export {App2};
export default App;
