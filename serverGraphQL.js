const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server').default;
const cors = require('cors');
const data = require('./db.json');
const jsonSchemaBuilder = require('json-graphql-server').jsonSchemaBuilder;

const PORT = 3030;
const app = express();

app.use(cors());

app.use('/graphql', jsonGraphqlExpress(data));

app.listen(PORT, () => {
    console.log(`Server start on localhost:${PORT}/graphql`);
});
