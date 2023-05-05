import { useCallback, useState } from 'react';
import { loginWithGoogle } from '../auth/login';

export default function MainPage() {
	const [userData, setUserData] = useState(null);

	const handleLogin = useCallback(async () => {
		try {
			const loginData = await loginWithGoogle();
			setUserData(loginData.user);
			console.log(loginData);
		} catch (error) {
			console.error(error);
		}
	}, []);
	return (
		<div>
			<button onClick={handleLogin}>구글 로그인</button>
			<div>로그인정보: {userData?.displayName}</div>
		</div>
	);
}
