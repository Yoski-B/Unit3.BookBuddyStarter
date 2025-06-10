/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link, Route, Routes, useLocation } from "react-router-dom"
import Books from "./Books"
import Login from "./Login"
import Register from "./Register"


const NavBar = () =>{

  const location = useLocation()
  const {pathname} = location

  return(
     <div>
       <nav>
          <Link to="/books" className={pathname === "/" ? "selected" : ""}>Books</Link>
          <Link to='/books/register' className={pathname === "/books/register" ? "selected" : ""}>Register</Link>
          <Link to="/books/account" className={pathname === "/books/account" ? "selected" : ""}>Account</Link>
       </nav>
     </div>
  )
 }
 
 export default NavBar
