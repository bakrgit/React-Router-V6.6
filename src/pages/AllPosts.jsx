import {useEffect, useState} from "react";
import axios from "axios";
import {useLoaderData} from "react-router-dom";

export const AllPosts = () => {
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//    const getData = async () => {
//        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//        setPosts(response.data);
//    }
//    getData();
// },[])

 const posts = useLoaderData()

    return (
        <>
            all posts
            {posts.map(post => {
                return (
                    <div key={post.id}>
                       <h2>{post.title}</h2>
                       <p>{post.body}</p>
                    </div>
                )
              })
            }
        </>
    );
}