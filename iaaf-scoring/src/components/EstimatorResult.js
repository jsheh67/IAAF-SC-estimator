function EstimatorResult({r, estResults, setEstResults}){


    const remove= () =>{
        console.log(r);
        const filteredResults = estResults.filter(result => result.id !== r.id);
        setEstResults(filteredResults);
    }

    const timeFormater=(min, sec, mili)=>{
        let result="";
        if (min!=0){
            result+=(min+":")
        }
        if((sec.length==1 || sec<10)&& min!=0){
            result+="0"+sec+"."
        }else if(sec.length==0){
            result+="00."
        }else{
            result+=sec+".";
        }
        if(mili.length==0){
            result+="0"
        }
        result+=mili;

        return result;
    }


    return (
        <tr className="resultRow">        
            <td>
                {r.event1}
            </td>

            <td>
                {timeFormater(r.minutes1, r.seconds1, r.miliseconds1)}
                {/* {r.minutes1==0 ? "" :(r.minutes1+":")}
                {(r.seconds1<10 && r.minutes1!=0)?"0"+r.seconds1:r.seconds1}
                {r.miliseconds1==0?".0":("."+r.miliseconds1)} */}
            </td>

            <td>
                {r.event2}
            </td>

            <td>
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