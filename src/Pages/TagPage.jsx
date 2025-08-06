import React from 'react'
import { useLocation,useNavigate} from 'react-router'
import Header from '../Components/Header'
import Pagination from '../Components/Pagination';
import Blogs from '../Components/Blogs';


const TagPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
       <Header/>
       <div className="w-11/12 max-w-[670px] pr-0 mt-20 pt-[80px] px-4 flex items-center gap-x-3  mb-[-80px] ">
         <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition" onClick={ ()=> navigate(-1)}>
           back
         </button>

         <h2 className="text-2xl font-semibold">
          Blogs Tagged <span className="capitalize text-blue-600 dark:text-blue-400">#{tag}</span>
         </h2>

       </div>

       <Blogs/>
         <Pagination/>
    </div>
  )
}

export default TagPage