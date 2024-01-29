const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote') 
const loader = document.getElementById('loader')

// show loading
   
let apiQuotes = [];


  function ShowloadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
 

function RemoveLoadingSpinner() {
  quoteContainer.hidden = false; 
  loader.hidden = true;
}   

// Show new quote 
function newQuote() {
     ShowloadingSpinner(); 
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
    //  Set Quote, Hide Loader 

   quoteText.textContent = quote.text;
   RemoveLoadingSpinner();
}

// Get Quotes From API
async function getQuotes () {
  ShowloadingSpinner();
 const apiUrl = 'https://type.fit/api/quotes';
   try {
      const response = await fetch (apiUrl);
      apiQuotes = await response.json();
      newQuote ();
      
    } catch (error) {
         // catch error here
         
       }
    }

    // Tweet Quote
    function tweetQuote() { 
      const twitterUrl = `https://twitter.com/intent/tweet?tex=${quoteText.textContent} - ${authorText.textContent}`;
      window.open(twitterUrl, '_blank');
     }

    //  Event listeners
    newQuoteBtn.addEventListener('click',newQuote);
    twitterBtn.addEventListener('click',tweetQuote);
    


//  on Load
getQuotes();

 