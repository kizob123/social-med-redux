export let getPosts = async function(id) {
    if(id ===null)
    id=''
    const postData = await fetch(`http://localhost:9000/posts/${id}` ,{
        method: 'GET',
        headers: {
            "Accept": "applicaton/json"
        }
    })
    return postData

}