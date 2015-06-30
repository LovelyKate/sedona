var link = document.querySelector(".open-form");
var action = document.querySelector(".modal-content");

link.addEventListener("click", function(event) {

if (action.classList.contains("hidden")) {
  event.preventDefault();
  action.classList.remove("hidden");
}
else {
  event.preventDefault();
  action.classList.add("hidden");
}

});
