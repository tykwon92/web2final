import React from 'react';

import { Cards, CountryPicker, Chart, Map } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';



class App extends React.Component {
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
        <div><h1>COVID-19 Tracker</h1></div>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <Cards data={data} />
        <Map />


      </div>
    );
  }
}

export default App;