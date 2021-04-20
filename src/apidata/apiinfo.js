const apikey = "AX5vfEPyOWdWc20DYFB5VzITQGG2"
export const matchinfo = () => {
    return fetch(`https://cricapi.com/api/matches?apikey=${apikey}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}

export const singlematch = (id) => {
    return fetch(`http://cricapi.com/api/cricketScore?apikey=${apikey}&unique_id=${id}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}