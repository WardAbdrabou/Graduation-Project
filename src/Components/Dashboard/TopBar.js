import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "../../Context/MenuContext";
import { useContext } from "react";
import { Link} from "react-router-dom";

export default function TopBar(){
    const menu = useContext(Menu)
    const setIsOpen = menu.setIsOpen;
    // console.log(setIsOpen)


    return (
        <div className="top-bar shadow mb-3">
            <div className=" d-flex align-items-center justify-content-between ">
            <div className="d-flex align-items-center gap-5 p-3 ">
            <h3 className="mr-5">Dashboard</h3>
            <FontAwesomeIcon 
            onClick={() => setIsOpen((prev) => !prev)}
            cursor={"pointer"} icon={faBars} />
            </div>
            <Link to="/" className="btngo"> Go TO Website</Link>

        </div>

        </div>
        
    );
}