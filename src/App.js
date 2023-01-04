
import {BrowserRouter ,RouterProvider ,createRoutesFromElements,createBrowserRouter, Route, Routes} from 'react-router-dom';
import {AllPosts} from "./pages/AllPosts";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {action as postAction, loader as postLoader, Post} from "./pages/Post";
import {Blog} from "./pages/Blog";
import {getAllPosts} from "./api/postsApi";
import {ErrorPage} from "./pages/ErrorPage";

const routerPath = createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/allposts',element:<AllPosts/>},
    {path:'/post/:id',element:<Post/>},
])
const router = createBrowserRouter(createRoutesFromElements([
        <Route path="/" element={<Home/>}/>,
        <Route path="/about" element={<About/>}/>,
        <Route path="/allposts" element={<AllPosts/>} loader={getAllPosts}/>,
        <Route path="/post/:id" element={<Post/>} loader={postLoader} errorElement={<ErrorPage/>} action={postAction}/>,
]))

function App() {
  return (
    <>
    {/*<BrowserRouter>*/}
    {/*    <Routes>*/}
    {/*        <Route path="/" element={<Home/>}/>*/}
    {/*        <Route path="/about" element={<About/>}/>*/}
    {/*        <Route path="/allposts" element={<AllPosts/>}/>*/}
    {/*        <Route path="/post/:id" element={<Post/>}/>*/}
    {/*    </Routes>*/}
    {/*</BrowserRouter>*/}
        <RouterProvider router={router} />
    </>
  );
}

export default App;
