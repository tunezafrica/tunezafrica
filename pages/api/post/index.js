import { connect, disconnect } from "../../../utils/mongo";
import Post from "../../../models/Post";
import nc from "next-connect";
const handler = nc();

//create a post
// post request
// /api/post
handler.post(async (req, res) => {
  try {
    await connect();

    const queryString = req.body.query;
    const queryStrings = queryString.split(" ");
    let allQueries = [];

    // for pagination
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);

    queryStrings.forEach((element) => {
      let regex = new RegExp(element, "i");
      allQueries.push(
        { title: regex },
        { description: regex },
        { category: regex },
        { sub_category: regex },
        { artist: regex }
      );
    });
    const posts = await Post.find({ $and: [{ $or: allQueries }] });
    if (!posts) {
      return res.status(400).json({ error: "No Posts found" });
    }
    await disconnect();
    return res.status(200).send(posts);
  } catch (error) {
    return res.send(error);
  }
});

// get single post for admin dashboard
// get request
// /api/post?post_id=abc
handler.get(async (req, res) => {
  try {
    const post_id = req.query.post_id;

    console.log(post_id)

    const post = await Post.findOne({ _id: post_id });
    return res.status(200).send(post);
  } catch (error) {
    return res.send(error);
  }
});

export default handler;
