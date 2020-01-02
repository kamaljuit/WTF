import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./Pages/Home Screen/HomeScreen.component";
import CategoryPage from "./Pages/Category/CategoryPage.component";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeScreen} />
        <Route path="/category/:id" component={CategoryPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
