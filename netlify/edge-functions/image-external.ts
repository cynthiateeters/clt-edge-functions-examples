import type { Context, Config } from "@netlify/edge-functions";

// Let's serve an image of a kitten from the internet

export default async (request: Request, context: Context) => {
  // fetch() is supported natively by Deno!
  // Returning the awaited response automatically sets the
  // content-type headers!
  const bear = await fetch("https://placebear.com/300/300");
  return bear;
};

export const config: Config = {
  path: "/image-external",
};
