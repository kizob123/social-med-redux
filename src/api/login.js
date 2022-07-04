export let getProfiles = async function (em) {
    
    const postData = await fetch(`http://localhost:9000/profiles/?email=${em}`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}