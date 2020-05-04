import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import avatar from './Virus.png'

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Divider,
    List,
    Box,
    Avatar,
    Typography,
    ListItemIcon
} from '@material-ui/core';
import {
    Menu,
    ShowChart,
    Info,
    ContactMail,
    Home,
} from '@material-ui/icons'

const useStyles = makeStyles(theme=> ({
    menuSliderContainer: {
        width: 250,
        background: "#6E6E6D",
        height: "100%",
    },
    avatar: {
        display: "block",
        margin: "1rem auto",
        width: theme.spacing(15),
        height: theme.spacing(15)

    },
    listItem: {
        color: "#FAD0C9",
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listpath: "/"

    },
    {
        listIcon: <Info />,
        listText: "Be Safe",
        listPath: "/safe"


    },
    {
        listIcon: <ShowChart />,
        listText: "Graph",
        listPath: "/graph"

    },
    {
        listIcon: <ContactMail />,
        listText: "Survey",
        listPath: "/Survey"

    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    }

    const classes = useStyles()

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} 
        component="div" 
        onClick={toggleSlider(slider,false)}>
            <Avatar className={classes.avatar} src={avatar} alt="COVID-19" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem} >{lsItem.listIcon}</ListItemIcon>
                        <ListItemText  className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>

        </Box>
    )
    return (
        <>


            <Box component="nav">
                <AppBar position="static" style={{ background: "#6E6E6D",width:"100vw" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <Menu style={{ color: "#FAD0C9" }} />
                        </IconButton>
                        <Typography variant="h4" style={{color:"#FAD0C9", fontFamily: 'Anton'}}>
        Covid-19 Tracker
                        </Typography>
                        <MobilRightMenuSlider
                            anchor="left"
                            open={state.right}
                            onClose = {toggleSlider("lieft",false)}
                        >
                            {sideList("left")}
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;
