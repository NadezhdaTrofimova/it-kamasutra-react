import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post/Post";


const MyPosts = (props) => {

    let postsElements =
        props.postData.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

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