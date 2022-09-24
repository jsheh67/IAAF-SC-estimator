import { useForm } from "react-hook-form";
import { useState } from 'react';

import ResultTable from "./ResultTable";
import EventSelection from "./EventSelection";
import * as D from "./Data";
import {calcPoints, calcTime, convertToSeconds, getConstants } from "./Functions";
import Description from "./Description";

function Calculator({resultList, setResultList}){

    const[resultId, setResultId]= useState(1);

    const idIncrement = ()=>{
        setResultId(resultId=>resultId+1);
    };

    const { register, handleSubmit, setValue,formState: { errors } } = useForm({
        mode: "onChange"
      });


    const onSubmitCalcPoints=(OBJ)=>{
        if(OBJ.minutes=="" && OBJ.seconds=="" &&OBJ.miliseconds==""){
         
        }else{
        OBJ.id=resultId;
        idIncrement();

        OBJ.time= convertToSeconds(OBJ.minutes, OBJ.seconds, OBJ.miliseconds);

        let c= getConstants(OBJ.event);
        OBJ.points = calcPoints(c.min, c.A, c.c, OBJ.time);

        console.log(OBJ);
        setResultList([OBJ,...resultList]);
        console.log(resultList);
        }
    }
    
    

   
    // formatTime(131.5);


    const onSubmitCalcTime=(OBJ)=>{
        if(OBJ.points==""){

        }else{
            OBJ.id=resultId;
            idIncrement();

            let c= getConstants(OBJ.event);
            OBJ.time=calcTime(c.min, c.A, c.c, OBJ.points);

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
    }
       
    return(
        <>
        <Description />
        <div className="d-flex  justify-content-start">
        <div className="card col-5 me-4 mt-1 ms-5 rounded shadow ">
            <div id="header2" className="card-header bg-gradient">
                <h4 className="pt-1 mb-0 text-light"> Calculator </h4>
            </div>

            <div className="card-body pt-1">
            <form id="calculate-points-form">
                <div className="form-group py-1">
                    <label className="form-label mt-1 " htmlFor="selectEvent">Select Event</label>
                    <select className="form-control" id="selectEvent"
                    {...register("event",{required:""})}>

                       <EventSelection />

                    </select>
                    {/* {errorMessage()} */}
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
        </>
    )


}
export default Calculator;