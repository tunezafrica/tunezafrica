import { connect } from "../../../utils/mongo";
import Post from "../../../models/Post";
import nc from 'next-connect'
const handler = nc()

//create a post
// post request
// /api/post
handler.get(async (req, res) => {
  try {
    await connect();

    const posts = await Post.find({})

    console.log(posts)
  } catch (error) {
    return res.send(error);
  }
});

export default handler;
