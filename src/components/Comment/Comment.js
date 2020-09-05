import React, { useState } from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';

const Comment = ({comment}) => {
    const defImg = 'https://www.unicef.org/montenegro/sites/unicef.org.montenegro/files/styles/hero_desktop/public/Nadja%20mlada%20reporterka%20UNICEFova%20volonterka.jpg?itok=vcOwP46I'
    const [defaultUrl, setDefaultUrl] = useState(defImg);
    const random = Math.round((Math.random() * 80) + 12);
    const randomNumber = parseInt(random);
    const url = `https://picsum.photos/150/1${randomNumber}`;
    fetch(url)
    .then(response => response)
    .then(data => imgUrlUpdater(data))

    const imgUrlUpdater = (data) => {
        if(data !== []){
            console.log(data)
        }
    }
    const {email, body} = comment;
    const defaultProps = {
        bgcolor: 'lightgray',
        borderBottom: 1,
        p: 2,
      };
      
    return (
        <Box display = 'flex' flexDirection='row' borderLeft = {3} pl ={1} mb={3} borderColor="gray" borderRadius = {5}  >
            <Box mr = {2} mt={1}>
                <Avatar src={defaultUrl} ></Avatar>
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