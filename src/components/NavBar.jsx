import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
    return (
        <header className="bg-red-600  flex ">
            <div className="container mx-auto flex  justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        className="inflex-flex items-center py-7 px-3 mr-6 text-red-100 hover:text-blue-200 text-6xl font-bold cursive "
                    >
                        Bmalkes
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-300"
                    >
                        Blog Post
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-300"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-300"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex items-center py-3 ">
                    <SocialIcon
                        network="facebook"
                        url="https://www.facebook.com/bmalkes"
                        className="mr-4"
                        style={{ height: 30, width: 30 }}
                        target="_blank"
                        fgColor="#fff"
                    />
                    <SocialIcon
                        network="linkedin"
                        url="https://linkedin.com/in/bmalkes"
                        className="mr-4"
                        style={{ height: 30, width: 30 }}
                        target="_blank"
                        fgColor="#fff"
                    />
                    <SocialIcon
                        network="github"
                        url="https://github.com/BmAlkes"
                        style={{ height: 30, width: 30 }}
                        target="_blank"
                        fgColor="#fff"
                    />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
