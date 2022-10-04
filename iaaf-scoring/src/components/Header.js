import {Link} from "react-router-dom";

function Header({darkMode, setDarkMode}){

    return(

        <nav id="header" className="navbar navbar-expand bg-gradient p-2 ">
           
                <Link className="navbar-brand text-light ps-3" to=""><h2>Track-Calculator</h2></Link>
                <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link className="nav-link text-light " to="">IAAF Scoring </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/estimator" >Time Estimator</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link text-light " to="/wind_altitude_conversion" >Wind and Altitide</Link>
                </li> */}
                </ul>
             

                <div id="darkToggle" >
                    <button id="modeToggle"className="h2" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <i class="bi bi-sun"></i> : <i className="bi bi-moon-fill"></i>}</button>   
                </div>
            
        </nav>
       
    )   

}
export default Header;