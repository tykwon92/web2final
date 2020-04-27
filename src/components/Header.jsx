import React from 'react';
import { makeStyles } from "@material-ui/styles";
import {
    Typography,
    Grid,
    Box,
    Avatar
} from "@material-ui/core";
import Typed from 'react-typed';
import zIndex from '@material-ui/core/styles/zIndex';
import avatar from './Virus.png';


const useStyles = makeStyles(theme => ({
    title: {
        color: "#387780",
        marginBottom: "3rem",
    },
    name: {
        color: "#387780"

    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    },
    avatar: {
        width: "17%",
        height: "20%",
        display: "block",
        margin: ".5rem auto",
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Typography className={classes.title} variant="h1">
                <Typed
                    strings={['#Stay Home', "#Stay Safe", '#Save Lives']}
                    typeSpeed={60}
                    backSpeed={90}
                    loop
                />
            </Typography>
            <Avatar className={classes.avatar} src={avatar} alt="COVID-19" />
            <Typography className={classes.name} variant="h2">
                COVID-19
        </Typography>

            <Typography className={classes.sub} variant="h5">
                Things You Need To Know
            </Typography>

        </Box>
    )
}

export default Header
