const { expect } = require('@jest/globals');
desscribe('A test suite', () => {

    test("A fake test", () => {
        expect(3).toBe(3); //failing on puropse
    })


})