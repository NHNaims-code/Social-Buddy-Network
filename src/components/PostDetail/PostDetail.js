import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ImgUrlContext } from '../../App';
import { Box, Button } from '@material-ui/core';
import Comment from '../Comment/Comment';



// for card
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
// for card


// for detail info from server
const PostDetail = () => {
  const [postDetail, setPostDetail] = useState([]);
  const [comments, setComments] = useState([]);
  const [url] = useContext(ImgUrlContext);
  const {postId} = useParams();
  
  const postDetailFromServer = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(post => setPostDetail(post));
  }
  const commentsFromServer = () => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(res => res.json())
      .then(data => setComments(data))
  }

  useEffect(postDetailFromServer,[])
  useEffect(commentsFromServer,[])

  console.log(comments);
  const {title, body} = postDetail;
// for detail info from server

  //for Card
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => {
      setExpanded(!expanded);
  };
  //for Card

  return (
    <Box display = 'flex' justifyContent = 'center' bgcolor="#F0F2F5" >
        <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      className={classes.media}
      image={url}
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {body}
      </Typography>
    </CardContent>
    <CardActions disableSpacing display='flex'>
      <Box flexGrow={1}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </Box>
      <Button onClick={handleExpandClick} color='primary' >
                      Comments
      </Button>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      {/* <IconButton
        aria-label="share"
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton> */}
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        {
          comments.map(comment => <Comment comment = {comment}></Comment>)
        }
        {/* <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
          minutes.
        </Typography> */}
        
      </CardContent>
    </Collapse>
  </Card>
    </Box>
  );
};

export default PostDetail;