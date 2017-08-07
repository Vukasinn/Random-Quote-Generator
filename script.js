let randomQuote;
let randomAuthor;

const quotes = [
  "Many receive advice; few profit by it.",
  "Life is about making an impact, not making an income.",
  "Whatever the mind of man can conceive and believe, it can achieve.",
  "Strive not to be a success,but rather to be of value.",
  "Two roads diverged in a wood,and I-I took the one less traveled by,And that has made all the difference.",
  "I attribute my succes to this: I never game or took any excuse.",
  "You miss 100% of the shots you don’t take.",
  "The most difficult thing is the decision to act, the rest is merely tenacity.",
  "The Way Get Started Is To Quit Talking And Begin Doing.",
  " Definiteness of purpose is the starting point of all achievement.",
  "Life isn't about getting and having, it's about giving and being.",
  "Life is what happens to you while you’re busy making other plans.",
  "We become what we think about.",
  "Life is 10% what happens to me and 90% of how I react to it.",
  "The most common way people give up their power is by thinking they don’t have any. ",
  "The mind is everything. What you think you become.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "An unexamined life is not worth living.",
  "Eighty percent of success is showing up.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Winning isn’t everything, but wanting to win is.",
  "I am not a product of my circumstances. I am a product of my decisions.",
  "Every child is an artist.  The problem is how to remain an artist once he grows up.",
  "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  "Whether you think you can or you think you can’t, you’re right.",
  "The two most important days in your life are the day you are born and the day you find out why.",
  "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
  "The best revenge is massive success.",
  "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
  " Life shrinks or expands in proportion to one's courage.",
];

var authors = [
  "- Publilius Syrus",
  "- Kevin Kruse",
  "- Napoleon Hill",
  "- Albert Einstein",
  "- Robert Frost",
  "- Florence Nightingale",
  "- Wayne Gretzky",
  "- Amelia Earhart",
  "– Babe Ruth",
  "– W. Clement Stone",
  "– Kevin Kruse",
  "– John Lennon",
  "– Earl Nightingale",
  "– Mark Twain",
  "– Charles Swindoll",
  "– Alice Walker",
  "– Buddha",
  "– Chinese Proverb",
  "– Socrates",
  "– Woody Allen",
  "– Steve Jobs",
  "– Vince Lombardi",
  "– Stephen Covey",
  "– Pablo Picasso",
  "– Christopher Columbus",
  "– Maya Angelou",
  "– Jim Rohn",
  "– Henry Ford",
  "– Mark Twain",
  "– Johann Wolfgang von Goethe",
  "– Frank Sinatra",
  "– Zig Ziglar",
  "– Anais Nin",
];

// randomQuote = (quotes[Math.floor(Math.random() * quotes.length)]);
// randomAuthor = (authors[Math.floor(Math.random() * authors.length)]);

// console.log(quotes[randomQuote]);
// console.log(authors[randomQuote]);
document.querySelector("#newQuote").addEventListener("click", function() {
  randomQuote = Math.floor(Math.random() * quotes.length); // Gets an Random Index for the array.
  document.querySelector("#changed").innerHTML = quotes[randomQuote]; // Takes that random Index,and goes over the array.
  document.querySelector(".authorChanged").innerHTML = authors[randomQuote]; // Since i have the same amount of authors as quotes,the X index is same,which is why it works.
  // randomQuote is inside the function becouse it needs to get an random number for the arrays,every time you click a button.
});
