import { data } from "autoprefixer";
import { useState,useEffect } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";



const Blogs = ({handleAddToBookmark}) => {
    const [blogs,setBlogs] = useState([]);

    
     useEffect(() => {
        fetch('cardsInfo.json')
         .then(res => res.json())
         .then(data => setBlogs(data));
     },[])

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 pb-20">
            {
              blogs.map(blog => <Blog
                key={blog.id} 
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark:PropTypes.func
}

export default Blogs;