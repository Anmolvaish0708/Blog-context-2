import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router';
import { baseUrl } from '../baseUrl';
import Header from '../Components/Header';
import { AppContext } from '../context/AppContext';
import BlogDetails from '../Components/BlogDetails';

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/"

  const [blog,setBlog] = useState(null);
  const [relatedblogs,setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const {setLoading,loading} = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log("printing the blog id data")
      console.log(data);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
       console.log("Error while fetching...");
       setBlog(null);
       setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname]);

  return (
    <div>
      <Header/>

      <div>
        <button onClick={()=>navigate(-1)}>
          back
        </button>
      </div>

      {
        loading? <p>Loading</p>:
        blog?(
          <div className="w-11/12 h-full max-w-[670px] flex flex-col gap-y-7 py-3 mx-auto my-[6rem] items-center justify-center text-black dark:text-white ">
             <BlogDetails post={blog}/>
             <h2 className='text-3xl font-semibold text-black mt-5 pt-4'>Related Blogs</h2>

             {
              relatedblogs.map( (post) => (
                <div  key={post.id}>
                  <BlogDetails post={post}/>
                </div>
              ))
             }
          </div>
        ): ( 
          <div>
            <p>No Blog Found</p>
          </div>
        )
      }

    </div>
  )
}

export default BlogPage