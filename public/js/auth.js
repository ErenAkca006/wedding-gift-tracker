// auth.js
import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    let errorMessage = "Giriş yapılırken bir hata oluştu";
    if (error.code === "auth/invalid-credential") {
      errorMessage = "Geçersiz email veya şifre";
    } else if (error.code === "auth/too-many-requests") {
      errorMessage = "Çok fazla deneme yaptınız, lütfen daha sonra tekrar deneyin";
    }
    return { success: false, error: errorMessage };
  }
}

export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    let errorMessage = "Kayıt olurken bir hata oluştu";
    if (error.code === "auth/email-already-in-use") {
      errorMessage = "Bu email adresi zaten kullanımda";
    } else if (error.code === "auth/weak-password") {
      errorMessage = "Şifre en az 6 karakter olmalıdır";
    }
    return { success: false, error: errorMessage };
  }
}
