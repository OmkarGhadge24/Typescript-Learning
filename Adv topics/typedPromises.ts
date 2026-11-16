function getMessage(): Promise<string> {
    return new Promise((resolve) => {
        resolve("Hello from a typed Promise!");
    });
}

getMessage().then((message) => {
    console.log(message);
});