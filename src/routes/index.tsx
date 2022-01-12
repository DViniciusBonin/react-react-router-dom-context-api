import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import Dashboard from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import User from "../pages/User";
import { CustomRouter } from "./Route";


export function Router() {

    const context = useAuth();

    return (
        <Routes>
            <Route path='/dashboard' element={<CustomRouter component={Dashboard} isPrivate isSigned={context.signed} />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/user' element={<User />}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}