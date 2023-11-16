// Импорт компонентов
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";

// Импорт стилей
import './Login.css'

const Login = () => {

	return (
		<div className="login-container">
			<h1 className="login-title">Авторизация</h1>
			<form className="login-form">
				<MyInput name='email' type="email" placeholder='Email'required />
				<MyInput name='password' type="password" placeholder='Password' required minlength='6'/>
				<MyButton title='Войти' />
			</form>
		</div>
	)
}

export default Login;