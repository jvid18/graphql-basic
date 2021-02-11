import { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: String,
  age: Number
});

export default model('User', userSchema)