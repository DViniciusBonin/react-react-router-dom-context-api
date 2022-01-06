import { Routes , Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import SignIn from "../pages/SignIn";


export  function Router() {
    return (
        <Routes>
            <Route path='/login' element={<SignIn />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}