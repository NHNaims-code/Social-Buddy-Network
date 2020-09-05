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

   
    // const [img, setImg] = useState([]);
    // const serverImg = () => {
    //     fetch('https://picsum.photos/200')
    //     .then(res => res)
    //     .then(data => setImg(data))
    // }
    // useEffect(serverImg,[30])
    // console.log(img.url);
    // console.log(posts);
    return (
        <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>

            gfgdgg
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </Box>
    );
};

export default Home;