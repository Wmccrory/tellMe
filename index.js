//root file from which all other files spring//

//dependencies
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});