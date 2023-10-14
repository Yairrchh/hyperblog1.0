import React from "react";
import { useAuth } from "../auth";



const LogoutPage = () => {
    const auth = useAuth();

    const logout = (event) => {
        event.preventDefault();
        auth.logout()
        console.log('logout')
    }

    return (
        <>
        <h1>LogoutPage</h1>

        <form onSubmit={logout}>
            <label>do you want to hang out?</label>

            <button type="submit">Logout</button>
        </form>
        </>
    )
}

export {LogoutPage};