const express = require('express');

const cors = require('cors');

const Vigenere = require('caesar-salad').Vigenere;

const app = express();

const port = 8001;


app.use(cors());

app.use(express.json());

app.post('/message', (req, res) => {
    const decode = Vigenere.Cipher(req.body.password).crypt(req.body.decode);
    res.send(decode);
});

app.post('/message/encode', (req, res) => {
    const encode = Vigenere.Decipher(req.body.password).crypt(req.body.encode);
    res.send(encode)
});

app.listen(port, () => {
    console.log(port)
});