module.exports = {
    apps: [
        {
            name: "server",
            script: "npm run start",
            args: "start -p 5000",
            watch: false,
        },
    ],
};