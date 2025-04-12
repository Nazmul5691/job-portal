import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <p><span className="loading loading-ring loading-xl"></span></p>
    }


    if(user){
        return children;
    }
    return <Navigate to='/signIn' state={location?.pathname}></Navigate>
        
};

export default PrivateRoute;