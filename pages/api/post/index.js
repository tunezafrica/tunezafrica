import { connect, disconnect } from "../../../utils/mongo";
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

    return res.status(200).send(posts)

    await disconnect()
    
  } catch (error) {
    return res.send(error);
  }
});

export default handler;
