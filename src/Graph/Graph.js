import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import styles from './Graph.module.css';
import Navbar from '../components/Navbar'
import {
  Box
} from "@material-ui/core";


class Graph extends React.Component {
  state = {
    data: {},
    country: '',

  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Navbar />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
          <Cards data={data} />
      </div>

    );
  }
}

export default Graph;