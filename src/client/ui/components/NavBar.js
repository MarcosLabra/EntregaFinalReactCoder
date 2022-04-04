import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav">
            <NavLink to="/category/nostril" activeClassName="active">nostril</NavLink>
            <NavLink to="/category/argollitas" activeClassName="active"> argollitas</NavLink>
            <NavLink to="/category/dermal" activeClassName="active">dermal</NavLink>
            <NavLink to="/category/industrial" activeClassName="active">industrial</NavLink>
            <NavLink to="/category/nipple" activeClassName="active">nipple</NavLink>
            <NavLink to="/category/ombligo" activeClassName="active">ombligo</NavLink>
            <NavLink to="/category/labret" activeClassName="active">labret</NavLink>
        </nav>
    )
}

export default NavBar