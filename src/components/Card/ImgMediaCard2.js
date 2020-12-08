import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import redlab from '../../images/red.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 1000 ,
    width :300
   
  },
});

export default function ImgMediaCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={redlab}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Infrastructure 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          OWASP TOP 10
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions  style={{ display: "inline", }}>
        <Button size="small" color="primary">
          Create
        </Button>
        <Button size="small" color="primary">
          Request
        </Button>
        <Button size="small" color="primary">
          Pause
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
