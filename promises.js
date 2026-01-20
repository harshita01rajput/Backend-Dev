function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login");
            resolve();
        }, 2000);
    });
}

function userdetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("userdetails");
            resolve();
        }, 2000);
    });
}

function password() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("password");
            resolve();
        }, 2000);
    });
}

// login()
// .then(() => {
//     return userdetails();
// })
// .then(() => {
//     return password();
// })
// .then(() => {
//     console.log("All operations completed successfully.");
// })
// .catch((err) => {
//     console.log("Error:", err);
// });

// Using async/await


async function main() {
    try {
        await login();
        await userdetails();
        await password();
    } catch (error) {
        console.log(error);
    }   
}

main();