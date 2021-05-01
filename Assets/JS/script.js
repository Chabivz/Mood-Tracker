var now = moment()
var currentDayEl = $(".time");

function displayDate() {
    var date = now.format("dddd, MMMM Do YYYY, h:mm a");
    currentDayEl.text(date);
}

displayDate();


// Calm API
const myURL = 'https://favqs.com/api/qotd?tags=love';
const calmQuoteEl = document.querySelector("#quoteDiv");
const calmAuthorEl = document.querySelector("#authorDiv");
const calmButtonEl = document.querySelector("#calm-button");

function getCalmApi() {
  fetch(myURL)
    .then(function (response) {
      console.log(response.status);
      //  Conditional for the the response.status.
      if (response.status !== 200) {
        // Place the response.status on the page.
        // responseTextEL.textContent = response.status; 
      }
      return response.json();
    })
    .then(function (data) {
      // Make sure to look at the response in the console and read how 404 response is structured.
      console.log(data);
      const bodyQuote = data.quote.body;
      const author = data.quote.author;
      console.log(data.quote.body);
      console.log(data.quote.author);
      calmAuthorEl.textContent = calmQuoteEl;
      calmAuthorEl.textContent = calmAuthorEl;
    });
}

calmButtonEl.onclick = getCalmApi;