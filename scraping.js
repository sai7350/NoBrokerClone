const puppeteer = require("puppeteer");

async function parseNoBrokerSwargate() {
  // Launch the browser
  const browser = await puppeteer.launch();

  // Open a new tab
  const page = await browser.newPage();

  // URL for Swargate in Pune
  const swargateURL =
    "https://housing.com/in/buy/searches/katraj";

  // Visit the Swargate page and wait until network connections are completed
  await page.goto(swargateURL, { waitUntil: "networkidle2" });

  // Interact with the DOM to retrieve the titles
  const titles = await page.evaluate(() => {
    // Select all elements with crayons-tag class
    return [...document.querySelectorAll("._sq1l2s _vv1q9c _ks15vq _5vy24jg8 _blas14la _csbfng _g3dlk8 _c81fwx _h3ftgi")].map((el) =>
      el.textContent.trim()
    );
  });

  // Don't forget to close the browser instance to clean up the memory
  await browser.close();

  // Print the results
  titles.forEach((title) => console.log(`- ${title}`));
}

parseNoBrokerSwargate();
