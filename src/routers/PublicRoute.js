import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({ children, isAuthenticated }) => {
    return (!isAuthenticated) ? children : <Navigate to="/" />;
};

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired
};