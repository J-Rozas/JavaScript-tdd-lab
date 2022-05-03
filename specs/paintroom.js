const assert = require('assert');
const Paint = require('../models/paint.js')
// const Decorator = require('../models/decorator.js')
const Room = require('../models/room.js')

describe('Paint', function() {
    let paint
    this.beforeEach(function() {  
        paint = new Paint(5)
    });

    it('Should have some paint', function() {
        const actual = paint.quantity
        assert.strictEqual(actual, 5)
    });

    it('Should say it is not empty', function () {
        const actual = paint.isEmpty();
        assert.strictEqual(actual, false);
    });

    it('Should empty itself', function() {
        paint.emptyPaint();
        const actual = paint.quantity;
        assert.strictEqual(actual, 0)
    })
})

describe('Room', function() {
    let room
    this.beforeEach(function() {  
        room = new Room(5)
    })

    it("Should start not painted", function() {
        const actual = room.isPainted; 
        assert.strictEqual(actual, false)
    })
})