var htmlTweet = require('..')()

var html = htmlTweet('Hello #world, this is a @mention and a http://link.com')

console.log(html);
// html => "Hello <a href='#'>#world</a>, this is a <a href='#'>@mention</a> and a <a href='#'>http://link.com</a>"