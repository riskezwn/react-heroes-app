import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div className="mb-4">
                {/* <Navbar /> */}
                <Routes>
                    <Route path="*" element={<DashboardRoutes />} />
                    <Route path="login" element={<LoginScreen />} />
                </Routes>
            </div>
        </Router>
    );
};
