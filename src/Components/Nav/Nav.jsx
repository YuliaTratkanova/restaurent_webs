import React, { useRef } from "react";
import navCSS from './../Nav/Nav.module.css'

function Nav() {

    const menu = useRef();

    const MenuHandler = () => {
        menu.current.classList.toggle(navCSS.showMenu);
    }

    return (
        <div className={navCSS.navbar}>
            <div className={navCSS.logo}>
                <a href="#">Swigo</a>
            </div>

            <ul ref={menu}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Special Menu</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className={navCSS.navBtns}>
                    <i className="ri-user-line"></i>
                    <i className="ri-shopping-bag-line"></i>
                </div>

                <i className="ri-menu-2-line" id={navCSS.bars} onClick={MenuHandler}></i>
        </div>
    )
}

export default Nav