import { url } from "./url-api"
export let editPost = async (id, title, post, time, liked) => {
    const postData = await fetch(`${url}/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                id: id,
                title: title,
                post: post,
                time: time,
                likes: liked
            })
        })

        return postData


}