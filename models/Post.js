const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
