import React from 'react';
import { Card, CardContent, Checkbox, Typography, Grid } from '@material-ui/core';
import Navbar from '../components/Navbar'

import styles from './BeSafe.module.css';

function BeSafe() {
        

    return (
        <div className={styles.container}>
            <Navbar />
            <Grid container spacing={2} justify="center">
            
                <Grid item xs={10} md={3} component={Card} className={styles.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Wash Your Hands
              </Typography>
                            <Typography variant="body2" component="p">
                                You need to wash your hands with a soap at least 30 seconds.
              </Typography>
                        </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Avoid touching face
              </Typography>
                        <Typography variant="body2" component="p">
                            Eyes, nose, and mouth are the most frequent ways to get infected.
              </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Stay home
              </Typography>
                        <Typography variant="body2" component="p">
                            Try minimizing time spending outside and always carry a hand sanitizer.
              </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Wear Masks
              </Typography>
                        <Typography variant="body2" component="p">
                            Wear masks for you and your neibors.
              </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Clean and disinfecet
              </Typography>
                        <Typography variant="body2" component="p">
                            Get yourself Clean and open the windows for 5 minutes at least twice a day.
              </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Be prepared
              </Typography>
                        <Typography variant="body2" component="p">
                            Find the cloest hospital.
              </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default BeSafe


