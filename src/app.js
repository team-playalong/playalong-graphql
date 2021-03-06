const app = require('express')();
const config = require('config');
const cors = require('cors');
const GraphQLHTTP = require('express-graphql');
const schema = require('../schemas/chord');

app.use(cors());

app.use('/GraphQL', GraphQLHTTP({
    schema,
    pretty: true,
    graphiql: true
  })
);

app.use('/chord', GraphQLHTTP({
    schema,
    pretty: true,
  })
);


app.get('/', function (req, res) {
  res.send('Welcome to playalong graphQl...');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Playalong GraphQL listening on port ${port}`);
});
