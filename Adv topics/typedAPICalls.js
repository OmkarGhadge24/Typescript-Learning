"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return response.json();
}
getPost()
    .then((post) => {
    console.log(post.title);
    console.log(post.body);
})
    .catch((error) => {
    console.error("Could not load the post:", error);
});
