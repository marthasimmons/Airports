const Airport  = require('./Airport')
const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Bag = require('./Bag')

describe('Airport', function() {
    test('has a name', function() {
        airport = new Airport({name: 'Liverpool'})
        
        expect(airport.name).toEqual('Liverpool')
    })
    
    test('has planes', function() {
        airport = new Airport({name: 'Berlin'})
        plane1 = new Plane
        plane2 = new Plane
        plane3 = new Plane

        airport.land(plane1)
        airport.land(plane2)
        airport.land(plane3)

        expect(airport.planes.length).toBe(3)
    })

    test('planes can take off', function() {
        airport = new Airport({name: 'Singapore'})
        plane1 = new Plane
        plane2 = new Plane
        plane3 = new Plane

        airport.land(plane1)
        airport.land(plane2)
        airport.land(plane3)
        airport.takeOff(plane1)

        expect(airport.planes.length).toBe(2)
    })

    test('can read passenger details', function () {
        airport = new Airport({name: 'Rio'})
        plane = new Plane
        passenger = new Passenger({name: 'Tim'})
        bag = new Bag(57)

        airport.land(plane)
        plane.board(passenger)
        passenger.addBag(bag)

        expect(plane.passengers[0].name).toEqual('Tim')
        expect(plane.passengers[0].bags[0].weight).toBe(57)
    })

})