import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "hitomi-blog",
  apiKey: process.env.API_KEY,
});

