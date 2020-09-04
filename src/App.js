import React, {  } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/Layout/Nav";
import { Secondnav } from "./components/Layout/Secondnav";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import { GlobalProvider } from "./components/context/Globalstate";
import { Logout } from "./components/User/Logout";
import { ParkingLots } from "./components/Parking/ParkingLots";
import { Profile } from "./components/User/Profile";
import { Booking } from "./components/Parking/Booking";
import { Unbook } from "./components/Parking/Unbook";
import { Pay } from "./components/Parking/Pay";
import { Alert } from "./components/Layout/Alert";
import { Footer } from "./components/Layout/Footer";
function App() {
  return (
    <GlobalProvider>
      <>
        <div className="App">
          <Router>
            <Nav />
            <Secondnav />
            <Alert/>
            <Footer/>
            <Switch>
              <Route path="/" exact component={ParkingLots} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/logout" component={Logout} />
              <Route path="/profile" component={Profile} />
              <Route path="/book" component={Booking} />
              <Route path="/unbook" component={Unbook} />
              <Route path="/pay" component={Pay} />
            </Switch>
          </Router>
        </div>
      </>
    </GlobalProvider>
  );
}

export default App;
