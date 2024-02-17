//Create superhero objets
function superhero(name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false
    this.displayInfo = function() {
        console.log(`Superheroes information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes':'Leader: No'}
        `)
    }

    this.becomeLeader = function() {
        this.isLeader = true
        console.log(`${this.name} has become the leader of the superheroes`)
    }
}

const superman = new superhero('clark', 'blue', 'super fuerza')
const batman = new superhero('bruce', 'black', 'mucha plata')
const acuaman = new superhero('arthur', 'yellow', 'habla con peces')

superman.displayInfo()
batman.displayInfo()
acuaman.displayInfo()

superman.becomeLeader();
superman.displayInfo()
batman.displayInfo()
acuaman.displayInfo()