const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
];

function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    let quote = getRandomQuote();
    document.getElementById("text").textContent = quote.text;
    document.getElementById("author").textContent = "- " + quote.author;
    
    let tweetURL = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;
    document.getElementById("tweet-quote").href = tweetURL;
}
window.onload = displayQuote;

document.getElementById("new-quote").addEventListener("click", displayQuote);
