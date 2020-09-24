const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Bag = require('./Bag')


describe('Plane', function() {
    test('has passengers', function() {
        plane = new Plane()
        person1 = new Passenger({name: "Jean"})
        person2 = new Passenger({name: 'Ethel'}) 
        person3 = new Passenger ({name: 'Freda'})

        plane.board(person1)
        plane.board(person2)
        plane.board(person3)

        expect(plane.passengers.length).toBe(3)
    })

    test('can read passenger details', function() {
        plane = new Plane()
        person = new Passenger({name: "Karl"})
        bag = new Bag(11)

        person.addBag(bag)
        plane.board(person)

        expect(plane.passengers[0].name).toEqual('Karl')
        expect(plane.passengers[0].bags[0].weight).toEqual(11)

    })
})