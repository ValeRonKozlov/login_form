// Импортируем стили
import './MyInput.css'


const MyInput = ({labelId,span, ...props}: any) => {
	// Проверка что инпут не пустой
	const isField = props.value !== '';
	// Валидация инпута
	const checkInput = (value:string) => {
		// Валидаци Email
		if (props.id === 'email') {
			// Регулярное выражение для email
			const mail = /[a-zA-Z]{3,20}@[a-z]{3,10}\.[a-z]{2,4}/;
			if (mail.test(value)) {
				return true;
			} else {
				return false;
			}
		}
		// Валидация Password
		if (props.id === 'password') {
			// Регулярное выражение для password
			const password = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,32}/g;
			if (password.test(value)) {
				return true;
			} else {
				return false;
			}
		}
	}
	// Если инпут не проходит валидацию появляется ошибка
	// и если инпут валидный или пустой не показывает ошибку
	const isError = isField ? checkInput(props.value) : true;

	return (
		<label id={labelId} className={isField ? 'my-label-input filled' : 'my-label-input'}>
			<input {...props} 
			className={isField ? 'my-input filled' :'my-input'}
			onBlur={() => checkInput(props.value)}
			/>
			<span 
				className={isField ? 'my-span-input filled' : 'my-span-input'}>
					{span}
			</span>
			<span 
					className={isError ? 'my-span-error' : 'my-span-error error'}>
				{span} неверный!
			</span>
		</label>
		
	)
}

export default MyInput;