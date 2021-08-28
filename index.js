const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)


app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})


io.on('connection', (socket) => {
    console.log("Socket conectado...")

    socket.on('disconnect', () => {
        console.log(socket.id + " desconectou.");
    })

    socket.on('msg', (data) => {
        io.emit("showmsg", data)
    })
})


http.listen(6565, () => {
    console.log("App rodando...")
})