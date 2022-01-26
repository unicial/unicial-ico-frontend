import axios from "axios";

export const addUser = async (form: any) => {
  try {
    const response = await axios.post(
      `${process.env.ApiUrl}/crowdsale/add-user`,
      form
    );
    return response.data;
  } catch (error: any) {
    return { Success: false };
  }
};

export const addAddress = async (form: any) => {
  try {
    const response = await axios.post(
      `${process.env.ApiUrl}/crowdsale/add-address`,
      form
    );
    return response.data;
  } catch (error: any) {
    return { Success: false };
  }
};

export const getAddress = async (form: any) => {
  try {
    const response = await axios.post(
      `${process.env.ApiUrl}/crowdsale/get-address`,
      form
    );
    return response.data;
  } catch (error: any) {
    return { Success: false };
  }
};

export const getLeftTime = async () => {
  try {
    const response = await axios.get(
      `${process.env.ApiUrl}/crowdsale/get-left-time`
    );
    return response.data;
  } catch (error: any) {
    return { Success: false, EndTime: 0 };
  }
};
