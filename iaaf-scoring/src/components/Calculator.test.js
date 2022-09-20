const Calculator= require('./Calculator.js');

test('calculatesMax100Score',()=>{
    expect(calcPoints(16.96,25.5987,1.986,9.46)).toBe(1400);
})