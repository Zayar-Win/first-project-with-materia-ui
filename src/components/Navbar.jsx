import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import {  Close, Mail, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'

const makestyles = makeStyles(theme => ({
    toolbar:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    search:{
        display:'flex',
        alignItems:'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius:theme.shape.borderRadius,
        width:'50%',
        padding:2,
        [theme.breakpoints.down('sm')] : {
            display : (props) => props.open ? 'flex' : 'none',
            width:'70%',
        },
        
        
    },
    searchIcon:{
        margin:"0 5px"
    },
    icons:{
        display: 'flex',
        alignItems:'center',
        gap:theme.spacing(3),
        [theme.breakpoints.down('sm')] : { 
            display: (props) => props.open ? 'none' : 'flex'
        }
    },
    searchButton:{
        display: 'none',
        [theme.breakpoints.down('sm')] : {
            display:'block'
        }
    },
    closeIcon : {
        display:'none',
        [theme.breakpoints.down('sm')] : {
            display:'block'
        }
    }
}))

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const classes = makestyles({open})

  return (
    <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
            <Typography varient="h5">ZayMedia</Typography>
            <div className={classes.search}>
                <Search className={classes.searchIcon} />
                <InputBase placeholder='search...' />
                <Close onClick={() => setOpen(false)} className={classes.closeIcon} />
            </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                <Badge badgeContent={4} color="secondary" >
                    <Mail />
                </Badge>
                <Badge badgeContent={4} color='secondary'>
                    <Notifications />
                </Badge>
                <Avatar />
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar