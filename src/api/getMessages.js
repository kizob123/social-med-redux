import {
    git,
    loc
} from './url-api'
export let getMessages = async function () {
    
    const postData = await fetch(`${git}/messages`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}