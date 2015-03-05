module.exports = htmlTweet

var twitterText = require('twitter-text')
  , extend = require('lodash.assign')
  , template = require('lodash.template')

function htmlTweet(options) {
  options = extend(
    { hashtag: '<a href=\'#\'><%= hashtag %></a>'
    , mention: '<a href=\'#\'><%= mention %></a>'
    , url: '<a href=\'#\'><%= url %></a>'
    }, options)

  var hashtagTemplate = template(options.hashtag)
    , mentionTemplate = template(options.mention)
    , urlTemplate = template(options.url)

  return function (tweet) {
    var hashtags = twitterText.extractHashtags(tweet)
      , mentions = twitterText.extractMentions(tweet)
      , urls = twitterText.extractUrls(tweet)

    if (hashtags) {
      hashtags.forEach(function (hashtag) {
        hashtag = '#' + hashtag
        tweet = tweet.replace(hashtag, hashtagTemplate({ hashtag: hashtag }))
      })
    }

    if (mentions) {
      mentions.forEach(function (mention) {
        mention = '@' + mention
        tweet = tweet.replace(mention, mentionTemplate({ mention: mention }))
      })
    }

    if (urls) {
      urls.forEach(function (url) {
        tweet = tweet.replace(url, urlTemplate({ url: url }))
      })
    }

    return tweet
  }
}