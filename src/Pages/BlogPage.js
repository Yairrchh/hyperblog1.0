import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "../blogdata";
import { useAuth } from "../auth";
import { usePosts } from "../Context";
import { CreatePost } from "./CreatePost";


const BlogPage = () => {

    const auth = useAuth();
    const posts = usePosts();

    const onDeletePost = (auth.user?.validUser === 'admin' || auth.user?.validUser === 'author');

    const createNewPost = auth.user.validUser === 'author';
    const open = posts.openModal === true;

    return (
        <>
            <h1>Blog</h1>

            <Outlet/>

            <ul>
            {posts.posts.map(post => (
                <BlockLink post={post} key={post.slug} onDeletePost={onDeletePost} deletePost={posts.deletePost}/>
            ))}
            </ul>
            {
                createNewPost && (
                    <button onClick={() => posts.open()}>Create Post</button>
                )
            }
            {
                open && (
                    <CreatePost/>
                )
            }
        </>
    )
}
const BlockLink = ({post, deletePost, onDeletePost }) => {



    return (
        <li >
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            {/* {
                onDeletePost && (
                    <button onClick={() => deletePost(post.slug)}>Delete</button>
                )
            } */}
        </li>
    )
}

console.log(blogdata)


export {BlogPage}