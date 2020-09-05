import React, { useState, useEffect, useContext } from 'react';
import Post from '../Post/Post'
import { Box } from '@material-ui/core';
import { ImgUrlContext } from '../../App';


const Home = () => {



    const [posts, setPosts] = useState([]);
    const serverData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }
    useEffect(serverData , [])
    return (
        <Box bgcolor="#F0F2F5" color="secondary.contrastText" p={2}>

            gfgdgg
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </Box>
    );
};

export default Home;