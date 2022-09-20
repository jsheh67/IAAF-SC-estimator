
const functions = require("./Functions");

    const hundredStats={"min":16.96, "A":25.5987, "c":1.986}
    const twoHundredStats={"min":35.447, "A":5.2215, "c":1.99238}
    const threeStats={"min":57.169, "A":1.85, "c":1.9971}
    const fourStats={"min":78.9, "A":1.0547, "c":1.9923}
    const fiveStats={"min":103.74, "A":0.62169, "c":1.9869}
    const sixStats={"min":128.919, "A":0.43976, "c":1.972}
    const eightStats={"min":181.04, "A":0.2341, "c":1.967}
    const kStats={"min":235.92, "A":0.1399, "c":1.959} // could use some work sumsq kinda high here
    const fifteenStats={"min":382.6006, "A":0.05070779, "c":1.9624}
    const mileStats={"min":411.2607, "A":0.04853, "c":1.9455} 
    const threeKStats ={"min":831.72, "A":0.0120116, "c":1.94188} 
    const twoMStats={"min":896.2759, "A":0.0102747, "c":1.94368}
    const fiveKStats ={"min":1422.77, "A":0.00463078, "c":1.92909} 
    const tenKStats={"min":3114.21, "A":0.0008763, "c":1.93606}


describe("Calc Points Tests",()=>{
    test('calculatesMax100mScore',()=>{
        expect(functions.calcPoints(hundredStats.min,hundredStats.A,hundredStats.c,9.46)).toBe(1400);
    });

    test('17second100mScores0',()=>{
        expect(functions.calcPoints(hundredStats.min,hundredStats.A,hundredStats.c, 17)).toBe(0);
    });
    //1 point off - refine equations/rounding
    test('calculatesSame800AsTable',()=>{
        expect(functions.calcPoints(eightStats.min,eightStats.A,eightStats.c,110.93 )).toBe(1000);
    });
})

describe("Calc Time Tests",()=>{
    test('calculates1400Score100m',()=>{
        expect(functions.calcTime(hundredStats.min,hundredStats.A,hundredStats.c,1400)).toBe("9.46");
    });

    test('17secondsScore0',()=>{
        expect(functions.calcTime(hundredStats.min,hundredStats.A,hundredStats.c, 0)).toBe("16.96");
    });
    //1 point off - refine equations/rounding
    test('800m1000pointVSTable',()=>{
        expect(functions.calcTime(eightStats.min,eightStats.A,eightStats.c,1000 )).toBe("110.93");
    });
})

describe("Convert To total Seconds tests",()=>{
    test("can calculate with minutes",()=>{
        expect(functions.convertToSeconds(20,32,60)).toBe(1232.6);
    });
    test("can calculate without minutes",()=>{
        expect(functions.convertToSeconds(0,31,98)).toBe(31.98);
    });
    test("can calculate with naN minutes",()=>{
        expect(functions.convertToSeconds("a",31,98)).toBe(31.98);
    });
    test("can calculate with naN seconds",()=>{
        expect(functions.convertToSeconds(5,"po",98)).toBe(300.98);
    });
})

describe("Get Distance tests",()=>{
    test("should get 1609 for mile",()=>{
        expect(functions.getDistance("1 mile")).toBe(1609);
    });
    test("should get 3218 for 2 mile",()=>{
        expect(functions.getDistance("2 mile")).toBe(3218);
    });
    test("should get 5000 for 5000m",()=>{
        expect(functions.getDistance("5000m")).toBe("5000");
    });
})