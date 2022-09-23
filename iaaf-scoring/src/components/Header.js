import {Link} from "react-router-dom";

function Header(){

    return(

        <nav className="navbar navbar-expand bg-dark bg-gradient p-2">
            <Link className="navbar-brand text-light ps-3" to=""><h2>Track-Calculator</h2></Link>
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link text-light text-muted" to="">IAAF Scoring </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light text-muted" to="/estimator" >Time Estimator</Link>
                </li>
                </ul>
        </nav>
       
    )   

}
export default Header;