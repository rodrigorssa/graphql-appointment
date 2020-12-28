import { connect } from 'mongoose';

export const mongoConnection = ():void => {
  connect(
    'mongodb://localhost:27017/jexperts-test',
    {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  ).then(() => {
    console.log('Mongo Connected!');
  })
    .catch((err) => {
      console.error(`Failed to connect to database. Error: ${err}`);
    });
};

export default mongoConnection;
