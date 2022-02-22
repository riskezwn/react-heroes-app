import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { types } from "../../types/types";
import { AuthContext } from "../../auth/AuthContext";

export const LoginScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = () => {
        const lastPath = localStorage.getItem("lastPath");
        navigate(lastPath, { replace: true });
        const action = {
            type: types.login,
            payload: {
                name: "riskezwn",
            },
        };
        dispatch(action);
    };
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
