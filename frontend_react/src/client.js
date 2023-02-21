import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, //In frontend .env // backend_sanity -> npm run dev "http://localhost:3333"-> Manage project -> copy the PROJECT ID at the middle
  dataset: "production", // from the Manage project -> Datasets -> copt the title of the project "production"
  apiVersion: "2022-02-02", // the date of this version
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN, //In frontend .env
  // token: -> from Manager project -> API -> "+ Add CORS origin" -> add "http://localhost:3000" -> checkmark Allow credentials -> Save
  // then "+ Add API token" -> type "Application Token" -> Permissions: Editor -> Save -> copy the token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
