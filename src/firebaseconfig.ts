import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

