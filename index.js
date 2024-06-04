const informations = require("./information");
// console.log(informations);
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `${informations.name} est mon nom et je viens de la ${informations.campus}`,
    e: "UU",
    T: "VV",
  })
);
