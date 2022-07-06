export let getProfile = async function (email) {
    
    const postData = await fetch(`http://localhost:9000/profiles/?email=${email}`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}