function EstimatorResult({r}){


    return (
        <tr className="resultRow">        
            <td>
                {r.event1}
            </td>

            <td>
                {r.minutes1==0 ? "" :(r.minutes1+":")}
                {(r.seconds1<10 && r.minutes1!=0)?"0"+r.seconds1:r.seconds1}
                {r.miliseconds1==0?".0":("."+r.miliseconds1)}
            </td>

            <td>
                {r.event2}
            </td>

            <td>
                {r.minutes2==0 ? "" :(r.minutes2+":")}
                {(r.seconds2<10 && r.minutes2!=0)?"0"+r.seconds2:r.seconds2}
                {r.miliseconds2==0?".0":("."+r.miliseconds2)}
            </td>

            <td>
                {r.eventEstimate}
            </td>
            <td>
                {r.EstimateMinutes==0 ? "" :(r.EstimateMinutes+":")}
                {(r.EstimateSeconds<10 && r.EstimateMinutes!=0)?"0"+r.EstimateSeconds:r.EstimateSeconds}
                {r.EstimateMiliseconds==0?".0":("."+r.EstimateMiliseconds)}
            </td>
            <td>
                <button id="remove"className="btn" >
                    <span class="bi-trash"></span>
                </button>
            </td>         
        </tr>
    )


}
export default EstimatorResult;