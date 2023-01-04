import axios from "axios";

export const getAllPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}

export const getSinglePost = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
}
//insert data to server
export const insertPostData = async (id ,body) => {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}` ,{
        body
    });
    return response.data;
}
