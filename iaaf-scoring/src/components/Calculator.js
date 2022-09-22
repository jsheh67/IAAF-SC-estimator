import { useForm } from "react-hook-form";
import { useState } from 'react';

import ResultTable from "./ResultTable";
import * as D from "./Data";
import {calcPoints, calcTime, convertToSeconds } from "./Functions";

function Calculator({resultList, setResultList}){

    const[resultId, setResultId]= useState(1);

    const idIncrement = ()=>{
        setResultId(resultId=>resultId+1);
    };

    const { register, handleSubmit, setValue,formState: { errors } } = useForm({
        mode: "onChange"
      });

    const events=["100 m","200m","300m","400m","500m","600m","800m","1000m", "1500m", 
                "1600m","1 mile", "2000m", "3000m","3200m" ,"2 mile", "5000m", "10000m" ];


    const eventSelectionFactory=()=>{
        return(events.map(e=>{
            return(<option key={e+"key"} value={e}>{e}</option >)
        }))
    } 

    const onSubmitCalcPoints=(OBJ)=>{
        
        OBJ.id=resultId;
        idIncrement();

        OBJ.time= convertToSeconds(OBJ.minutes, OBJ.seconds, OBJ.miliseconds);

        switch(OBJ.event){
            case "100 m":
                OBJ.points=calcPoints(D.hundredStats.min, D.hundredStats.A, D.hundredStats.c, OBJ.time);
                break;
            case "200m":
                OBJ.points=calcPoints(D.twoHundredStats.min, D.twoHundredStats.A, D.twoHundredStats.c, OBJ.time);
                break;
            case"300m":
                OBJ.points=calcPoints(D.threeStats.min, D.threeStats.A, D.threeStats.c, OBJ.time);
                break;
            case"400m":
                OBJ.points=calcPoints(D.fourStats.min, D.fourStats.A, D.fourStats.c, OBJ.time);
                break;
            case"500m":
                OBJ.points=calcPoints(D.fiveStats.min, D.fiveStats.A, D.fiveStats.c, OBJ.time);
                break;
            case"600m":
                OBJ.points=calcPoints(D.sixStats.min, D.sixStats.A, D.sixStats.c, OBJ.time);
                break;
            case"800m":
                OBJ.points=calcPoints(D.eightStats.min, D.eightStats.A, D.eightStats.c, OBJ.time);
                break;
            case"1000m":
                OBJ.points=calcPoints(D.kStats.min, D.kStats.A, D.kStats.c, OBJ.time);
                break;
            case"1500m":
                OBJ.points=calcPoints(D.fifteenStats.min, D.fifteenStats.A, D.fifteenStats.c, OBJ.time);
                break;
            case "1600m":
                OBJ.time = OBJ.time*1.005;
                OBJ.points=calcPoints(D.mileStats.min, D.mileStats.A, D.mileStats.c, OBJ.time)
            case"1 mile":
                OBJ.points=calcPoints(D.mileStats.min, D.mileStats.A, D.mileStats.c, OBJ.time);
                break;
            case"3000m":
                OBJ.points=calcPoints(D.threeKStats.min, D.threeKStats.A, D.threeKStats.c, OBJ.time);
                break;
            case"3200m":
                OBJ.time = OBJ.time*1.005;
                OBJ.points=calcPoints(D.twoMStats.min, D.twoMStats.A, D.twoMStats.c, OBJ.time);
                break;
            case"2 mile":
                OBJ.points=calcPoints(D.twoMStats.min, D.twoMStats.A, D.twoMStats.c, OBJ.time);
                break;
            case"5000m":
                OBJ.points=calcPoints(D.fiveKStats.min, D.fiveKStats.A, D.fiveKStats.c, OBJ.time);
                break;
            case"10000m":
                OBJ.points=calcPoints(D.tenKStats.min, D.tenKStats.A, D.tenKStats.c, OBJ.time);
                break;


        }
        console.log(OBJ);
        setResultList([OBJ,...resultList]);
        console.log(resultList);
    }
    

   
    // formatTime(131.5);


    const onSubmitCalcTime=(OBJ)=>{

        OBJ.id=resultId;
        idIncrement();

        switch(OBJ.event){
            case "100 m":
                OBJ.time=calcTime(D.hundredStats.min, D.hundredStats.A, D.hundredStats.c, OBJ.points);
                break;
            case "200m":
                OBJ.time=calcTime(D.twoHundredStats.min, D.twoHundredStats.A, D.twoHundredStats.c, OBJ.points);
                break;
            case"300m":
                OBJ.time=calcTime(D.threeStats.min, D.threeStats.A, D.threeStats.c,OBJ.points );
                break;
            case"400m":
                OBJ.time=calcTime(D.fourStats.min, D.fourStats.A, D.fourStats.c, OBJ.points);
                break;
            case"500m":
                OBJ.time=calcTime(D.fiveStats.min, D.fiveStats.A, D.fiveStats.c, OBJ.points);
                break;
            case"600m":
                OBJ.time=calcTime(D.sixStats.min, D.sixStats.A, D.sixStats.c, OBJ.points);
                break;
            case"800m":
                OBJ.time=calcTime(D.eightStats.min, D.eightStats.A, D.eightStats.c, OBJ.points);
                break;
            case"1000m":
                OBJ.time=calcTime(D.kStats.min, D.kStats.A, D.kStats.c, OBJ.points);
                break;
            case"1500m":
                OBJ.time=calcTime(D.fifteenStats.min, D.fifteenStats.A, D.fifteenStats.c, OBJ.points);
                break;
            case"1 mile":
                OBJ.time=calcTime(D.mileStats.min, D.mileStats.A, D.mileStats.c, OBJ.points);
                break;
            case"1600m":
                OBJ.time=calcTime(D.mileStats.min, D.mileStats.A, D.mileStats.c, OBJ.points);
                OBJ.time = OBJ.time/1.005;
                break;
            case"3000m":
                OBJ.time=calcTime(D.threeKStats.min, D.threeKStats.A, D.threeKStats.c, OBJ.points);
                break;
            case"3200m":
                OBJ.time=calcTime(D.twoMStats.min, D.twoMStats.A, D.twoMStats.c, OBJ.points);
                OBJ.time = OBJ.time/1.005;
                break;
            case"2 mile":
                OBJ.time=calcTime(D.twoMStats.min, D.twoMStats.A, D.twoMStats.c, OBJ.points);
                break;
            case"5000m":
                OBJ.time=calcTime(D.fiveKStats.min, D.fiveKStats.A, D.fiveKStats.c, OBJ.points);
                break;
            case"10000m":
                OBJ.time=calcTime(D.tenKStats.min, D.tenKStats.A, D.tenKStats.c, OBJ.points);
                break;
        }


        let timeSeconds = parseFloat(OBJ.time);
        console.log(timeSeconds);
        let secs= (timeSeconds%60);
        OBJ.miliseconds= Math.ceil((secs%1).toFixed(2)*100);
        OBJ.seconds=Math.floor(secs);
        OBJ.minutes= Math.floor(timeSeconds/60);
        console.log(OBJ);
        setResultList([OBJ,...resultList]);
        console.log(resultList);
    }
       
    return(
        <div className="d-flex  justify-content-start">
        <div className="card col-5 me-4 mt-5 ms-5 rounded shadow border ">
            <div className="card-header bg-dark">
                <h4 className="pt-1 mb-0 text-light"> Calculator </h4>
            </div>

            <div className="card-body pt-1">
            <form id="calculate-points-form">
                <div className="form-group py-1">
                    <label className="form-label mt-1 " htmlFor="selectEvent">Select Event</label>
                    <select className="form-control" id="selectEvent"
                    {...register("event",{required:""})}>

                        {eventSelectionFactory()}

                    </select>
                    {/* <p className="form-error-message">{errors.types?.message}</p> */}

                </div>

                <div className="form-group ">
                    
                   
                    <input className="m-1"id="men"{...register("gender", { required: true })} type="radio" value="Men's" /> 
                    <label className="me-5" htmlFor="men">Men</label>
                   
                    <input className="m-1" id="women"{...register("gender", { required: true })} type="radio" value="Women's" />
                    <label className=""htmlFor="women">Women</label>
                    
                </div>
                <hr></hr>

                <div className="row">
                    <label className="form-label col-7" htmlFor="seconds">Enter Time</label>
                    <label className="form-label col-5" htmlFor="points">Enter Points</label>
                </div>

                <div className="row ">
                    
                <div className="form-group col-6">  
                <div className="input-group ">
                    <input id="min" type="number" aria-label="minutes" className="form-control"
                        placeholder="mm"
                         {...register("minutes")}/>
                    <span className="input-group-text">:</span>
                    <input id="sec" type="number" aria-label="seconds" className="form-control"
                        placeholder="ss"
                        {...register("seconds")}/>
                        
                    <span className="input-group-text">.</span>
                    <input id="ms" type="number" aria-label="miliseconds" className="form-control"
                        placeholder="ms"
                        {...register("miliseconds")}/>
                </div>
                </div>
            
                <div className="form-group pb-3 col-5 offset-1">
                    {/* <label className="form-label" htmlFor="points">Enter Points</label> */}
                    <input type="number" id="points" className="form-control" placeholder=""
                        {...register("points")}/>

                </div>
                </div>
                <hr></hr>


                <div className="row">
                    <h5>Calculate</h5>
                    
                    <button  id="calcPoints" onClick={handleSubmit(onSubmitCalcPoints)} type="submit" className="btn get col mx-3 mb-2"> Points</button>
                    <button  id="calcTime" onClick={handleSubmit(onSubmitCalcTime)}type="submit" className="btn  get col mx-3 mb-2"> Time</button>
                </div>
            </form>
            </div>

            </div>

            <div className="col-5 me-5 ">
            <ResultTable 
                resultList={resultList}
                setResultList={setResultList}
                setResultId={setResultId}/>
            </div>


        </div>
    )


}
export default Calculator;