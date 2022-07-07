import {
    url
} from './url-api'
export let getMessages = async function () {
    
    const postData = await fetch(`${url}/messages`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}