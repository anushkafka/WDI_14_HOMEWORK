let options = {
  type: "GET",
  url: "https://pokeapi.co/api/v2/pokemon/"
};

$(document).ready(function() {
  $(".search-btn").click(function() {
    options.url = options.url + document.querySelector(".search-input").value;
    +"/";
    debugger;
    $.ajax(options).done(function(res) {
      console.log(res);

      imgElem = document.createElement("img");
      imgElem.src = res.sprites.front_shiny;
      document.querySelector(".image").appendChild(imgElem);

      document.querySelector(".header").textContent = res.name;
    });
  });
});
