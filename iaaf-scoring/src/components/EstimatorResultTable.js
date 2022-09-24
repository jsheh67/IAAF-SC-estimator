import EstimatorResult from "./EstimatorResult"

function EstimatorResultTable({estResults, setEstResults,setResultId}){

    const resultFactory=()=>{
       

        return(estResults.map(r=>{
            
            return(
                <EstimatorResult 
                    key={r.id}
                    r={r}
                    estResults={estResults}
                    setEstResults={setEstResults}
                    />
            )
           
        }))  
    }

    const clear=()=>{
        setEstResults([]);
        setResultId(0);
    }

    return(
        <div className= "card mt-1 p-0  rounded shadow ">
        
        <div id="header2" className="card-header bg-gradient pb-0 ">
        <div className="row mb-0 pt-1">
            <h4 className="col text-light">Results</h4>
            <button id="clearButton"className="btn btn-sm col bg-transparent" onClick={clear}>Clear results?</button>
        </div>
        </div>

        <div className="card-body pt-1">
        <table className="table ">
            <thead>
                <tr>
                    <th className="text-muted" colSpan="2" scope="col">Event 1</th>
                   
                    <th className="text-muted" colSpan="2" scope="col">Event 2</th>

                    <th colSpan="2" scope="col">Estimation</th>
                    
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
export default EstimatorResultTable;