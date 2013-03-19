[![build status](https://secure.travis-ci.org/domharrington/html-tweet.png)](http://travis-ci.org/domharrington/html-tweet)
# html-tweet
Convert a tweet into HTML, parsing out #hashtags, @mentions and http://links.com.
Uses the official [twitter-text](https://github.com/twitter/twitter-text-js) npm package for parsing.

## usage

    var htmlTweet = require('html-tweet')()

    var html = htmlTweet('Hello #world, this is a @mention and a http://link.com')

    console.log(html);
    // html => "Hello <a href='#'>#world</a>, this is a <a href='#'>@mention</a> and a <a href='#'>http://link.com</a>"

## methods

    var htmlTweet = require('html-tweet')()

### htmlTweet(tweet)
Returns a HTML version of the tweet text.

### options
Options can be passed to `require` with template strings for the hashtags, urls and mentions.
Uses `lodash/underscore` template strings: `<a href='#'><%= hashtag %></a>`.

Options are as follows:
 - `hashtag` - hashtag template string
  - default: `<a href='#'><%= hashtag %></a>`
 - `mention` - mention template string
  - default: `<a href='#'><%= mention %></a>`
 - `url` - url template string
  - default: `<a href='#'><%= url %></a>`

E.g:

    var htmlTweet = require('html-tweet')(
      { hashtag: '<a class=\'hashtag\' href=\'#\'><%= hashtag %></a>'
      , mention: '<a class=\'mention\' href=\'#\'><%= mention %></a>'
      , url: '<a class=\'url\' href=\'#\'><%= url %></a>'
      })

## install

    npm install html-tweet