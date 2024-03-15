import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout"; // Import the Layout component
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const App = () => {
  // const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/search'
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
        <Route
          path='/detail/:hotelId'
          element={
            <Layout>
              <Detail />
            </Layout>
          }
        />
        <Route
          path='/register'
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path='/sign-in'
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />

        {/* 
        {isLoggedIn && (
          <>
            <Route path='/hotel/:hotelId/booking' element={<Layout><Booking /></Layout>} />
            <Route path='/add-hotel' element={<Layout><AddHotel /></Layout>} />
            <Route path='/edit-hotel/:hotelId' element={<Layout><EditHotel /></Layout>} />
            <Route path='/my-hotels' element={<Layout><MyHotels /></Layout>} />
            <Route path='/my-bookings' element={<Layout><MyBookings /></Layout>} />
          </>
        )} 
        */}

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default App;
