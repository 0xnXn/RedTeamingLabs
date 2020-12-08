import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import redlab from '../../images/red.jpg';
import server from '../../server';
// import { ResumeKali, StopKali,Startkali,PauseKali } from './Vbox';
import NotificationsPage from "views/Notifications/Notifications.js";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    width: 300

  },
});

function handleInfra(method) {
  console.log(server);
  if (method == 'start') {
    // fetch(`${server}/users/vpn`,
    //   {
    //     method: "GET",
    //     mode: "cors",
    //     credentials: "include",
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8",
    //       'Access-Control-Allow-Origin': '*'
    //     },
    //   }
    // ).then(response => response.json())
    // .then(data=>{

    // })
    const vpnFile = `${server}/vpn`;
    window.open(vpnFile);
  }
  fetch(`${server}/users/${method}`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        id: 1,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(`${method}...`);
    })
}

export default function ImgMediaCard1() {
  const classes = useStyles();
  // const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = place => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };


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
            Infrastructure 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The lab is tightly integrated with the course and is designed as a practice lab rather than a challenge lab. We cover topics like AD enumeration, trusts mapping, domain privilege escalation, domain persistence, Kerberos based attacks (Golden ticket, Silver ticket and more), ACL issues, SQL server trusts, Defenses and bypasses of defenses.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: "inline", }}>
        <Button size="small" color="primary" onClick={() => { handleInfra('start'); showNotification("tl") }}>
          Request
        </Button>
        <Button size="small" color="primary" onClick={() => handleInfra('resume')} >
          Resume
        </Button>
        <Button size="small" color="primary" onClick={() => handleInfra('pause')} >
          Pause
        </Button>
        <Button size="small" color="primary" onClick={() => handleInfra('stop')} >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
