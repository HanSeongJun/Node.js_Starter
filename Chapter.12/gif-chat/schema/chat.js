const mongoose = require("mongoose");

const { Schema } = mongoosel;
const {
  Types: { ObjectId },
} = Schema;

const chatSchema = new Schema({
  room: {
    type: ObjectId,
    required: true,
    ref: room,
  },
  user: {
    type: String,
    required: true,
  },
  chat: String,
  gif: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);