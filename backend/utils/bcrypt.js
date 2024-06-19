import bcrypt from "bcrypt";

//comparting hasedPassword with orginal password
const matchPassword = async (password, hashedPassword) => {
  try {
    const matched = await bcrypt.compare(password, hashedPassword);
    return matched;
  } catch (error) {
    return null;
  }
};

export default matchPassword;
