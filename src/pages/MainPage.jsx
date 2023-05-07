import { useCallback, useState } from 'react';
import { loginWithGoogle, logout } from '../auth/login';
import { FcGoogle } from 'react-icons/fc';

export default function MainPage() {
	const [userData, setUserData] = useState(null);
	const [token, setToken] = useState(null);
	const handleLogin = useCallback(async () => {
		try {
			const { token, user } = await loginWithGoogle();
			setUserData(user);
			setToken(token);
		} catch (error) {
			console.error(error);
		}
	}, []);

	const handleLogout = useCallback(async () => {
		try {
			await logout();
			setUserData(null);
		} catch (error) {
			console.error(error);
		}
	}, []);
	return (
		<div className="py-24">
			<button className="login-btn" onClick={handleLogin}>
				<FcGoogle className="inline-block mx-3" />
				Sign in with google
			</button>
			<div className="login-info__area">
				<p className="login-info">Login Information</p>
				<p>name: {userData?.displayName}</p>
				<p>email: {userData?.email}</p>
				<p>token: {token ? `${token.slice(0, 20)}...` : ''}</p>
			</div>
			<button className="login-btn" onClick={handleLogout}>
				logout
			</button>
		</div>
	);
}
