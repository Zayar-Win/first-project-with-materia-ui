import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const makestyles  = makeStyles(theme => ({
    img:{
        height:250,
        [theme.breakpoints.down('sm')]:{
            height:180
        }
    },
    card:{
        marginBottom:theme.spacing(5)
    },
    title:{
        fontSize:20,
        fontWeight:500,

    }
}))

const Post = () => {
    const classes = makestyles()
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.img} image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg" title="post" />
            <CardContent>
                <Typography className={classes.title}>Post Tilte</Typography>
                <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut veritatis libero laudantium inventore suscipit consectetur incidunt neque deleniti, itaque illo ut at totam nostrum sed pariatur perferendis non vitae magni nobis temporibus dolores reiciendis fuga. Neque incidunt nemo et?</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Learm More</Button>
        </CardActions>
    </Card>
  )
}

export default Post