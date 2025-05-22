var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  { quote: "So many books, so little time", author: "Frank Zappa" },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend.",
    author: "Albert Camus"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    quote:
      "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
    author: "C.S. Lewis, The Four Loves"
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all ",
    author: "Oscar Wilde"
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi "
  },
  {
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results",
    author: "Narcotics Anonymous"
  }
];

var oldIndex =-1;
function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * quotes.length);
  if(oldIndex === quoteIndex){
    getRandomQuote();
  }
  else{
    oldIndex = quoteIndex;
  }
  return quotes[quoteIndex];
}


function displayRandomQuote() {
  var quote = getRandomQuote();
  
  document.getElementById('quote').innerHTML= quote.quote;
  document.getElementById('auther').innerHTML= quote.author;

}
