import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import imgContext, { ImgUrlContext } from '../../App'

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
  });

const Post = ({post}) => {
    const random = Math.round((Math.random() * 80) + 12);
    const randomNumber = parseInt(random);
    const {id, title, body} = post;
    const imgUrl = `https://picsum.photos/500/8${randomNumber}`;

    const classes = useStyles();
    const history = useHistory()
    // const [img, setImgUrl] = useContext(imgContext);
    const [url, setUrl] = useContext(ImgUrlContext);
    const handleReadMore = () => {
        history.push(`/post/${id}`);
        setUrl(imgUrl);
    }
    console.log(url);
    return (
        <Box display = "flex" justifyContent = "center" mb = {3} bgColor = "primary.main">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={imgUrl}
                    title={title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary" onClick={handleReadMore}>
                    Learn More
                    </Button>
                </CardActions>
                </Card>
 
        </Box>
    );
};

export default Post;