import { connect } from "../../../utils/mongo";
import auth_handler from "../../../utils/auth_handler";
import Post from "../../../models/Post";

//create a post
// post request
// /api/post/create
auth_handler.post(async (req, res) => {
  try {
    await connect();

    const _user = req.user;
    if (_user.role === "admin") {
      const { title, description, category, sub_category, picture, artist, music } = req.body;
      const new_post = new Post({
        picture: picture,
        title: title,
        description: description,
        category: category,
        sub_category: sub_category,
        artist: artist,
        all_songs: music
      });
      await new_post.save();
      return res.status(200).send("Successfully added music");
    } else {
      return res.send("Not allowed to add to database");
    }
  } catch (error) {
    return res.send(error);
  }
});

export default auth_handler;
