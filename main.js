let plainBread = document.getElementById("plain-bread");
const croissant = document.getElementById("croissant");
const button = document.getElementById("button-submit");

button.addEventListener("click", () => {
  let noun = document.getElementById("noun-input").value;
  if()
  plainBread = {
    kameria: 100000 * noun,
    sugar: 1.125 * noun,
    salt: 180 * noun,
    pfc: 10 * noun,
    east: 200 * noun,
    butter: 1000 * noun,
    honey: 500 * noun,
    milk: 300 * noun,
    cream: 1.875 * noun,
    water: 6.25 * noun,
  };
  document.getElementById("kameria-num").textContent = plainBread.kameria;
  document.getElementById("sugar-num").textContent = plainBread.sugar;
  document.getElementById("salt-num").textContent = plainBread.salt;
  document.getElementById("pfc-num").textContent = plainBread.pfc;
  document.getElementById("east-num").textContent = plainBread.east;
  document.getElementById("butter-num").textContent = plainBread.butter;
  document.getElementById("honey-num").textContent = plainBread.honey;
  document.getElementById("milk-num").textContent = plainBread.milk;
  document.getElementById("cream-num").textContent = plainBread.cream;
  document.getElementById("water-num").textContent = plainBread.water;
  console.log(plainBread);
});
