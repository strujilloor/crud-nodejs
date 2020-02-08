const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MONGO = require('./const');
const router = require('./routes/routes');
const cors = require('cors');
const PORT = process.env.PORT || 4200;

const app = express();
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(MONGO.URI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => console.log('Conectado a la BD ✔'))
    .catch( err => console.log(`❌ ${err}`))

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
