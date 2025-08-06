import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


const Blogs = () => {
    //consume
    const {posts,loading} = useContext(AppContext);
    console.log("printing the posts...");
    console.log(posts);

  return (
    <div className="w-11/12 h-full max-w-[670px] flex flex-col gap-y-7 py-3 mx-auto my-[6rem] items-center justify-center text-black dark:text-white ">
      {
        loading ? (<Spinner/>):(
           posts.length === 0 ? 
           (
            <div className="text-center text-3xl font-semibold">
                <p>No Post Found</p>
             </div>   
           ):
           (posts.map( (post) => (
             <BlogDetails key={post.id} post={post}/>
           )))
        )
      }

    </div>
  );
}

export default Blogs;