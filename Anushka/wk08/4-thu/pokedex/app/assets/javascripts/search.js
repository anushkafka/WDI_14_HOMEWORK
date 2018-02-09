let options = {
  type: "GET",
  url: "https://pokeapi.co/api/v2/pokemon/"
};

$(document).ready(function() {
  $(".search-btn").click(function() {
    options.url = options.url + document.querySelector(".search-input").value;
    +"/";
    $.ajax(options).done(function(res) {
      console.log(res);

      imgElem = document.createElement("img");
      imgElem.src = res.sprites.front_shiny;
      document.querySelector(".image").appendChild(imgElem);

      imgHidden = document.createElement("input");
      imgHidden.name = "image";
      imgHidden.value = res.sprites.front_shiny;

      nameHidden = document.createElement("input");
      nameHidden.name = "name";
      nameHidden.value = res.name;

      document.querySelector(".header").textContent = res.name;
    });
  });
});

function savePokemon() {
  console.log("hi");
}
