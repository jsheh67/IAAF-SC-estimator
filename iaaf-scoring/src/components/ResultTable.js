function ResultTable({resultList, setResultList}){

    const resultFactory=()=>{
        return(resultList.map(r=>{
            return(
                <tr>
                    <td></td>
                    <td>{r.gender} {r.event}</td>
                    <td>{r.time}</td>
                    <td>{r.points}</td>
                    
                </tr>
            )
        }))  
    }

    const clear=()=>{
        setResultList([]);
    }

    return(
        <>
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">Event</th>
                    <th scope="col">Time</th>
                    <th scope="col">Points</th>
        
                        
                </tr>
            </thead>
            <tbody>
                {resultFactory()}
            </tbody>
        </table>
        <button onClick={clear} className="btn btn-secondary">clear</button>
                
       
        </>
    )


}
export default ResultTable;