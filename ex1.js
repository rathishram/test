function createPost(post) {
  // Simulating asynchronous operation with setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Post created: ${post}`);
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  // Simulating asynchronous operation with setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      const lastActivityTime = new Date().toISOString();
      console.log(`User's last activity time updated: ${lastActivityTime}`);
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost(post) {
  // Simulating asynchronous operation with setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Post deleted: ${post}`);
      resolve(post);
    }, 1000);
  });
}

// Usage example
const user = {
  name: "John",
};

// Create a post and update user's last activity time simultaneously
Promise.all([createPost("Hello World"), updateLastUserActivityTime()])
  .then(([post, lastActivityTime]) => {
    console.log(`All promises resolved. Posts: [${post}]`);
    console.log(`Last Activity Time: ${lastActivityTime}`);
    
    // Delete the last post
    return deletePost(post);
  })
  .then((deletedPost) => {
    console.log(`Post successfully deleted: ${deletedPost}`);
    // Log the remaining posts (assuming there is only one post left)
    console.log("Remaining Posts: []");
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
