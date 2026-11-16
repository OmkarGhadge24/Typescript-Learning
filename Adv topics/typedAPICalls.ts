interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getPost(): Promise<Post> {
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
    .catch((error: unknown) => {
        console.error("Could not load the post:", error);
    });