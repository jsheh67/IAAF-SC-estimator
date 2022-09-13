import { useForm } from "react-hook-form";
import ResultTable from "./ResultTable";


function Calculator({resultList, setResultList}){

    const { register, handleSubmit, setValue,formState: { errors } } = useForm({
        mode: "onChange"
      });

    const events=["100 m","200m","300m","400m","600m","800m","1000m", "1500m",
                "1 mile", "2000m", "3000m" ];
    
    const hundredStats={"min":16.79, "A":30.417, "c":1.92}
    const twoHundredStats={"min":35.05, "A":6.606, "c":1.925}
    const threeStats={"min":57.169, "A":1.85, "c":1.9971}
    const fourStats={"min":78.9, "A":1.0547, "c":1.9923}
    const fiveStats={"min":103.74, "A":0.62169, "c":1.9869}
    

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

        return Math.trunc(a*(Math.pow((Math.abs(time-min)),c)));
        // return (a*(Math.pow((time-min),c)));
    }

    const calcTime=(min, a, c,points)=>{
        return (-((Math.pow((points/a),(1/c)))-min)).toFixed(2);
    }

    // onSubmit={handleSubmit(onSubmit)}
    

    const onSubmitCalcPoints=(OBJ)=>{
       
        OBJ.time = parseFloat(OBJ.time);
        console.log(OBJ.points)

        switch(OBJ.event){
            case "100 m":
                OBJ.points=calcPoints(hundredStats.min, hundredStats.A, hundredStats.c, OBJ.time);
                break;
            case "200m":
                OBJ.points=calcPoints(twoHundredStats.min, twoHundredStats.A, twoHundredStats.c, OBJ.time);
                break;
            case"300m":
                OBJ.points=300;
                break;
        }
        console.log(OBJ);
        setResultList([OBJ,...resultList]);
        console.log(resultList);
    }


    const onSubmitCalcTime=(OBJ)=>{
        
        switch(OBJ.event){
            case "100 m":
                OBJ.time=calcTime(hundredStats.min, hundredStats.A, hundredStats.c, OBJ.points);
                break;
            case "200m":
                OBJ.time=calcTime(twoHundredStats.min, twoHundredStats.A, twoHundredStats.c, OBJ.points);
                break;
            case"300m":
                OBJ.points=300;
                break;
        }
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

                <div className="row">
                <div className="form-group py-3 col-6">
                    <label className="form-label" htmlFor="time">Enter Time</label>
                    <input type="text"  className="form-control" placeholder="mm:ss.ms"
                        pattern="([01]\d|2[0-3])(:[0-5]\d){2}:\d{1,3}"
                        {...register("time")}/>

                </div>

                <div className="form-group py-3 col-6">
                    <label className="form-label" htmlFor="time">Enter Points</label>
                    <input type="number"  className="form-control" placeholder=""
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
                setResultList={setResultList}/>
            </div>


        </div>
    )


}
export default Calculator;