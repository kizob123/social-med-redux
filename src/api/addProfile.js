import {
    url
} from './url-api'
export let addProfile = async (fname, lname, email, password, about) => {
    const postData = await fetch(`${url}/profiles`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            about: about
        })
    })

    return postData


}