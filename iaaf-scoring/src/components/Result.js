import{ timeFormater } from  "./Functions";

function Result({r, resultList, setResultList}){

    const remove= () =>{
        console.log(r);
        const filteredResults = resultList.filter(result => result.id !== r.id);
        setResultList(filteredResults);
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