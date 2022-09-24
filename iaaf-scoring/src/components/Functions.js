
// import * as D from "./Data";

const functions={
    calcPoints: function (min, a, c, time){
    if(time>min){
        return 0;
    }else{
        return Math.round(a*(Math.pow((Math.abs(time-min)),c)));
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
    //A bit of an abomination
    getConstants: function(event,gender){
        const isWomen=(gender!=="Women's");

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

        const whundredStats={"min":21.99, "A":9.9315, "c":2}
        const wtwoHundredStats={"min":45.49657, "A":2.2412, "c":2}
        const wthreeStats={"min":76.9969, "A":0.69989, "c":2}
        const wfourStats={"min":109.99055, "A":0.335053765, "c":2}
        const wfiveStats={"min":145.49325, "A":0.187607, "c":2}
        const wsixStats={"min":179.991599, "A":0.129012, "c":2}
        const weightStats={"min":249.99568, "A":0.2341, "c":2}
        const wkStats={"min":330, "A":0.03819848, "c":2} // could use some work sumsq kinda high here
        const wfifteenStats={"min":540.0278, "A":0.011651, "c":2}
        const wmileStats={"min":579.98704, "A":0.04853, "c":2} 
        const wthreeKStats ={"min":1200, "A":0.0025389499, "c":2} 
        const wtwoMStats={"min":1297.308, "A":0.002150606, "c":2}
        const wfiveKStats ={"min":2101.8472781, "A":0.000805319, "c":2} 
        const wtenKStats={"min":4501.847, "A":0.00017094, "c":2}
        let stats;
        switch(event){
            case "100m":
                stats= isWomen? hundredStats: whundredStats;
                break;
            case "200m":
                stats= isWomen? twoHundredStats:wtwoHundredStats;
                break;
            case"300m":
                stats= isWomen? threeStats:wthreeStats;
                break;
            case"400m":
                stats=isWomen?fourStats:wfourStats;
                break;
            case"500m":
                stats=isWomen?fiveStats:wfiveStats;
                break;
            case"600m":
                stats=isWomen?sixStats:wsixStats;
                break;
            case"800m":
                stats=isWomen?eightStats:weightStats;
                break;
            case"1000m":
                stats=isWomen?kStats:wkStats;
                break;
            case"1500m":
                stats=isWomen?fifteenStats:wfifteenStats;
            case"1600m":
                stats=isWomen?mileStats:wmileStats;
                break;
            case"1 mile":
                stats=isWomen?mileStats:wmileStats;
                break;
            case"3000m":
                stats=isWomen?threeKStats:wthreeKStats;
                break;
            case"3200m":
                stats=isWomen?twoMStats:wtwoMStats;
                break;
            case"2 mile":
                stats=isWomen?twoMStats:wtwoMStats;
                break;
            case"5000m":
                stats=isWomen?fiveKStats:wfiveKStats;
                break;
            case"10000m":
                stats=isWomen?tenKStats:wtenKStats;
                break;
        }
        return stats;
    },

    timeFormater: function(min, sec, mili){
        let result="";
        if (min!=0){
            result+=(min+":")
        }
        if((sec.length==1 || sec<10) && sec!="" && min!=0){
            result+="0"+sec+"."
        }
        else if(sec.length==0){
            result+="00."
        }else{
            result+=sec+".";
        }
        if(mili.length==0){
            result+="0"
        }
        result+=mili;

        return result;
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
    //  getPoints: function(event, time, gender){
    //     let constant= getConstants(event, gender);
    //     console.log(constant);
    //     let points=calcPoints(constant.min, constant.A, constant.c, time);
    //     console.log(points);
    //     return points;
    // },

    // getTime: function(event, points, gender){
    //     let constant= getConstants(event, gender);
    //     let time=calcTime(constant.min,constant.A, constant.c, points)
    //     return time;
    // }
}

module.exports= functions