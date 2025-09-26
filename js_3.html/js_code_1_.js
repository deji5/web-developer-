let shoppinglists = ["bag","phone","milk","water","juice"]

    let pushed = shoppinglists.push("beans");
    console.log("Added shoppi List:", shoppinglists);

    let removed = shoppinglists.splice(0, 1);
    console.log("Removed item:", removed)
    console.log("After removal:", shoppinglists)
    console.log("Number of items:", shoppinglists.length)

    for(let i = 0; i < shoppinglists.length; i++) {
        console.log(`Shopping list: ${i + 0}: ${shoppinglists[i]}`);
    }

function shopping(list) {
    for(let i = 0; i < list.lenth; i++) {
        console.log(`The list: ${i + 0}: ${list[i]}`);
    }
}