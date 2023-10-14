import React, { useState } from "react";
import { useAuth } from "../auth";
import { usePosts } from "../Context";

export const CreatePost = () => {
    const {user} = useAuth();

    const posts = usePosts();


    const [post, setPost] = useState({
        title: "",
        slug: "",
        content: "",
        author: user?.username,
    });

    const handleForm = (event) => {
        event.preventDefault();
        console.log(post)
        posts.createPost(post);
        posts.setOpenModal(false)
    };

    //const closeModal = () => posts.setOpenModal(false)

    return(
        <div>
            <h3>Create a Post</h3>
            <form onSubmit={handleForm}>
                <input
                value={post.title}
                placeholder="title"
                onChange={(event) => {
                    setPost({
                        ...post,
                        title: event.target.value,
                        slug: event.target.value.toLocaleLowerCase().split(" ").join("-")
                    })
                }}
                />
                <input
                value={post.content}
                placeholder="content"
                onChange={(event) => {
                    setPost({
                        ...post,
                        content: event.target.value
                    })
                }}/>
            <button type="submit">Create</button>
            </form>
        </div>
    )
}