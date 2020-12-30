import { connect } from 'mongoose';

const mongoStrConnection = `${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}${process.env.DB_CONFIG}`;

export const mongoConnection = ():void => {
  connect(
    mongoStrConnection,
    {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    },
  ).then(() => {
    console.log('Mongo Connected!');
  })
    .catch((err) => {
      console.error(`Failed to connect to database. Error: ${err}`);
    });
};

export default mongoConnection;
