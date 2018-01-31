let artist_suggestions = [];
let options = {
  type: "GET",
  data: {
    apikey: "have to put this proper way :)",
    // q_track: "back to december",
    // q_artist: "taylor%20swift",
    f_has_lyrics: 1,
    format: "jsonp"
    // callback: "jsonp_callback"
  },
  url:
    "http://api.musixmatch.com/ws/1.1/artist.search?q_artist=nightwish&page_size=30",

  // "http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=sexy%20and%20i%20know%20it&q_artist=lmfao",
  dataType: "jsonp",
  // jsonpCallback: "jsonp_callback",
  contentType: "application/json"
};

function onSearch() {
  console.log($(".input-search").val());
  $.ajax(options).done(function(res) {
    console.log(res);
    // res.message.body.track_list.forEach(element => {
    //   url = options_id.url;
    // });
  });
}

function onInputChange() {
  console.log("auto");
}

$(".input-search").autocomplete({
  source: function(req, res) {
    $.ajax(options).done(function(res) {
      console.log(res);
      res.message.body.artist_list.forEach(element => {
        artist_suggestions = artist_suggestions.concat(element.artist_name);
        // url = options_id.url;
      });
      res(artist_suggestions);
    });
  },
  minLength: 3
});
