import type { APIRoute } from "astro";

const userAdmin = {
  email: "admin@admin.admin",
  passoword: "1234",
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");

  if (userAdmin.email !== email || userAdmin.passoword !== password) {
    return new Response(
      JSON.stringify({
        message: "Error",
      }),
      {
        status: 400,
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: "success",
      }),
      {
        headers: { "Set-Cookie": `token=${"eltoken"}; Path=/` },
      }
    );
  }
};
