import axios from "axios";

function getRequestParams(email: any, firstName: any, lastName: any) {
  // get env variables
  const API_KEY = "9dd187dbbeac3093b31a494962e34432-us20";
  const AUDIENCE_ID = "612f35554b";

  // get the mailchimp datacenter - mailchimp API keys always look like this:
  // c0e214879c8542a54e716f38edf1635d-us2
  // we need the us2 part

  const url = `https://us20.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // you can add aditional paramaters here. See full list of available paramaters at:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
    tags: ["CrowdSaleLeads"],
  };

  // API key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async (req: any, res: any) => {
  const { email, firstName, lastName } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Forgot to add your email?",
    });
  }

  try {
    // const { url, data, headers } = getRequestParams(email, firstName, lastName);
    const API_KEY =
      "0d8edc054a6bd06495937a23b76913f0e0bf3bb430209e2b4094eeaf61a372b50a68b772";
    const url = `https://zilionixx.api-us1.com/api/3/contact/sync`;

    const data = {
      contact: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: "",
      },
    };
    const headers = {
      "Content-Type": "application/json",
      "Api-Token": `${API_KEY}`,
    };

    const response: any = await axios.post(url, data, { headers });

    const tagUrl = `https://zilionixx.api-us1.com/api/3/contactTags`;
    const tagData = {
      contactTag: {
        contact: response.data.contact.id,
        tag: "2",
      },
    };
    const respTag = await axios.post(tagUrl, tagData, { headers });

    // Success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
