import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost/mongodbgrapql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('>>> DB is connected');
  } catch (e) {
    console.error(new Error('Something goes wrong!'));
    console.error(e);
  }
}

export { connect };