import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { pushNotify } from "./simplenotify.js";
import { app } from "./firebaseconfig.js";

const form = document.querySelector("[data-form-login]");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  const auth = getAuth(app);

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
      }),
    }).then((res) => {
      return res.json();
    });

    // Ahora la autentiación recae en el servidor, por lo que yo no es necesario hacerlo aquí
    signOut(auth);

    window.location.href = "/dashboard";
  } catch (error) {
    console.dir(error.code);
    if (error.code === "auth/invalid-login-credentials") {
      pushNotify("error", "Error", "Credenciales incorrectas");
    } else if (error.code === "auth/too-many-requests") {
      pushNotify("error", "Error", "Demasiados intentos, intente más tarde");
    }
  }
});
