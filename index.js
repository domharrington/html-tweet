module.exports = htmlTweet

var twitterText = require('twitter-text')
  , _ = require('lodash')

function htmlTweet(options) {
  options = _.extend(
    { hashtag: '<a href=\'#\'><%= hashtag %></a>'
    , mention: '<a href=\'#\'><%= mention %></a>'
    , url: '<a href=\'#\'><%= url %></a>'
    }, options)

  return function (tweet) {
    var hashtags = twitterText.extractHashtags(tweet)
      , mentions = twitterText.extractMentions(tweet)
      , urls = twitterText.extractUrls(tweet)

    if (hashtags) {
      hashtags.forEach(function (hashtag) {
        hashtag = '#' + hashtag
        tweet = tweet.replace(hashtag, _.template(options.hashtag, { hashtag: hashtag }))
      })
    }

    if (mentions) {
      mentions.forEach(function (mention) {
        mention = '@' + mention
        tweet = tweet.replace(mention, _.template(options.mention, { mention: mention }))
      })
    }

    if (urls) {
      urls.forEach(function (url) {
        tweet = tweet.replace(url, _.template(options.url, { url: url }))
      })
    }

    return tweet
  }
}