import auth_handler from "../../utils/auth_handler";
import { connect } from "../../utils/mongo";

//create a post
// post request
// /api/post/create
auth_handler.post(async (req, res) => {
  try {
    await connect();

    const _user = req.user;
    if (_user.role === "admin") {
      const { title, description, category, sub_category } = req.body;
      console.log("you are allowed to add to database");
      return res.statusCode(200).send('Successfully added music')
    } else {
      return res.send("Not allowed to add to database");
    }
  } catch (error) {
    return res.send(error);
  }
});

export default auth_handler;
