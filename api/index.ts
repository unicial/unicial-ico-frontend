import axios from "axios";

export const getUserDetails = async () => {
  try {
    const response = await axios.get(`${process.env.ApiUrl}`);
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};
