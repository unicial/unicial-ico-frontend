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
    const { url, data, headers } = getRequestParams(email, firstName, lastName);

    const response = await axios.post(url, data, { headers });
    // Success
    if (response.status === 200) return res.status(200);
    else return res.status(200).json({ error: "please check your network" });
  } catch (error) {
    return res.status(200).json({ error: "please check your network" });
    // return res.status(400).json({
    //   error: `Oops, something went wrong... Send me an email at djsfdavid@gmail.com and I'll manually add you to the list.`,
    // });
  }
};
