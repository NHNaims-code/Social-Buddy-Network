import React from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';

const Comment = ({comment}) => {
    const random = Math.round((Math.random() * 80) + 12);
    const randomNumber = parseInt(random);
    const url = `https://picsum.photos/150/1${randomNumber}`;
    const {email, body} = comment;
    const defaultProps = {
        bgcolor: 'lightgray',
        borderBottom: 1,
        p: 2,
      };
      
    return (
        <Box display = 'flex' flexDirection='row' borderBottom = {1} pb ={2} mb = {2} borderColor="error.main" {...defaultProps}>
            <Box mr = {2}>
                <Avatar src={url} ></Avatar>
            </Box>
            <Box>
                <Box fontWeight="fontWeightLight" fontSize={14} color="white">
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