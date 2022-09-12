import { useForm } from "react-hook-form";
import ResultTable from "./ResultTable";


function Calculator({resultList, setResultList}){

    const { register, handleSubmit, setValue,formState: { errors } } = useForm({
        mode: "onChange"
      });

    const events=["100 m","200m","300m","400m","600m","800m","1000m", "1500m",
                "1 mile", "2000m", "3000m" ];
    
    const hundredStats={"min":16.79, "A":30.417, "c":1.92}

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



    const onSubmit=(OBJ)=>{
        OBJ.time = parseFloat(OBJ.time);
        console.log(OBJ.points)
        if(OBJ.points.length===0){
        switch(OBJ.event){
            case "100 m":
                OBJ.points=calcPoints(hundredStats.min, hundredStats.A, hundredStats.c, OBJ.time);
                break;
            case "200m":
                OBJ.points=200;
                break;
            case"300m":
                OBJ.points=300;
                break;

        }
        }else{
            switch(OBJ.event){
                case "100 m":
                    OBJ.time=calcTime(hundredStats.min, hundredStats.A, hundredStats.c, OBJ.points);
                    break;
                case "200m":
                    OBJ.points=200;
                    break;
                case"300m":
                    OBJ.points=300;
                    break;
            }
        }
       
        console.log(OBJ);
        setResultList([OBJ,...resultList]);
        console.log(resultList);
    }
    
    return(
        <div className="container-md">
            <form onSubmit={handleSubmit(onSubmit)} id="calculate-points-form">
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
                        // pattern="\\d{0,1,2}:{0,1}\\d{1,2}\.{0,1}\\d{0,1,2}"
                        {...register("time")}/>

                </div>

                <div className="form-group py-3 col-6">
                    <label className="form-label" htmlFor="time">Enter Points</label>
                    <input type="text"  className="form-control" placeholder=""
                        // pattern="\\d{0,1,2}:{0,1}\\d{1,2}\.{0,1}\\d{0,1,2}"
                        {...register("points")}/>

                </div>
                </div>

                <div className="row">
                <button   type="submit" className="btn col mx-3">Calculate Points</button>
                <button  type="submit" className="btn col mx-3">Calculate Time</button>
                </div>
            </form>

            <ResultTable 
                resultList={resultList}
                setResultList={setResultList}/>


        </div>
    )


}
export default Calculator;