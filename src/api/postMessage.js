export let postMessage = async (here_id, fname, email,email_from, title, message) => {
    let time = new Date()
    const postData = await fetch(`http://localhost:9000/messages`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            here_id: here_id,
            title: title,
            email: email,
            email_from:email_from,
            time: time,
            fname: fname,
            message:message
        })
    })

    return postData


}