import Navbar from "components/Navbar";
import Search from "pages/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;