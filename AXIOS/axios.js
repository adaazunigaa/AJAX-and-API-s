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

for (let i = 1; i <= 2; i++) {
    getStarWarsPerson(i);
}



const jokes = document.querySelector("#jokes");

const btn = document.querySelector("#btn");


const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        //console.log(res);
        //console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "No jokes available! SORRY :("
    }

}


async function addNewJoke() {
    const getJokeText = await getDadJoke();
    const newLI = document.createElement("LI");
    //newLI.innerText(res.data.joke)
    //newLI.append(res.data.joke);
    newLI.append(getJokeText);
    jokes.append(newLI);
}


btn.addEventListener("click", addNewJoke);