import { Container, makeStyles, Typography } from '@material-ui/core'
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";
import React from 'react'

const makestyles = makeStyles(theme => ({
    container:{
        paddingTop:theme.spacing(10),
        backgroundColor: "white",
        color: "#555",
        position: 'sticky',
        top:'0',
        border: "1px solid #ece7e7",
        height:'100vh',
        [theme.breakpoints.down('sm')] :{
          backgroundColor: theme.palette.primary.main,
          color:'white'
        }
    },
    item:{
      display: 'flex',
      marginBottom:theme.spacing(3),
      alignItems:'center',
    },
    icon:{
      marginRight:theme.spacing(1),
      fontSize:18
    },
    text:{
      fontWeight:500,
      [theme.breakpoints.down('sm')]:{
        display:'none',
      }
    }
}))

const LeftSidebar = () => {

    const classes = makestyles()
  return (
    <Container className={classes.container}>
        <div className={classes.item}>
          <Home  className={classes.icon}/>
          <Typography className={classes.text}>HomePage</Typography>
        </div>
        <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  )
}

export default LeftSidebar