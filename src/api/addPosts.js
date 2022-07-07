import {url} from './url-api'
export let addPost = async (author,title, post, time, liked) => {
    const postData = await fetch(`${url}/posts`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            author:author,
            title: title,
            post: post,
            time: time,
            likes: liked
        })
    })

    return postData


}