import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar">
            {/* <h1>ReactApp</h1>
            <nav>

            </nav> */}
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
        </div>
    )
}

export default Navbar