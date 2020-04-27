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
        background: "#387780",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: ".5rem auto",
        width: theme.spacing(20),
        height: theme.spacing(20)

    },
    listItem: {
        color: "#FFEC22",
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
        listText: "Contact"

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
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>

        </Box>
    )
    return (
        <>


            <Box component="nav">
                <AppBar position="static" style={{ background: "#ff65b8",width:"100vw" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <Menu style={{ color: "#FFEC22" }} />
                        </IconButton>
                        <MobilRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose = {toggleSlider("right",false)}
                        >
                            {sideList("right")}
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;
