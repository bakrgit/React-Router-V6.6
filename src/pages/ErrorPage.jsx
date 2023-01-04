import {useRouteError} from "react-router";

export const ErrorPage = () => {
   const error = useRouteError();
    return (
        <>
            {
                error.response.status === 404 ? <h1>404</h1> : <h1>500</h1>
            }
        <div>error happen </div>
        </>
    );
}