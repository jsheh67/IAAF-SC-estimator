import {Link, link} from "react-router-dom";

function Header(){

    return(
        <div className="pt-3 title">
            <div className="row">
                <Link to="" className="col p-0">
                    <h2 className="bg-dark text-light p-3 ps-5 "> IAAF Scoring Calculator</h2>
                </Link>
                

                <Link to="/estimator" className="col p-0">
                    <h2 className="bg-primary text-dark p-3 ps-5 "> Performance Estimator</h2>
                </Link>
            </div>
        </div>
    )   

}
export default Header;