// Function to simulate creating a post
async function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Post created: ${post}`);
            resolve(`Post created: ${post}`);
        }, 1000);
    });
}

// Function to simulate updating the user's last activity time
async function updateLastUserActivityTime(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            console.log(`Last activity time updated for user ${userId}: ${lastActivityTime}`);
            resolve(lastActivityTime);
        }, 1000);
    });
}

// Function to simulate deleting a post
async function deletePost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Post deleted: ${post}`);
            resolve(`Post deleted: ${post}`);
        }, 1000);
    });
}

// New promise to simulate getting cold drinks
async function getColdDrinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Husband got butter and cold drinks.");
            resolve("Husband got butter and cold drinks.");
        }, 1000);
    });
}

// Async function using async/await
async function mainAsyncAwait() {
    try {
        const userId = 123;
        const postContent = "This is a new post.";

        // Create post and update last activity time sequentially using async/await
        const postResult = await createPost(postContent);
        const lastActivityTime = await updateLastUserActivityTime(userId);

        console.log("Posts and Last Activity Time after creation:");
        console.log(postResult);
        console.log(`Last Activity Time: ${lastActivityTime}`);

        // Use Promise.all with async/await for parallel execution
        const [deletedPostResult, coldDrinksResult] = await Promise.all([
            deletePost(postContent),
            getColdDrinks()
        ]);

        console.log("Posts after deletion:");
        console.log(deletedPostResult);
        console.log(coldDrinksResult);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async/await function
mainAsyncAwait();
