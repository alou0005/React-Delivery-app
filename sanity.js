import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "udmnvq10",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
//run this to add exception for localhost 3333 cors policy
//sanity cors add http://localhost:3333
