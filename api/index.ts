import axios from "axios";
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "9dd187dbbeac3093b31a494962e34432-us20",
  server: "us20",
});

export const getUserDetails = async () => {
  try {
    const response = await axios.get(`${process.env.ApiUrl}`);
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};

export const addMailchimp = async () => {
  try {
    const response = await client.lists.addListMember("612f35554b", {
      email_address: "orion@gmail.com",
      status: "subscribed",
      email_type: "html",
      merge_fields: {
        FNAME: "Kimio",
        LNAME: "nomoto",
      },
      tags: ["tag"],
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
