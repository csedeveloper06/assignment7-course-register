import { data } from "autoprefixer";
import { useState,useEffect } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";



const Blogs = ({handleAddToBookmark,handleAddToCredits}) => {
    const [blogs,setBlogs] = useState([]);

    
     useEffect(() => {
        fetch('cardsInfo.json')
         .then(res => res.json())
         .then(data => setBlogs(data));
     },[])

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 pb-20">
            {
              blogs.map((blog,time) => <Blog
                key={blog.id} 
                blog={blog}
                time = {time}
                handleAddToBookmark={handleAddToBookmark}
                handleAddToCredits = {handleAddToCredits}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark:PropTypes.func,
    handleAddToCredits:PropTypes.func
}

export default Blogs;