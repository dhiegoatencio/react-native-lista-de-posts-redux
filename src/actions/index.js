import axios from 'axios';

//const REQUEST_URL = 'https://jsonplaceholder.typicode.com';
//const REQUEST_URL = 'http://localhost:3000';
const REQUEST_URL = 'https://restful-api-posts.herokuapp.com';

// actions creators
export const fetchPosts = () => {
    // fazer pedido http para obter todos os posts
    const request = axios.get(`${REQUEST_URL}/posts`);

    return {
        type: 'FETCH_POSTS',
        payload: request // redux promise
    };
};

export const fetchPost = id => {
    const request = axios.get(`${REQUEST_URL}/posts/${id}`);
    return {
        type: 'FETCH_POST',
        payload: request //redux promise
    };
};

export const changePostTitle = (title) => {
    return {
        type: 'CHANGE_POST_TITLE',
        title
    };
};

export const changePostBody = body => {
    return {
        type: 'CHANGE_POST_BODY',
        body
    };
};

export const createPost = (post) => {
    const request = axios.post(`${REQUEST_URL}/posts`, post);
    return {
        type: 'CREATE_POST',
        payload: request
    };
};

export const resetPostForm = () => ({
    type: 'RESET_POST_FORM'
});