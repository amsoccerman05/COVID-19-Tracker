  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import cheerio from 'cheerio';

  const CovidTracker = () => {
    const [covidData, setCovidData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://www.worldometers.info/coronavirus/');
          const html = response.data;
          const $ = cheerio.load(html);

          // Extracting data from the HTML
          const totalCases = $('#maincounter-wrap > div > span').eq(0).text().trim();
          const totalDeaths = $('#maincounter-wrap > div > span').eq(1).text().trim();
          const totalRecovered = $('#maincounter-wrap > div > span').eq(2).text().trim();

          // Setting the extracted data to state
          setCovidData({
            totalCases,
            totalDeaths,
            totalRecovered
          });
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
          <p> sadness </p>
        ) : (
          <div>
            <p>Total cases: {covidData.totalCases}</p>
            <p>Total deaths: {covidData.totalDeaths}</p>
            <p>Total recovered: {covidData.totalRecovered}</p>
          </div>
        )}
      </div>
    );
  };

  export default CovidTracker;
