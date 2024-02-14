import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { NavItemLink } from "./Navbar";

const Layout=()=>{
     
    return (
        <div className="flex-col app">
        <Navbar/>
        <Outlet/>
   
        </div>
    )
}
export default Layout