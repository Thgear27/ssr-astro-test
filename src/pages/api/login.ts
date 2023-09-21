import { firebaseAdmin } from "../../firebaseconfig";
import { getAuth } from "firebase-admin/auth";

import type { APIRoute } from "astro";

const ONE_DAY = 60 * 60 * 24;

export const POST: APIRoute = async ({ request }) => {
  const expiresIn = ONE_DAY * 5 * 1000;

  const body = await request.json();

  try {
    const sessionCookie = await firebaseAdmin.auth().createSessionCookie(body.idToken, { expiresIn: 60 * 5 * 1000 });

    return new Response(
      JSON.stringify({
        message: "success",
      }),
      {
        headers: {
          "Set-Cookie": `session=${sessionCookie}; Path=/; HttpOnly; Secure; Max-Age=${expiresIn};`,
        },

        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({
        message: "Error",
      }),
      {
        status: 400,
      }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Error",
    }),
    {
      status: 400,
    }
  );
};
