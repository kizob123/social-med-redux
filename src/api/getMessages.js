export let getMessages = async function () {
    
    const postData = await fetch(`http://localhost:9000/messages`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}