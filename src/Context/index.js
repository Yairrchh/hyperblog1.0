import React, { useContext, useState } from "react";
import { blogdata } from "../blogdata";

const PostContext = React.createContext();

const PostProvider = ({children}) => {

    const [posts, setPost] = useState(blogdata)
    const [openModal, setOpenModal] = useState(false)

    const createPost = (data) => {
        const newPost = [...posts];

        newPost.push(data)
        console.log(newPost)
        setPost(newPost);
    }

    const deletePost = (slug) => {
        setPost(posts.filter(item => item.slug !== slug))
        console.log(slug)
        console.log(posts)
    }

    const open = () => {
        setOpenModal(!openModal)
    }

    return (
        <PostContext.Provider value={{
            posts,
            createPost,
            deletePost,
            openModal,
            setOpenModal,
            open,
        }}>
            {children}
        </PostContext.Provider>
    )
}


    const usePosts = () => {
        const posts = useContext(PostContext)
        return posts;
    }

    export {PostProvider, usePosts};

