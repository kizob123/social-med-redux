import {
    git,
    loc
} from './url-api'
export let getPosts = async function(id) {
    if(id ===null)
    id=''
    const postData = await fetch(`${git}/posts/${id}` ,{
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}