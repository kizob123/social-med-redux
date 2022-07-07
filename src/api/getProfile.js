import { url } from "./url-api"

export let getProfile = async function (email) {
    
    const postData = await fetch(`${url}/profiles/?email=${email}`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}