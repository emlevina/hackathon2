export const getConvo = (currUser, _id) => {
    return fetch(`/api/conversations/${currUser}/${_id}`)
        .then(res => res.json())
}

export const createConvo = (currUser, _id) => {
    return fetch(`/api/conversations/`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            participants: [currUser, _id]
        })
    })
        .then(res => res.json())
}

export const getUsers = () => {
    return fetch(`/api/users`)
        .then(res => res.json())
}

export const createMessage = (conversationId, text, sender ) => {
    return fetch(`api/messages`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            conversationId,
            text,
            sender
        })
    })
    .then(res => res.json())
}

export const getMessages = (conversationId) => {
    const url = `/api/messages/${conversationId}`
    return fetch(url).then(res => res.json())
}