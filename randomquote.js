$(document).ready(function() {

  /* Initializing variables and display quote/tweet button. */
  var currentQuoteNum = 0;
  var startingQuote = "I am ready to face any challenges that might be foolish enough to face me. - Dwight Schrute";

  $("#quote").text(startingQuote);
  updateTweetButton(startingQuote);

  /* Click handler for quote section to update the quote. */
  $("#quote").click(function() {
    var quote = generateRandomQuote();
    //$("#quote p").replaceWith("<p>" + quote + "</p>");
    $("#quote").text(quote);
    updateTweetButton(quote);
  });


  /* Removes the current tweet button and creates a new one with the text from variable quote inside of it. */
  function updateTweetButton(quote) {

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


  /* Function to generate a new random quote. Calls updateTweetButton(). */
  function generateRandomQuote() {

    /* Avoid generating the same quote twice in a row*/
    var quote_number;
    while (true) {
      quote_number = Math.floor((Math.random() * 40) + 1);
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
         quote = "Andy Bernard does not lose contests. He wins them...or he quits them because they are unfair. - Andy Bernard";
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
         quote = "Right here is my favorite New York pizza joint. \[Goes into a Sbarros\] - Michael Scott";
         break;
      case 21:
        quote = "I, declare....BANKRUPTCY!!!!! - Michael Scott";
        break;
      case 22:
        quote = "There's too many people on this earth. We need a new plague. - Dwight Schrute";
        break;
      case 23:
        quote = "Dwight, you ignorant slut! - Michael Scott";
        break;
      case 24:
        quote = "I really should have a tweeter account - Dwight Schrute";
        break;
      case 25:
        quote = "I am running away from my responsibilities, and it feels good. - Michael Scott";
        break;
      case 26:
        quote = "Happy birthday Jesus, sorry your party's so lame. - Michael Scott";
        break;
      case 27:
        quote = "She certainly seems to love lovemaking with me. - Dwight Schrute";
        break;
      case 28:
        quote = "All you do is dress fancy and sing. Oh Lalalalalalala. What does that mean? - Dwight Schrute";
        break;
      case 29:
        quote = "We should give them a one-way ticket to Montego Bay, where they keep all the Al-Qaeda - Michael Scott";
        break;
      case 30:
        quote = "Hi. I'm date Mike. Nice to meet me. How do you like your eggs in the morning? - Michael Scott";
        break;
      case 31:
        quote = "Pam, how do girls your age feel about futons? - Michael Scott";
        break;
      case 32:
        quote = "I understand nothing. - Michael Scott";
        break;
      case 33:
        quote = "Mike I'm gonna have to ask you to leave. So I can learn about this tiny television. - Darryl Philbin";
        break;
      case 34:
        quote = "I don't want to prank anymore. Things get real. - Darryl Philbin";
        break;
      case 35:
        quote = "I'm not a big believer in therapy, but I'll go into my own pocket to cover his co-pay. - Darryl Philbin";
        break;
      case 36:
        quote = "I already won the lottery. I was born in the US of A baby. - Creed Bratton";
        break;
      case 37:
        quote = "Oh I steal things all the time. It's just something that I do. I stopped caring a long time ago. - Creed Bratton";
        break;
      case 38:
        quote = "If I can't scuba, then what's this all been about. What am I working toward? - Creed Bratton";
        break;
      case 39:
        quote = "What's a text? - Creed Bratton";
        break;
      case 40:
        quote = "I'm always thinking one step ahead, like a... carpenter... that makes stairs. - Andy Bernard";
        break;
      default:
         quote = "That's what she said. - Michael Scott"
    }
    return quote;
  }

});
