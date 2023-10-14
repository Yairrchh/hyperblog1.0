import { useNavigate, Navigate, useLocation } from "react-router-dom";
import React from "react";

//const adminLits = ['Dyrroth','Yairrchh','Olintoxx']

const AuthContext = React.createContext();

const adminLits = [
    {
        name: 'freddier',
        rol: 'admin'
    },
    {
        name: 'yairrchh',
        rol: 'admin'
    },
    {
        name: 'Diegox',
        rol: 'admin'
    },
    {
        name: 'juandc',
        rol: 'author'
    },
    {
        name: 'isbersuar',
        rol: 'author'
    }
]

function AuthProvider({children}) {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/profile";
    const [user, setUser] = React.useState();

    const login = ({username}) => {

        const isAdmin = adminLits.filter(admin => admin.name === username)
        const validUser = isAdmin.length > 0 ? isAdmin[0].rol : 'reader'
        console.log(validUser)

        setUser({username, validUser});
        navigate(from, {replace: true})
    }

    const logout = () => {
        setUser(null);
        navigate('/')
    }

    const auth = {
        user,
        login,
        logout,
        location
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

const AuthRoute = (props) => {
    const auth = useAuth();

    if(!auth.user) {
        return <Navigate to="/login" state={{ from: auth.location}} replace/>
    }
    return props.children;
}

export {
    AuthProvider,
    useAuth,
    AuthRoute,
}