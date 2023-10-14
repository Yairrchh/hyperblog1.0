import React from "react";
import { useAuth } from "../auth";
import { AuthRoute } from "../auth";

const ProfilePage = () => {
    const auth = useAuth();

    return (
        <AuthRoute>
            <h1>Profile</h1>
            <p>
                Welcome {auth.user.username}!!
            </p>
        </AuthRoute>
    )
}

export {ProfilePage}