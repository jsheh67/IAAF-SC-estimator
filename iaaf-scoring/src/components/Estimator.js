import { useForm } from "react-hook-form";
import { useState } from 'react';
import EstimatorResultTable from "./EstimatorResultTable";

import { getDistance, calcPoints, calcTime, convertToSeconds } from "./Functions";
import * as D from "./Data";

function Estimator({estResults, setEstResults}){

    const[resultId, setResultId]= useState(1);

    const idIncrement = ()=>{
        setResultId(resultId=>resultId+1);
    };

    const { register, handleSubmit, setValue,formState: { errors } } = useForm({
        mode: "onChange"
    });

    const events=["100m","200m","300m","400m","500m","600m","800m","1000m", "1500m", 
                "1600m","1 mile", "2000m", "3000m","3200m" ,"2 mile", "5000m", "10000m" ];
    
    const eventSelectionFactory=()=>{
        return(events.map(e=>{
            return(<option key={e+"key"} value={e}>{e}</option >)
        }))
    } 

  
    // }

    const getPoints=(event, time)=>{
        let points;
        switch(event){
            case "100m":
                points=calcPoints(D.hundredStats.min, D.hundredStats.A, D.hundredStats.c, time);
                break;
            case "200m":
                points=calcPoints(D.twoHundredStats.min, D.twoHundredStats.A, D.twoHundredStats.c, time);
                break;
            case"300m":
                points=calcPoints(D.threeStats.min, D.threeStats.A, D.threeStats.c,time);
                break;
            case"400m":
                points=calcPoints(D.fourStats.min, D.fourStats.A, D.fourStats.c, time);
                break;
            case"500m":
                points=calcPoints(D.fiveStats.min, D.fiveStats.A, D.fiveStats.c,time);
                break;
            case"600m":
                points=calcPoints(D.sixStats.min, D.sixStats.A, D.sixStats.c, time);
                break;
            case"800m":
                points=calcPoints(D.eightStats.min, D.eightStats.A, D.eightStats.c, time);
                break;
            case"1000m":
                points=calcPoints(D.kStats.min, D.kStats.A, D.kStats.c, time);
                break;
            case"1500m":
                points=calcPoints(D.fifteenStats.min, D.fifteenStats.A, D.fifteenStats.c, time);
                break;
            case"1600m":
                time = time*1.005;
                points=calcPoints(D.mileStats.min, D.mileStats.A, D.mileStats.c, time)
            case"1 mile":
                points=calcPoints(D.mileStats.min, D.mileStats.A, D.mileStats.c, time);
                break;
            case"3000m":
                points=calcPoints(D.threeKStats.min, D.threeKStats.A, D.threeKStats.c, time);
                break;
            case"3200m":
                time = time*1.005;
                points=calcPoints(D.twoMStats.min, D.twoMStats.A, D.twoMStats.c, time);
                break;
            case"2 mile":
                points=calcPoints(D.twoMStats.min, D.twoMStats.A, D.twoMStats.c, time);
                break;
            case"5000m":
                points=calcPoints(D.fiveKStats.min, D.fiveKStats.A, D.fiveKStats.c,time);
                break;
            case"10000m":
                points=calcPoints(D.tenKStats.min, D.tenKStats.A, D.tenKStats.c, time);
                break;

        }
        return points;
    }

    const calculateTime=(event, points)=>{
        let time;
        switch(event){
            case "100m":
                time=calcTime(D.hundredStats.min, D.hundredStats.A, D.hundredStats.c, points);
                break;
            case "200m":
                time=calcTime(D.twoHundredStats.min, D.twoHundredStats.A, D.twoHundredStats.c, points);
                break;
            case"300m":
                time=calcTime(D.threeStats.min, D.threeStats.A, D.threeStats.c, points );
                break;
            case"400m":
                time=calcTime(D.fourStats.min, D.fourStats.A, D.fourStats.c, points);
                break;
            case"500m":
                time=calcTime(D.fiveStats.min, D.fiveStats.A, D.fiveStats.c, points);
                break;
            case"600m":
                time=calcTime(D.sixStats.min, D.sixStats.A, D.sixStats.c, points);
                break;
            case"800m":
                time=calcTime(D.eightStats.min, D.eightStats.A, D.eightStats.c, points);
                break;
            case"1000m":
                time=calcTime(D.kStats.min, D.kStats.A, D.kStats.c, points);
                break;
            case"1500m":
                time=calcTime(D.fifteenStats.min, D.fifteenStats.A, D.fifteenStats.c, points);
                break;
            case"1 mile":
                time=calcTime(D.mileStats.min, D.mileStats.A, D.mileStats.c, points);
                break;
            case"1600m":
                time=calcTime(D.mileStats.min, D.mileStats.A, D.mileStats.c, points);
                time = time/1.005;
                break;
            case"3000m":
                time=calcTime(D.threeKStats.min, D.threeKStats.A, D.threeKStats.c, points);
                break;
            case"3200m":
                time=calcTime(D.twoMStats.min, D.twoMStats.A, D.twoMStats.c, points);
                time = time/1.005;
                break;
            case"2 mile":
                time=calcTime(D.twoMStats.min, D.twoMStats.A, D.twoMStats.c, points);
                break;
            case"5000m":
                time=calcTime(D.fiveKStats.min, D.fiveKStats.A, D.fiveKStats.c, points);
                break;
            case"10000m":
                time=calcTime(D.tenKStats.min, D.tenKStats.A, D.tenKStats.c, points);
                break;
        }
        return time;
    }


    const onSubmitEstimate=(OBJ)=>{

        OBJ.id = resultId;
        idIncrement();
       
        OBJ.time1= convertToSeconds(OBJ.minutes1, OBJ.seconds1, OBJ.miliseconds1);
        OBJ.time2= convertToSeconds(OBJ.minutes2, OBJ.seconds2, OBJ.miliseconds2);

        let distance1=getDistance(OBJ.event1);
        let distance2=getDistance(OBJ.event2);
        let distanceEstimate=getDistance(OBJ.eventEstimate);


        let event1Points=getPoints(OBJ.event1, OBJ.time1);
        console.log(event1Points);

        let event2Points=getPoints(OBJ.event2, OBJ.time2);
        console.log(event2Points);

        //might re work this-- logistic function maybe?
        let slope =((event1Points-event2Points)/(distance1-distance2))
        let estimatedPoints = Math.ceil(slope*(distanceEstimate-distance1)+event1Points);

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

                <div className="row align-items-end">
                    <div className="col-7form-group py-1 pb-3">
                        <label className="form-label " htmlFor="selectEvent1">Event to Estimate</label>
                        <select className="form-control" id="selectEvent1"
                        {...register("eventEstimate",{required:""})}>

                            {eventSelectionFactory()}

                        </select>
                        {/* <p className="form-error-message">{errors.types?.message}</p> */}
                    </div>

                  
                    <div class="col-5 form-check py-1 pb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Main Event
                    </label>
                    </div>
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