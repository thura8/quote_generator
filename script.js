let newQuote = document.getElementById("new-quote");
let quoteHTML = document.getElementById("quote");
let author = document.getElementById("author");
let quoteContainer = document.getElementById("quote-container");
let loader = document.getElementById("loader");

let quoteData = [];

let loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

let dataShow = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

const randomQuote = () => {
  loading();
  let quote = quoteData[Math.floor(Math.random() * quoteData.length)];
  quoteHTML.textContent = quote.text;
  if (!quote.author) {
    author.textContent = "Anonymous";
  } else {
    author.textContent = quote.author;
  }
  if (quote.text.length > 50) {
    quoteHTML.classList.add("long-quote");
  } else {
    quoteHTML.classList.add("long-quote");
  }
  dataShow();
};

newQuote.addEventListener("click", randomQuote);

async function quoteGenerator() {
  loading();
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    quoteData = await response.json();
    randomQuote();
  } catch (error) {}
}

quoteGenerator();
