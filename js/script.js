var link = document.querySelector(".open-form");
var open = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content");

link.addEventListener("click", function(event)
{
if (open.classList.contains("hidden"))
{
  event.preventDefault();
  open.classList.remove("hidden");
}
else
{
  event.preventDefault();
  open.classList.add("hidden");
}
});
