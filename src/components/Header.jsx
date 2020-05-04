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
import Particles from "react-particles-js";


const useStyles = makeStyles(theme => ({
    title: {
        color: "#ffffff",
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
    particlesCanva: {
        position: "absolute",
        transform: "translate(-50%, 0%)",
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        
        <Box className={classes.typedContainer} >
 <Particles
            canvasClassName={classes.particlesCanva}
            params ={{
                particles :{
                    number :{
                        value :300
                    },
                    color:{
                        value : "#000"
                    },
                   

                }
            }} />
            <Typography className={classes.title} style={{ color: "#FAD0C9", fontFamily: 'Grand Hotel', fontSize: '300px' }} variant="h1">
                <Typed
                    strings={['#Stay Home', "#Stay Safe", '#Save Lives']}
                    typeSpeed={60}
                    backSpeed={90}
                    loop
                />
            </Typography>

           
        </Box>
    )
}

export default Header
