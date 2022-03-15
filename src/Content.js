import { useState, useEffect } from 'react';
import React from 'react'
import BlogsList from './BlogsList';
import useFetch from './useFetch';


const Content = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className='items'>
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogsList blogs={blogs} title="My Blogs" />}
        </div>
    );
}

export default Content;