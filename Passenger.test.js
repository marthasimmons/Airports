const Passenger = require('./Passenger')
const Bag = require('./Bag')

describe('Passenger', function () {
    test('has a name', function () {
        const person = new Passenger({name: "Martha"})
        expect(person.name).toEqual("Martha")
    })

    test('has bags', () => {
        const person = new Passenger({name: "Jess"})
        const handluggage = new Bag(8)
        const hullluggage = new Bag(25)
        person.addBag(handluggage)
        person.addBag(hullluggage)
        expect(person.bags.length).toBe(2)

    })

    test('can read weight of bag', () => {
        const person = new Passenger({name: 'Steve'})
        const backpack = new Bag(7)
        person.addBag(backpack)
        expect(person.bags[0].weight).toBe(7)

    })
})