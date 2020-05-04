import React from 'react';
import { Card, CardContent, Checkbox, Typography, Grid } from '@material-ui/core';
import Navbar from '../components/Navbar'

import styles from './BeSafe.module.css';

import Hands from "./img/hand.png";
import Faces from "./img/face_touch.png";
import Home from "./img/home.png";
import Mask from "./img/mask.png";
import Clean from "./img/clean.png";
import Hospital from "./img/hospital.png";

import { Face } from '@material-ui/icons';



function BeSafe() {
        

    return (
        <div className={styles.container}>
            <Navbar />
            <Grid container spacing={0} justify="center">
            
                <Grid item xs={10} md={3} component={Card} className={styles.card}>
                        <CardContent style={{background: "#FAD0C9"}}>
                            <img src={Hands} alt="hand" />
                            <Typography style={{fontFamily: "Jost"}} variant="h5" color="textSecondary" gutterBottom>
                                Wash Your Hands
              </Typography>
                            <Typography variant="body2" component="p">
                                You need to wash your hands with a soap at least 30 seconds.
              </Typography>
                        </CardContent>
                </Grid>



                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent style={{background: "#FAD0C9"}}>
                    <img src={Faces} alt="face" />
                        <Typography style={{fontFamily: "Jost"}} variant="h5" color="textSecondary" gutterBottom>
                        Don't Touch Face
              </Typography>
                        <Typography variant="body2" component="p">
                            Eyes, nose, and mouth are the most frequent ways to get infected.
              </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent style={{background: "#FAD0C9"}}>
                    <img src={Home} alt="home" />
                        <Typography style={{fontFamily: "Jost"}} variant="h5" color="textSecondary" gutterBottom>
                        Stay Home..
              </Typography>
                        <Typography variant="body2" component="p">
                            Try minimizing time spending outside and always carry a hand sanitizer.
              </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent style={{background: "#FAD0C9"}}>
                    <img src={Mask} alt="mask" />

                        <Typography style={{fontFamily: "Jost"}} variant="h5" color="textSecondary" gutterBottom>
                            Wear Masks
              </Typography>
                        <Typography variant="body2" component="p">
                        Wear a mask to protect others from discharging a virus through your mouth and nose 
              </Typography>
                    </CardContent >
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent style={{background: "#FAD0C9"}}>
                    <img src={Clean} alt="clean" />

                        <Typography style={{fontFamily: "Jost"}} variant="h5" color="textSecondary" gutterBottom>
                            Clean and Disinfect
              </Typography>
                        <Typography variant="body2" component="p">
                            Get yourself Clean and open the windows for 5 minutes at least twice a day.
              </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent style={{background: "#FAD0C9"}}>
                    <img src={Hospital} alt="hospital" />
                        <Typography style={{fontFamily: "Jost"}} variant="h5" color="textSecondary" gutterBottom>
                            Don't Panic
              </Typography>
                        <Typography variant="body2" component="p">
                        If exposed to COVID‑19, call your healthcare provider for medical advice
              </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default BeSafe;


