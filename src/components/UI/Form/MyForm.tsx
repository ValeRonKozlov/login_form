import { useState } from "react";
// Импорт компонентов
import MyButton from "../Button/MyButton";
import MyInput from "../Input/MyInput";

// Импортируем стили
import  './MyForm.css'


export default function MyForm() {
		// Состояние для Email
		const [email, setEmail] = useState<string>('');
		// Состояние для password
		const [password, setPassword] = useState<string>('')
		// Состояние для кнопки "активна" или нет
		const [disabled, setDisabled] = useState<string>('')
		// регулярные выражения для валидных значений инпутов
		const mail = /[a-zA-Z]{3,20}@[a-z]{3,10}\.[a-z]{2,4}/;
		const pass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,32}/g;
		// Условие для активации кнопки
		const isDisabled = !mail.test(email) || !pass.test(password) ? 'disabled' : '';
		// Отправка формы с алертом и очисткой инпутов 
		const send = (e:any) => {
			e.preventDefault();
			alert(`Email: ${email} and Password: ${password}`)
	
			setDisabled('disabled');
			setEmail('');
			setPassword('');
		};
	return (
		<form className="login-form" autoComplete="off" onSubmit={send}>
			<MyInput 
			id='email' 
			type="text" 
			labelId='email' 
			span='Email' 
			value={email} 
			onChange={(e: any) => setEmail(e.target.value)}
		/>
		<MyInput 
			id='password' 
			type="password" 
			labelId='password' 
			span='Password' 
			value={password} 
			onChange={(e: any) => setPassword(e.target.value)}
		/>
		<MyButton 
			title='Войти' 
			disabled={isDisabled} 
		/>
	</form>
	)
}
