const headerone = document.querySelector('h1','h2')
console.log('h1',headerone)
headerone.style.color= "yellow'";
let test = document.getElementById("test");

test.addEventListener("mouseleave", function( event ) {
  event.target.style.color="Blue";

  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

test.addEventListener("mouseout", function( event ) {
  event.target.style.color = "orange";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

