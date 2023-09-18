import { appAdmin } from "../../firebaseconfig";
import { getAuth } from "firebase-admin/auth";

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  getAuth()
    .createUser({
      email: email,
      emailVerified: false,
      password: password,
    })
    .then((userRecord) => {
      console.log("Successfully created new user:", userRecord.uid);
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
    });

  console.log(appAdmin);

  return new Response(
    JSON.stringify({
      message: "success",
    }),
    {
      headers: { "Set-Cookie": `token=${"eltoken"}; Path=/` },
    }
  );
};
