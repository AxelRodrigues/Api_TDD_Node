const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;

const rotas = require('./src/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', rotas);

app.get('/', (req, res)=>{
    const result = "OK"
    res.status(200).json(result);
});

app.listen(PORT, ()=> console.log(`API em processo na porta: ${PORT}`))