const quotes = [
  "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
  "The code you write today will haunt you tomorrow. But hey, at least it keeps life interesting.",
  "I don't always test my code, but when I do, I do it in production.",
  "The code you write is the code you deserve.",
  "The only problem with troubleshooting is that sometimes trouble shoots back.",
  "Programming is the art of doing one thing at a time, unless it's a bug, then it's the art of multitasking.",
  "Code never lies, comments sometimes do.",
  "Programming is like a recipe: it's all fun and games until you forget the semicolon.",
  "If at first, you don't succeed, call it version 1.0.",
  "The only thing worse than not testing your code is assuming it works without testing.",
  "Programming is the art of doing nothing gracefully.",
  "The best code is no code at all. Until you need code. Then the best code is concise, efficient, and well-documented.",
];

const quote = Math.floor(Math.random() * quotes.length);
console.log(quote);
console.log(quotes[quote]);
