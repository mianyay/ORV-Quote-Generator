const quotes = [
    {text: "Ultimately, every human is their own writer.", author: "Han Sooyoung"},
    {text: "The story changed every time I read it. The story was over but it wasn't over. The story wouldn't end unless the reader gave up on the story.", author: "Han Sooyoung"},
    {text: "A regressor actually does not regress. What actually regresses isn’t him, but everything else excluding him.", author: "SingShong"},
    {text: "But as he stood before the hard-earned freedom, he couldn't figure out what exactly he had finally earned.", author: "SingShong"},
    {text: "We kill something and eat it to live. That is the life of humans. That is how it’s always been. But why did this feel different?", author: "SingShong"},
    {text: "People who adjust to the new world each have different ways of coping with it. Some descend into madness, while others turn to fanaticism. And some cling to irrational optimism.", author: "SingShong"},
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuote = document.getElementById("new-quote");

newQuote.addEventListener("click", function () {
    const generateRandom = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[generateRandom].text}"`;
    quoteAuthor.textContent = `- ${quotes[generateRandom].author}`;
});