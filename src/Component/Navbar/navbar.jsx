import { useState } from "react";

const Navbar = ({ sidebar, setSidebar }) => {

    const [hover, setHover] = useState(false)
    return (
        <nav className="navbar bg-dark">
            <ul className="navbar bg-light groupItem list-unstyled d-flex">
                <li onClick={() => setSidebar(!sidebar)} style={{ cursor: "pointer" }} className="nav-link"><i class="fas fa-bars fa-lg"></i></li>
                <li className="nav-link">logo</li>
                <form action="">
                    <input type="text" />
                </form>
            </ul>

            <ul className="groupItem navbar bg-light list-unstyled d-flex">
                <li onMouseOver={() => setHover(!hover)} onMouseOut={() => setHover(!hover)} className="hoverableTitle">Category
                <div className={hover ? "hoverContent" : "d-none"} >
                        heloo
                </div>
                </li>

                <li className="nav-link">Doctors</li>
                <li className="nav-link">Medical Accesories</li>
            </ul>
            <ul className="groupItem navbar bg-light list-unstyled d-flex">
                <li className="nav-link">Help line</li>
                <li className="nav-link">sdddddddd2</li>
                <li className="nav-link">login</li>
            </ul>

        </nav>
    );
}

export default Navbar;