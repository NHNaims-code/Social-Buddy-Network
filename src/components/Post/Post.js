import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, CardHeader, Avatar, Badge, withStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from 'react-router-dom';
import { ImgUrlContext } from '../../App'



const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
    },
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
    },
    media: {
        height: 190,
    },
}));




// ==================================================
// Style Badge Start Here
// ==================================================
const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

// ==================================================
// Style Badge End Here
// ==================================================





const Post = ({post}) => {
    const {id, title, body} = post;
    const [url, setUrl, postTime, setPostTime] = useContext(ImgUrlContext);
    
    const history = useHistory()
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        },4000)
    },[])

    const firstLetter = (title.slice(0, 1)).toUpperCase();
    const classes = useStyles();
    // RANDOM INFO MAKING START 
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const currentDay = d.getDate();
    const currentMonth = monthNames[d.getMonth()]
    const currentYear = d.getFullYear();
    const randomMinute = Math.floor((Math.random() * 59) + 1)
    const random = Math.round((Math.random() * 65) + 31);
    const randomNumber = parseInt(random);
    // RANDOM INFO MAKING END HERE

    const imgUrl = `https://picsum.photos/500/5${randomNumber}`;
    const handleReadMore = () => {
        history.push(`/post/${id}`);
        setUrl(imgUrl);
        setPostTime([currentDay, currentMonth, currentYear, randomMinute, firstLetter]);
    }

    return (
        <Box display = "flex" justifyContent = "center" mb = {3} bgColor = "primary.main" onClick={handleReadMore}>
            <Card className={classes.root}>
                <CardActionArea>
                <CardHeader
            avatar={
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    {firstLetter}
                    </Avatar>
                </StyledBadge>
                
            }
           
            title={
                loading ? (<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />):title
            }
            subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : `${currentMonth} ${currentDay}, ${currentYear}    -   ${randomMinute} minutes ago    `}
            />
                {loading ? (
                        <Skeleton animation="wave" variant="rect" className={classes.media} height ={500}/>
                    ) : (
                        <CardMedia 
                        component="img"
                        alt={title}
                        height="528"
                        image={imgUrl}
                        title={title}
                        />
                    )}
              
                   
                    
                    <CardContent>
                    <Box>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {
                                loading?(
                                    <React.Fragment>
                                      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                      <Skeleton animation="wave" height={10} width="80%" />
                                    </React.Fragment>
                                  ) : body
                            }
        
                        </Typography>
                    </Box>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Button size="small" color="primary">
                            <a href="mailto:mdnimurhasann@gamil.com">Share</a>
                        </Button>
                        <Button size="small" color="primary" onClick={handleReadMore}>
                            VIEW DETAIL
                        </Button>
                    </Box>
                </CardActions>
                </Card>
        </Box>
    );
};

export default Post;