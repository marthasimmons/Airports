class Airport {
    constructor ({name}) {
        this.name = name
        this.planes = []
    }

    land(plane) {
        this.planes.push(plane)
    }

    takeOff(plane) {
        var x
        for (x = 0; x < this.planes.length; x++) {
            if (this.planes[x] == plane) {
                this.planes.splice(x,1)
            }
        }
    }
}

module.exports = Airport 