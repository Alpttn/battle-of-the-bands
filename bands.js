
let bandNumber = 1

const takeNumber = function (bandName) {
    
        return `${bandNumber++}. ${bandName}`
        
    }

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console


const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console
const kitty = takeNumber("hellokitty")
console.log(kitty)  // This should print "2. Underdogs" in the console
const rabbits = takeNumber("rabbits")
console.log(rabbits)  // This should print "2. rabbitsdogs" in the console



