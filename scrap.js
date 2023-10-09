const puppeteer = require("puppeteer");

async function parseNoBrokerSwargate() {
  // Launch the browser
  const browser = await puppeteer.launch();

  // Open a new tab
  const page = await browser.newPage();

  // URL for Swargate in Pune
  const swargateURL =
    "https://www.nobroker.in/property/sale/pune/Baner?searchParam=W3sibGF0IjoxOC41NjQyNDUyLCJsb24iOjczLjc3Njg1MTEsInBsYWNlSWQiOiJDaElKeTlOZDhNLS13anNSZmF0Xy01Y1NrYUUiLCJwbGFjZU5hbWUiOiJCYW5lciIsInNob3dNYXAiOmZhbHNlfV0=&radius=2.0&city=pune&locality=Katraj&isMetro=false";

  // Visit the Swargate page and wait until network connections are completed
  await page.goto(swargateURL, { waitUntil: "networkidle2" });

  // Interact with the DOM to retrieve the titles
  const titles = await page.evaluate(() => {
    // Select all elements with crayons-tag class
    return [
      ...document.querySelectorAll(
        ".infinite-scroll-component .nb__7nqQI .border-cardbordercolor #minDeposit"
      ),
    ].map((el) => el.textContent.trim());
  });

  // Don't forget to close the browser instance to clean up the memory
  await browser.close();
  const extractedPrices = titles.map((text) => {
    const matchLacs = text.match(/₹([\d.]+) Lacs/);
    const matchCrores = text.match(/₹([\d.]+) Crores/);

    if (matchLacs) {
      return matchLacs[1] + " Lacs";
    } else if (matchCrores) {
      return matchCrores[1] + " Crores";
    } else {
      return null;
    }
  });

  console.log(extractedPrices);

  function convertLakhOrCroreStringToNumber(valueString) {
    // Remove any non-numeric characters and convert to a number
    const numericValue = parseFloat(valueString.replace(/[^\d.]/g, ""));

    // Check if the string contains 'L' or 'cr' and perform the conversion
    if (valueString.includes("Lacs")) {
      return numericValue * 100000; // 1 Lakh = 100,000
    } else if (valueString.includes("Crores")) {
      return numericValue * 10000000; // 1 Crore = 10,000,000
    } else {
      return numericValue; // No 'L' or 'cr', so it's already a number
    }
  }

  function formatPriceWithUnits(price) {
    if (price >= 10000000) {
      // If the price is 1 crore or more, display it in crores
      return `${(price / 10000000).toFixed(2)} crores`;
    } else if (price >= 100000) {
      // If the price is 1 lakh or more, display it in lakhs
      return `${(price / 100000).toFixed(2)} lakhs`;
    } else {
      // Otherwise, display it in raw numbers
      return price.toString();
    }
  }

  // Convert the array values to numeric prices
  const numericPrices = extractedPrices.map(convertLakhOrCroreStringToNumber);

  // Calculate the average price
  const averagePrice =
    numericPrices.reduce((sum, price) => sum + price, 0) / numericPrices.length;
  // Calculate the maximum price
  const maxPrice = Math.max(...numericPrices);

  // Calculate the minimum price
  const minPrice = Math.min(...numericPrices);  

  const AveragePrice = formatPriceWithUnits(averagePrice);
  const MaxPrice = formatPriceWithUnits(maxPrice);
  const MinPrice = formatPriceWithUnits(minPrice);

  console.log("Average"+AveragePrice);
  console.log("maximum"+MaxPrice+"minimum"+MinPrice);
}

parseNoBrokerSwargate();
