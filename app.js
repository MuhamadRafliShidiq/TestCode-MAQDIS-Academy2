// server.js

const express = require("express");
const app = express();
const PORT = 3000;

// endpoint GET /hello
app.get("/hello", (req, res) => {
    res.json({
        status: "success",
        message: "welcome to Maqdis Academy"
    });
});

// endpoint POST mengembalikan response JSON
app.post("/hello", (req, res) => {
    res.json({
        "data": 100,
        "status": "berhasil"
    });
});

// endpoint POST mengembalikan respons hapus data berupa JSON
app.post("/hello2   ", (req, res) => {
    res.json({
        "data": 0,
        "status": "berhasil hapus data"
    });
});

// endpoint GET /hafalan
app.get("/hafalan", (req, res) => {
    res.json(
        {
            "message": "berhasil",
            "id_setoran": 58,
            "id_user": 3441,
            "id_juz": 30,
        }
    )
})

// jalankan server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
