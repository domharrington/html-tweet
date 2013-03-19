var htmlTweet = require('../')

describe('html-tweet', function () {
  it('should correctly convert text to HTML', function () {
    var h = htmlTweet()
    h('Hello #world, here is a @mention, here is a http://link.com')
      .should.equal('Hello <a href=\'#\'>#world</a>, here is a <a href=\'#\'>@mention</a>, here is a <a href=\'#\'>http://link.com</a>')
  })

  it('should allow overriding of template strings', function () {
    var h = htmlTweet(
      { hashtag: '<a class=\'hashtag\' href=\'#\'><%= hashtag %></a>'
      , mention: '<a class=\'mention\' href=\'#\'><%= mention %></a>'
      , url: '<a class=\'url\' href=\'#\'><%= url %></a>'
      })

    h('Hello #world, here is a @mention, here is a http://link.com')
      .should.equal('Hello <a class=\'hashtag\' href=\'#\'>#world</a>, here is a <a class=\'mention\' href=\'#\'>@mention</a>, here is a <a class=\'url\' href=\'#\'>http://link.com</a>')
  })
})