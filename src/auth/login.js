import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from '../service/firebase';

export async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider(); //provieder 구글 설정
    const result = await signInWithPopup(auth, provider); // 팝업창 띄워서 로그인
    console.log(result);
    const credential = GoogleAuthProvider.credentialFromResult(result); // 인증 자격증명(credential)을 추출 (액세스 토큰)
    const token = credential.accessToken;
    const user = result.user;
    return { token, user };
  } catch (error) {
    throw new Error(error);
  }
}

//Logout 하는 함수
export async function logout() {
  await signOut(auth);
  return;
}
