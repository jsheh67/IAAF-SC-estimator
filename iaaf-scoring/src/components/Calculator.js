import { useForm } from "react-hook-form";
import ResultTable from "./ResultTable";
import { useState } from 'react';

function Calculator({resultList, setResultList}){

    const[resultId, setResultId]= useState(1);
    console.log(resultId);

   
    const idIncrement = ()=>{
        setResultId(resultId=>resultId+1);
    };

    

    const { register, handleSubmit, setValue,formState: { errors } } = useForm({
        mode: "onChange"
      });

    const events=["100 m","200m","300m","400m","500m","600m","800m","1000m", "1500m",
                "1 mile", "2000m", "3000m" ];
    
    const hundredStats={"min":16.79, "A":30.417, "c":1.92}
    const twoHundredStats={"min":35.05, "A":6.606, "c":1.925}
    const threeStats={"min":57.169, "A":1.85, "c":1.9971}
    const fourStats={"min":78.9, "A":1.0547, "c":1.9923}
    const fiveStats={"min":103.74, "A":0.62169, "c":1.9869}
    const sixStats={"min":128.919, "A":0.43976, "c":1.972}
    const eightStats={"min":181.04, "A":0.2341, "c":1.967}
    const kStats={"min":234.82, "A":0.1677, "c":1.92446} // could use some work sumsq kinda high here
    const fifteenStats={"min":382.6006, "A":0.05070779, "c":1.9624}
    const mileStats={"min":411.2607, "A":0.04853, "c":1.9455}  


    const eventSelectionFactory=()=>{
        return(events.map(e=>{
            return(<option key={e+"key"} value={e}>{e}</option >)
        }))
    } 

    const calcPoints=(min, a, c, time)=>{
        console.log(min);
        console.log(a);
        console.log(c);
        console.log(time);

        return Math.ceil(a*(Math.pow((Math.abs(time-min)),c)));
        // return (a*(Math.pow((time-min),c)));
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
    

    const onSubmitCalcPoints=(OBJ)=>{

        console.log("hey")
        
       OBJ.id=resultId;
        
        idIncrement();
        console.log(OBJ);

        OBJ.time= convertToSeconds(OBJ.minutes, OBJ.seconds, OBJ.miliseconds);

        switch(OBJ.event){
            case "100 m":
                OBJ.points=calcPoints(hundredStats.min, hundredStats.A, hundredStats.c, OBJ.time);
                break;
            case "200m":
                OBJ.points=calcPoints(twoHundredStats.min, twoHundredStats.A, twoHundredStats.c, OBJ.time);
                break;
            case"300m":
                OBJ.points=calcPoints(threeStats.min, threeStats.A, threeStats.c, OBJ.time);
                break;
            case"400m":
                OBJ.points=calcPoints(fourStats.min, fourStats.A, fourStats.c, OBJ.time);
                break;
            case"500m":
                OBJ.points=calcPoints(fiveStats.min, fiveStats.A, fiveStats.c, OBJ.time);
                break;
            case"600m":
                OBJ.points=calcPoints(sixStats.min, sixStats.A, sixStats.c, OBJ.time);
                break;
            case"800m":
                OBJ.points=calcPoints(eightStats.min, eightStats.A, eightStats.c, OBJ.time);
                break;
            case"1000m":
                OBJ.points=calcPoints(kStats.min, kStats.A, kStats.c, OBJ.time);
                break;
            case"1500m":
                OBJ.points=calcPoints(fifteenStats.min, fifteenStats.A, fifteenStats.c, OBJ.time);
                break;
            case"1 mile":
                OBJ.points=calcPoints(mileStats.min, mileStats.A, mileStats.c, OBJ.time);
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


        console.log(OBJ);
        // OBJ.minutes=
        // OBJ.seconds=
        // OBJ.milisecond=
        
        switch(OBJ.event){
            case "100 m":
                OBJ.time=calcTime(hundredStats.min, hundredStats.A, hundredStats.c, OBJ.points);
                break;
            case "200m":
                OBJ.time=calcTime(twoHundredStats.min, twoHundredStats.A, twoHundredStats.c, OBJ.points);
                break;
            case"300m":
                OBJ.time=calcTime(threeStats.min, threeStats.A, threeStats.c,OBJ.points );
                break;
            case"400m":
                OBJ.time=calcTime(fourStats.min, fourStats.A, fourStats.c, OBJ.points);
                break;
            case"500m":
                OBJ.time=calcTime(fiveStats.min, fiveStats.A, fiveStats.c, OBJ.points);
                break;
            case"600m":
                OBJ.time=calcTime(sixStats.min, sixStats.A, sixStats.c, OBJ.points);
                break;
            case"800m":
                OBJ.time=calcTime(eightStats.min, eightStats.A, eightStats.c, OBJ.points);
                break;
            case"1000m":
                OBJ.time=calcTime(kStats.min, kStats.A, kStats.c, OBJ.points);
                break;
            case"1500m":
                OBJ.time=calcTime(fifteenStats.min, fifteenStats.A, fifteenStats.c, OBJ.points);
                break;
            case"1 mile":
                OBJ.time=calcTime(mileStats.min, mileStats.A, mileStats.c, OBJ.points);
                break;
        }
        let timeSeconds = parseFloat(OBJ.time);
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
        <div className="container col-5 me-4 mt-5 ms-5 p-3 pb-5 rounded shadow border ">
            <h4> Calculator </h4>
            <form id="calculate-points-form">
                <div className="form-group py-1">
                    <label className="form-label" htmlFor="selectEvent">Select Event</label>
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
                <div class="input-group ">
                    <input type="number" aria-label="minutes" class="form-control"
                        placeholder="mm"
                         {...register("minutes")}/>
                    <span class="input-group-text">:</span>
                    <input type="number" aria-label="seconds" class="form-control"
                        placeholder="ss"
                        {...register("seconds")}/>
                        
                    <span class="input-group-text">.</span>
                    <input type="number" aria-label="miliseconds" class="form-control"
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
                    
                    <button  onClick={handleSubmit(onSubmitCalcPoints)} type="submit" className="btn get col mx-3 mb-2"> Points</button>
                    <button  onClick={handleSubmit(onSubmitCalcTime)}type="submit" className="btn  get col mx-3 mb-2"> Time</button>
                </div>
            </form>
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