import { GraphQLClient } from "graphql-request";

// Set your WordPress URL and application password
const wpGraphqlUrl = process.env.WORDPRESS_GRAPHQL_URL;
const username = "nayyer516@gmail.com"; // Replace with your WordPress username
const password = "0TYp 4WNE n89i Sku0 rAPc W4rA"; // Use the application password you generated

const client = new GraphQLClient(wpGraphqlUrl, {
  headers: {
    Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
  },
});
export default client;