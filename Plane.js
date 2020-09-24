class Plane{
    constructor () {
        this.passengers =[]
    }

    board (passenger) {
        this.passengers.push(passenger)
    }
}

module.exports = Plane