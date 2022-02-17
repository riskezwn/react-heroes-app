import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div className="mb-4">
                <Routes>
                    <Route
                        path="*"
                        element={
                            <PrivateRoute isAuthenticated={user.logged}>
                                <DashboardRoutes />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="login"
                        element={
                            <PublicRoute isAuthenticated={user.logged}>
                                <LoginScreen />
                            </PublicRoute>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};
