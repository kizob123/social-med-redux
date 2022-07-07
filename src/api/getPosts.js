import {
    
    url
} from './url-api'
export let getPosts = async function(id) {
    if(id ===null)
    id=''
    console.log(url)
    const postData = await fetch(`${url}/posts/${id}` ,{
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}