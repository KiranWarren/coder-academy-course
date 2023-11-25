// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h3>navbar</h3>
            <ul>
                <li><NavLink to='/' style={({isActive}) => isActive ? {color:"red"} : undefined}>Home</NavLink></li>
                <li><NavLink to='/about' style={({isActive}) => isActive ? {color:"red"} : undefined}>About</NavLink></li>
                <li><NavLink to='/about/contact' style={({isActive}) => isActive ? {color:"red"} : undefined}>Contact</NavLink></li>
                <li><NavLink to='/cards' style={({isActive}) => isActive ? {color:"red"} : undefined}>Business Cards</NavLink></li>
                <li><NavLink to='/pokemon' style={({isActive}) => isActive ? {color:"red"} : undefined}>Pokemon</NavLink></li>
            </ul>


            {/* <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/about/contact'>Contact</Link></li>
                <li><Link to='/cards'>Business Cards</Link></li>
                <li><Link to='/pokemon'>Pokemon</Link></li>
            </ul> */}
        </nav>
    )
}