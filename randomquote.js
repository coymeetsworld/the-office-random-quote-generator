$(document).ready(function() {

  var currentQuoteNum = 0;

  updateTweetButton();

  $("#generate_quote_button").click(function() {
    console.log("Generate quote button clicked.");
    var quote = generateRandomQuote();
    $("#quote p").replaceWith("<p>" + quote + "</p>");
    updateTweetButton(quote);
  });

  function updateTweetButton(quote) {
    
    console.log("updateTweetButton called");
    console.log("quote: " + quote);

    /* Remove old button */
    $(".twitter-share-button").remove();

    /* Create new button with new quote text in it. */
    var tweetButton = $('<a>');
    tweetButton.attr('href', "https://twitter.com/share");
    tweetButton.attr('class',"twitter-share-button");
    tweetButton.attr('id','tweet-button');
    tweetButton.attr('data-lang', "en");
    tweetButton.attr('data-size', "large");
    tweetButton.attr('data-text', quote);
    tweetButton.text("Tweet");

    $("#tweet-quote").prepend(tweetButton);
    twttr.widgets.load();
  }


  function generateRandomQuote() {
   //var currentQuoteNum = 0;

    /* Avoid generating the same quote twice in a row*/
    var quote_number;
    while (true) {
      quote_number = Math.floor((Math.random() * 20) + 1);
      console.log("currentQuoteNum: " + currentQuoteNum);
      console.log("quote_number now: " + quote_number);
      if (currentQuoteNum != quote_number) {
        currentQuoteNum = quote_number;
        break;
      }
    }

    var quote = "";
    switch (quote_number) {
      case 1:
         quote = "I'm not superstitious, but, I'm a little stitious. - Michael Scott";
         break;
      case 2:
         quote = "Call me ASAP as possible. - Michael Scott";
         break;
      case 3:
         quote = "The worst thing about prison was--was the Dementors. - Prison Mike";
         break;
      case 4:
         quote = "I am Beyonce, always. - Michael Scott";
         break;
      case 5:
         quote = "I have cause. It is be-cause I hate him. - Michael Scott";
         break;
      case 6:
         quote = "Bears. Beets. Battlestar Galactica. - Jim Halpert";
         break;
      case 7:
         quote = "Well well well. How the turntables... - Michael Scott";
         break;
      case 8:
         quote = "Occasionally I'll hit somebody with my car. So sue me. - Michael Scott";
         break;
      case 9:
         quote = "I hate, so much about the things that you choose to be. - Michael Scott";
         break;
      case 10:
         quote = "One day Michael came in complaining about a speed bump on the highway.. I wonder who he ran over then. - Jim Halpert";
         break;
      case 11:
         quote = "\[After sipping wine\] That is sort of an oaky afterbirth. - Michael Scott";
         break;
      case 12:
         quote = "The Diabetes Award goes to Stanley Hudson. Come on up here you sick bastard. - Michael Scott.";
         break;
      case 13:
         quote = "I'm not a millionaire. I thought I would be by the time I was thirty, but I wasn't even close. - Michael Scott";
         break;
      case 14:
         quote = "I love inside jokes. I'd love to be a part of one someday. - Michael Scott";
         break;
      case 15:
         quote = "Andy Bernard Does Not Lose Contests. He Wins Them… Or He Quits Them Because They Are Unfair. - Andy Bernard";
         break;
      case 16:
         quote = "You couldn't handle my undivided attention. - Dwight Schrute";
         break;
      case 17:
         quote = "That's what she said. - Michael Scott";
         break;
      case 18:
         quote = "Am I a hero? I really can't say, but yes. - Michael Scott";
         break;
      case 19:
         quote = "\[Groans\] These meetings are pointless. - Michael Scott";
         break;
      case 20:
         quote = "Right here is my favorite New York pizza joint. \[Goes into a Sbarros\] - Andy Bernard";
         break;
      default:
         quote = "That's what she said. - Michael Scott"
    }
    return quote;
  }

});
