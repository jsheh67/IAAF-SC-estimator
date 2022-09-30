import { useForm } from "react-hook-form";
import { useState } from "react";

function WindConversion(){
    const { register, handleSubmit, setValue,formState: { errors } } = useForm({
        mode: "onChange"
      });

    const[windResultList, setWindResultList]=useState([]);

    const events=["100m", "200m"];

    const eventSelectionFactory=()=>{
        return(events.map(e=>{
            return(<option key={e+"key"} value={e}>{e}</option >)
        }))
    } 

    const windAltConversion100m=(time, wind, Alt)=>{
        return (time*(1.028 - 0.028 * (Math.exp(-0.000125 * Alt))*(1-(wind*time)/100)**2)).toFixed(2);
    }

    const windAltConversion200m=(time, wind, Alt)=>{
        return (time*(1.0441464 - 0.0441464*(Math.exp(-0.000125 * Alt))*(1-(wind*time)/592.5339)**2)).toFixed(2);
    }

    const onSubmitCalcTime=(OBJ)=>{
        switch (OBJ.event){
            case "100m":
                OBJ.zzTime=windAltConversion100m(OBJ.time, OBJ.wind, OBJ.altitude)
                OBJ.maxWTime=windAltConversion100m(OBJ.zzTime, -2 , OBJ.altitude)
                OBJ.maxMaxTime= (windAltConversion100m(OBJ.zzTime, -2 , 2500))
                
                break;
            case "200m":
                OBJ.zzTime=windAltConversion200m(OBJ.time, OBJ.wind, OBJ.altitude)
                OBJ.maxWTime=windAltConversion200m(OBJ.zzTime, -2, OBJ.altitude)
                OBJ.maxMaxTime= (windAltConversion200m(OBJ.zzTime, -2, 2500))
                break;

        }
        console.log(OBJ);
        setWindResultList([OBJ,...windResultList]);
    }
    



    // //200 
    // t00 = time(1.0441464 - 0.0441464e^(-0.000125 * Alt)(1-(wind*time)/592.5339)^2)


    // //100
    // t00 time(1.027 - 0.027e^(-0.000125 * Alt)(1-(wind*time)/100)^2)






    return(
        <div>
            <form id="wind-conversion-form">
                <select className="form-control" id="event-select"
                {...register("event",{required:""})}>
                    {eventSelectionFactory()}
                </select>

                <div className="form-group pb-3 col-5 offset-1">
                    <label className="form-label" htmlFor="wind-speed">Wind speed</label>
                    <input type="number" id="wind-speed" className="form-control" placeholder="m/s"
                        {...register("wind")}/>

                </div>

                <div className="form-group pb-3 col-5 offset-1">
                    <label className="form-label" htmlFor="altitude">altitude</label>
                    <input type="number" id="altitude" className="form-control" placeholder="m/s"
                        {...register("altitude")}/>

                </div>

                <div className="form-group pb-3 col-5 offset-1">
                    <label className="form-label" htmlFor="time">Time</label>
                    <input type="number" id="time" className="form-control" placeholder="m/s"
                        {...register("time")}/>

                </div>

                <button  id="calcTime" onClick={handleSubmit(onSubmitCalcTime)}type="submit" className="btn "> calc</button>


            </form>

            
        </div>
    )

}
export default WindConversion;