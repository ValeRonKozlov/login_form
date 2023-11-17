// Импорт компонентов
import MyForm from "../UI/Form/MyForm";

// Импорт стилей
import './Login.css'

const Login = () => {

	return (
		<div className="login-container">
			<h1 className="login-title">Авторизация</h1>
			<MyForm />
		</div>
	)
}

export default Login;