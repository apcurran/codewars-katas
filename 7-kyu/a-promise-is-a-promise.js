/**
 * @returns {Promise}
 */
function promiseHelloWorld() {
    return new Promise((resolve, reject) => {
        return resolve("Hello World!");
    });
}

console.log(promiseHelloWorld()); // 'Hello World!'
