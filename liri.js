var twitterKeys = require('./keys.js');

// console.log(twitterKeys);


// console.log(process.argv[2]);


/* ** Code Here 

my-tweets 	(command)

	- This will display your last 20 tweets, when they were created at your terminal bash window
**/

var Twitter = require('twitter');
 
var client = new Twitter(twitterKeys);

var client2 = new Twitter(twitterKeys);

/*
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
  }
});
*/

// TEST THIS, THE FOLLOWING, OUT **** 5:34pm


var params = {screen_name: 'iosbigfaced2'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text); // brings back FIRST tweet
 //   console.log(tweets[1].text);
 //   console.log(tweets[2].text);
 //   console.log(tweets[3].text); // throws an error, ooh yeaah lol  --because there is no 4th tweet. Index starts at 0
  }
});
				// 12:38am */				// remember errors? ?

//. --------------------------- BEGIN, NEWER CODE, ADDING AN ADDITIONAL 'GET' REQUEST
client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
 //6:27pm take out this one --> console.log(response);  // Raw response object. 
});



// how do I use this?
GET https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

client2.get()




// ---------------------------------------------------------- BEGIN, NEW CODE

// var twitterTimeline = require('./keys.js');

// so comment this out, 12:46am --> var twitterTimeline = require('twitter-timeline-middleware'); // this is the wrong one



 
// app.use('/timeline/:iosbigfaced2', twitterTimeline(twitterCredentials));



