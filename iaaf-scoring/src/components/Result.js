function Result({r, resultList, setResultList}){

    const remove= () =>{
        console.log(r);
        const filteredResults = resultList.filter(result => result.id !== r.id);
        setResultList(filteredResults);
    }

    return(
        <tr className="resultRow">        
            <td>{r.gender} {r.event}</td>
            <td>{r.minutes==0 ? "" :(r.minutes+":")}
                {(r.seconds<10 && r.minutes!=0)?"0"+r.seconds:r.seconds}
                {r.miliseconds==0?".0":("."+r.miliseconds)}
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