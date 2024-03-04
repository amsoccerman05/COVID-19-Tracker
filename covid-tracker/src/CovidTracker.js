// CovidTracker.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CovidTracker = () => {
  const [covidData, setCovidData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/all');
        setCovidData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching COVID-19 data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Global COVID-19 Tracker</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Total cases: {covidData.cases}</p>
          <p>Total deaths: {covidData.deaths}</p>
          <p>Total recovered: {covidData.recovered}</p>
        </div>
      )}
    </div>
  );
};

export default CovidTracker;
