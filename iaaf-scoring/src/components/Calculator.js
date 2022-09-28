import { useForm } from "react-hook-form";
import { useState } from 'react';

import ResultTable from "./ResultTable";
import EventSelection from "./EventSelection";
import {calcPoints, calcTime, convertToSeconds, getConstants } from "./Functions";
import Description from "./Description";

function Calculator({resultList, setResultList, showMessages}){

    const[resultId, setResultId]= useState(1);

    const idIncrement = ()=>{
        setResultId(resultId=>resultId+1);
    };

    const { register, handleSubmit, setValue,formState: { errors } } = useForm({
        mode: "onChange"
      });

    const clearForm=()=>{
        setValue("minutes","");
        setValue("seconds","");
        setValue("miliseconds","");
        setValue("points","");
    }

    const validateTime=(OBJ)=>{
       const regex = new RegExp('[^0-9]');
       return(regex.test(OBJ.minutes)||regex.test(OBJ.seconds)||(regex.test(OBJ.miliseconds)) )
    }

    const validatePoints=(OBJ)=>{
        const regex = new RegExp('[^0-9]');
        return(regex.test(OBJ.points));
     }


    const onSubmitCalcPoints=(OBJ)=>{
        if(validateTime(OBJ)===true){
            showMessages("Time fields must only include whole numbers");
        
        }else if(OBJ.minutes=="" && OBJ.seconds=="" &&OBJ.miliseconds==""){
         showMessages("Enter time to calculate points");
        }else if(OBJ.gender==null){
            showMessages("Select gender");
        }
        else{
        OBJ.id=resultId;
        idIncrement();
        OBJ.time= convertToSeconds(OBJ.minutes, OBJ.seconds, OBJ.miliseconds);
        let c= getConstants(OBJ.event,OBJ.gender);
        OBJ.points = calcPoints(c.min, c.A, c.c, OBJ.time);
        console.log(OBJ);
        setResultList([OBJ,...resultList]);
        console.log(resultList);
        clearForm();
        }
    }


    const onSubmitCalcTime=(OBJ)=>{
        if(validatePoints(OBJ)==true){
            showMessages("Points entry must only include whole numbers")
        }else if(OBJ.points==""){
            showMessages("Enter points to calculate time");
        }else if(OBJ.gender==null){
            showMessages("Select gender");
        }
        else{
            OBJ.id=resultId;
            idIncrement();

            let c= getConstants(OBJ.event,OBJ.gender);
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
            clearForm();
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
                     
                    <input className="m-1"id="men"{...register("gender")} type="radio" value="Men's" /> 
                    <label className="me-5" htmlFor="men">Men</label>
                   
                    <input className="m-1" id="women"{...register("gender")} type="radio" value="Women's" />
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
                  <p className="form-error-message">{errors.types?.message}</p>
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