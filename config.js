import { GraphQLClient } from "graphql-request";
import axios from "axios";

// Ensure `wpGraphqlUrl` is always defined
const wpGraphqlUrl = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL;
if (!wpGraphqlUrl) {
  throw new Error("❌ Missing environment variable: NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL");
}

// Use environment variables for authentication (safer)
const username = process.env.WORDPRESS_USERNAME;
const password = process.env.WORDPRESS_APP_PASSWORD;

const client = new GraphQLClient(wpGraphqlUrl, {
  headers: {
    Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
  },
});

export default client;

// Axios instance
const AXIOS = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL, // Use env variable instead of hardcoding
  headers: {
    "Content-Type": "application/json",
  },
});

export { AXIOS };
