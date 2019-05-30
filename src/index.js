import express from 'express';
import expGraphql from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();

//http://localhost:9000/graphql
app.use('/graphql', expGraphql({
    schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(9000, () => console.log('Express GraphQL server has been started...'));