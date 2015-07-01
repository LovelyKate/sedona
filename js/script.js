var link = document.querySelector(".open-form");
var action = document.querySelector(".modal-content");

link.addEventListener("click", function(event) {

  event.preventDefault();

if (action.classList.contains("hidden")) {
  action.classList.remove("hidden");
}
else {
  action.classList.add("hidden");
}

});
