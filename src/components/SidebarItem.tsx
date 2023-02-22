import { useState } from "react";
import { Link } from "react-router-dom";

export default function SidebarItem(props: any) {
    // Properties
    const [sbClassName, setSbClassName] = useState('menu-item');
    // Methods
    const activeItem = (event: any) => {
        // Deactivate all sbItems
        const sbItems = document.getElementsByClassName("menu-item active");
        for (var i = 0; i < sbItems.length; i++)
            sbItems.item(i)!.className = "menu-item";
        // Active only the item who has clicked
        const clickedItem = event.currentTarget;
        clickedItem.className = "menu-item active";
    }
    // Component rendering
    return (
        <li id="sidebar-item" className="menu-item" onClick={activeItem}>
            <Link to={props.path} className="menu-link">
                <i className={"menu-icon tf-icons bx " + props.icon}></i>
                <div>{props.name}</div>
            </Link>
        </li>
    );
}