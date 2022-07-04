
export default function Message(message){
    
    return(
        <>
            <h4>{message.body.title}</h4>
            <p>from: {message.body.fname}</p>
            <p>{message.body.message}</p>
            <time>{message.body.time}</time>
        </>
    )
}