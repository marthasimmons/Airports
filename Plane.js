class Plane{
    constructor () {
        this.passengers =[]
    }

    board (passenger) {
        this.passengers.push(passenger)
    }

    setLocation(currentAirport) {
        this.currentAirport = currentAirport 
    }

    setDestination(destinationAirport) {
        this.destinationAirport = destinationAirport
    }
}

module.exports = Plane