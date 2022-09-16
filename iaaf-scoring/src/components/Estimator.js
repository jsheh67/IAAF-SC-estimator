import { useForm } from "react-hook-form";
import { useState } from 'react';

import EstimatorResultTable from "./EstimatorResultTable";

function Estimator({estResults, setEstResults}){

    const { register, handleSubmit, setValue,formState: { errors } } = useForm({
        mode: "onChange"
    });

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

    const events=["100m","200m","300m","400m","500m","600m","800m","1000m", "1500m", 
                "1600m","1 mile", "2000m", "3000m","3200m" ,"2 mile", "5000m", "10000m" ];
    
    const eventSelectionFactory=()=>{
        return(events.map(e=>{
            return(<option key={e+"key"} value={e}>{e}</option >)
        }))
    } 

    const calcPoints=(min, a, c, time)=>{
        if(time>min){
            return 0;
        }else{
            return Math.ceil(a*(Math.pow((Math.abs(time-min)),c)));
        }
    }

    const calcTime=(min, a, c,points)=>{
        return (-((Math.pow((points/a),(1/c)))-min)).toFixed(2);
    }

    const convertToSeconds=(min, sec, mili)=>{
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

    const getPoints=(event, time)=>{
        let points;
        switch(event){
            case "100m":
                points=calcPoints(hundredStats.min, hundredStats.A, hundredStats.c, time);
                break;
            case "200m":
                points=calcPoints(twoHundredStats.min, twoHundredStats.A, twoHundredStats.c, time);
                break;
            case"300m":
                points=calcPoints(threeStats.min, threeStats.A, threeStats.c,time);
                break;
            case"400m":
                points=calcPoints(fourStats.min, fourStats.A, fourStats.c, time);
                break;
            case"500m":
                points=calcPoints(fiveStats.min, fiveStats.A, fiveStats.c,time);
                break;
            case"600m":
                points=calcPoints(sixStats.min, sixStats.A, sixStats.c, time);
                break;
            case"800m":
                points=calcPoints(eightStats.min, eightStats.A, eightStats.c, time);
                break;
            case"1000m":
                points=calcPoints(kStats.min, kStats.A, kStats.c, time);
                break;
            case"1500m":
                points=calcPoints(fifteenStats.min, fifteenStats.A, fifteenStats.c, time);
                break;
            case"1600m":
                time = time*1.005;
                points=calcPoints(mileStats.min, mileStats.A, mileStats.c, time)
            case"1 mile":
                points=calcPoints(mileStats.min, mileStats.A, mileStats.c, time);
                break;
            case"3000m":
                points=calcPoints(threeKStats.min, threeKStats.A, threeKStats.c, time);
                break;
            case"3200m":
                time = time*1.005;
                points=calcPoints(twoMStats.min, twoMStats.A, twoMStats.c, time);
                break;
            case"2 mile":
                points=calcPoints(twoMStats.min, twoMStats.A, twoMStats.c, time);
                break;
            case"5000m":
                points=calcPoints(fiveKStats.min, fiveKStats.A, fiveKStats.c,time);
                break;
            case"10000m":
                points=calcPoints(tenKStats.min, tenKStats.A, tenKStats.c, time);
                break;

        }
        return points;
    }

    const calculateTime=(event, points)=>{
        let time;
        switch(event){
            case "100m":
                time=calcTime(hundredStats.min, hundredStats.A, hundredStats.c, points);
                break;
            case "200m":
                time=calcTime(twoHundredStats.min, twoHundredStats.A, twoHundredStats.c, points);
                break;
            case"300m":
                time=calcTime(threeStats.min, threeStats.A, threeStats.c, points );
                break;
            case"400m":
                time=calcTime(fourStats.min, fourStats.A, fourStats.c, points);
                break;
            case"500m":
                time=calcTime(fiveStats.min, fiveStats.A, fiveStats.c, points);
                break;
            case"600m":
                time=calcTime(sixStats.min, sixStats.A, sixStats.c, points);
                break;
            case"800m":
                time=calcTime(eightStats.min, eightStats.A, eightStats.c, points);
                break;
            case"1000m":
                time=calcTime(kStats.min, kStats.A, kStats.c, points);
                break;
            case"1500m":
                time=calcTime(fifteenStats.min, fifteenStats.A, fifteenStats.c, points);
                break;
            case"1 mile":
                time=calcTime(mileStats.min, mileStats.A, mileStats.c, points);
                break;
            case"1600m":
                time=calcTime(mileStats.min, mileStats.A, mileStats.c, points);
                time = time/1.005;
                break;
            case"3000m":
                time=calcTime(threeKStats.min, threeKStats.A, threeKStats.c, points);
                break;
            case"3200m":
                time=calcTime(twoMStats.min, twoMStats.A, twoMStats.c, points);
                time = time/1.005;
                break;
            case"2 mile":
                time=calcTime(twoMStats.min, twoMStats.A, twoMStats.c, points);
                break;
            case"5000m":
                time=calcTime(fiveKStats.min, fiveKStats.A, fiveKStats.c, points);
                break;
            case"10000m":
                time=calcTime(tenKStats.min, tenKStats.A, tenKStats.c, points);
                break;
        }
        return time;
    }

    const getDistance=(distance)=>{
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




    const onSubmitEstimate=(OBJ)=>{
       

        OBJ.time1= convertToSeconds(OBJ.minutes1, OBJ.seconds1, OBJ.miliseconds1);
        OBJ.time2= convertToSeconds(OBJ.minutes2, OBJ.seconds2, OBJ.miliseconds2);

        let distance1=getDistance(OBJ.event1);
        let distance2=getDistance(OBJ.event2);
        let distanceEstimate=getDistance(OBJ.eventEstimate);


        let event1Points=getPoints(OBJ.event1, OBJ.time1);
        console.log(event1Points);

        let event2Points=getPoints(OBJ.event2, OBJ.time2);
        console.log(event2Points);

        let slope =((event1Points-event2Points)/(distance1-distance2))
        let estimatedPoints = Math.ceil(slope*(distanceEstimate-distance1)+event1Points);
        
        console.log("Estimation");
        console.log(estimatedPoints);

        let estimatedTime = calculateTime(OBJ.eventEstimate, estimatedPoints);
        console.log(estimatedTime);

        let timeSeconds = parseFloat(estimatedTime);
        console.log(timeSeconds);
        let secs= (timeSeconds%60);
        OBJ.EstimateMiliseconds= Math.ceil((secs%1).toFixed(2)*100);
        OBJ.EstimateSeconds=Math.floor(secs);
        OBJ.EstimateMinutes= Math.floor(timeSeconds/60);
        console.log(OBJ);

        setEstResults([OBJ, ...estResults]);
        
        console.log(estResults);
       
    }

    return(
        <div className="d-flex">
            <div className="card col-5 me-4 mt-5 ms-5 rounded shadow border">

                <div className="card-header bg-dark text-light">
                    <h4>Estimator</h4>
                </div>

                <div className="card-body pt-1">
                    <form>

                    <div className="row">

                    <div className="col">
                        <div className="form-group py-1">
                        <label className="form-label mt-1 " htmlFor="selectEvent1">Event 1</label>
                        <select className="form-control" id="selectEvent1"
                        {...register("event1",{required:""})}>

                            {eventSelectionFactory()}

                        </select>
                        {/* <p className="form-error-message">{errors.types?.message}</p> */}

                        </div>

                        <label className="form-label mt-1 " htmlFor="time1"> Time</label>
                        <div className="input-group ">
                            <input type="number" aria-label="minutes" className="form-control"
                                placeholder="mm"
                                {...register("minutes1")}/>
                            <span class="input-group-text">:</span>
                            <input type="number" id="time1" aria-label="seconds" className="form-control"
                                placeholder="ss"
                                {...register("seconds1")}/>
                                
                            <span className="input-group-text">.</span>
                            <input type="number" aria-label="miliseconds" className="form-control"
                                placeholder="ms"
                                {...register("miliseconds1")}/>
                        </div>
                    </div>

                    <div class="vr p-0"></div>

                    <div className="col">
                        <div className="form-group py-1">
                        <label className="form-label mt-1 " htmlFor="selectEvent1">Event 2</label>
                        <select className="form-control" id="selectEvent1"
                        {...register("event2",{required:""})}>

                            {eventSelectionFactory()}

                        </select>
                        {/* <p className="form-error-message">{errors.types?.message}</p> */}

                        </div>

                        <label className="form-label mt-1 " htmlFor="time1">Time</label>
                        <div className="input-group ">
                            <input type="number" aria-label="minutes" className="form-control"
                                placeholder="mm"
                                {...register("minutes2")}/>
                            <span class="input-group-text">:</span>
                            <input type="number" id="time1" aria-label="seconds" className="form-control"
                                placeholder="ss"
                                {...register("seconds2")}/>
                                
                            <span className="input-group-text">.</span>
                            <input type="number" aria-label="miliseconds" className="form-control"
                                placeholder="ms"
                                {...register("miliseconds2")}/>
                        </div>
                    </div>

                    </div>

                    <hr className="mt-4"></hr>

                    <div className="form-group py-1 pb-3">
                        <label className="form-label " htmlFor="selectEvent1">Event to Estimate</label>
                        <select className="form-control" id="selectEvent1"
                        {...register("eventEstimate",{required:""})}>

                            {eventSelectionFactory()}

                        </select>
                        {/* <p className="form-error-message">{errors.types?.message}</p> */}
                    </div>

                    <div className="row">
                        <button onClick={handleSubmit(onSubmitEstimate)} type="submit" className="btn get col mx-3 mb-2" >Estimate Time</button>
                    </div>






                    </form>
                </div>

        

            </div>

            <div className="col-5 me-5 ">
                <EstimatorResultTable 
                    estResults={estResults}
                    setEstResults={setEstResults}
                />
            </div>

        </div>
    )
}
export default Estimator;