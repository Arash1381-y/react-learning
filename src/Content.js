import { useState } from 'react';
import React from 'react'
import BlogsList from './BlogsList';


const Content = () => {
    const [blogs, setBlogs] = useState([
        { id : 1, title : 'react-workshop' , body : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque, cupiditate voluptas officia cumque assumenda quae repellat vel earum! Quod', author : 'Arash '},
        { id : 2, title : 'react-workshop' , body : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque, cupiditate voluptas officia cumque assumenda quae repellat vel earum! Quod', author : 'Arash '},
        { id : 3,  title : 'react-workshop' , body : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque, cupiditate voluptas officia cumque assumenda quae repellat vel earum! Quod', author : 'Arash '},
        { id : 4, title : 'react-workshop' , body : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque, cupiditate voluptas officia cumque assumenda quae repellat vel earum! Quod', author : 'Arash '}
    ])

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id))
    }

    return ( 
       <div className='items'>
           <BlogsList blogs={blogs} title="My Blogs" handleDelete={handleDelete} />
       </div> 
     );
}
 
export default Content;