function Message({messages, setMessages}){

    const clearAlert=()=>{

        setMessages([]);
        const messageAlert = document.getElementById("messages");
        messageAlert.setAttribute('class','alert alert-dismissible fade');
    }

    const allMessages=()=>{
        return messages.map(m=><h6 className="mb-0 text-center " key={m}>{m}</h6>)
    }

    return(
        <div className="alert alert-dismissible fade mb-0 p-0" role="alert" id="messages">
            {allMessages()}
            <button id="closeButton" onClick={clearAlert} type="button" className="btn-close " aria-label="Close"></button>
        </div>
    )

}

export default Message;