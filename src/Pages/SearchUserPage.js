import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInformation } from "../userInformation";
import { useAuth } from "../auth";

const SearchUserPage = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [username, setUsername] = useState("")

    const searchUser= (event) => {

        event.preventDefault();

        if(!userInformation.some(item => item.user === username)) {
            alert("this user does not exits")
            return;
        } else{
            navigate(`/profile/${username}`)
        }
    }

    const seeMyprofile = () => {
        navigate(`/profile/${auth.user.username}`)
    }


    return (
        <>
            <p>Welcome {auth.user.username}!!</p>
            <button onClick={seeMyprofile}>See my profile</button>
            <h2>Search user</h2>
            <form onSubmit={searchUser}>
                <label htmlFor="username">search a profile</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <button type="submit">look for</button>
            </form>
        </>
    )

}

export {SearchUserPage};