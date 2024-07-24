import React from "react";
import headerCSS from './../Header/Header.module.css'
import headerImg from './../../assets/images/pic1-dlkK6NBf.png'


function Header(){
    return(
        <div className={`${headerCSS.HeaderWrapper}`}>
            <div className={headerCSS.HeaderContent}>
                <h4>The Best Food Stations</h4>
                <h1>Where Food <br/> Meets <span>Best Passion</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className={headerCSS.HeaderBtns}>
                    <button AfterText="Book A Table"><span>Book A Table</span></button>
                    <button AfterText="View Now"><span>View Now</span></button>
                </div>
            </div>
            <div className={headerCSS.HeaderImg}>
                <img src={headerImg} alt="header-img" id={headerCSS.HeaderIMG}/>
            </div>
        </div>
    )
}

export default Header