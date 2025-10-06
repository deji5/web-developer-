function getTellJoke() {
    return new Promise(function(resolve, reject){
        console.log("Getting Joke 😂.......");

        setTimeout(() => {
            let tellJoke = ["My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face."];
            resolve(tellJoke);
        }, 3000);
    });
}

getTellJoke()
    .then(function(Joke) {
        console.log("😂The Joke of The Day", Joke);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

console.log("This runs while waiting...")