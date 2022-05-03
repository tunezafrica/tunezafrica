import { connect } from "../../utils/mongo";
import auth_handler from '../../../utils/auth_handler'

//create a post
// post request
// /api/post/create
auth_handler.post(async (req, res) => {
  try {
    await connect();

    const _user = req.user;
    const { title, description, category, sub_category } = req.body;
  } catch (error) {
    return res.send(error);
  }
});

export default auth_handler