import { Outlet,Navigate } from "react-router-dom";
import {useAuth} from "./Authcontext"
function ProtectedRoute(){
    const {isValid}=useAuth();
    return isValid ? <Outlet/> : <Navigate to="/login"/>
}
export default ProtectedRoute