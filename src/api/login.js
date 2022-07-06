import {
    git,
    loc
} from './url-api'
export let getProfiles = async function (em) {
    
    const postData = await fetch(`${git}/profiles/?email=${em}`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}