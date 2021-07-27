import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

const Routes = () => (
    <BrowserRouter>
        <Route>
            <Home />
        </Route>
    </BrowserRouter>
  );
  
  export default Routes;