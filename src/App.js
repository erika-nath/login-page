import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {LOGIN, LOGOUT, PRIVATE } from "./routes/paths";
import { Login } from "./views/Login";
import { Logout } from "./views/Logout";
import { Private } from "./views/Private";
import { Home } from "./views/Home";
import  AuthContextProvider from "./contexts/authContext";
import {PublicRoute} from "./routes/PublicRoute"
import {PrivateRoute} from "./routes/PrivateRoute"

const App = () => {
  return (
    <AuthContextProvider>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
          <Route index element={<Private />} />
          <Route path={LOGOUT} element={<Logout />} />
          </Route>
        </Routes>
    </AuthContextProvider>
   );
}

export {App};
