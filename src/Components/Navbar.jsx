import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Button,  Toolbar, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Style'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const classes = useStyles()
    return (
        <div >
            <AppBar className={classes.root}>
                <Toolbar className={classes.tool_flex}>
                    <Link className={classes.Text_style} to="/"> <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton></Link>
                    <Typography variant="h4" component="h2">
                        Todo App
                    </Typography>
                    <Link className={classes.Text_style} to="/completed"><Button variant="contained" color="secondary">Completed</Button></Link>
                </Toolbar>
       </AppBar>
        </div>
    )
}

export default Navbar
