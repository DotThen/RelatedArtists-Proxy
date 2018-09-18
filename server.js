const express = require('express');
const app = express();
import cors from 'cors';

app.use(cors());
app.use(express.static('./dist'))

app.listen(3000, () => console.log("listening!!"));
