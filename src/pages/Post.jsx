import {getSinglePost, insertPostData} from "../api/postsApi";
import {useActionData, useLoaderData} from "react-router-dom";

export const Post = () => {
  const post = useLoaderData();
  const actionData=useActionData();
    return (
        <>one post
            {
                <div>
                    <h2>{post.id}</h2>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            }
        </>
    );
}


//loader to read data from the server
export function loader ({ params }) {
    return getSinglePost(params.id)
}

//action to write data to the server
export function action({ params ,request }) {
    return insertPostData(params.id ,request.body)
}