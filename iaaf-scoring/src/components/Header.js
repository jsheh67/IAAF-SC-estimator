import {Link} from "react-router-dom";

function Header(){

    return(

        <nav id="header" className="navbar navbar-expand bg-gradient p-2">
            <Link className="navbar-brand text-light ps-3" to=""><h2>Track-Calculator</h2></Link>
                <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link className="nav-link text-light" to="">IAAF Scoring </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/estimator" >Time Estimator</Link>
                </li>
                </ul>
        </nav>
       
    )   

}
export default Header;