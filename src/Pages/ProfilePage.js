import React from "react";
import { useAuth } from "../auth";
import { AuthRoute } from "../auth";
import { userInformation } from "../userInformation";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const auth = useAuth();
    const params = useParams();
    const navigate = useNavigate();

    const validationInfo = userInformation.find(item => item.user === params.username)
    console.log(validationInfo)

    const editInformation = validationInfo?.user === auth.user.username

    const returnToBlock = () => {
        navigate('/profile')
    }

    return (
        <AuthRoute>
            <h1>Profile</h1>
            <button onClick={returnToBlock}>return</button>

            <div>
                <h2>Infomation of user</h2>
                <p>name: {validationInfo.name}</p>
                <p>age: {validationInfo.age}</p>
                <p>phoneNumber: {validationInfo.phoneNumber}</p>
                <p>country: {validationInfo.country}</p>
                <p>city: {validationInfo.city}</p>
            </div>

            {
                editInformation && (
                    <button>Edit information</button>
                )
            }
        </AuthRoute>
    )
}

export {ProfilePage}