const orders = ["Coffee", "Cake", "Juice"];

function orderList(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${order} ready`);
        }, 2000);
    });
}

async function processOrders() {
    console.log("Getting order.....");

    for (const order of orders) {
        const result = await
    orderList(order);
        console.log(result);
    }

}


processOrders();