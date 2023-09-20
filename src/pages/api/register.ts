import { firebaseAdmin } from "../../firebaseconfig";
import { getAuth } from "firebase-admin/auth";

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  try {
    const userRecord = await getAuth(firebaseAdmin).createUser({
      email: email,
      emailVerified: false,
      password: password,
    });

    return new Response(
      JSON.stringify({
        message: "success",
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "error",
        error: error.message,
        errorCode: error.code,
      })
    );
  }
};
