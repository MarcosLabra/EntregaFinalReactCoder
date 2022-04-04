import NavBar from "../components/NavBar"
import CartWidget from "../components/CartWidget"
import { NavLink } from "react-router-dom"


const Header = () => {

  return (
    <>
    <header>
      <div>
        <NavLink to={"/"}><img src="/LOGO corinapiercer.png" alt="" /></NavLink>
        <NavLink to="/cart"><CartWidget /></NavLink>
      </div>
      <NavBar />
    </header>
    
    </>
  )
}

export default Header