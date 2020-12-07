import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';

// type MyPostsPropsType = {
//     posts: Array<{ id: number, message: string, likesCount: number }>;
//     newPostText: string;
//     dispatch: any;
// }

const MyPostsContainer = (props: any) => {
    let state = props.store.getState();

    let AddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let PostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={PostChange} addPost={AddPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;