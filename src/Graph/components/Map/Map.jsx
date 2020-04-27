import React, { useState } from 'react';
import GeoChart from './Geochart'
import data from './worldMap.geo.json';

import styles from './Map.module.css'

function Map () {
    return (
    <div className={styles.container}>
        <React.Fragment>
            <GeoChart data={data} />
        </React.Fragment>
        </div>
    );
}
export default Map;