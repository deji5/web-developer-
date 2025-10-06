function deliverOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;

            if (success) {
                resolve(`✅ Delivered: ${order}`);
            } else {
                reject(`❌ Delivery failed: ${order}`);
            }
        },2000);
    })
}

deliverOrder("Egg Roll")
    .then(function(item) {
      console.log("Successful", item);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });