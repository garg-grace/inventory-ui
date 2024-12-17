import { useEffect } from "react";
import { useNavigate } from "react-router";

function Logout(){
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.setItem('isLoggedIn','false');
        navigate('/');
    },[])

    return(
        <div></div>
    )
}

export default Logout;