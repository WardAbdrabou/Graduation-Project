import { NavLink } from "react-router-dom";

export default function SideBar() {
    // const menu = useContext(Menu);
    // const WindowContext = useContext(WindowSize);
    // const windowSize = WindowContext.windowSize;
    // // console.log(windowSize);
    // const isOpen = menu.isOpen;
    // console.log(isOpen);

    return (
        <>
                <div className="side-bar">
                    <NavLink to="/dashboard/posts" className="item-link">
                        <i class="fa-solid fa-brands fa-product-hunt"  ></i> Posts </NavLink>
                    <NavLink to="/dashboard/create_post" className="item-link">
                        <i class="fa-solid fa-plus"></i>New Post </NavLink>
                </div>


      </>
    );
}