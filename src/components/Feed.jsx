import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Post from './Post'

const makestyles = makeStyles(theme => ({
    container:{
        paddingTop:theme.spacing(10)
    }
}))

const Feed = () => {
    const classes = makestyles()
  return (
    <Container className={classes.container}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </Container>
  )
}

export default Feed