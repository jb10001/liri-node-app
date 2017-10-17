var twitterKeys = require('./keys.js');

// console.log(twitterKeys);

// console.log(process.argv[2]);


/* ** Code Here 

my-tweets 	(command)

	- This will display your last 20 tweets, when they were created at your terminal bash window
**/

var Twitter = require('twitter');
 
var client = new Twitter(twitterKeys);

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
  }
});