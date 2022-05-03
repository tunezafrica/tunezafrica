const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    picture: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
    sub_category: {
      type: String,
      required: true,
    },
    all_songs: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
