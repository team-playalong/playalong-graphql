const app = require('express')();
const config = require('config');
const cors = require('cors');
const GraphQLHTTP = require('express-graphql');
const schema = require('../schemas/test');

app.use(cors());

app.use('/GraphQL', GraphQLHTTP({
    schema,
    graphiql: true
  })
);

app.get('/', function (req, res) {
  res.send('Welcome to playalong graphQl...');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});



