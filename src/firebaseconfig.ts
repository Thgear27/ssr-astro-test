import admin from "firebase-admin";
import * as serviceAccount from "./pages/api/secretfirebase.json";

export const appAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

