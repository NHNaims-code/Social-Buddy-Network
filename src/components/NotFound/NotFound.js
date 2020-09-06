import React from 'react';
import NotFoundImg from './notFoundImg.svg';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Box display = 'flex' flexDirection="column" justifyContent='center' alignItems='center'  mt={3}>
                <Link to={'/'}>
                <Button textAlign="center" variant="contained" color="primary">Go back home</Button>
                </Link>
                <img style={{width: '40%', margin: '0 30%'}} src={NotFoundImg} alt=""/>
            </Box>
        </div>
    );
};

export default NotFound;