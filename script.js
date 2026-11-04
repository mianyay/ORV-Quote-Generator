const quotes = [
    {text: "Ultimately, every human is their own writer.", author: "Han Sooyoung"},
    {text: "The story changed every time I read it. The story was over but it wasn't over. The story wouldn't end unless the reader gave up on the story.", author: "Han Sooyoung"},
    {text: "A regressor actually does not regress. What actually regresses isn’t him, but everything else excluding him.", author: "SingShong"},
    {text: "But as he stood before the hard-earned freedom, he couldn't figure out what exactly he had finally earned.", author: "SingShong"},
    {text: "We kill something and eat it to live. That is the life of humans. That is how it’s always been. But why did this feel different?", author: "SingShong"},
    {text: "People who adjust to the new world each have different ways of coping with it. Some descend into madness, while others turn to fanaticism. And some cling to irrational optimism.", author: "SingShong"},
    {text: "This is a story for you who no longer has anything to read at the end of the world", author: "Han Sooyoung"},
    {text: "The story changed every time I read it. The story was over but it wasn't over.", author: "Kim Dokja"},
    {text: "There is only one difference between you and I. You simply got lucky, and I didn't.", author: "Secretive Plotter"},
    {text: "Why, why is it not me, but you?", author: "Secretive Plotter"},
    {text: "Tell me, you fool. If I continue to regress, will I ever get to meet you again?", author: "Yoo Joonghyuk"},
    {text: "It doesn't matter what gender, race or world you originated from. It doesn't matter if you are strong or weak, famous or not famous. Anything is okay. What I am looking for is passion.", author: "Kim Dokja"},
    {text: "I liked you, hated you, resented you, and cheered for you. I was with you throughout your three-thousand episode journey.", author: "Kim Dokja"},
    {text: "It isn’t important to read the letters. The important thing is where the letters lead you.", author: "Kim Dokja"},
    {text: "I believe in you more than the future that hasn’t come yet.", author: "SingShong"},
    {text: "The light of countless constellations was shining towards him but none of them could reach Yoo Joonghyuk. No matter how many years they had lived, they couldn't understand the regressor who suffered the destruction of the world twice.", author: "SingShong"},
    {text: "Did copyright exist for one's life, too? But, was it okay to describe one's life as a 'work of an author'?", author: "SingShong"},
    {text: "Read a lot and apply what you've read in real life", author: "SingShong"}
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuote = document.getElementById("new-quote");

newQuote.addEventListener("click", function () {
    const generateRandom = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[generateRandom].text}"`;
    quoteAuthor.textContent = `- ${quotes[generateRandom].author}`;
});