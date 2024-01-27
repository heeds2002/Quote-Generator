const quoteContainer = document.getElementById('quote-containe')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote') 

let apiQuotes = [];

// Show new quote 
function newQuote() {
    //  Pick a random quote from api array
    const quote = apiQuotes [Math.floor(Math.random() * apiQuotes.length)];
    //To check if the Author field is black and replace it with unknown
    if(!quote.author) {
        authorText.textContent = 'unknown';
    } else {
         authorText.textContent = quote.author;
    }
    //  Check Quote  length to determin styling
    if(quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    }else {
    quoteText.classList.remove('long-quote');
    } 

   quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes () {
 const apiUrl = 'https://type.fit/api/quotes';
   try {
      const response = await fetch (apiUrl);
      apiQuotes = await response.json();
      newQuote ();
      
    } catch (error) {
         // catch error here
       }
    }
    


//  on Load
getQuotes();
 