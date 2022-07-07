import {url} from './url-api'
export let getProfiles = async function (em) {
    
    const postData = await fetch(`${url}/profiles/?email=${em}`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}