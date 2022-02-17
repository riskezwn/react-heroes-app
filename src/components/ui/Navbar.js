import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: types.logout,
        });
        navigate("/login", { replace: false });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <Link className="navbar-brand" to="/">
                        HeroesApp
                    </Link>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dc">
                            DC
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">
                            Search
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item nav-link text-info">{user.name}</li>
                    <li className="nav-item">
                        <button
                            className="nav-link btn"
                            to="/login"
                            onClick={handleLogout}
                        >
                            {user.logged ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
