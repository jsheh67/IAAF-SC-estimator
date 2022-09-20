const functions = require("./Functions");

describe("Calc Points Tests",()=>{
    test('calculatesMax100mScore',()=>{
        expect(functions.calcPoints(16.96,25.5987,1.986,9.46)).toBe(1400);
    });

    test('17secondsScore0',()=>{
        expect(functions.calcPoints(16.96,25.5987,1.9686, 17)).toBe(0);
    })
})