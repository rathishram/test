function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Post created: ${post}`);
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lastActivityTime = new Date().toISOString();
      console.log(`User's last activity time updated: ${lastActivityTime}`);
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Post deleted: ${post}`);
      resolve(post);
    }, 1000);
  });
}

function getColdDrinks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Husband got cold drinks");
      resolve("Cold Drinks");
    }, 1000);
  });
}

async function main() {
  try {
    const user = {
      name: "John",
    };

    // Create a post and update user's last activity time using async/await
    const post = await createPost("Hello World");
    const lastActivityTime = await updateLastUserActivityTime();

    console.log(`All promises resolved. Posts: [${post}]`);
    console.log(`Last Activity Time: ${lastActivityTime}`);

    // Delete the post using async/await
    const deletedPost = await deletePost(post);
    console.log(`Post successfully deleted: ${deletedPost}`);

    // Get cold drinks using async/await
    const coldDrinks = await getColdDrinks();
    console.log(`Got cold drinks: ${coldDrinks}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Execute the main function
main();
