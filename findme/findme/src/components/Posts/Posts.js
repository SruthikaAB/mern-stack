import React from "react";
import Post from "./Post/Post.js";
import { useSelector } from "react-redux";
import useStyles from './Styles.js';
const Posts = (props) => {
    const posts = useSelector(state => state.postList);
    console.log(posts);
    const classes = useStyles();
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;