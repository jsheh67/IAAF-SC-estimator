import { useForm } from "react-hook-form";
import ResultTable from "./ResultTable";


function Calculator({resultList, setResultList}){

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
      });

    let events=["100 m","200m","300m","400m","600m","800m","1000m", "1500m",
                "1 mile", "2000m", "3000m" ];

    const eventSelectionFactory=()=>{
        return(events.map(e=>{
            return(<option key={e+"key"} value={e}>{e}</option >)
        }))
    } 

    const onSubmit=(OBJ)=>{
        switch(OBJ.event){
            case "100 m":
                OBJ.points=50;
                break;
            case "200m":
                OBJ.points=200;
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
        <div className="container-md">
            <form onSubmit={handleSubmit(onSubmit)} id="calculate-points-form">
                <div className="form-group py-3">
                    <label className="form-label" htmlFor="selectEvent">Select Event</label>
                    <select className="form-control" id="selectEvent"
                    {...register("event",{required:""})}>

                        {eventSelectionFactory()}

                    </select>
                    {/* <p className="form-error-message">{errors.types?.message}</p> */}

                </div>

                <div className="form-group py-3">
                    <input {...register("gender", { required: true })} type="radio" value="Men's" /> 
                    Men
                    <input {...register("gender", { required: true })} type="radio" value="Women's" />
                    Women
                </div>

                <div className="form-group py-3">
                    <label className="form-label" htmlFor="time">Enter Time</label>
                    <input type="text"  className="form-control" placeholder="mm:ss.ms"
                    {...register("time",{required: "enter time"})}/>

                </div>

                <button id = "create" type="submit" className="btn btn-primary">find points</button>

            </form>

            <ResultTable 
                resultList={resultList}
                setResultList={setResultList}/>


        </div>
    )


}
export default Calculator;