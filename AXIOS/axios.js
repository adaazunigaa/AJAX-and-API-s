// INTRO TO AXIOS ***************************************************************
//axios makes the request and parses the JSON
// axios.get("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("Response", res);
// })
// .catch((e) => {
//     console.log("ERROR", e);
// });

async function getStarWarsPerson(id) {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data);
    } catch (e) {
        console.log("Error", e)
    }

}

for (let i = 1 ; i <= 3; i++){
    getStarWarsPerson(i);
}
