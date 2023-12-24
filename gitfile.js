// Function to simulate creating a post
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Post created: ${post}`);
            resolve(`Post created: ${post}`);
        }, 1000);
    });
}

// Function to simulate updating the user's last activity time
function updateLastUserActivityTime(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            console.log(`Last activity time updated for user ${userId}: ${lastActivityTime}`);
            resolve(lastActivityTime);
        }, 1000);
    });
}

// Function to simulate deleting a post
function deletePost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Post deleted: ${post}`);
            resolve(`Post deleted: ${post}`);
        }, 1000);
    });
}

// Simulating the process
const userId = 123;
const postContent = "This is a new post.";

// Create post and update last activity time concurrently
Promise.all([
    createPost(postContent),
    updateLastUserActivityTime(userId)
])
    .then(([postResult, lastActivityTime]) => {
        console.log("Posts and Last Activity Time after creation:");
        console.log(postResult);
        console.log(`Last Activity Time: ${lastActivityTime}`);

        // Delete the last post
        return deletePost(postContent);
    })
    .then(deletedPostResult => {
        console.log("Posts after deletion:");
        console.log(deletedPostResult);
    })
    .catch(error => {
        console.error("Error:", error);
    });
