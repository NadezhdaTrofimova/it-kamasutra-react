import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post/Post";


let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 23},
    {id: 2, message: "It's my first post", likesCount: 12},
    {id: 3, message: "BlaBlaBla", likesCount: 0},
    {id: 4, message: "Nothing", likesCount: 12},
]

let postsElements = postData
    .map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts