class Airport {
    static airports = []
    constructor ({name}) {
        this.name = name
        this.planes = []
        Airport.airports.push(this)
        
    }

    land(plane) {
        this.planes.push(plane)
        plane.currentAirport = this
    }

    takeOff(plane) {
        const x = this.planes.indexOf(plane)
        this.planes.splice(x,1)
        
        const destination = plane.destinationAirport 
        destination.land(plane)
        }
    }


module.exports = Airport 