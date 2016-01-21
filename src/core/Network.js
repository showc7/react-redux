import $ from 'jquery';

let GOOGLE_API = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=';

export default class Network {

  static getFeedInfo(feedUrl) {
    return new Promise((resolve) => {
      $.ajax({
        url: GOOGLE_API + encodeURIComponent(feedUrl),
        dataType: 'json',
        success: function (data) {
          if (data.responseData.feed && data.responseData.feed.entries) {
            resolve(data.responseData.feed.entries);
          }
        }
      });
    });
  }
}
