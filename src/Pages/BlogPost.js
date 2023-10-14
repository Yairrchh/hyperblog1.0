import React from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { blogdata } from "../blogdata";
import { useAuth } from "../auth";
import { usePosts } from "../Context";

const BlogPost = () => {
    const { slug } = useParams();
    const  navigate =  useNavigate();

    const auth = useAuth();
    const posts = usePosts();

    const blogpost = posts.posts.find(post => post.slug === slug)

    const deletePost = (auth.user?.validUser === 'admin' || auth.user?.validUser === 'author')  || blogpost.author === auth.user?.username;
    const updatePost = auth.user?.validUser === 'author' || auth.user?.validUser === 'editor';

    const returnToBlock = () => {
        navigate('/blog')
    }

    const onDelete = () => {
        posts.deletePost(blogpost.slug)
    }

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlock}>Back to blog</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>

            {
                deletePost && (
                    <button onClick={() => {onDelete(); returnToBlock()} }>Delete blog post</button>
                )
            }
            {
                updatePost && (
                    <button>Update Post</button>
                )
            }
        </>
    )
}

export {BlogPost}