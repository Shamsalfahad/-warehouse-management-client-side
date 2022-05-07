import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";
import Registration from "./Components/Registration/Registration";
import RequireAuth from "./Components/Auth/RequireAuth";
import ManageInventories from "./Components/Inventory/ManageInventories";
import AddItems from "./Components/Inventory/AddItems";
import Blogs from "./Components/Blog/Blogs";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/inventory/:itemsId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/manageInventory"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route path="/addItems" element={<AddItems></AddItems>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
