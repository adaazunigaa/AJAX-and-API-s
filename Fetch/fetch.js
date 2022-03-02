// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVED!", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     });


// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("resolved", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("JSON DONE", data);
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then((res) => {
//         console.log("2nd request resolved!");
//         return res.json();
//     })
//     .then((data) => {
//         console.log("JSON DONE", data);
//     })
//     .catch((e) => {
//         console.log("Error!", e);
//     });

async function loadStarWarsPeople() {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log("ERROR", e)
    }

}

loadStarWarsPeople();