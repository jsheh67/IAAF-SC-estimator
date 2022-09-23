
// import * as D from "./Data";

const functions={
    calcPoints: function (min, a, c, time){
    if(time>min){
        return 0;
    }else{
        return Math.ceil(a*(Math.pow((Math.abs(time-min)),c)));
    }
},

    calcTime: function (min, a, c,points){
    return (-((Math.pow((points/a),(1/c)))-min)).toFixed(2);
},

    convertToSeconds: function (min, sec, mili){
    const length= (mili + '').replace('.', '').length;
    sec=parseInt(sec);
    min=parseInt(min);
    mili=parseInt(mili);

    if(isNaN(mili)){
        mili=0;
    }
    if(isNaN(sec)){
        sec=0;
    }
    if(isNaN(min)){
        min=0;
    }
    return (parseFloat(min*60 + sec+ (mili)/Math.pow(10,length)));
},
    getConstants: function(event){
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
        let stats;
        switch(event){
            case "100m":
                stats=hundredStats;
                break;
            case "200m":
                stats=twoHundredStats;
                break;
            case"300m":
                stats=threeStats;
                break;
            case"400m":
                stats=fourStats;
                break;
            case"500m":
                stats=fiveStats;
                break;
            case"600m":
                stats=sixStats;
                break;
            case"800m":
                stats=eightStats;
                break;
            case"1000m":
                stats=kStats;
                break;
            case"1500m":
                stats=fifteenStats;
            case"1600m":
                stats=mileStats;
                break;
            case"1 mile":
                stats=mileStats;
                break;
            case"3000m":
                stats=threeKStats;
                break;
            case"3200m":
                stats=twoMStats;
                break;
            case"2 mile":
                stats=twoMStats;
                break;
            case"5000m":
                stats=fiveKStats;
                break;
            case"10000m":
                stats=tenKStats;
                break;
        }
        return stats;
    },

//---ESTIMATOR---------------
    getDistance: function(distance){
        let result=0;
        if(distance=="1 mile"){
            result= 1609;
        }else if(distance=="2 mile"){
            result= 3218;
        }else{
            result=distance.substring(0,distance.length -1);
        }
        console.log(result)
        return result;
    }
}

module.exports= functions