const cheerio = require('cheerio');
const axios = require('axios');

// Send an HTTP request to the website
const url = 'https://www.nobroker.in/property/sale/pune/Baner?searchParam=W3sibGF0IjoxOC41NjQyNDUyLCJsb24iOjczLjc3Njg1MTEsInBsYWNlSWQiOiJDaElKeTlOZDhNLS13anNSZmF0Xy01Y1NrYUUiLCJwbGFjZU5hbWUiOiJCYW5lciJ9XQ==&radius=2.0&city=pune&locality=Baner';
axios.get(url)
  .then((response) => {
    // Load the HTML content into Cheerio
    const $ = cheerio.load(response.data);

    // Find an element by its ID
    const elementWithId = $('#minDeposit');

    // Extract data from the element
    if (elementWithId.length) {
      const data = elementWithId.text();
      console.log(data);
    } else {
      console.log('Element with ID not found');
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
