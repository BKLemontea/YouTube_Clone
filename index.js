import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send('Hello from home');
const handelProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);
app.get("/profile", handelProfile);

app.listen(PORT, handleListening);