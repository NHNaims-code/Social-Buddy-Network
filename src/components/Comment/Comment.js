import React, { useState, useEffect } from 'react';
import { Avatar, Box, Typography, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';


const Comment = ({comment}) => {


    const {email, body} = comment;
    const [loading, setLoading] = useState(true);

    const random = Math.round((Math.random() * 10) + 12);
    const randomNumber = parseInt(random);

    const url = `https://picsum.photos/100/1${randomNumber}`;
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    },[])



    return (
        <Box display = 'flex' flexDirection='row' borderLeft = {3} pl ={1} mb={3} borderColor="#F0F2F5" borderRadius = {5}  >
            <Box mr = {2} mt={1}>
                {loading?<Skeleton variant="circle" width={40} height={40} />:
                    <Avatar src={url} ></Avatar>
                }
            </Box>
            
            <Box bgcolor="#F0F2F5" p = {1} borderRadius = {16}>
                <Box fontWeight="fontWeightBold" fontSize={14} >
                    {email}
                </Box>
                <Box fontSize = {14}>
                    {body}
                </Box>
            </Box>
        </Box>
    );
};
export default Comment;