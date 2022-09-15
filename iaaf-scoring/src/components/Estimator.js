import { useForm } from "react-hook-form";
import { useState } from 'react';

function Estimator(){

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
                    <hr></hr>

                    <div className="form-group py-1 pb-3">
                        <label className="form-label " htmlFor="selectEvent1">Event to Estimate</label>
                        <select className="form-control" id="selectEvent1"
                        {...register("eventEstimate",{required:""})}>

                            {eventSelectionFactory()}

                        </select>
                        {/* <p className="form-error-message">{errors.types?.message}</p> */}

                    </div>




                    </form>
                </div>

            </div>

        </div>
    )
}
export default Estimator;