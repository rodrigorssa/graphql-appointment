import 'dotenv/config';
import { GraphQLServer } from 'graphql-yoga';
import mongoConnection from './database/mongo';
import resolvers from './resolvers';

mongoConnection();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { },
});
server.start(() => console.log('Server is running on http://localhost:4000'));
