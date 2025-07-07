function receivesAFunction(biggie) {
  biggie()
}

function returnsANamedFunction() {
  return function named() {
    console.log("I am a student.")
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('My name is Seth.')
  }
}