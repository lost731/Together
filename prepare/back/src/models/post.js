const mongoose = require('mongoose');
const { Schema } = mongoose;

const postModel = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  content:String,
  writer:{
    id: String,
    nickname: String
  },
  images:[],
  hashTags:[],
  likedUsers:[{
      type: Schema.Types.ObjectId,
      ref: 'User',
      index: true,
      default: null,
    }],
}, {timestamps: true});

exports.Post = mongoose.model('post', postModel);
