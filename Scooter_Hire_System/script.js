
const App = {
    version: '1.0.1',
    name: 'Scootoot',
    users: [],
    register (user) {
        this.users.push(user)
    }
}

class ChargingStation {

    static allStations = []

    static get allScooters () {
        let result = []
        ChargingStation.allStations.forEach(s => result = result.concat(s.scooters))
        return result
    }
    
    constructor(location,scooters){
        this.location = location
        this.scooters = scooters
        ChargingStation.allStations.push(this) // When a new station is made, add it to the static list of all stations
    }

    addScooter(scooter){
        scooter.charged = true
        this.scooters.push(scooter)
    }

    getScooter(scooter){
        if (this.scooters.length > 0){
            const scooter = this.scooters.pop()
            scooter.charged = false
            return scooter
        } else {
            throw new Error("No scooters available")
        }
    }
}

class User{

    constructor(name){
        this.name = name
    }
}

class Maintenance extends User{

    constructor(name,location){
        super(name)
        this.location = location
    }

    repair(){

    }
}

class Hirer extends User{
    
    hasScooter = false
    broken = false
    constructor(name,age,card){
        super(name)
        this.age = age
        this.card = card
    }

    //card = new CardDetails(1111)
    //user = new User("Sam", 26, card)

    hireScooter(scooter){
        if(this.age >= 18){
            if (scooter.charge == 100){
                this.hasScooter = true 
                scooter.hired = true 
            }
        }

        //max range = 32km
    }

    returnScooter(){

        //find nearby charging station
        //if found, return and make payment

    }

    makePayment(){
        user = new CardDetails(this.name) //
        user.Payment.takePayment()
    }

    markAsBroken(){
        broken = true
        Scooter.repair()
    }
}

class Scooter{

    hired = false
    charged = true
    location

    constructor(range){
        this.range = range
    }

    async charge(){
        if (this.charge < 100){
            console.log("Charging...")

            await new Promise(resolve => setTimeout(resolve, 2000))

            console.log("Fully charged")
            charge = 100
        }

    }

    isScooterReturned(scooter){
        if (Hirer.returnScooter = true){
            scooter.charge()
            Hirer.makePayment()
        }
    }

    repair(){
        //remove scooter from array and trigger maintenance personnel to repair the scooter

    }

}

class CardDetails{

    constructor(name, cardNumber, expiryDate, CVC){
        this.name = name
        this.cardNumber = cardNumber
        this.expiryDate = expiryDate
        this.CVC = CVC
    }

    takePayment(balance){
        newBalance = balance - (0.05 * Scooter.range) //????
        return "£"+newBalance
    }

}

const s1 = new Scooter(32)
const s2 = new Scooter(32)
const s3 = new Scooter(32)
const s4 = new Scooter(32)

const london = new ChargingStation("London", [s1,s2])
const manchester = new ChargingStation("Manchester", [s3,s4])

console.log(london)
console.log(s1)

module.exports = {HireApp, User, Maintenance,Hirer,Scooter,CardDetails}

// I think you left the gather!
//my gather disconnected i think. sorry. thanks for all your help!
// I'm not sure if the code actually works XD It would be nice to `node script.js` in the terminal just once to be sure
//i think it worked!
// Woo hoo!
//lol thanks Simon. have a nice weekend :)
// (☞ﾟヮﾟ)☞ see you next week