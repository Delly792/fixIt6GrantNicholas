//Option 1

let pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
pets.splice(5,1)
alert(pets)

pets.splice(3,1)
alert(pets)

pets.unshift('Nancy')
alert(pets)

pets.push('Grant')
alert(pets)

const rileyIndex = pets.indexOf('Riley')
alert(rileyIndex)

const cindyIndex = pets.indexOf('Cindy')
alert(cindyIndex)

let withMarmaduke = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
alert(withMarmaduke + " and " + "Marmaduke")

//Option 2

console.log(pets.shift())

pets.unshift('Barney')
alert(pets)

allPets = pets.concat(['Ted','Fred','Jed','Ned','Ed','Zed'])
alert(allPets)

console.log(allPets.shift())

let petss = pets.join()

allPets.unshift('Agnes')
alert(allPets)

