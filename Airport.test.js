const Airport  = require('./Airport')
const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Bag = require('./Bag')
const { airports } = require('./Airport')

const liverpoolAirport = new Airport({name: 'Liverpool'})
const berlinAirport = new Airport({name: 'Berlin'})
const singaporeAirport = new Airport({name: 'Singapore'})
const rioAirport = new Airport({name: 'Rio'})

const plane1 = new Plane 
const plane2 = new Plane 
const plane3 = new Plane 


describe('Airport', function() {
    test('has a name', function() {
        expect(liverpoolAirport.name).toEqual('Liverpool')
    })
    
    test('has planes', function() {
        
        liverpoolAirport.land(plane1)
        liverpoolAirport.land(plane2)
        liverpoolAirport.land(plane3)
       

        expect(liverpoolAirport.planes.length).toBe(3)
    })

    test('planes can take off', function() {
        plane1.setDestination(berlinAirport)
        plane2.setDestination(singaporeAirport)
        plane3.setDestination(rioAirport)

        liverpoolAirport.takeOff(plane1)
        liverpoolAirport.takeOff(plane2)
        liverpoolAirport.takeOff(plane3)

        expect(plane1.currentAirport).toBe(berlinAirport)
        expect(plane2.currentAirport).toBe(singaporeAirport)
        expect(plane3.currentAirport).toBe(rioAirport)
        expect(liverpoolAirport.planes.length).toEqual(0)
        
    })

    test('can read passenger details', function () {
        passenger = new Passenger({name: 'Tim'})
        handbag = new Bag(57)

        plane1.board(passenger)
        passenger.addBag(handbag)

        expect(plane1.passengers[0].name).toEqual('Tim')
        expect(plane1.passengers[0].bags[0].weight).toBe(57)
    })

    test('each airport knows about the others', function () {
        expect(Airport.airports).toBeTruthy

    })

})