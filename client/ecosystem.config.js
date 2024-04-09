module.exports = {
    apps: [
        {
            name: "client",
            script: "npm run start",
            args: "start -p 3000",
            watch: false,
        },
    ],
};