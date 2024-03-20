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
import AllHotels from "./pages/Hotel/AllHotels";
// we need to map the `scale` prop we define below

function App() {
  let location = useLocation();
  return (
      <div className="pb-4"> 
        <AnimatePresence mode="popLayout" initial={false}>
        {/* Important Routes  */}
        <Routes location={location} key={location.key}>
        {/* <PageTransition timeout={500}> */}
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
          <Route path="/hotels" element={<AllHotels></AllHotels>}></Route>
          {/* </PageTransition> */}
        </Routes>
        </AnimatePresence>
      </div>
  );
}



const App2 = () => {
  return (
    <>
     {/* <Route
  render={({ location }) => (
    <PageTransition timeout={500}>
      <Switch location={location}>
        <Route exact path="/" component={List} />
        <Route path="/list" component={List}/>
        <Route path="/item" component={Item} />
      </Switch>
    </PageTransition>
  )}
/> */}
    </>
  )
}

export {App2};
export default App;
