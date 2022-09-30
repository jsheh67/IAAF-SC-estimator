function WindResult({w, windResultList, setWindResultList}){

    return(
        <tr className="resultRow">        
            <td>{w.event}</td>
            <td>
                {w.time }
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
export default WindResult;