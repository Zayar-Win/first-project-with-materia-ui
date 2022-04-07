import { Avatar, Container, ImageList, ImageListItem, makeStyles, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import React from 'react'

const makestyles = makeStyles(theme => ({
    container:{
        paddingTop:theme.spacing(10),
        position:'sticky',
        top:0
    },
    title:{
      fontSize:18,
      fontWeight:500,
      color:'#555'
    }
}))

const Right = () => {
    const classes = makestyles()
  return (
    <Container className={classes.container}>
        <Typography className={classes.title}>Friends</Typography>
        <AvatarGroup max={4} style={{ marginBottom:'20px' }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
        </AvatarGroup>

        <Typography className={classes.title}>Gallary</Typography>
        <ImageList cols={2} rowHeight={100}>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem  >
          <img
            src="https://material-ui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/hats.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/vegetables.jpg"
            alt=""
          />
        </ImageListItem>
        </ImageList>
    </Container>
  )
}

export default Right