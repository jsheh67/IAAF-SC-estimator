import Result from "./Result"
import "../App.css"

function ResultTable({resultList, setResultList, setResultId}){

    const resultFactory=()=>{
       

        return(resultList.map(r=>{
            
            return(
                <Result 
                    key={r.id}
                    r={r}
                    resultList={resultList}
                    setResultList={setResultList}/>
            )
           
        }))  
    }

    const clear=()=>{
        setResultList([]);
        setResultId(0);
    }

    return(
        <div className= "card mt-1 p-0 pb-5 rounded shadow border">
        
        <div className="card-header bg-secondary bg-gradient pb-0 ">
        <div className="row mb-0 pt-1">
            <h4 className="col text-light">Results</h4>
            <button id="clearButton"className="btn btn-sm col bg-transparent" onClick={clear}>Clear results?</button>
        </div>
        </div>

        <div className="card-body pt-1">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Time</th>
                    <th scope="col">Points</th>
                    <th></th>       
                </tr>
            </thead>
            <tbody>
                {resultFactory()}
            </tbody>
        </table>
        </div>
       
        </div>
    )


}
export default ResultTable;