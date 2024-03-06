// const axios = require('axios');
// const cheerio = require('cheerio');

// // Function to fetch HTML content from the Worldometer website
// const fetchHTML = async (url) => {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching HTML:', error);
//     return null;
//   }
// };

// // Function to scrape COVID-19 data from the HTML
// const scrapeData = (html) => {
//   const $ = cheerio.load(html);

//   // Extracting data from the HTML
//   const totalCases = $('#maincounter-wrap > div > span').eq(0).text().trim();
//   const totalDeaths = $('#maincounter-wrap > div > span').eq(1).text().trim();
//   const totalRecovered = $('#maincounter-wrap > div > span').eq(2).text().trim();

//   return {
//     totalCases,
//     totalDeaths,
//     totalRecovered,
//   };
// };

// // Main function to run the scraper
// const main = async () => {
//   const url = 'https://www.worldometers.info/coronavirus/';
//   const html = await fetchHTML(url);

//   if (html) {
//     const covidData = scrapeData(html);
//     console.log('COVID-19 Data:', covidData);
//   } else {
//     console.log('Failed to fetch HTML from', url);
//   }
// };

// main();
