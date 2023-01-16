# Leto.gg/lookup HTTP API
This repo is dedicated to the public endpoint of leto.gg. This repo consists of the main website as well as an example set of API code to retrieve how many requests an IPFS object 

# Table of Contents
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

# Usage

 This is an example of how to make a GET request to the "https://leto.gg/lookup" endpoint with your API, passing an IPFS CID hash as a query parameter:
1. Make sure you have the necessary dependencies installed/imported in your project, such as axios or request.
2. Create a function to make the GET request to the "https://leto.gg/lookup" endpoint and pass the CID hash as a query parameter. The function should take in the CID hash as an argument.

`async function getCID(cid) {
  try {
    const response = await axios.get(`https://leto.gg/lookup?cid=${cid}`);
    return response.query;
  } catch (error) {
    console.error(error);
  }
}
`
3. Call the function and pass in the CID hash as an argument.

`
const cid = 'Qm...'; // replace with the actual CID hash
const query = getCID(cid);
console.log(query);

`
4. The response will contain the data associated with the CID hash.


# Development
Currently https://leto.gg redirects to >> https://s3.amazonaws.com/leto.gg/index.html

# License
MIT + Apache 2.0
