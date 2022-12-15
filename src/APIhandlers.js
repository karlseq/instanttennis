import { APIendpoint, APIkey } from "./APIconstants";

export const apiCall = async (method, body) => {
    return fetch(APIendpoint, {
        method: method,
        headers: {
            'x-api-key': APIkey,
            'content-type': 'application/json'
        },
        body: body
    })
}