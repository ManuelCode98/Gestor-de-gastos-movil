import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGv0cr_n2-_dFcUs0EDLtjRwEy2n4V-oE",
  authDomain: "expense-calculator-cd1bd.firebaseapp.com",
  projectId: "expense-calculator-cd1bd",
  storageBucket: "expense-calculator-cd1bd.firebasestorage.app",
  messagingSenderId: "386373478966",
  appId: "1:386373478966:web:bf36e34e7ec625b17cc697"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
