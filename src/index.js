import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from "./schema";

import { connect } from "./database";

const app = express();
connect();

// Setings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  context: {
    messageId: 'test'
  }
}));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

const main = async () => {
  await app.listen(app.get('port'));

  console.log(`Server on port ${app.get('port')}`)
}

main();