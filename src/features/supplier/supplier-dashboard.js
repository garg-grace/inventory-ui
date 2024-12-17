import { useEffect, useState } from "react";

function SupplierDashboard(){
    const [username,setUsername] = useState('');
    const [token,setToken] = useState('');

    useEffect(()=>{
        setUsername(localStorage.getItem('username'));
        setToken(localStorage.getItem('token'));
    }

    );
    return(
        <div>
            SupplierDashboard
        </div>
    )
}

export default SupplierDashboard;