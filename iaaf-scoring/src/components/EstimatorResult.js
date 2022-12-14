import{ timeFormater } from  "./Functions";

function EstimatorResult({r, estResults, setEstResults}){


    const remove= () =>{
        console.log(r);
        const filteredResults = estResults.filter(result => result.id !== r.id);
        setEstResults(filteredResults);
    }

    return (
        <tr className="resultRow">        
            <td className="text-muted">
                {r.event1}
            </td>

            <td className="text-muted">
                {timeFormater(r.minutes1, r.seconds1, r.miliseconds1)}
                {/* {r.minutes1==0 ? "" :(r.minutes1+":")}
                {(r.seconds1<10 && r.minutes1!=0)?"0"+r.seconds1:r.seconds1}
                {r.miliseconds1==0?".0":("."+r.miliseconds1)} */}
            </td>

            <td className="text-muted">
                {r.event2}
            </td>

            <td className="text-muted">
               {timeFormater(r.minutes2, r.seconds2, r.miliseconds2)}
            </td>

            <td>
                {r.eventEstimate}
            </td>
            <td>
            {timeFormater(r.EstimateMinutes, r.EstimateSeconds, r.EstimateMiliseconds)}
            </td>
            <td>
                <button onClick={remove}id="remove"className="btn">
                    <span class="bi-trash"></span>
                </button>
            </td>         
        </tr>
    )


}
export default EstimatorResult;