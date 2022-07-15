import {
    url
} from './url-api'
export let getMessages = async function (email) {
    console.log("kkkkk"+email);
    const postData = await fetch(`${url}/messages/?email=${email}`, {
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}