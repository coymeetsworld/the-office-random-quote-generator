
let currentQuoteNum = 0;
const QUOTES = [
  "I am ready to face any challenges that might be foolish enough to face me. - Dwight Schrute",
  "I'm not superstitious, but, I'm a little stitious. - Michael Scott",
  "The worst thing about prison was--was the Dementors. - Prison Mike",
  "I am Beyonce, always. - Michael Scott",
  "I have cause. It is be-cause I hate him. - Michael Scott",

  "Bears. Beets. Battlestar Galactica. - Jim Halpert",
  "Well well well. How the turntables... - Michael Scott",
  "Occasionally I'll hit somebody with my car. So sue me. - Michael Scott",
  "I hate, so much about the things that you choose to be. - Michael Scott",
  "One day Michael came in complaining about a speed bump on the highway.. I wonder who he ran over then. - Jim Halpert",

  "\[After sipping wine\] That is sort of an oaky afterbirth. - Michael Scott",
  "That's what she said. - Michael Scott",
  "I'm not a millionaire. I thought I would be by the time I was thirty, but I wasn't even close. - Michael Scott",
  "I love inside jokes. I'd love to be a part of one someday. - Michael Scott",
  "Andy Bernard does not lose contests. He wins them...or he quits them because they are unfair. - Andy Bernard",

  "You couldn't handle my undivided attention. - Dwight Schrute",
  "That's what she said. - Michael Scott",
  "Am I a hero? I really can't say, but yes. - Michael Scott",
  "\[Groans\] These meetings are pointless. - Michael Scott",
  "Right here is my favorite New York pizza joint. \[Goes into a Sbarros\] - Michael Scott",

  "I, declare....BANKRUPTCY!!!!! - Michael Scott",
  "There's too many people on this earth. We need a new plague. - Dwight Schrute",
  "Dwight, you ignorant slut! - Michael Scott",
  "I really should have a tweeter account - Dwight Schrute",
  "I am running away from my responsibilities, and it feels good. - Michael Scott",

  "Happy birthday Jesus, sorry your party's so lame. - Michael Scott",
  "She certainly seems to love lovemaking with me. - Dwight Schrute",
  "All you do is dress fancy and sing. Oh Lalalalalalala. What does that mean? - Dwight Schrute",
  "We should give them a one-way ticket to Montego Bay, where they keep all the Al-Qaeda - Michael Scott",
  "Hi. I'm date Mike. Nice to meet me. How do you like your eggs in the morning? - Michael Scott",

  "Pam, how do girls your age feel about futons? - Michael Scott",
  "I understand nothing. - Michael Scott",
  "Mike I'm gonna have to ask you to leave. So I can learn about this tiny television. - Darryl Philbin",
  "I don't want to prank anymore. Things get real. - Darryl Philbin",
  "I'm not a big believer in therapy, but I'll go into my own pocket to cover his co-pay. - Darryl Philbin",

  "I already won the lottery. I was born in the US of A baby. - Creed Bratton",
  "Oh I steal things all the time. It's just something that I do. I stopped caring a long time ago. - Creed Bratton",
  "If I can't scuba, then what's this all been about. What am I working toward? - Creed Bratton",
  "What's a text? - Creed Bratton",
  "I'm always thinking one step ahead, like a... carpenter... that makes stairs. - Andy Bernard",
];


/* Removes the current tweet button and creates a new one with the text from variable quote inside of it. */
const updateTweetButton = (quote) => {

  /* Remove old button */
  $(".twitter-share-button").remove();

  let link = "https://twitter.com/intent/tweet?url=/?text=" + encodeURIComponent(quote); // Needed to encode special characters like question marks so that it can be in the URL.

  /* Create new button with new quote text in it. */
  let tweetButton = $('<a>');
  tweetButton.attr("href", link);
  tweetButton.attr("class", "twitter-share-button");
  tweetButton.attr("id", "tweet-button");
  tweetButton.attr("data-lang", "en");
  tweetButton.attr("data-size", "large");
  tweetButton.attr("data-text", quote);
  tweetButton.text("Tweet");

  $("#tweet-quote").prepend(tweetButton);
  twttr.widgets.load();
}


const generateRandomQuote = () => {

  /* Avoid generating the same quote twice in a row*/
  let quoteNumber = Math.floor((Math.random() * 40) + 1);
  if (currentQuoteNum !== quoteNumber) {
    return quoteNumber;
  }
  return generateRandomQuote(); // So no duplicates get run
}

$("#quote").text(QUOTES[currentQuoteNum]);
updateTweetButton(QUOTES[currentQuoteNum]);

/* Click handler for quote section to update the quote. */
$("#quote").click(() => {
  currentQuoteNum = generateRandomQuote();
  $("#quote").text(QUOTES[currentQuoteNum]);
  updateTweetButton(QUOTES[currentQuoteNum]);
});
