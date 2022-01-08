import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import Dashboard from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import { CustomRouter } from "./Route";


export function Router() {

    const context = useContext(AuthContext);

    return (
        <Routes>
            <Route path='/dashboard' element={<CustomRouter component={Dashboard} isPrivate isSigned={context.signed} />} />
            <Route path='/login' element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}