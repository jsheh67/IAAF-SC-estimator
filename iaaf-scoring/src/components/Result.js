function Result({r, resultList, setResultList}){

    const remove= () =>{
        console.log(r);
        const filteredResults = resultList.filter(result => result.time !== r.time);
        setResultList(filteredResults);
    }



    return(
        <tr className="resultRow">        
            <td>{r.gender} {r.event}</td>
            <td>{r.time}</td>
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