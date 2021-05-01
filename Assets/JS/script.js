// Variables
var now = moment()
var currentDayEl = $(".time");
// Variable for Calm Quote API
const myURL = 'https://favqs.com/api/qotd?tags=love';
const calmQuoteEl = document.querySelector("#quoteDiv");
const calmAuthorEl = document.querySelector("#authorDiv");
const calmButtonEl = document.querySelector("#calm-button");



function displayDate() {
    var date = now.format("dddd, MMMM Do YYYY, h:mm a");
    currentDayEl.text(date);
}

displayDate();


// Calm Quote API Function
function getCalmApi() {
  fetch(myURL)
    .then(function (response) {
      //  Conditional for the the response.status.
      if (response.status !== 200) {
        // Place the response.status on the page.
        // Error 404 Page
      }
      return response.json();
    })
    .then(function (data) {
      // Make sure to look at the response in the console and read how 404 response is structured.
      const bodyQuote = data.quote.body;
      const author = data.quote.author;
      
      calmQuoteEl.textContent = bodyQuote ;
      calmAuthorEl.textContent = "-" + author ;

      // Add More codes for localStorage


    });
}

calmButtonEl.onclick = getCalmApi;