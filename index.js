// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (name) {
  // Alters original kittens
  kittens.push(name);
  return(kittens);
}

function destructivelyPrependKitten (name) {
  // Alters original kittens
  kittens.unshift(name);
  return(kittens);
}

function destructivelyRemoveLastKitten () {
  // Alters original kittens
  kittens.pop();
  return(kittens)
}

functions destructivelyRemoveFirstKitten () {
  // Alters original kittens
  kittens.shift()
}