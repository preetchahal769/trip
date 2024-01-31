import userAuth from "../models/userAuthSchema.js";
export const addBalance = async (req, res) => {
  const { email, amount } = req.body;
  console.log('api called', email, amount);
  try {
    const user = await userAuth.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  await userAuth.updateOne({ email }, { $inc: { balance: amount } } );
  const updatedUser = await userAuth.findOne({ email });
   console.log("Balance added successfully" , updatedUser.balance);
    return res.status(200).json({ message: "Balance added successfully" , updatedBalance: updatedUser.balance});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getBalance = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userAuth.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ balance: user.balance });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
