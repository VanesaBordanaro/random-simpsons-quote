const quote = document.querySelector('#quote-txt')
const author = document.querySelector('#quote-author')
const button = document.querySelector('#quote-btn')

function newQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = `<img src="quote-left.png" alt=""> ${quotes[randomQuote]["quote"]} <img src="quote-right.png" alt="">`
    author.innerHTML = quotes[randomQuote]["author"]
}

button.addEventListener('click', newQuote)

newQuote()