import React from "react";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserDetails from "./Components/UserDetails/UserDetails";
import HomeThree from "./Pages/UsersInfo/UsersInfo";
import RestaurantTags from "./Components/RestaurantTags/RestaurantTags";
import visitedDetailsTwo from "./Pages/visitedDetailsTwo";
import PageVisited from "./Pages/PageVisited/PageVisitedDetails";
import EditTags from "./Pages/EditTags/EditTags";
import FilterPage from "./Pages/FilterPage/FilterPage";
import Resturants from "./Pages/Resturants/Resturants";
import AddResturant from "./Pages/AddResturant/AddResturant";
import UserPage from "./Pages/UserPage";
import UsersInfo from "./Pages/UsersInfo/UsersInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={AddResturant} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user/details" component={UserDetails} />
        <Route exact path="/user/information" component={UsersInfo} />
        <Route exact path="/user/page" component={UserPage} />
        <Route exact path="/tags" component={RestaurantTags} />
        <Route
          exact
          path="/visited/details/two"
          component={visitedDetailsTwo}
        />
        <Route exact path="/details" component={PageVisited} />
        <Route exact path="/edit/tags" component={EditTags} />
        <Route exact path="/filter/page" component={FilterPage} />
        <Route path="/restaurant" component={Resturants} />
      </BrowserRouter>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>

//         <Switch>
//
//           <Route exact path = '/login' component={Login} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }
