import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Logs from "./Auth/Logs";
import Layout from "./Layout/Layout";
import Dashboard from "./Layout/Pages/Dashboard";
import Orders from "./Layout/Pages/Orders";
import Menu from "./Layout/Pages/Menu";
import Settings from "./Layout/Pages/Settings";
import Logout from "./Layout/Pages/Logout";
import Otp from "./Auth/Otp";
import Forgot from "./Auth/Forget";
import Reset from "./Auth/Reset";
import Signup from "./Auth/Signup";
import ProtectedRoute from "./Layout/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<Logs />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forget" element={<Forgot />} />
      <Route path="otp" element={<Otp />} />
      <Route path="reset" element={<Reset />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="menus" element={<Menu />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
