export function calcPoints(min, a, c, time){
    if(time>min){
        return 0;
    }else{
        return Math.ceil(a*(Math.pow((Math.abs(time-min)),c)));
    }
}

export function calcTime(min, a, c,points){
    return (-((Math.pow((points/a),(1/c)))-min)).toFixed(2);
}

export function convertToSeconds(min, sec, mili){
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
}

//---ESTIMATOR---------------
export function getDistance(distance){
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