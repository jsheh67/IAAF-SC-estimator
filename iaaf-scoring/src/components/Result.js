function Result({r, resultList, setResultList}){

    const remove= () =>{
        console.log(r);
        const filteredResults = resultList.filter(result => result.id !== r.id);
        setResultList(filteredResults);
    }

    const timeFormater=(min, sec, mili)=>{
        let result="";
        if (min!=0){
            result+=(min+":")
        }
        if(sec<10 && min!=0){
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


    return(
        <tr className="resultRow">        
            <td>{r.gender} {r.event}</td>
            <td>
                {timeFormater(r.minutes, r.seconds, r.miliseconds)}
            </td>
            <td>{r.points}</td>
            <td>
                <button id="remove"className="btn" onClick={remove}>
                    <span class="bi-trash"></span>
                </button>
            </td>         
        </tr>
    )
}
export default Result;