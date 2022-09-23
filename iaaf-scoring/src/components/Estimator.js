import { useForm } from "react-hook-form";
import { useState } from 'react';
import EstimatorResultTable from "./EstimatorResultTable";

import { getDistance, calcPoints, calcTime, convertToSeconds, getConstants  } from "./Functions";
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
                "1600m","1 mile", "3000m","3200m" ,"2 mile", "5000m", "10000m" ];
    
    const eventSelectionFactory=()=>{
        return(events.map(e=>{
            return(<option key={e+"key"} value={e}>{e}</option >)
        }))
    } 

  
    // }

    const getPoints=(event, time)=>{
        let constant= getConstants(event);
        console.log(constant);
        let points=calcPoints(constant.min, constant.A, constant.c, time);
        console.log(points);
        return points;
    }

    const calculateTime=(event, points)=>{
        let constant= getConstants(event);
        let time=calcTime(constant.min,constant.A, constant.c, points)
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

                <div className="card-header bg-dark">
                    <h4 className="pt-1 mb-0 text-light">Estimator</h4>
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

                <div className="row align-items-end ">
                    <div className="col-7 form-group py-1 pb-0">
                        <label className="form-label " htmlFor="selectEvent1">Event to Estimate</label>
                        <select className="form-control" id="selectEvent1"
                        {...register("eventEstimate",{required:""})}>

                            {eventSelectionFactory()}

                        </select>
                        {/* <p className="form-error-message">{errors.types?.message}</p> */}
                    </div>

                  
                    <div className="col-5 form-check py-1 pb-0">
                    <input className="form-check-input p-1" type="checkbox" value="" id="mainEvent"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Main Event?
                    </label>
                    </div>
                </div>

                <div className="form-group py-2 pb-3">
                    
                   
                    <input className="m-1"id="men"{...register("gender", { required: true })} type="radio" value="Men's" /> 
                    <label className="me-5" htmlFor="men">Men</label>
                   
                    <input className="m-1" id="women"{...register("gender", { required: true })} type="radio" value="Women's" />
                    <label className="" htmlFor="women">Women</label>
                    
                </div>

                    <div className="row">
                        <button onClick={handleSubmit(onSubmitEstimate)} type="submit" className="btn get col mx-3 mb-2 " >Estimate Time</button>
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