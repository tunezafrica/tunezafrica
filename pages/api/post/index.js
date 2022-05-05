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

export default handler;
