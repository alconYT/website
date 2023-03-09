function check() {
  var ingredients = document.getElementById("ingredients").value;
  var allergies = document.getElementById("allergies").value;
  var result = document.getElementById("result");

  if (ingredients.includes(allergies)) {
    result.innerHTML = "Not safe";
    result.style.color = "red";
  } else {
    result.innerHTML = "It's safe to eat";
    result.style.color = "green";
  }
}
